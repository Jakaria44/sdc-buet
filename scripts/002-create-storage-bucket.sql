-- Create a storage bucket for resumes
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', false)
ON CONFLICT (id) DO NOTHING;

-- Create a policy to allow authenticated users to upload resumes
CREATE POLICY "Allow resume uploads" ON storage.objects
FOR INSERT WITH CHECK (
    bucket_id = 'resumes' AND
    auth.role() = 'anon'
);

-- Create a policy to allow reading resumes (for admins)
CREATE POLICY "Allow resume downloads" ON storage.objects
FOR SELECT USING (
    bucket_id = 'resumes'
);
