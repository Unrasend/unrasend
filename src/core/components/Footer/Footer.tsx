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
      bg-bg-1
      justify-between
      border-bg-body
      border-t-2
      ${className}
    `}
    >
      <div className="block h6 xs:mb-md">
        <span className="text-f-1 text">Build with love to people. Designed with passion to machines</span>
      </div>

      <div>
        <h2 className="h6 text-right mb-md">Social Media Links</h2>

        <ul className="flex xs:flex-col xs:items-center xs:mt-md">
          <li className="m-md xs:mb-md"><a href="#">LinkedIn</a></li>
          <li className="m-md xs:mb-md"><a href="#">Github</a></li>
          <li className="m-md xs:mb-md"><a href="#">E-Mail</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
