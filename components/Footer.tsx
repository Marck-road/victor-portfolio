import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-container pt-14 pb-8 lg:pt-18 lg:pb-16 px-4">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left reveal-top">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold text-title mb-1">
            Victor <span className="text-first">Aguhob</span>
          </h1>
          <h2 className="text-sm lg:text-base text-title font-medium">
            thoraguhob@gmail.com
          </h2>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: 'ri-facebook-circle-line', url: 'https://web.facebook.com/Vector4526' },
            { icon: 'ri-github-fill', url: 'https://github.com/Victhor4526' },
            { icon: 'ri-linkedin-box-line', url: 'https://www.linkedin.com/in/thor-aguhob/' },
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center bg-firstAlt p-2 text-title text-2xl transition-transform duration-400 hover:-translate-y-1"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <span className="text-[12px] text-text lg:justify-self-end mt-8 lg:mt-0">
          &#169; Copyright Victor Aguhob. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;