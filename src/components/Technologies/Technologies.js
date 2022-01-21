import React from 'react';
import { DiAtom, DiAws, DiCisco, DiFirebase, DiGoogleCloudPlatform, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned many of the Tools and Technologies in my colleging life.<br /><br /> I have learned different programming languages like C, C++, java, pyhton etc. Also, I have learned Html, Css, Javascript, php etc which are used as an front-end development. For the database management I learned MySql.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>javascript</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>php</li>
              <li>python</li>
              <li>MySql</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCisco size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            <ul>
              <li>Cisco Packet Tracer</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
