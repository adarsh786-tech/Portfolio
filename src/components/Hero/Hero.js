import React from 'react';
// import ParticleBackground from '../Animation/ParticleBackground';
import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionText>
      
        Hi, my name is
        <SectionTitle>
          Mihir Adarsh
        </SectionTitle>
        I'm a developer who specialises in building and developing applications to enhance User Experience. Currently, I am focussed on upskilling myself by learning new Web Technologies
      </SectionText>
      <Button size = "30dp" onClick = {() => window.location = 'https://drive.google.com/file/d/1T6NZJ24g_iF6qZWeysi7BNnoem5YyDfo/view?usp=sharing'}>Download Resume</Button>
      
    </LeftSection>
  </Section>
);

export default Hero;
