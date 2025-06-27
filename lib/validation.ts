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

export function validateForm(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {}

  // Full Name validation
  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required"
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters"
  } else if (data.fullName.trim().length > 100) {
    errors.fullName = "Full name is too long"
  }

  // Phone Number validation
  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required"
  } else if (!/^[+]?[1-9][\d]{0,15}$/.test(data.phoneNumber.trim())) {
    errors.phoneNumber = "Please enter a valid phone number"
  }

  // Semester validation
  if (!data.semester) {
    errors.semester = "Please select a semester"
  } else if (data.semester === "other" && !data.customSemester.trim()) {
    errors.customSemester = "Please specify your semester"
  }

  // Student ID validation
  if (!data.studentId.trim()) {
    errors.studentId = "Student ID is required"
  } else if (data.studentId.trim().length > 20) {
    errors.studentId = "Student ID is too long"
  }

  // GitHub Link validation (optional but must be valid if provided)
  if (data.githubLink.trim() && !isValidUrl(data.githubLink.trim())) {
    errors.githubLink = "Please enter a valid GitHub URL"
  } else if (data.githubLink.trim() && !data.githubLink.trim().includes("github.com")) {
    errors.githubLink = "Please provide a GitHub URL"
  }

  // Project Experience validation
  if (data.projectExperience === "yes" && !data.projectDescription.trim()) {
    errors.projectDescription = "Please describe your project experience"
  }

  // Areas of Interest validation
  if (data.areasOfInterest.length === 0) {
    errors.areasOfInterest = "Please select at least one area of interest"
  }

  // Hours per week validation
  if (!data.hoursPerWeek) {
    errors.hoursPerWeek = "Please select your time commitment"
  }

  // Leadership Interest validation
  if (!data.leadershipInterest) {
    errors.leadershipInterest = "Please select your leadership interest"
  }

  // Expectations validation
  if (!data.expectations.trim()) {
    errors.expectations = "Please share your expectations"
  } else if (data.expectations.trim().length < 10) {
    errors.expectations = "Please provide more details about your expectations"
  }

  // Resume validation (optional)
  if (data.resume) {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!allowedTypes.includes(data.resume.type)) {
      errors.resume = "Please upload a PDF, DOC, or DOCX file"
    } else if (data.resume.size > maxSize) {
      errors.resume = "File size must be less than 10MB"
    }
  }

  return errors
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}
