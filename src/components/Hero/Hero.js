import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          How you Doing ?
        </SectionTitle>
        <SectionText>
        This is Harsh Patel and hereby im showcasing my projects and personal achievements in the form of this website.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;