import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:123-456-7890">123-456-7890</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ph067569@gmail.com">
            ph067569@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inspired by <a href='https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A'>javascript mastery</a></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/harshpatel068">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/harsh-patel-49879416a">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/harsh.hap/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
