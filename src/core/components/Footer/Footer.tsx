import React from 'react';

const Footer: React.FC<{ className: string }> = ({ className }) => {
  return (
    <footer
      className={`
      mt-auto
      flex
      xs:flex-col
      items-center
      w-full
      px-4xl
      xs:px-md
      pb-[6rem]
      xs:pb-2xl
      pt-4xl
      xs:pt-2xl
      bg-footer
      justify-between
      border-surface-base
      border-t-2
      ${className}
    `}
    >
      <div className="block h6 xs:mb-md">
        <span className="text-fg text">Designed with passion to machines.</span>
      </div>

      <div>
        <h2 className="h6 text-right mb-md">Social Media Links</h2>

        <ul className="flex xs:flex-col xs:items-center xs:mt-md">
          <li className="m-md xs:mb-md"><a href="https://www.linkedin.com/in/unrasend/" target='_blank'>LinkedIn</a></li>
          <li className="m-md xs:mb-md"><a href="https://github.com/unrasend" target='_blank'>Github</a></li>
          <li className="m-md xs:mb-md"><a href="mailto:unrasend@gmail.com" target='_blank'>E-Mail</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
