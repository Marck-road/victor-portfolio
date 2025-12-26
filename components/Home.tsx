import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="bg-body min-h-screen flex items-center pt-24 pb-12 px-4 relative overflow-hidden" id="home">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-lg lg:text-2xl font-bold text-first tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,128,143,0.3)]">
            Automation Architect
          </h3>
          <h1 className="text-6xl lg:text-9xl font-black text-title mb-6 leading-tight">
            Victor <br /> <span className="gradient-text">Aguhob</span>
          </h1>
          <p className="text-lg text-text leading-relaxed mb-10 max-w-xl">
            Pioneering digital efficiency through bespoke automation frameworks. I transform complex workflows into streamlined, high-performance engines.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/drive/folders/1OK5rrF71bFvA9kb2TwiQ0bwRrj0ibwve" 
              className="shimmer-btn group relative inline-flex items-center justify-center px-10 py-5 font-bold text-title transition-all duration-200 bg-first rounded-2xl hover:bg-firstAlt hover:shadow-[0_0_40px_rgba(255,128,143,0.4)]"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Explore Portfolio
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </motion.a>
            
            <div className="flex gap-4">
              {[
                { icon: 'ri-facebook-fill', url: 'https://web.facebook.com/Vector4526' },
                { icon: 'ri-github-fill', url: 'https://github.com/Victhor4526' },
                { icon: 'ri-linkedin-box-line', url: 'https://www.linkedin.com/in/thor-aguhob/' },
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: 'hsl(356, 100%, 75%)', borderColor: 'hsl(356, 100%, 75%)' }}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-title text-2xl rounded-2xl transition-all duration-300"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center order-1 lg:order-2 relative">
          <motion.div
            style={{ y: y2, rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-first rounded-full opacity-10 blur-[120px] animate-pulse"></div>
            <svg
              class="home__blob w-[320px] lg:w-[520px] fill-first relative z-10 drop-shadow-2xl"
              viewBox="0 0 550 591"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="maskBlob" mask-type="alpha">
                <path
                  d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                  170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                  447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                  587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                  438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                  fill="white"
                />
              </mask>

              <g mask="url(#maskBlob)">
                <path
                  d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                  170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                  447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                  587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                  438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                />
                <image id="imageBlob" width="640" height="700" x="-50" y="40" href="./components/img/profile-pic.jpg"/>

              </g>
            </svg>

            
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 500], [0, -40]) }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl z-20 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <h4 className="text-4xl font-black text-first mb-1">2+</h4>
              <p className="text-xs font-bold text-text uppercase tracking-widest">Years Expertise</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;