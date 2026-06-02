import React from 'react';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

export default function LearningReflection() {
  return (
    <section id="reflection" className="relative container mx-auto mt-16 pb-16">
      <HeadingAnimate>
        <h2 className="mb-10 text-center font-lato text-3xl font-bold text-primary-700 dark:text-primary-300 sm:text-4xl">Learning Reflection</h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-700/40 bg-[#0b1220]/60 p-6 text-neutral-300">
          <p>
            During HNG I focused on building reliable backend systems with clear API contracts, automated testing, and predictable deployment flows. I learned to design APIs first, enforce validation and authorization at service boundaries, and keep side-effects isolated for testability.
          </p>

          <p className="mt-4">
            Practically, I improved on: writing integration tests with Jest, designing idempotent endpoints and transition guards, using Postgres for transactional guarantees, and implementing background job retries for resiliency. These concrete skills let me ship backend features with confidence and measurable reliability.
          </p>

              <p className="mt-4 font-medium">
                My intent with this portfolio is to clearly show the backend problems I solved, the technical choices I made, and the code-level responsibilities I owned during HNG.
              </p>
        </div>
      </LoadAnimate>
    </section>
  );
}
