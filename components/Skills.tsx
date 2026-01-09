import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

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
    'Airtable': [
      {
        title: "Landing Page", 
        description: "A responsive landing page built with Airtable and Glide.", 
        image: "/img/at-landing.jpg",
        tags: ["Airtable"]
      },
      {
        title: "Internal Forms", 
        description: "Built internal forms and workflows in Airtable for streamlined data collection.", 
        image: "/img/at-internalforms.jpg",
        tags: ["Airtable"]
      },
      {
        title: "Forms", 
        description: "Created user-facing forms in Airtable to capture structured data efficiently.", 
        image: "/img/at-forms.jpg",
        tags: ["Airtable"]
      },
      {
        title: "Forms - Continuation", 
        description: "Extended Airtable forms with automation for improved data handling.", 
        image: "/img/at-forms2.jpg",
        tags: ["Airtable"]
      },
      {
        title: "Interface", 
        description: "Designed Airtable interfaces to visualize and manage records effectively.", 
        image: "/img/at-interface.jpg",
        tags: ["Airtable"]
      },
      {
        title: "Interface - Continuation", 
        description: "Enhanced Airtable interfaces with custom views and interactive elements.", 
        image: "/img/at-interface2.jpg",
        tags: ["Airtable"]
      }
    ],
    'Glide': [
      { 
        title: "Dashboard", 
        description: "Dashboard of a product sourcing e-commerce.", 
        image: "/img/glide - dashboard.png",
        tags: ["Glide"]
      },
      { 
        title: "E-commerce Product Categories", 
        description: "A catalogue of the different categories of this e-commerce.", 
        image: "/img/glide - E-Commerce Product Categories.png",
        tags: ["Glide"]
      },
      { 
        title: "Product Information Page", 
        description: "Displays product details and specifications.", 
        image: "/img/glide - Women T-Shirt.png",
        tags: ["Glide"]
      }
    ],
    'Make': [
      {
        title: "Blog Post Writer Automation (Sphere Resources)", 
        description: "Built an automated blog writing workflow in Make using webhooks to speed up content production and reduce manual effort.", 
        image: "/img/make-1-tag-wh.jpg",
        tags: ["Make, Webhooks"]
      },
      {
        title: "Product Category Generator", 
        description: "Generates copywriting and uploads to Wordpress", 
        image: "/img/make-2.jpg",
        tags: ["Make, Webhooks, Wordpress"]
      },
      {
        title: "Content Architect - Promote My Property (Real Estate)", 
        description: "Automated real estate content workflows in Make to boost property visibility.", 
        image: "/img/make-3.jpg",
        tags: ["Make"]
      },
      {
        title: "Content Architect - Educational Post", 
        description: "Automated content creation and creates posts in Facebook and Instagram", 
        image: "/img/make-4.jpg",
        tags: ["Make"]
      },
      {
        title: "AI Content Engine Airtable Record", 
          description: "Automated Airtable record creation for AI-generated content using Make.",
        image: "/img/make-5.jpg",
        tags: ["Make, Webhooks"]
      },
      {
        title: "Content Automation System", 
        description: "Automated content creation and publishing workflows in Make.", 
        image: "/img/make-6.jpg",
        tags: ["Make"]
      },
      {
        title: "AI Content Multi-Platform Adaptation", 
        description: "Automated adaptation and distribution of AI content across multiple platforms using Make.", 
        image: "/img/make-7.jpg",
        tags: ["Make, Webhooks"]
      },
      {
        title: "Content Architect - Open House Post (Real Estate)", 
        description: "Automated real estate content workflows in Make to boost property visibility in Facebook and Instagram.", 
        image: "/img/make-8.jpg",
        tags: ["Make"]
      },
      {
        title: "Project Progress Report Automation", 
        description: "Automated project progress reporting workflows in Make.", 
        image: "/img/make-9.jpg",
        tags: ["Make"]
      },
    ],
    'PowerAutomate': [
      { 
        title: "Quarter Employee Review Reminder", 
        description: "Automated email reminders for quarterly employee reviews using Power Automate.", 
        image: "img/pa-1.jpg",
        tags: ["Power Automate"]
      },
      { 
        title: "Sphere Services | Sam Reminder for Salary Automation", 
        description: "Automated salary reminders for Sphere Services employees using Power Automate.", 
        image: "img/pa-2.jpg",
        tags: ["Power Automate"]
      },
      { 
        title: "Google File Ownership Transfer Reminder", 
        description: "Automated reminders for Google file ownership transfers using Power Automate.", 
        image: "img/pa-3.jpg",
        tags: ["Power Automate"]
      }
    ],
    'Wordpress': [
      { 
        title: "About Us Page", 
        description: "A professionally designed About Us page for a corporate website.", 
        image: "img/wp-about us.jpg",
        tags: ["Zapier", "Airtable"]
      },
      { 
        title: "Blogs", 
        description: "A series of blog posts on various topics related to the industry.", 
        image: "img/wp-blogs.jpg",
        tags: ["Make", "Slack"]
      },
      { 
        title: "Item List", 
        description: "A comprehensive list of items available for purchase on the website.", 
        image: "img/wp-item list.jpg",
        tags: ["Zapier", "Airtable"]
      },
      { 
        title: "Services Offered", 
        description: "A comprehensive list of services offered by the company.", 
        image: "img/wp-Services offered.jpg",
        tags: ["Make", "Slack"]
      }
    ],
  };

  const skillCategories: SkillCategory[] = [
    {
      title: "Automation and Tools",
      skills: [
        { name: "Zapier", icon: "ri-flashlight-line", projects: [] },
        { name: "Make", icon: "ri-settings-4-line", projects: mockProjects['Make'] },
        { name: "Power Automate", icon: "ri-rocket-line", projects: mockProjects['PowerAutomate'] },
        { name: "N8N", icon: "ri-nodes-fill", projects: [] },
      ]
    },
    {
      title: "Platforms & CRMS",
      skills: [
        { name: "GoHighLevel", icon: "ri-building-line", projects: [] },
        { name: "Glide", icon: "ri-smartphone-line", projects: mockProjects['Glide'] },
        { name: "Wordpress", icon: "ri-wordpress-line", projects: mockProjects['Wordpress'] },
        { name: "Airtable", icon: "ri-table-line", projects: mockProjects['Airtable'] },
        { name: "Jira", icon: "ri-trello-line", projects: [] },
        { name: "Softr", icon: "ri-window-line", projects: [] },
      ]
    },
    {
      title: "Development & Design",
      skills: [
        { name: "HTML", icon: "ri-html5-line", projects: [] },
        { name: "CSS", icon: "ri-css3-line", projects: [] },
        { name: "Figma", icon: "ri-figma-line", projects: [] },
        { name: "UI/UX", icon: "ri-layout-line", projects: [] },
        { name: "C Programming", icon: "ri-terminal-box-line", projects: [] },
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