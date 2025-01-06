/*
  # Fix Questionnaire Schema - Final Update
  
  1. Changes
    - Ensure all column names exactly match form field IDs
    - Add missing columns
    - Clean up any duplicate/unused columns
    
  2. Tables Updated
    - questionnaire_childhood
    - questionnaire_family
    - questionnaire_career
    - questionnaire_relationships
    - questionnaire_life_lessons
*/

-- Fix Childhood section
ALTER TABLE questionnaire_childhood 
  DROP COLUMN IF EXISTS childhoodDreams CASCADE;

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

-- Ensure unique constraint on user_id for all tables
ALTER TABLE questionnaire_childhood
  DROP CONSTRAINT IF EXISTS questionnaire_childhood_user_id_key,
  ADD CONSTRAINT questionnaire_childhood_user_id_key UNIQUE (user_id);

ALTER TABLE questionnaire_family
  DROP CONSTRAINT IF EXISTS questionnaire_family_user_id_key,
  ADD CONSTRAINT questionnaire_family_user_id_key UNIQUE (user_id);

ALTER TABLE questionnaire_career
  DROP CONSTRAINT IF EXISTS questionnaire_career_user_id_key,
  ADD CONSTRAINT questionnaire_career_user_id_key UNIQUE (user_id);

ALTER TABLE questionnaire_relationships
  DROP CONSTRAINT IF EXISTS questionnaire_relationships_user_id_key,
  ADD CONSTRAINT questionnaire_relationships_user_id_key UNIQUE (user_id);

ALTER TABLE questionnaire_life_lessons
  DROP CONSTRAINT IF EXISTS questionnaire_life_lessons_user_id_key,
  ADD CONSTRAINT questionnaire_life_lessons_user_id_key UNIQUE (user_id);