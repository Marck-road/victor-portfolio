import { motion } from 'framer-motion';
import React from 'react';

const VideoShowcase: React.FC = () => {
  const MotionH3 = motion.h3 as any;
  const MotionH2 = motion.h2 as any;
  const MotionP = motion.p as any;
  const MotionDiv = motion.div as any;

  return (
    <section className="py-24 bg-body" id="video">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <MotionH3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-first tracking-widest uppercase mb-2"
          >
            Video Presentation
          </MotionH3>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold text-title mb-6"
          >
            See Me In <span className="gradient-text">Action</span>
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-text leading-relaxed"
          >
            Watch a brief overview of my workflow, the impact of my automation solutions, and a demonstration of how I bridge technology and business efficiency.
          </MotionP>
        </div>

        <MotionDiv 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-first/10 border border-white/10 glass-card bg-black"
        >
          {/* 
              YouTube Embed Player
              Note: Autoplay with sound is often blocked by browsers unless the user has interacted with the page.
              Removing 'mute=1' allows audio to play if the video starts.
          */}
          <iframe 
            src="https://www.youtube.com/embed/U3JkEFcJvwI?autoplay=1&rel=0&modestbranding=1&playlist=U3JkEFcJvwI&loop=1" 
            className="w-full h-full border-0" 
            title="Victor Aguhob Portfolio Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
          
          {/* Aesthetic border overlay */}
          <div className="absolute inset-0 pointer-events-none border-[4px] lg:border-[8px] border-body/20 rounded-3xl"></div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default VideoShowcase;