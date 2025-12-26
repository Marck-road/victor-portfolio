import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-body" id="video">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-first tracking-widest uppercase mb-2"
          >
            Video Presentation
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold text-title mb-6"
          >
            See Me In <span className="gradient-text">Action</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-text leading-relaxed"
          >
            Watch a brief overview of my workflow, the impact of my automation solutions, and a demonstration of how I bridge technology and business efficiency.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-first/10 border border-white/10 glass-card"
        >
          {/* Using a placeholder for the video - user can replace the src with actual video link */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Victor Aguhob Video Presentation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          <div className="absolute inset-0 pointer-events-none border-[12px] border-body/50 rounded-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;