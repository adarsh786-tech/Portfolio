import Acomplishments from '../components/Acomplishments/Acomplishments';

import ParticleBackground from '../components/Animation/ParticleBackground';
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
