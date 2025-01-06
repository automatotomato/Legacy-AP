import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Star, Play, Square } from 'lucide-react';

const interviewers = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    role: 'Senior Memoir Interviewer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    experience: '15+ years experience',
    rating: 4.9,
    reviews: 847,
    gender: 'female',
    description: 'Specializes in family histories and personal narratives with a warm, empathetic approach.',
    voiceSample: 'https://res.cloudinary.com/dearwunad/video/upload/v1735238679/sarah-voice_wd4f9r.mp3',
    sampleText: "Hi, I'm Sarah. I'd love to help you share your story in a way that will resonate with your family for generations to come."
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    role: 'Lead Story Curator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    experience: '12+ years experience',
    rating: 4.8,
    reviews: 723,
    gender: 'male',
    description: 'Expert at drawing out meaningful life stories with a thoughtful, engaging style.',
    voiceSample: 'https://res.cloudinary.com/dearwunad/video/upload/v1735238679/michael-voice_kf9d2r.mp3',
    sampleText: "Hello, I'm Michael. I'm here to help you preserve your memories and create a lasting legacy for your family."
  }
];

interface InterviewerSelectionProps {
  onSelect: (interviewerId: string) => void;
  selectedId?: string;
}

export default function InterviewerSelection({ onSelect, selectedId }: InterviewerSelectionProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handlePlayVoice = (interviewerId: string, voiceSample: string) => {
    if (playingId === interviewerId) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(voiceSample);
      audioRef.current.play();
      audioRef.current.onended = () => setPlayingId(null);
      setPlayingId(interviewerId);
    }
  };

  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Choose Your Personal Interviewer
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interviewers.map((interviewer) => (
          <motion.div
            key={interviewer.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative p-6 rounded-lg cursor-pointer border-2 transition-colors
              ${selectedId === interviewer.id 
                ? 'border-legacy-600 bg-legacy-50' 
                : 'border-gray-200 hover:border-legacy-300'}
            `}
            onClick={() => onSelect(interviewer.id)}
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <img
                  src={interviewer.image}
                  alt={interviewer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-legacy-100 rounded-full p-1">
                  <Mic className="w-4 h-4 text-legacy-600" />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900">
                  {interviewer.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {interviewer.role}
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{interviewer.rating}</span>
                  <span className="text-gray-500">
                    ({interviewer.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              {interviewer.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-legacy-600 font-medium">
                {interviewer.experience}
              </span>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayVoice(interviewer.id, interviewer.voiceSample);
                }}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
                  ${playingId === interviewer.id
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-legacy-100 text-legacy-700 hover:bg-legacy-200'}
                  transition-colors
                `}
              >
                {playingId === interviewer.id ? (
                  <>
                    <Square className="w-4 h-4 fill-current" />
                    Stop Voice
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    Play Voice
                  </>
                )}
              </button>
            </div>

            {playingId === interviewer.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 p-3 bg-legacy-50 rounded-lg text-sm text-gray-600 italic"
              >
                "{interviewer.sampleText}"
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}