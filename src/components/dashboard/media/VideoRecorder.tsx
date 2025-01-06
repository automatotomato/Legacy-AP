import React, { useRef, useState } from 'react';
import { Video, StopCircle, RefreshCcw, Upload, ChevronLeft } from 'lucide-react';
import { useAuth } from '../../../lib/AuthContext';
import { supabase } from '../../../lib/supabase';

export default function VideoRecorder() {
  const { user } = useAuth();
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [uploading, setUploading] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setRecordedBlob(blob);
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = URL.createObjectURL(blob);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const resetRecording = () => {
    setRecordedBlob(null);
    if (videoRef.current) {
      videoRef.current.src = '';
    }
  };

  const uploadVideo = async () => {
    if (!user || !recordedBlob) return;
    setUploading(true);

    try {
      const fileName = `${user.id}/video/introduction.webm`;
      const { error } = await supabase.storage
        .from('media')
        .upload(fileName, recordedBlob);

      if (error) throw error;
      
      resetRecording();
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b">
        <button
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold">Record Video</h2>
      </div>

      {/* Guidelines */}
      <div className="p-4 bg-gray-50">
        <h3 className="font-medium text-gray-900 mb-2">Video Introduction Guidelines</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Record a brief introduction about yourself</li>
          <li>• Share what inspired you to create this memoir</li>
          <li>• Mention special messages for family members</li>
          <li>• Keep it under 5 minutes</li>
        </ul>
      </div>

      {/* Video Preview */}
      <div className="flex-1 bg-black relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={isRecording}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Recording Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {!recordedBlob && !isRecording && (
            <button
              onClick={startRecording}
              className="flex items-center gap-2 px-6 py-3 bg-legacy-600 text-white rounded-full
                       hover:bg-legacy-700 shadow-lg"
            >
              <Video className="w-5 h-5" />
              Start Recording
            </button>
          )}

          {isRecording && (
            <button
              onClick={stopRecording}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full
                       hover:bg-red-700 shadow-lg"
            >
              <StopCircle className="w-5 h-5" />
              Stop Recording
            </button>
          )}

          {recordedBlob && (
            <div className="flex items-center gap-3">
              <button
                onClick={resetRecording}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-full
                         hover:bg-gray-700 shadow-lg"
              >
                <RefreshCcw className="w-5 h-5" />
                Record Again
              </button>
              <button
                onClick={uploadVideo}
                disabled={uploading}
                className="flex items-center gap-2 px-6 py-3 bg-legacy-600 text-white rounded-full
                         hover:bg-legacy-700 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload className="w-5 h-5" />
                {uploading ? 'Uploading...' : 'Save Video'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}