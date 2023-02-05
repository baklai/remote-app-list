import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubUrl = 'https://github.com/baklai';
  const author = 'Dmitrii Baklai';

  return (
    <footer className="w-full text-center">
      <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
        <div className="mx-auto flex flex-wrap items-center text-center">
          <small className="text-gray-500">
            <span className="text-muted">
              Created by the {author} &copy; {currentYear}
            </span>
            <span> ❤ </span>
            <a href={githubUrl} rel="noreferrer" target="_blank">
              View on Github
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
