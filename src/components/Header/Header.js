import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, ContainerLogo } from './HeaderStyles';

const Header = () =>  (
  <Container >
    <Div1 >
      <Link href='/' >
        <ContainerLogo style={{display: 'flex', alignItems: 'center', color: 'white'}} >
          <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
        </ContainerLogo>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#About'>
          <NavLink>About me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
