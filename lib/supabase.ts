import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Application {
  id: string
  submission_id: string
  full_name: string
  phone_number: string
  semester: string
  custom_semester?: string
  student_id: string
  github_link?: string
  project_experience: "yes" | "no"
  project_description?: string
  areas_of_interest: string[]
  other_area_of_interest?: string
  tools_and_technologies?: string
  hours_per_week: "<2" | "2-5" | "5+"
  leadership_interest: "yes" | "no" | "maybe"
  expectations: string
  resume_url?: string
  resume_filename?: string
  status: "pending" | "reviewed" | "accepted" | "rejected"
  created_at: string
  updated_at: string
}
