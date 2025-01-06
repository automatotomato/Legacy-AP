import React from 'react';
import ScrollReveal from '../ScrollReveal';

export default function HeroImages() {
  return (
    <div className="mt-12 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
      <ScrollReveal>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dearwunad/video/upload/v1735238679/granny1_tf7xo0.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </ScrollReveal>
    </div>
  );
}