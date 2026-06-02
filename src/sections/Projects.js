import React from 'react';
// components
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Works() {
  return (
    <section id="projects" className="relative container mx-auto mt-16 space-y-10 px-4 pb-16 scroll-mt-24 sm:px-6 lg:px-8">
      <HeadingAnimate>
        <h2 className="mb-10 text-center font-lato text-3xl font-bold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Projects
        </h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </LoadAnimate>
    </section>
  );
}
