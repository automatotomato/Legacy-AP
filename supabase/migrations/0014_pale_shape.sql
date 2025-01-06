/*
  # Fix Column Names in Questionnaire Schema
  
  1. Changes
    - Ensure all column names match form field names exactly
    - Add any missing columns
    - Fix camelCase naming consistency
  
  2. Security
    - Maintain existing RLS policies
*/

-- Fix questionnaire_childhood table
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

-- Fix questionnaire_family table
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

-- Fix questionnaire_career table
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

-- Fix questionnaire_relationships table
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

-- Fix questionnaire_life_lessons table
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