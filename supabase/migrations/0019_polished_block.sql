/*
  # Add Missing Questionnaire Columns

  1. Changes
    - Add missing columns to match the questionnaire questions
    - Ensure all column names match the question IDs exactly
    - Add columns for all sections: childhood, family, career, relationships, life lessons

  2. Security
    - No changes to existing RLS policies needed
*/

-- Childhood section
ALTER TABLE questionnaire_childhood
  ADD COLUMN IF NOT EXISTS birthplace text,
  ADD COLUMN IF NOT EXISTS earlyMemories text,
  ADD COLUMN IF NOT EXISTS familyLife text,
  ADD COLUMN IF NOT EXISTS neighborhood text,
  ADD COLUMN IF NOT EXISTS schoolYears text,
  ADD COLUMN IF NOT EXISTS childhoodFriends text,
  ADD COLUMN IF NOT EXISTS familyTraditions text,
  ADD COLUMN IF NOT EXISTS childhoodDreams text,
  ADD COLUMN IF NOT EXISTS influences text,
  ADD COLUMN IF NOT EXISTS memorableMoments text;

-- Career section
ALTER TABLE questionnaire_career
  ADD COLUMN IF NOT EXISTS careerStart text,
  ADD COLUMN IF NOT EXISTS mentors text,
  ADD COLUMN IF NOT EXISTS achievements text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Family section
ALTER TABLE questionnaire_family
  ADD COLUMN IF NOT EXISTS familyHistory text,
  ADD COLUMN IF NOT EXISTS parentsStory text,
  ADD COLUMN IF NOT EXISTS siblings text,
  ADD COLUMN IF NOT EXISTS grandparents text,
  ADD COLUMN IF NOT EXISTS familyValues text,
  ADD COLUMN IF NOT EXISTS familyDynamics text,
  ADD COLUMN IF NOT EXISTS traditions text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS legacy text,
  ADD COLUMN IF NOT EXISTS lessons text;

-- Relationships section
ALTER TABLE questionnaire_relationships
  ADD COLUMN IF NOT EXISTS partnership text,
  ADD COLUMN IF NOT EXISTS parenthood text,
  ADD COLUMN IF NOT EXISTS friendship text,
  ADD COLUMN IF NOT EXISTS community text,
  ADD COLUMN IF NOT EXISTS mentoring text,
  ADD COLUMN IF NOT EXISTS relationships text,
  ADD COLUMN IF NOT EXISTS influence text,
  ADD COLUMN IF NOT EXISTS love text,
  ADD COLUMN IF NOT EXISTS forgiveness text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Life Lessons section
ALTER TABLE questionnaire_life_lessons
  ADD COLUMN IF NOT EXISTS philosophy text,
  ADD COLUMN IF NOT EXISTS values text,
  ADD COLUMN IF NOT EXISTS wisdom text,
  ADD COLUMN IF NOT EXISTS regrets text,
  ADD COLUMN IF NOT EXISTS proudest text,
  ADD COLUMN IF NOT EXISTS growth text,
  ADD COLUMN IF NOT EXISTS happiness text,
  ADD COLUMN IF NOT EXISTS purpose text,
  ADD COLUMN IF NOT EXISTS faith text,
  ADD COLUMN IF NOT EXISTS legacy text;