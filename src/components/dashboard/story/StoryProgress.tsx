import React from 'react';
import { useQuestionnaireData } from '../../../hooks/useQuestionnaireData';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { Book, Star } from 'lucide-react';

const sections = [
  {
    title: 'Early Years',
    tableName: 'questionnaire_childhood',
    fields: [
      { id: 'birthplace', label: 'Birth & Early Years' },
      { id: 'childhoodHome', label: 'Childhood Home' },
      { id: 'schoolYears', label: 'School Years' },
      { id: 'familyTraditions', label: 'Family Traditions' }
    ]
  },
  {
    title: 'Family Legacy',
    tableName: 'questionnaire_family',
    fields: [
      { id: 'familyOrigins', label: 'Family Origins' },
      { id: 'parentsStory', label: 'Parents\' Story' },
      { id: 'grandparentsLegacy', label: 'Grandparents\' Legacy' },
      { id: 'familyValues', label: 'Family Values' }
    ]
  },
  {
    title: 'Career Journey',
    tableName: 'questionnaire_career',
    fields: [
      { id: 'firstJob', label: 'First Job' },
      { id: 'careerPath', label: 'Career Path' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'challenges', label: 'Challenges' }
    ]
  },
  {
    title: 'Relationships',
    tableName: 'questionnaire_relationships',
    fields: [
      { id: 'partnership', label: 'Life Partnership' },
      { id: 'parenthood', label: 'Parenthood' },
      { id: 'friendships', label: 'Friendships' },
      { id: 'community', label: 'Community' }
    ]
  },
  {
    title: 'Life Wisdom',
    tableName: 'questionnaire_life_lessons',
    fields: [
      { id: 'philosophy', label: 'Life Philosophy' },
      { id: 'wisdom', label: 'Wisdom' },
      { id: 'proudestMoments', label: 'Proudest Moments' },
      { id: 'legacy', label: 'Legacy' }
    ]
  }
];

export default function StoryProgress() {
  const sectionData = sections.map(section => ({
    ...section,
    data: useQuestionnaireData(section.tableName)
  }));

  const isLoading = sectionData.some(section => section.data.loading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Story So Far</h1>
        <p className="text-gray-600">
          Watch your memoir take shape as we weave together your memories and experiences
        </p>
      </div>

      <div className="space-y-6">
        {sectionData.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-legacy-100 flex items-center justify-center">
                <Book className="w-5 h-5 text-legacy-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>

            {section.data.data && Object.keys(section.data.data).length > 0 ? (
              <div className="space-y-6">
                {section.fields.map((field) => {
                  const content = section.data.data?.[field.id];
                  if (!content) return null;
                  
                  return (
                    <div key={field.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">{field.label}</h3>
                      <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Star className="w-6 h-6 mx-auto mb-2 text-legacy-300" />
                <p>This chapter is waiting to be written</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}