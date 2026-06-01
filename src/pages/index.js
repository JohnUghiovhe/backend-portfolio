import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import FeaturedProject from '../sections/FeaturedProject';
import Experience from '../sections/Experience';
import LearningReflection from '../sections/LearningReflection';
import Contact from '../sections/Contact';
// components
import Footer from '../components/Footer';
// mock
import { documentTitle } from '../mock/profile';

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
      <title>{documentTitle}</title>
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      <Skills />
      <Projects />
      <FeaturedProject />
      {/* Experience Section  */}
      <Experience />
      <LearningReflection />
      <Contact />
      <Footer />
    </MainLayout>
  );
}
