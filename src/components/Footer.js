import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-red-700 dark:bg-yellow-500 py-4 px-8 flex items-center justify-between">
      <p className="text-white text-md dark:text-black dark:font-bolder">
        &copy; 2023 Quincy Oliech's Graduation Invite. All rights reserved.
      </p>
      
      <div className="flex items-center space-x-4">
        <p className="text-white text-md dark:text-black dark:font-bolder">RSVP to:</p>
        <a
          href="mailto:oliechlin@gmail.com"
          className="text-white text-md font-medium hover:text-yellow-500 dark:text-black dark:font-bolder dark:hover:text-red-700"
        >
          graduation@quincyoliech.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;