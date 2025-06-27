-- Create the applications table
CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    submission_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    semester TEXT NOT NULL,
    custom_semester TEXT,
    student_id TEXT NOT NULL,
    github_link TEXT,
    project_experience TEXT NOT NULL CHECK (project_experience IN ('yes', 'no')),
    project_description TEXT,
    areas_of_interest JSONB NOT NULL,
    other_area_of_interest TEXT,
    tools_and_technologies TEXT,
    hours_per_week TEXT NOT NULL CHECK (hours_per_week IN ('<2', '2-5', '5+')),
    leadership_interest TEXT NOT NULL CHECK (leadership_interest IN ('yes', 'no', 'maybe')),
    expectations TEXT NOT NULL,
    resume_url TEXT,
    resume_filename TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on submission_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_submission_id ON applications(submission_id);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_applications_updated_at 
    BEFORE UPDATE ON applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
