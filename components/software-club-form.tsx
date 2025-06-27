"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { submitForm } from "@/app/actions/submit-form"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FormTextarea } from "@/components/ui/form-textarea"
import { FormCheckbox } from "@/components/ui/form-checkbox"
import { FormRadio } from "@/components/ui/form-radio"
import { FormFileUpload } from "@/components/ui/form-file-upload"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import { GlowingButton } from "@/components/ui/glowing-button"
import { ConfirmationModal } from "@/components/ui/confirmation-modal"
import { validateForm } from "@/lib/validation"
import { Github, Phone, User, Calendar, Code, Clock, Users, Target, Upload } from "lucide-react"

interface FormData {
  fullName: string
  phoneNumber: string
  semester: string
  customSemester: string
  studentId: string
  githubLink: string
  projectExperience: string
  projectDescription: string
  areasOfInterest: string[]
  otherAreaOfInterest: string
  toolsAndTechnologies: string
  hoursPerWeek: string
  leadershipInterest: string
  expectations: string
  resume: File | null
}

const initialFormData: FormData = {
  fullName: "",
  phoneNumber: "",
  semester: "",
  customSemester: "",
  studentId: "",
  githubLink: "",
  projectExperience: "no",
  projectDescription: "",
  areasOfInterest: [],
  otherAreaOfInterest: "",
  toolsAndTechnologies: "",
  hoursPerWeek: "",
  leadershipInterest: "",
  expectations: "",
  resume: null,
}

const semesterOptions = [
  { value: "1-1", label: "1st Year - 1st Semester" },
  { value: "1-2", label: "1st Year - 2nd Semester" },
  { value: "2-1", label: "2nd Year - 1st Semester" },
  { value: "2-2", label: "2nd Year - 2nd Semester" },
  { value: "3-1", label: "3rd Year - 1st Semester" },
  { value: "3-2", label: "3rd Year - 2nd Semester" },
  { value: "4-1", label: "4th Year - 1st Semester" },
  { value: "other", label: "Other" },
]

const areasOfInterest = [
  "Web (Backend/Frontend)",
  "App",
  "DevOps",
  "UI/UX",
  "Software Security",
  "Game Development",
  "Machine Learning",
  "AI",
]

const hoursOptions = [
  { value: "<2", label: "Less than 2 hours" },
  { value: "2-5", label: "2-5 hours" },
  { value: "5+", label: "5+ hours" },
]

const leadershipOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "maybe", label: "Maybe Later" },
]

// Placeholder sets for different input fields
const nameePlaceholders = [
  "John Doe",
  "Enter your full name here...",
  "Mohammad Rahman",
  "Fatima Khan",
  "Enter your full name here...",
]

const phonePlaceholders = [
  "+880 1234567890",
  "01234567890",
  "Your mobile number...",
  "+880 1234567890",
  "Enter your phone number...",
]

const studentIdPlaceholders = [
  "2021XXXXX",
  "Your student ID...",
  "2022XXXXX", 
  "Enter your BUET ID...",
  "Student ID number...",
]

const githubPlaceholders = [
  "https://github.com/username",
  "github.com/yourprofile",
  "Your GitHub profile URL...",
  "https://github.com/coder123",
  "Share your GitHub link...",
]

const otherInterestPlaceholders = [
  "Blockchain Development",
  "Cybersecurity Research",
  "Data Science",
  "Cloud Computing",
  "Other interests...",
]

export function SoftwareClubForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [submissionId, setSubmissionId] = useState<string>("")

  const handleInputChange = (field: keyof FormData, value: string | string[] | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleAreaOfInterestChange = (area: string, checked: boolean) => {
    const updatedAreas = checked
      ? [...formData.areasOfInterest, area]
      : formData.areasOfInterest.filter((a) => a !== area)
    handleInputChange("areasOfInterest", updatedAreas)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Client-side validation
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSubmit = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "areasOfInterest") {
          formDataToSubmit.append(key, JSON.stringify(value))
        } else if (key === "resume" && value) {
          formDataToSubmit.append(key, value as File)
        } else if (value !== null) {
          formDataToSubmit.append(key, value as string)
        }
      })

      const result = await submitForm(formDataToSubmit)

      if (result.success) {
        setSubmissionId(result.submissionId!)
        setShowConfirmation(true)
      } else {
        setErrors(result.errors || { general: "Submission failed. Please try again." })
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Software Club Interest Form Submitted",
          text: "I just submitted my interest form for the Software Club!",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-xl bg-slate-900/40 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-300"
                >
                  {errors.general}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-cyan-100 mb-1">Personal Information</h2>
                <p className="text-cyan-300/60 text-sm">Tell us about yourself</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <PlaceholdersAndVanishInput
                    placeholders={nameePlaceholders}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    onSubmit={(e) => e.preventDefault()}
                  />
                  {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <PlaceholdersAndVanishInput
                    placeholders={phonePlaceholders}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    onSubmit={(e) => e.preventDefault()}
                  />
                  {errors.phoneNumber && <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <FormSelect
                    label="Semester"
                    icon={<Calendar className="w-5 h-5" />}
                    value={formData.semester}
                    onChange={(value) => handleInputChange("semester", value)}
                    options={semesterOptions}
                    error={errors.semester}
                    required
                  />
                  {formData.semester === "other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4"
                    >
                      <FormInput
                        label="Please specify your semester"
                        value={formData.customSemester}
                        onChange={(value) => handleInputChange("customSemester", value)}
                        error={errors.customSemester}
                        placeholder="Specify your semester"
                        required
                      />
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Student ID <span className="text-red-400">*</span>
                  </label>
                  <PlaceholdersAndVanishInput
                    placeholders={studentIdPlaceholders}
                    onChange={(e) => handleInputChange("studentId", e.target.value)}
                    onSubmit={(e) => e.preventDefault()}
                  />
                  {errors.studentId && <p className="text-red-400 text-sm mt-1">{errors.studentId}</p>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <label className="block text-sm font-medium text-cyan-300 mb-2">
                  <Github className="w-4 h-4 inline mr-2" />
                  GitHub Link
                </label>
                <PlaceholdersAndVanishInput
                  placeholders={githubPlaceholders}
                  onChange={(e) => handleInputChange("githubLink", e.target.value)}
                  onSubmit={(e) => e.preventDefault()}
                />
                {errors.githubLink && <p className="text-red-400 text-sm mt-1">{errors.githubLink}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-cyan-100 mb-1">Experience & Interests</h2>
                <p className="text-cyan-300/60 text-sm">Share your coding background and interests</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormRadio
                  label="Have you ever built a software project before?"
                  name="projectExperience"
                  value={formData.projectExperience}
                  onChange={(value) => handleInputChange("projectExperience", value)}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.projectExperience}
                  required
                />

                {formData.projectExperience === "yes" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4"
                  >
                    <FormTextarea
                      label="Briefly describe your project(s)"
                      value={formData.projectDescription}
                      onChange={(value) => handleInputChange("projectDescription", value)}
                      error={errors.projectDescription}
                      placeholder="Tell us about your coding projects, what technologies you used, and what you learned..."
                      required
                    />
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Area of Interest <span className="text-red-400">*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {areasOfInterest.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <FormCheckbox
                        label={area}
                        checked={formData.areasOfInterest.includes(area)}
                        onChange={(checked) => handleAreaOfInterestChange(area, checked)}
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4"
                >
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    Other (please specify)
                  </label>
                  <PlaceholdersAndVanishInput
                    placeholders={otherInterestPlaceholders}
                    onChange={(e) => handleInputChange("otherAreaOfInterest", e.target.value)}
                    onSubmit={(e) => e.preventDefault()}
                  />
                </motion.div>
                {errors.areasOfInterest && <p className="text-red-400 text-sm mt-2">{errors.areasOfInterest}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormTextarea
                  label="What tools and technologies are you comfortable with? (If any)"
                  icon={<Code className="w-5 h-5" />}
                  value={formData.toolsAndTechnologies}
                  onChange={(value) => handleInputChange("toolsAndTechnologies", value)}
                  placeholder="e.g., JavaScript, Python, React, Node.js, Docker, Git, VS Code, etc."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-cyan-100 mb-1">Commitment & Goals</h2>
                <p className="text-cyan-300/60 text-sm">Help us understand your availability and aspirations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormRadio
                  label="How many hours per week you can commit"
                  icon={<Clock className="w-5 h-5" />}
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={(value) => handleInputChange("hoursPerWeek", value)}
                  options={hoursOptions}
                  error={errors.hoursPerWeek}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormRadio
                  label="Are you interested in leading/volunteering in any way (event planning, mentoring, etc.)?"
                  icon={<Users className="w-5 h-5" />}
                  name="leadershipInterest"
                  value={formData.leadershipInterest}
                  onChange={(value) => handleInputChange("leadershipInterest", value)}
                  options={leadershipOptions}
                  error={errors.leadershipInterest}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormTextarea
                  label="What do you expect to gain from this club?"
                  icon={<Target className="w-5 h-5" />}
                  value={formData.expectations}
                  onChange={(value) => handleInputChange("expectations", value)}
                  error={errors.expectations}
                  placeholder="Share your goals, what you hope to learn, how you want to grow as a developer..."
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <FormFileUpload
                  label="Upload your resume (if any)"
                  icon={<Upload className="w-5 h-5" />}
                  file={formData.resume}
                  onChange={(file) => handleInputChange("resume", file)}
                  accept=".pdf,.doc,.docx"
                  error={errors.resume}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6"
              >
                <GlowingButton type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </GlowingButton>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showConfirmation && (
          <ConfirmationModal
            isOpen={showConfirmation}
            onClose={() => setShowConfirmation(false)}
            submissionId={submissionId}
            onShare={handleShare}
          />
        )}
      </AnimatePresence>
    </>
  )
}
