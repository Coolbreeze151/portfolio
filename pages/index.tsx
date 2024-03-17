import type { NextPage } from 'next'
import React from 'react';
import AboutMe from '../components/Aboutme';
import HeroSplash from '../components/HeroSplash'
import Layout from '../components/Layout'
import { userData } from '../constants/user';

const title = `${userData.name}`;
const subtitle = "Home"

const Home: NextPage = () => {

  const aboutContent = React.useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string): void => {
    const divID = document.getElementById(id);
    if (divID) {
      divID.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>
      <HeroSplash scrollToSection={scrollToSection} />
      <AboutMe />
    </Layout>
  )
}

export default Home
