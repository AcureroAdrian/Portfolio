import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ContainerImage,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

import { Slideshow, Slide, TextoSlide } from "../slideshow/Slideshow";

const Projects = () => (
  <Section padding id="projects">
    <SectionDivider />
    <SectionTitle main>Proyectos</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, title, description, images, visit, code, tags, download }) => (
          <BlogCard key={id}>
            <Slideshow controles={true}>
              {images.map((image, index) => (
                <Slide key={index}>
                  <ContainerImage>
                    <Img loading="lazy" src={image} />
                  </ContainerImage>
                </Slide>
              ))}
            </Slideshow>
            <TitleContent>
              <HeaderThree title='true'>{title}</HeaderThree>
            </TitleContent>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {code && (
                <ExternalLinks target="_blank" href={code}>
                  Code
                </ExternalLinks>
              )}
              {download && (
                <ExternalLinks target="_blank" href={download}>
                  Download
                </ExternalLinks>
              )}
              {visit && (
                <ExternalLinks target="_blank" href={visit}>
                  Visit
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
