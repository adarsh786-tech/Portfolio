import Link from 'next/link';
import React from 'react';
// import Navbar from '../Hamburger/Nav';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiDrupal } from 'react-icons/di';
import { SiLeetcode, SiCodechef, SiHackerrank, SiAboutDotMe} from 'react-icons/si';
import {VscProject} from 'react-icons/vsc'
import {RiContactsBookFill} from 'react-icons/ri'
import {GrTechnology, GrWorkshop} from 'react-icons/gr'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
// import {StaticRouter as Router, Switch, Route} from 'react-router-dom';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: "flex", alignItems:"center",color:"white", marginBottom: "20px"}}>
          <DiDrupal size="3rem"/><Span>Mihir Adarsh</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
        
      
      <li>
        <Link href="#about">
        <NavLink>ABOUT</NavLink>
        
        </Link>
        
      </li>
      <li>
        <Link href="#projects">
          <NavLink>PROJECTS</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#technologies">
          <NavLink>TECHNOLOGY</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#experience">
          <NavLink>EXPERIENCE</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#accomplishments">
          <NavLink>ACHIEVEMENTS</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#contact">
          <NavLink>CONTACT</NavLink>
        </Link>
      </li> */}

      {/* <Router>
      <Navbar/>
      <Switch>
        <Route path='/'/>
      </Switch>
      </Router> */}

    </Div2>
    {/* <Div3>
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
      
    </Div3> */}
  </Container>
);

export default Header;
