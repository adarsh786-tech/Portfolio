import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [
  {
    title: 'Project 1',
    description: 'This is a description of project1'
  },
  {
    title: 'Project 2',
    description: 'This is a description of project2'
  },
  {
    title: 'Project 3',
    description: 'This is a description of project3'
  },
  {
    title: 'Project 4',
    description: 'This is a description of project4'
  },
]


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key = {id}>
          <Img src = {image}/>
          <TitleContent>
            {/* <HeaderThree title={title}></HeaderThree> */}
            <Hr/>
            <h2>{title}</h2>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <Hr/>
            <TitleContent>Stack</TitleContent>
            {/*   */}
            <TagList>
              {tags.map((tag, i) => (
                <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href = {visit}>VISIT</ExternalLinks>
              <ExternalLinks href = {source}>SOURCE</ExternalLinks>
              {/* <ExternalLinks href = {source}>Demo</ExternalLinks> */}
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;