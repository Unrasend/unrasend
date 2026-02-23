import React from 'react';

const Footer: React.FC<{ className: string }> = ({ className }) => {
  return (
    <footer
      className={`
      flex
      flex-col
      items-center
      justify-center
      gap-y-6
      w-full
      px-4xl
      xs:px-md
      pb-[6rem]
      xs:pb-2xl
      pt-4xl
      xs:pt-2xl
      bg-footer
      border-surface-base
      border-t-1
      ${className}
    `}
    >
      <div className="flex flex-col items-center">
        <div className="effect lavinia">
          <div className="buttons">
            <a href="https://www.linkedin.com/in/unrasend/" className="in" title="Join us on Linked In" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/unrasend" className="github" title="Follow on Github" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="mailto:unrasend@gmail.com" className="email" title="Email Me">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] h-[1.5rem]" viewBox="0 0 32 32">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22.6,26c-2.2,1.5-5,2.3-8,1.9c-5.5-0.6-10-5.1-10.6-10.6C3.3,10.1,8.9,4,16,4c0.3,0,0.6,0,0.8,0 c7.5,0.5,12.4,8.3,10,15.5l0,0.1C26.3,21,25,22,23.5,22h0c-1.9,0-3.5-1.6-3.5-3.5V11" />
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16,21L16,21c-2.2,0-4-1.8-4-4v-2c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4v2C20,19.2,18.2,21,16,21z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
