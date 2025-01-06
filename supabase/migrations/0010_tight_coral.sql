/*
  # Update questionnaire schema

  1. Changes
    - Add missing columns to match form fields
    - Ensure consistent naming across tables
    - Add appropriate constraints and indexes

  2. Security
    - Maintain existing RLS policies
    - Keep user data isolation
*/

-- Update questionnaire_childhood table
ALTER TABLE questionnaire_childhood
ADD COLUMN IF NOT EXISTS birth_date text;

-- Update questionnaire_family table
ALTER TABLE questionnaire_family
ADD COLUMN IF NOT EXISTS family_origins text;

-- Update questionnaire_career table
ALTER TABLE questionnaire_career
ADD COLUMN IF NOT EXISTS early_aspirations text,
ADD COLUMN IF NOT EXISTS work_life_balance text,
ADD COLUMN IF NOT EXISTS leadership text,
ADD COLUMN IF NOT EXISTS career_lessons text;

-- Update questionnaire_relationships table
ALTER TABLE questionnaire_relationships
ADD COLUMN IF NOT EXISTS relationship_growth text,
ADD COLUMN IF NOT EXISTS parenting_philosophy text,
ADD COLUMN IF NOT EXISTS community_ties text,
ADD COLUMN IF NOT EXISTS mentoring text;

-- Update questionnaire_life_lessons table
ALTER TABLE questionnaire_life_lessons
ADD COLUMN IF NOT EXISTS philosophy text,
ADD COLUMN IF NOT EXISTS values text,
ADD COLUMN IF NOT EXISTS wisdom text,
ADD COLUMN IF NOT EXISTS growth text,
ADD COLUMN IF NOT EXISTS happiness text,
ADD COLUMN IF NOT EXISTS purpose text;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_childhood_updated_at ON questionnaire_childhood(updated_at);
CREATE INDEX IF NOT EXISTS idx_family_updated_at ON questionnaire_family(updated_at);
CREATE INDEX IF NOT EXISTS idx_career_updated_at ON questionnaire_career(updated_at);
CREATE INDEX IF NOT EXISTS idx_relationships_updated_at ON questionnaire_relationships(updated_at);
CREATE INDEX IF NOT EXISTS idx_life_lessons_updated_at ON questionnaire_life_lessons(updated_at);