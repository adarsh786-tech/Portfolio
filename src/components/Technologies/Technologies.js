import React from 'react';
import { DiAndroid, DiBackbone, DiDatabase, DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import {SiAdobephotoshop, SiCplusplus} from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "technologies">
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked on different technologies and currently upskilling myself on new technologies.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size = "3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size = "3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiAndroid size = "3rem"/>
          <ListContainer>
            <ListTitle>App Development</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Android and Flutter
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiCplusplus size = "3rem"/>
          <ListContainer>
            <ListTitle>Programming</ListTitle>
            <ListParagraph>
              Experience with <br/>
              C, C++, Core Java
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
        <SiAdobephotoshop size = "3rem"/>
          <ListContainer>
            <ListTitle>Design</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Adobe Photoshop 
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
