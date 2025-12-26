import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (window.emailjs) {
      window.emailjs.sendForm('service_vd999g7', 'template_x4fj8wi', formRef.current, '1_BRE1J-DJEBdosO5')
        .then(() => {
          setStatus('Your message has been sent successfully ✅');
          setTimeout(() => setStatus(''), 5000);
          formRef.current?.reset();
        }, () => {
          setStatus('An error occurred, please try again later ❌');
        });
    } else {
      setStatus('Email service currently unavailable.');
    }
  };

  return (
    <section className="py-24 bg-body" id="contact">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-first tracking-widest uppercase mb-2"
          >
            Connection
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold text-title mb-12"
          >
            Start a <span className="gradient-text">Project</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto bg-container border border-white/10 p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-black/40"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="John Doe" 
                  required 
                  className="w-full bg-body border border-white/5 p-5 rounded-2xl text-title placeholder:text-text/30 outline-none focus:border-first transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="john@example.com" 
                  required 
                  className="w-full bg-body border border-white/5 p-5 rounded-2xl text-title placeholder:text-text/30 outline-none focus:border-first transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text uppercase tracking-widest ml-1">Message</label>
              <textarea 
                name="user_project"
                placeholder="Tell me about your automation needs..." 
                required 
                className="w-full bg-body border border-white/5 p-5 rounded-2xl text-title placeholder:text-text/30 h-48 resize-none outline-none focus:border-first transition-all"
              />
            </div>
            
            <div className="flex flex-col items-center gap-6 mt-4">
              {status && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-title font-medium py-2 px-6 bg-first/10 rounded-full border border-first/20"
                >
                  {status}
                </motion.p>
              )}
              <button 
                type="submit" 
                className="w-full sm:w-auto px-12 py-5 bg-first text-title font-black rounded-2xl hover:bg-firstAlt transition-all shadow-xl shadow-first/20"
              >
                Send Proposal
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;