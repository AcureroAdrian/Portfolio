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
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#About'>
          <NavLink>Sobre mi</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href='https://github.com/Adr-AA'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.linkedin.com/in/adrian-acurero/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.instagram.com/adriancitoox/'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
