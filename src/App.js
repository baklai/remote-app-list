import React, { useState, useEffect } from 'react';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import { SupRemo, SupRemoCard } from './components/Posts/SupRemo';
import { TeamViewer, TeamViewerCard } from './components/Posts/TeamViewer';
import { AnyDesk, AnyDeskCard } from './components/Posts/AnyDesk';

function App() {
  const [selectPost, setSelectPost] = useState('');

  const FACEBOOK_LINK = 'https://www.facebook.com/dmitrii.baklai/';
  const GITHUB_LINK = 'https://github.com/baklai/';
  const LINKEDIN_LINK = 'https://www.linkedin.com/in/dmitrii-baklai-1370a3170/';

  useEffect(() => {
    document.title = selectPost.length
      ? `${selectPost} • Блог технічної підтримки`
      : 'Блог технічної підтримки';
  }, [selectPost]);

  const hendleSelectPost = (name) => {
    setSelectPost(name);
  };

  return (
    <>
      <Hero />
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <nav className="mt-0 w-full">
            <div className="container mx-auto flex items-center">
              <div className="flex w-1/2 pl-4 text-sm">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center font-extrabold">
                  <li className="mr-2">
                    <button
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 py-2 px-2"
                      onClick={() => {
                        setSelectPost('');
                      }}
                    >
                      Домашня сторінка
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  target="_blank"
                  rel="noreferrer"
                  href={FACEBOOK_LINK}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current h-4"
                  >
                    <title>facebook</title>
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>

                <a
                  className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  target="_blank"
                  rel="noreferrer"
                  href={GITHUB_LINK}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current h-4"
                  >
                    <title>github</title>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </a>

                <a
                  className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  target="_blank"
                  rel="noreferrer"
                  href={LINKEDIN_LINK}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current h-4"
                  >
                    <title>linkedin</title>
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          {!!selectPost.length && (
            <div className="container max-w-5xl mx-auto mt-10 mb-10">
              <div className="mx-0 sm:mx-6">
                <div
                  className="bg-white w-full p-8 md:p-24 text-xl text-gray-800 leading-normal"
                  style={{ fontFamily: 'Georgia,serif' }}
                >
                  {selectPost === 'SupRemo' && <SupRemo />}
                  {selectPost === 'TeamViewer' && <TeamViewer />}
                  {selectPost === 'AnyDesk' && <AnyDesk />}
                </div>
              </div>
            </div>
          )}
          <div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            <div className="flex flex-wrap justify-between -mx-6">
              <SupRemoCard onclick={hendleSelectPost} />
              <TeamViewerCard onclick={hendleSelectPost} />
              <AnyDeskCard onclick={hendleSelectPost} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
