import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techStack, contributions, proof }) {
  const impactPoints = Array.isArray(description) ? description : [description];
  const stackItems = Array.isArray(techStack) ? techStack : [];
  const contributionItems = Array.isArray(contributions) ? contributions : [];
  const repoHref = proof?.repo || repoLink || '';
  const demoHref = proof?.demo || sourceLink || '';

  return (
    <div className="flex h-full min-h-124 w-full max-w-xs flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:bg-[#132f4c]/70">
      <img className="h-37.5 w-full rounded-t-lg object-cover" src={imgSrc} alt={title} />

      <div className="flex flex-1 flex-col p-5">
        <h1 className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">{title}</h1>
        <div className="mb-3">
          <p className="mb-2 text-[11px] font-bold tracking-widest text-primary-600 dark:text-primary-300">
            OVERVIEW
          </p>
          <ul className="space-y-2">
            {impactPoints.filter(Boolean).map((point, index) => (
              <li
                key={`impact-${index}`}
                className="flex items-start gap-2 text-sm font-normal text-gray-700 dark:text-gray-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600 dark:bg-primary-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {contributionItems.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[11px] font-bold tracking-widest text-primary-600 dark:text-primary-300">
              WHAT I BUILT
            </p>
            <ul className="space-y-2">
              {contributionItems.map((point, index) => (
                <li key={`contribution-${index}`} className="flex items-start gap-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600 dark:bg-primary-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {stackItems.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stackItems.map((item) => (
              <span key={item} className="rounded-full border border-gray-700/50 bg-[#131e36]/80 px-3 py-1 text-xs font-medium text-neutral-200">
                {item}
              </span>
            ))}
          </div>
        )}

        {(demoHref !== '' || repoHref !== '') && (
          <div className="mt-auto pt-5">
            <div className="flex items-center justify-end space-x-6 border-t border-gray-200 pt-4 dark:border-gray-700">
              {repoHref !== '' && (
                <a
                  href={repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center space-y-1 transition-all duration-200"
                  title="Repository Link"
                >
                  <Iconify
                    classes="text-2xl transform transition-transform group-hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                    icon="akar-icons:github-fill"
                  />
                  <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">View Repo</span>
                </a>
              )}
              {demoHref !== '' && (
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center space-y-1 transition-all duration-200"
                  title="Live Demo"
                >
                  <Iconify
                    classes="text-2xl transform transition-transform group-hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                    icon="iconoir:open-new-window"
                  />
                  <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techStack: PropTypes.array,
  contributions: PropTypes.array,
  proof: PropTypes.shape({
    repo: PropTypes.string,
    demo: PropTypes.string,
  }),
};
