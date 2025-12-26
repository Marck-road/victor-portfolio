import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Skill {
  name: string;
  icon: string;
  projects: Project[];
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const mockProjects: Record<string, Project[]> = {
    'Automation': [
      { 
        title: "E-Commerce Workflow", 
        description: "Automated category assignment for 10,000+ products using AI and webhooks.", 
        image: "https://picsum.photos/seed/auto1/600/400",
        tags: ["Zapier", "Airtable"]
      },
      { 
        title: "Client Onboarding", 
        description: "Streamlined onboarding process reducing manual work by 70%.", 
        image: "https://picsum.photos/seed/auto2/600/400",
        tags: ["Make", "Slack"]
      }
    ],
    'Dev': [
      { 
        title: "Custom CRM Dashboard", 
        description: "Built a responsive dashboard with HTML/CSS and real-time data integration.", 
        image: "https://picsum.photos/seed/dev1/600/400",
        tags: ["HTML", "CSS", "UI/UX"]
      }
    ],
    'Platforms': [
      { 
        title: "Glide Real Estate App", 
        description: "Mobile-first application for property management and agent tracking.", 
        image: "https://picsum.photos/seed/plat1/600/400",
        tags: ["Glide", "Google Sheets"]
      }
    ]
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Automation and Tools",
      skills: [
        { name: "Zapier", icon: "ri-flashlight-line", projects: mockProjects['Automation'] },
        { name: "Make", icon: "ri-settings-4-line", projects: mockProjects['Automation'] },
        { name: "Power Automate", icon: "ri-rocket-line", projects: mockProjects['Automation'] },
        { name: "N8N", icon: "ri-nodes-fill", projects: mockProjects['Automation'] },
        { name: "Webhooks", icon: "ri-webhook-line", projects: mockProjects['Automation'] },
      ]
    },
    {
      title: "Platforms & CRMS",
      skills: [
        { name: "GoHighLevel", icon: "ri-building-line", projects: mockProjects['Platforms'] },
        { name: "Glide", icon: "ri-smartphone-line", projects: mockProjects['Platforms'] },
        { name: "Wordpress", icon: "ri-wordpress-line", projects: mockProjects['Platforms'] },
        { name: "Airtable", icon: "ri-table-line", projects: mockProjects['Platforms'] },
        { name: "Jira", icon: "ri-trello-line", projects: mockProjects['Platforms'] },
        { name: "Softr", icon: "ri-window-line", projects: mockProjects['Platforms'] },
      ]
    },
    {
      title: "Development & Design",
      skills: [
        { name: "HTML", icon: "ri-html5-line", projects: mockProjects['Dev'] },
        { name: "CSS", icon: "ri-css3-line", projects: mockProjects['Dev'] },
        { name: "Figma", icon: "ri-figma-line", projects: mockProjects['Dev'] },
        { name: "UI/UX", icon: "ri-layout-line", projects: mockProjects['Dev'] },
        { name: "C Programming", icon: "ri-terminal-box-line", projects: mockProjects['Dev'] },
      ]
    },
    {
      title: "Productivity",
      skills: [
        { name: "Notion", icon: "ri-booklet-line", projects: [] },
        { name: "Slack", icon: "ri-slack-line", projects: [] },
        { name: "Google Workspace", icon: "ri-google-line", projects: [] },
        { name: "Microsoft 365", icon: "ri-microsoft-line", projects: [] },
        { name: "Trello", icon: "ri-trello-fill", projects: [] },
        { name: "Asana", icon: "ri-list-check", projects: [] },
        { name: "Clickup", icon: "ri-checkbox-circle-line", projects: [] },
        { name: "Monday", icon: "ri-calendar-event-line", projects: [] },
      ]
    }
  ];

  return (
    <section className="py-24 bg-container" id="skills">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-first tracking-widest uppercase mb-2">Expertise</h3>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-title mb-4">Skills & <span className="gradient-text">Interests</span></h2>
          <p className="text-text max-w-2xl mx-auto">
            Click on any skill to explore the innovative projects I've built using that specific tool or technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold text-title mb-8 border-l-4 border-first pl-4">{category.title}</h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.button
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSkill(skill)}
                    className="flex flex-col items-center justify-center p-4 min-w-[100px] glass-card rounded-2xl cursor-pointer hover:bg-first/10 group transition-all"
                  >
                    <i className={`${skill.icon} text-3xl mb-2 text-text group-hover:text-first`}></i>
                    <span className="text-xs font-semibold text-text group-hover:text-title">{skill.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-body/90 backdrop-blur-md"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-container w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-6 lg:p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-first/20 rounded-2xl text-first text-2xl">
                    <i className={selectedSkill.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-title">{selectedSkill.name}</h3>
                    <p className="text-sm text-text">Implementation Portfolio</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-text hover:text-title transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="p-6 lg:p-10 overflow-y-auto custom-scrollbar flex-1">
                {selectedSkill.projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedSkill.projects.map((project, pIdx) => (
                      <motion.div 
                        key={pIdx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pIdx * 0.1 }}
                        className="group overflow-hidden rounded-2xl bg-white/5 border border-white/5"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                          <h5 className="text-xl font-bold text-title mb-3 group-hover:text-first transition-colors">{project.title}</h5>
                          <p className="text-sm text-text leading-relaxed mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-firstAlt/30 text-first rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <i className="ri-folder-open-line text-6xl text-white/10 mb-4 block"></i>
                    <p className="text-text italic">Specific project showcase coming soon for this tool.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;