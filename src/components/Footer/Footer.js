import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiTwotoneHeart } from 'react-icons/ai';
import {SiCodechef, SiHackerrank, SiLeetcode} from 'react-icons/si'
import { SocialIcons } from '../Header/HeaderStyles';
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
          <h1>Call:</h1>
          </LinkTitle>
          <LinkItem href="tel:+91-8789534273">+91-8789534273</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>
          <h1>Email:</h1>
          </LinkTitle>
          <LinkItem href="mailto:mihir.1si17cs058@gmail.com">mihir.1si17cs058@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan><h2>Built with <AiTwotoneHeart size="2rem"/></h2> </Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/adarsh786-tech">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mihiradarsh/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/mihir_adarsh/">
            <SiLeetcode size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.codechef.com/users/bravura_coder">
            <SiCodechef size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.hackerrank.com/mihir_adarsh">
            <SiHackerrank size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://play.google.com/store/apps/details?id=com.sit.adarsh.iic">
            <IoLogoGooglePlaystore size="3rem"/>
          </SocialIcons>
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
