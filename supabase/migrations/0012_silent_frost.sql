/*
  # Fix Column Names in Questionnaire Schema
  
  1. Changes
    - Ensure all column names match form field names exactly
    - Add any missing columns
    - Standardize column naming convention
  
  2. Security
    - Maintain existing RLS policies
*/

-- Fix questionnaire_childhood table
ALTER TABLE questionnaire_childhood 
  RENAME COLUMN childhood_friends TO childhoodFriends;

ALTER TABLE questionnaire_childhood 
  RENAME COLUMN favorite_games TO favoriteGames;

ALTER TABLE questionnaire_childhood 
  RENAME COLUMN family_vacations TO familyVacations;

ALTER TABLE questionnaire_childhood 
  RENAME COLUMN childhood_pets TO childhoodPets;

ALTER TABLE questionnaire_childhood 
  RENAME COLUMN memorable_events TO memorableEvents;

-- Fix questionnaire_family table
ALTER TABLE questionnaire_family
  RENAME COLUMN family_origins TO familyOrigins;

ALTER TABLE questionnaire_family
  RENAME COLUMN parents_story TO parentsStory;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_values TO familyValues;

ALTER TABLE questionnaire_family
  RENAME COLUMN grandparents_legacy TO grandparentsLegacy;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_traditions TO familyTraditions;

ALTER TABLE questionnaire_family
  RENAME COLUMN extended_family TO extendedFamily;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_challenges TO familyChallenges;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_resilience TO familyResilience;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_dynamics TO familyDynamics;

ALTER TABLE questionnaire_family
  RENAME COLUMN family_lessons TO familyLessons;

-- Fix questionnaire_career table
ALTER TABLE questionnaire_career
  RENAME COLUMN early_aspirations TO earlyAspirations;

ALTER TABLE questionnaire_career
  RENAME COLUMN first_job TO firstJob;

ALTER TABLE questionnaire_career
  RENAME COLUMN career_path TO careerPath;

ALTER TABLE questionnaire_career
  RENAME COLUMN work_life_balance TO workLifeBalance;

ALTER TABLE questionnaire_career
  RENAME COLUMN career_lessons TO careerLessons;

-- Fix questionnaire_relationships table
ALTER TABLE questionnaire_relationships
  RENAME COLUMN significant_other TO significantOther;

ALTER TABLE questionnaire_relationships
  RENAME COLUMN meeting_story TO meetingStory;

ALTER TABLE questionnaire_relationships
  RENAME COLUMN relationship_growth TO relationshipGrowth;

ALTER TABLE questionnaire_relationships
  RENAME COLUMN parenting_philosophy TO parentingPhilosophy;

ALTER TABLE questionnaire_relationships
  RENAME COLUMN community_ties TO communityTies;

ALTER TABLE questionnaire_relationships
  RENAME COLUMN life_changing TO lifeChanging;

-- Fix questionnaire_life_lessons table
ALTER TABLE questionnaire_life_lessons
  RENAME COLUMN proudest_moments TO proudestMoments;