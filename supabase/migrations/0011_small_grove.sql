/*
  # Update Questionnaire Schema - Final Adjustments
  
  1. Changes
    - Add missing columns to match form fields exactly
    - Ensure consistent column naming across tables
    - Add appropriate constraints and defaults
  
  2. Security
    - Maintain existing RLS policies
    - Preserve data integrity
*/

-- Update questionnaire_childhood table
ALTER TABLE questionnaire_childhood 
ADD COLUMN IF NOT EXISTS childhood_friends text,
ADD COLUMN IF NOT EXISTS favorite_games text,
ADD COLUMN IF NOT EXISTS family_vacations text,
ADD COLUMN IF NOT EXISTS childhood_pets text,
ADD COLUMN IF NOT EXISTS memorable_events text;

-- Update questionnaire_family table
ALTER TABLE questionnaire_family
ADD COLUMN IF NOT EXISTS extended_family text,
ADD COLUMN IF NOT EXISTS grandparents_legacy text,
ADD COLUMN IF NOT EXISTS family_resilience text,
ADD COLUMN IF NOT EXISTS family_dynamics text;

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
ADD COLUMN IF NOT EXISTS mentoring text,
ADD COLUMN IF NOT EXISTS relationships text;

-- Update questionnaire_life_lessons table
ALTER TABLE questionnaire_life_lessons
ADD COLUMN IF NOT EXISTS philosophy text,
ADD COLUMN IF NOT EXISTS values text,
ADD COLUMN IF NOT EXISTS wisdom text,
ADD COLUMN IF NOT EXISTS growth text,
ADD COLUMN IF NOT EXISTS happiness text,
ADD COLUMN IF NOT EXISTS purpose text;

-- Add indexes for improved query performance
CREATE INDEX IF NOT EXISTS idx_childhood_user_id ON questionnaire_childhood(user_id);
CREATE INDEX IF NOT EXISTS idx_family_user_id ON questionnaire_family(user_id);
CREATE INDEX IF NOT EXISTS idx_career_user_id ON questionnaire_career(user_id);
CREATE INDEX IF NOT EXISTS idx_relationships_user_id ON questionnaire_relationships(user_id);
CREATE INDEX IF NOT EXISTS idx_life_lessons_user_id ON questionnaire_life_lessons(user_id);