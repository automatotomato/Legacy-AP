/*
  # Fix Questionnaire Schema

  1. Updates
    - Align database columns with questionnaire fields
    - Add missing columns
    - Fix column naming consistency
  
  2. Changes
    - Add all fields from questionnaireQuestions.ts
    - Ensure column names match form field IDs exactly
*/

-- Fix Childhood section
ALTER TABLE questionnaire_childhood
  ADD COLUMN IF NOT EXISTS birthplace text,
  ADD COLUMN IF NOT EXISTS childhoodHome text,
  ADD COLUMN IF NOT EXISTS schoolYears text,
  ADD COLUMN IF NOT EXISTS familyTraditions text,
  ADD COLUMN IF NOT EXISTS childhoodDreams text;

-- Fix Family section
ALTER TABLE questionnaire_family
  ADD COLUMN IF NOT EXISTS familyOrigins text,
  ADD COLUMN IF NOT EXISTS parentsStory text,
  ADD COLUMN IF NOT EXISTS grandparentsLegacy text,
  ADD COLUMN IF NOT EXISTS familyValues text,
  ADD COLUMN IF NOT EXISTS familyChallenges text;

-- Fix Career section
ALTER TABLE questionnaire_career
  ADD COLUMN IF NOT EXISTS careerStart text,
  ADD COLUMN IF NOT EXISTS mentors text,
  ADD COLUMN IF NOT EXISTS achievements text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Fix Relationships section
ALTER TABLE questionnaire_relationships
  ADD COLUMN IF NOT EXISTS partnership text,
  ADD COLUMN IF NOT EXISTS parenthood text,
  ADD COLUMN IF NOT EXISTS friendships text,
  ADD COLUMN IF NOT EXISTS community text,
  ADD COLUMN IF NOT EXISTS influence text;

-- Fix Life Lessons section
ALTER TABLE questionnaire_life_lessons
  ADD COLUMN IF NOT EXISTS philosophy text,
  ADD COLUMN IF NOT EXISTS wisdom text,
  ADD COLUMN IF NOT EXISTS proudestMoments text,
  ADD COLUMN IF NOT EXISTS purpose text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_childhood_user_id ON questionnaire_childhood(user_id);
CREATE INDEX IF NOT EXISTS idx_family_user_id ON questionnaire_family(user_id);
CREATE INDEX IF NOT EXISTS idx_career_user_id ON questionnaire_career(user_id);
CREATE INDEX IF NOT EXISTS idx_relationships_user_id ON questionnaire_relationships(user_id);
CREATE INDEX IF NOT EXISTS idx_life_lessons_user_id ON questionnaire_life_lessons(user_id);