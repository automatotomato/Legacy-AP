/*
  # Update Questionnaire Schema

  1. Changes
    - Align database columns with form fields
    - Add missing columns
    - Ensure consistent naming
    - Add indexes for performance

  2. Tables Modified
    - questionnaire_childhood
    - questionnaire_family
    - questionnaire_career
    - questionnaire_relationships
    - questionnaire_life_lessons

  3. Security
    - Maintain existing RLS policies
*/

-- Update Childhood section
ALTER TABLE questionnaire_childhood
  ADD COLUMN IF NOT EXISTS birthplace text,
  ADD COLUMN IF NOT EXISTS birthDate text,
  ADD COLUMN IF NOT EXISTS earliestMemory text,
  ADD COLUMN IF NOT EXISTS childhoodHome text,
  ADD COLUMN IF NOT EXISTS neighborhood text,
  ADD COLUMN IF NOT EXISTS familyTraditions text,
  ADD COLUMN IF NOT EXISTS schoolExperiences text,
  ADD COLUMN IF NOT EXISTS childhoodFriends text,
  ADD COLUMN IF NOT EXISTS favoriteGames text,
  ADD COLUMN IF NOT EXISTS familyVacations text,
  ADD COLUMN IF NOT EXISTS childhoodPets text,
  ADD COLUMN IF NOT EXISTS memorableEvents text;

-- Update Family section
ALTER TABLE questionnaire_family
  ADD COLUMN IF NOT EXISTS familyOrigins text,
  ADD COLUMN IF NOT EXISTS parentsStory text,
  ADD COLUMN IF NOT EXISTS familyValues text,
  ADD COLUMN IF NOT EXISTS grandparentsLegacy text,
  ADD COLUMN IF NOT EXISTS familyTraditions text,
  ADD COLUMN IF NOT EXISTS extendedFamily text,
  ADD COLUMN IF NOT EXISTS familyChallenges text,
  ADD COLUMN IF NOT EXISTS familyResilience text,
  ADD COLUMN IF NOT EXISTS familyDynamics text,
  ADD COLUMN IF NOT EXISTS familyLessons text;

-- Update Career section
ALTER TABLE questionnaire_career
  ADD COLUMN IF NOT EXISTS earlyAspirations text,
  ADD COLUMN IF NOT EXISTS firstJob text,
  ADD COLUMN IF NOT EXISTS careerPath text,
  ADD COLUMN IF NOT EXISTS mentors text,
  ADD COLUMN IF NOT EXISTS achievements text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS workLifeBalance text,
  ADD COLUMN IF NOT EXISTS leadership text,
  ADD COLUMN IF NOT EXISTS careerLessons text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Update Relationships section
ALTER TABLE questionnaire_relationships
  ADD COLUMN IF NOT EXISTS significantOther text,
  ADD COLUMN IF NOT EXISTS meetingStory text,
  ADD COLUMN IF NOT EXISTS relationshipGrowth text,
  ADD COLUMN IF NOT EXISTS children text,
  ADD COLUMN IF NOT EXISTS parentingPhilosophy text,
  ADD COLUMN IF NOT EXISTS friendships text,
  ADD COLUMN IF NOT EXISTS communityTies text,
  ADD COLUMN IF NOT EXISTS mentoring text,
  ADD COLUMN IF NOT EXISTS relationships text,
  ADD COLUMN IF NOT EXISTS lifeChanging text;

-- Update Life Lessons section
ALTER TABLE questionnaire_life_lessons
  ADD COLUMN IF NOT EXISTS philosophy text,
  ADD COLUMN IF NOT EXISTS values text,
  ADD COLUMN IF NOT EXISTS wisdom text,
  ADD COLUMN IF NOT EXISTS regrets text,
  ADD COLUMN IF NOT EXISTS proudestMoments text,
  ADD COLUMN IF NOT EXISTS challenges text,
  ADD COLUMN IF NOT EXISTS growth text,
  ADD COLUMN IF NOT EXISTS happiness text,
  ADD COLUMN IF NOT EXISTS purpose text,
  ADD COLUMN IF NOT EXISTS legacy text;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_childhood_updated_at ON questionnaire_childhood(updated_at);
CREATE INDEX IF NOT EXISTS idx_family_updated_at ON questionnaire_family(updated_at);
CREATE INDEX IF NOT EXISTS idx_career_updated_at ON questionnaire_career(updated_at);
CREATE INDEX IF NOT EXISTS idx_relationships_updated_at ON questionnaire_relationships(updated_at);
CREATE INDEX IF NOT EXISTS idx_life_lessons_updated_at ON questionnaire_life_lessons(updated_at);