-- Add role column to user_profiles if it doesn't exist
ALTER TABLE user_profiles 
  ADD COLUMN IF NOT EXISTS role text DEFAULT 'user';

-- Enhanced Collaborators Policies
CREATE POLICY "Collaborators can update chapters they have access to"
  ON memoir_chapters FOR UPDATE
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM collaborators
      WHERE memoir_id = memoir_chapters.id
      AND user_id = auth.uid()
      AND role IN ('editor', 'admin')
    )
  );

CREATE POLICY "Collaborators can view chapters they have access to"
  ON memoir_chapters FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM collaborators
      WHERE memoir_id = memoir_chapters.id
      AND user_id = auth.uid()
    )
  );

-- Interview Sessions Additional Policies
CREATE POLICY "Admin users can view all interviews"
  ON interview_sessions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.user_id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Composite Indexes for Common Queries
CREATE INDEX IF NOT EXISTS idx_memoir_chapters_user_status 
  ON memoir_chapters(user_id, status);

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_status 
  ON interview_sessions(user_id, status);

CREATE INDEX IF NOT EXISTS idx_user_progress_user_section 
  ON user_progress(user_id, section);

CREATE INDEX IF NOT EXISTS idx_questionnaire_responses_user_section 
  ON questionnaire_responses(user_id, section);

-- Full Text Search Indexes
CREATE INDEX IF NOT EXISTS idx_memoir_chapters_content_search 
  ON memoir_chapters USING gin(to_tsvector('english', content));

CREATE INDEX IF NOT EXISTS idx_memoir_chapters_title_search 
  ON memoir_chapters USING gin(to_tsvector('english', title));

-- Add partial indexes for common filters
CREATE INDEX IF NOT EXISTS idx_interview_sessions_upcoming 
  ON interview_sessions(scheduled_for) 
  WHERE status = 'scheduled';

CREATE INDEX IF NOT EXISTS idx_user_progress_incomplete 
  ON user_progress(user_id) 
  WHERE status != 'completed';

-- Add btree_gin extension for better indexing
CREATE EXTENSION IF NOT EXISTS btree_gin;