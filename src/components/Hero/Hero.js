import React from 'react';
import Link from 'next/link'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido!! <br />
        Soy Adrian Acurero
      </SectionTitle>
      <SectionText>
        Desarrollador Web Full-Stack
      </SectionText>
      <a target='_blank' href='https://www.linkedin.com/in/adrian-acurero/'>
        <Button>Contáctame</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;