import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText></SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            • HTML5 - CSS3 - TypeScript <br />
            • React.js - Next.js - React Native
            <br />
            • Redux - Styled Components
            <br />• TailwindCSS - Sass - Jest
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            • Typescript - Node.js - Express.js <br />
            • SQL - PostgreSQL - Sequelize <br />
            • noSQL - MongoDB - Mongoose <br />• Mongo Atlas - Ath0
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/*       <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>Otras</ListTitle>
          <ListParagraph>
          Experiencia en <br />
          programas como LightRoom y Wondershared Filmora
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
