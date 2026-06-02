import React from 'react';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
import Iconify from '../components/Iconify';
import { PROJECTS } from '../mock/projects';

export default function FeaturedProject() {
  const featured = PROJECTS.find((p) => p.featured);
  if (!featured) return null;

  const { title, imgSrc, deepDive = {}, techStack = [], contributions = [], proof = {} } = featured;

  return (
    <section id="featured" className="relative container mx-auto mt-16 px-4 pb-16 sm:px-6 lg:px-8">
      <HeadingAnimate>
        <h2 className="mb-10 text-center font-lato text-3xl font-bold text-primary-700 dark:text-primary-300 sm:text-4xl">Featured Project</h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto max-w-5xl rounded-lg border border-gray-700/40 bg-[#0b1220]/60 p-5 sm:p-6">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_1.4fr]">
            {imgSrc && (
              <div className="overflow-hidden rounded-md">
                <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-xl font-bold text-neutral-100 sm:text-2xl">{title}</h3>

              {deepDive.problem && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">Problem</p>
                  <p className="mt-2 text-sm text-neutral-300">{deepDive.problem}</p>
                </div>
              )}

              {deepDive.architecture && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">Architecture / Flow</p>
                  <p className="mt-2 text-sm text-neutral-300">{deepDive.architecture}</p>
                </div>
              )}

              {deepDive.keyEndpoints && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">Key Endpoints</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-neutral-300">
                    {deepDive.keyEndpoints.map((e, i) => (
                      <li key={`endpoint-${i}`}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              {deepDive.challenge && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">Technical Challenge</p>
                  <p className="mt-2 text-sm text-neutral-300">{deepDive.challenge}</p>
                </div>
              )}

              {contributions.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">What I Built</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-neutral-300">
                    {contributions.map((c, i) => (
                      <li key={`contrib-${i}`}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {techStack.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-600">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {techStack.map((t) => (
                      <span key={t} className="rounded-full bg-[#131e36]/80 px-3 py-1.5 text-sm text-neutral-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-4">
                {proof.repo && (
                  <a href={proof.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary-700/10 px-4 py-2 text-sm font-medium hover:bg-primary-700 hover:text-white">
                    <Iconify icon="akar-icons:github-fill" /> View Repo
                  </a>
                )}
                {proof.demo && (
                  <a href={proof.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary-700/10 px-4 py-2 text-sm font-medium hover:bg-primary-700 hover:text-white">
                    <Iconify icon="iconoir:open-new-window" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </LoadAnimate>
    </section>
  );
}
