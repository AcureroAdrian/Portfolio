import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido!! <br />
        Soy Adrian Acurero
      </SectionTitle>
      <SectionText>Desarrollador Web Full-Stack</SectionText>
      <a href="/CVSpanish.pdf" download>
        <Button>Descargar CV</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
