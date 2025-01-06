/*
  # Add Reflections and Media Tables

  1. New Tables
    - questionnaire_reflections
      - For storing user reflections on life's journey
    - media_items
      - For storing metadata about uploaded media files
    - media_stories
      - For storing stories and context about media items

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add indexes for performance

  3. Changes
    - Add new questionnaire section
    - Add media tracking capabilities
    - Add story context for media items
*/

-- Create reflections questionnaire table
CREATE TABLE questionnaire_reflections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  triumphs text,
  regrets text,
  challenges text,
  impact text,
  fulfillment text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT questionnaire_reflections_user_id_key UNIQUE (user_id)
);

-- Create media items table
CREATE TABLE media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  file_path text NOT NULL,
  file_type text NOT NULL,
  caption text,
  date_taken date,
  location text,
  people_featured text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create media stories table
CREATE TABLE media_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  media_item_id uuid REFERENCES media_items NOT NULL,
  story text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE questionnaire_reflections ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_stories ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
CREATE POLICY "Users can manage their own reflections"
  ON questionnaire_reflections
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own media items"
  ON media_items
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their media stories"
  ON media_stories
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM media_items
    WHERE media_items.id = media_stories.media_item_id
    AND media_items.user_id = auth.uid()
  ));

-- Add indexes
CREATE INDEX idx_reflections_user_id ON questionnaire_reflections(user_id);
CREATE INDEX idx_media_items_user_id ON media_items(user_id);
CREATE INDEX idx_media_items_file_type ON media_items(file_type);
CREATE INDEX idx_media_stories_media_item_id ON media_stories(media_item_id);

-- Add updated_at triggers
CREATE TRIGGER update_reflections_timestamp
  BEFORE UPDATE ON questionnaire_reflections
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();

CREATE TRIGGER update_media_items_timestamp
  BEFORE UPDATE ON media_items
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();

CREATE TRIGGER update_media_stories_timestamp
  BEFORE UPDATE ON media_stories
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();