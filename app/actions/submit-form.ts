"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { supabase } from "@/lib/supabase"

// Server-side validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100, "Full name too long"),
  phoneNumber: z.string().regex(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number format"),
  semester: z.string().min(1, "Please select a semester"),
  customSemester: z.string().optional(),
  studentId: z.string().min(1, "Student ID is required").max(20, "Student ID too long"),
  githubLink: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
  projectExperience: z.enum(["yes", "no"]),
  projectDescription: z.string().optional(),
  areasOfInterest: z.array(z.string()).min(1, "Please select at least one area of interest"),
  otherAreaOfInterest: z.string().optional(),
  toolsAndTechnologies: z.string().optional(),
  hoursPerWeek: z.enum(["<2", "2-5", "5+"]),
  leadershipInterest: z.enum(["yes", "no", "maybe"]),
  expectations: z.string().min(10, "Please provide more details about your expectations"),
})

// Sanitize input to prevent XSS and SQL injection
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/['";]/g, "") // Remove potential SQL injection characters
    .trim()
}

// Generate a unique submission ID
function generateSubmissionId(): string {
  return `SC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Upload file to Supabase Storage
async function uploadResume(file: File, submissionId: string): Promise<{ url: string; filename: string } | null> {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${submissionId}-resume.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage.from("resumes").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    })

    if (error) {
      console.error("Error uploading file:", error)
      return null
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("resumes").getPublicUrl(filePath)

    return {
      url: publicUrl,
      filename: file.name,
    }
  } catch (error) {
    console.error("Error in uploadResume:", error)
    return null
  }
}

export async function submitForm(formData: FormData) {
  try {
    // Extract and sanitize form data
    const rawData = {
      fullName: sanitizeInput((formData.get("fullName") as string) || ""),
      phoneNumber: sanitizeInput((formData.get("phoneNumber") as string) || ""),
      semester: sanitizeInput((formData.get("semester") as string) || ""),
      customSemester: sanitizeInput((formData.get("customSemester") as string) || ""),
      studentId: sanitizeInput((formData.get("studentId") as string) || ""),
      githubLink: sanitizeInput((formData.get("githubLink") as string) || ""),
      projectExperience: (formData.get("projectExperience") as string) || "no",
      projectDescription: sanitizeInput((formData.get("projectDescription") as string) || ""),
      areasOfInterest: JSON.parse((formData.get("areasOfInterest") as string) || "[]"),
      otherAreaOfInterest: sanitizeInput((formData.get("otherAreaOfInterest") as string) || ""),
      toolsAndTechnologies: sanitizeInput((formData.get("toolsAndTechnologies") as string) || ""),
      hoursPerWeek: (formData.get("hoursPerWeek") as string) || "",
      leadershipInterest: (formData.get("leadershipInterest") as string) || "",
      expectations: sanitizeInput((formData.get("expectations") as string) || ""),
    }

    // Additional validation for conditional fields
    if (rawData.semester === "other" && !rawData.customSemester) {
      return {
        success: false,
        errors: { customSemester: "Please specify your semester" },
      }
    }

    if (rawData.projectExperience === "yes" && !rawData.projectDescription) {
      return {
        success: false,
        errors: { projectDescription: "Please describe your project experience" },
      }
    }

    // Validate GitHub URL format if provided
    if (rawData.githubLink && !rawData.githubLink.startsWith("https://github.com/")) {
      return {
        success: false,
        errors: { githubLink: "Please provide a valid GitHub URL (https://github.com/username)" },
      }
    }

    // Server-side validation
    const validationResult = formSchema.safeParse(rawData)

    if (!validationResult.success) {
      const errors: Record<string, string> = {}
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          errors[error.path[0] as string] = error.message
        }
      })
      return { success: false, errors }
    }

    // Generate submission ID
    const submissionId = generateSubmissionId()

    // Handle file upload (resume)
    const resumeFile = formData.get("resume") as File | null
    let resumeUrl = null
    let resumeFilename = null

    if (resumeFile && resumeFile.size > 0) {
      // Validate file type and size
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!allowedTypes.includes(resumeFile.type)) {
        return {
          success: false,
          errors: { resume: "Please upload a PDF, DOC, or DOCX file" },
        }
      }

      if (resumeFile.size > maxSize) {
        return {
          success: false,
          errors: { resume: "File size must be less than 10MB" },
        }
      }

      // Upload file to Supabase Storage
      const uploadResult = await uploadResume(resumeFile, submissionId)
      if (uploadResult) {
        resumeUrl = uploadResult.url
        resumeFilename = uploadResult.filename
      } else {
        return {
          success: false,
          errors: { resume: "Failed to upload resume. Please try again." },
        }
      }
    }

    // Prepare data for database insertion
    const applicationData = {
      submission_id: submissionId,
      full_name: validationResult.data.fullName,
      phone_number: validationResult.data.phoneNumber,
      semester: validationResult.data.semester,
      custom_semester: rawData.customSemester || null,
      student_id: validationResult.data.studentId,
      github_link: validationResult.data.githubLink || null,
      project_experience: validationResult.data.projectExperience,
      project_description: rawData.projectDescription || null,
      areas_of_interest: validationResult.data.areasOfInterest,
      other_area_of_interest: rawData.otherAreaOfInterest || null,
      tools_and_technologies: rawData.toolsAndTechnologies || null,
      hours_per_week: validationResult.data.hoursPerWeek,
      leadership_interest: validationResult.data.leadershipInterest,
      expectations: validationResult.data.expectations,
      resume_url: resumeUrl,
      resume_filename: resumeFilename,
      status: "pending",
    }

    // Insert into Supabase database
    const { data, error } = await supabase.from("applications").insert([applicationData]).select().single()

    if (error) {
      console.error("Database error:", error)

      // If it's a duplicate submission ID (very unlikely), try again
      if (error.code === "23505") {
        return {
          success: false,
          errors: { general: "Submission ID conflict. Please try again." },
        }
      }

      return {
        success: false,
        errors: { general: "Failed to save application. Please try again." },
      }
    }

    // Revalidate the page to ensure fresh data
    revalidatePath("/")

    return {
      success: true,
      submissionId,
      message: "Application submitted successfully!",
      applicationId: data.id,
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      errors: { general: "An unexpected error occurred. Please try again." },
    }
  }
}
