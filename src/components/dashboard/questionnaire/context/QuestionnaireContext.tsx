import React, { createContext, useContext, useState } from 'react';
import ChildhoodForm from '../forms/ChildhoodForm';
import FamilyForm from '../forms/FamilyForm';
import CareerForm from '../forms/CareerForm';
import RelationshipsForm from '../forms/RelationshipsForm';
import LifeLessonsForm from '../forms/LifeLessonsForm';

const sections = ['Childhood', 'Family', 'Career', 'Relationships', 'Life Lessons'] as const;
type Section = typeof sections[number];

const formComponents = {
  Childhood: ChildhoodForm,
  Family: FamilyForm,
  Career: CareerForm,
  Relationships: RelationshipsForm,
  'Life Lessons': LifeLessonsForm,
};

interface QuestionnaireContextType {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  sections: readonly Section[];
  ActiveForm: React.ComponentType;
  goToNextSection: () => void;
  goToPreviousSection: () => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined);

export function QuestionnaireProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<Section>('Childhood');
  const ActiveForm = formComponents[currentSection];

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  return (
    <QuestionnaireContext.Provider value={{
      currentSection,
      setCurrentSection,
      sections,
      ActiveForm,
      goToNextSection,
      goToPreviousSection,
    }}>
      {children}
    </QuestionnaireContext.Provider>
  );
}

export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  return context;
}