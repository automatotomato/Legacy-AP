/*
  # Create media storage bucket

  1. New Storage Bucket
    - `media` bucket for storing user-uploaded files
      - Photos
      - Documents
      - Videos

  2. Security
    - Enable RLS
    - Add policies for authenticated users to manage their own media
*/

-- Create media storage bucket
INSERT INTO storage.buckets (id, name)
VALUES ('media', 'media')
ON CONFLICT DO NOTHING;

-- Set up RLS policies for media bucket
CREATE POLICY "Users can upload their own media"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own media"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own media"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own media"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'media' AND auth.uid()::text = (storage.foldername(name))[1]);