import {useEffect, useRef} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const Footer = () => {

  const mail = useRef()
  const number = useRef()

  useEffect(() => {
      const encEmail = "YWRyaWFuYWN1cmVyb0BnbWFpbC5jb20=";
      const encTel = "KzU4IDQyNC02MDE2ODM3"

      mail.current.setAttribute("href", "mailto:".concat(Buffer.from(encEmail, 'base64' )));
      mail.current.innerHTML = Buffer.from(encEmail, 'base64')

      number.current.setAttribute("href", "tel:".concat(Buffer.from(encTel, 'base64' )));
      number.current.innerHTML = Buffer.from(encTel, 'base64')
  }, [mail, number])
  

  return (
    <FooterWrapper>
    <SectionDivider />
    <br />
      <SectionTitle>
        Contáctame
      </SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>WhatsApp o Telegram</LinkTitle>
          <LinkItem ref={number} >Error al cargar la desencriptación</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Correo</LinkTitle>
          <LinkItem ref={mail} >Error al cargar la desencriptación</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Nunca parar de aprender</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
