import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ContainerImage } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

import { Slideshow, Slide, TextoSlide } from '../slideshow/Slideshow';

const Projects = () => (
  <Section padding id='projects'>
    <SectionDivider />
    <SectionTitle main>Proyectos</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, description, images, visit, source, video, tags, download }) => (
        <BlogCard key={id}>
          <Slideshow controles={true}>
            {images.map(image =>
              <Slide>
                <ContainerImage>
                  <Img src={image} />
                </ContainerImage>
              </Slide>
            )}
          </Slideshow>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
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
            {visit && <ExternalLinks target='_blank' href={visit}>Code</ExternalLinks>}
            {video && <ExternalLinks target='_blank' href={video}>Video</ExternalLinks>}
            {download && <ExternalLinks target='_blank' href={download}>download</ExternalLinks>}
            {source && <ExternalLinks target='_blank' href={source}>Source</ExternalLinks> }
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;