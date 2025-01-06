/*
  # Fix Questionnaire Column Names

  1. Changes
    - Update column names to exactly match question IDs from forms
    - Ensure consistent naming across all questionnaire tables
    - Remove any duplicate or unused columns

  2. Security
    - No changes to existing RLS policies needed
*/

-- Childhood section
ALTER TABLE questionnaire_childhood
  DROP COLUMN IF EXISTS childhoodDreams,
  ADD COLUMN IF NOT EXISTS birthplace text,
  ADD COLUMN IF NOT EXISTS childhoodHome text,
  ADD COLUMN IF NOT EXISTS schoolYears text,
  ADD COLUMN IF NOT EXISTS familyTraditions text,
  ADD COLUMN IF NOT EXISTS childhoodDreams text;

-- Family section
ALTER TABLE questionnaire_family
  DROP COLUMN IF EXISTS familyHistory,
  ADD COLUMN IF NOT EXISTS familyOrigins text,
  ADD COLUMN IF NOT EXISTS parentsStory text,
  ADD COLUMN IF NOT EXISTS grandparentsLegacy text,
  ADD COLUMN IF NOT EXISTS familyValues text,
  ADD COLUMN IF NOT EXISTS familyChallenges text;

-- Career section
ALTER TABLE questionnaire_career
  DROP COLUMN IF EXISTS careerStart,
  ADD COLUMN IF NOT EXISTS careerStart text,
  ADD COLUMN IF NOT EXISTS mentors text,
  ADD COLUMN IF NOT EXISTS achievements text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Relationships section
ALTER TABLE questionnaire_relationships
  DROP COLUMN IF EXISTS friendship,
  ADD COLUMN IF NOT EXISTS partnership text,
  ADD COLUMN IF NOT EXISTS parenthood text,
  ADD COLUMN IF NOT EXISTS friendships text,
  ADD COLUMN IF NOT EXISTS community text,
  ADD COLUMN IF NOT EXISTS influence text;

-- Life Lessons section
ALTER TABLE questionnaire_life_lessons
  DROP COLUMN IF EXISTS proudest,
  ADD COLUMN IF NOT EXISTS philosophy text,
  ADD COLUMN IF NOT EXISTS wisdom text,
  ADD COLUMN IF NOT EXISTS proudestMoments text,
  ADD COLUMN IF NOT EXISTS purpose text,
  ADD COLUMN IF NOT EXISTS legacy text;