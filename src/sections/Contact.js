import React from 'react';
// components
import Iconify from '../components/Iconify';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { contactEmail, FOOTER_SOCIAL_LINKS } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <section id="contact" className="relative container mx-auto mt-12 px-4 py-12 sm:px-6 lg:px-8">
      <HeadingAnimate>
        <h2 className="mb-12 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Contact
        </h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-gray-50/50 p-6 sm:p-8 dark:border-gray-700 dark:bg-[#132f4c]/50">
          <div>
            <h3 className="mb-3 font-lato text-2xl font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              I’m open to backend roles, project work, and direct collaboration. If you want to discuss an opening or a build, reach out.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700/10 dark:bg-primary-500/20">
                  <Iconify
                    classes="text-xl text-primary-700 dark:text-primary-300"
                    icon="clarity:email-solid"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-gray-100 dark:hover:text-primary-300"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700/10 dark:bg-primary-500/20">
                  <Iconify
                    classes="text-xl text-primary-700 dark:text-primary-300"
                    icon="bytesize:location"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Follow me
              </p>
              <div className="flex flex-wrap gap-4">
                {FOOTER_SOCIAL_LINKS.slice(0, 3).map(({ icon, link }, index) => (
                  <a
                    key={`contact-social-${index}`}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700/10 text-primary-700 transition hover:bg-primary-700 hover:text-white dark:bg-primary-500/20 dark:text-primary-300 dark:hover:bg-primary-400 dark:hover:text-white"
                  >
                    <Iconify classes="text-lg" icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LoadAnimate>
    </section>
  );
}
