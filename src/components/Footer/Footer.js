import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>JOIN THE COLLECTOR'S CLUB</FooterSubHeading>
        <FooterSubText>Be the first to hear about new release, available originals and get member exclusive bonuses</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Email Adress" color="FFDEAD" />
          <Button>Sign Me Up!</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Navigate</FooterLinkTitle>
            <FooterLink to="/sign-up">About The Artist</FooterLink>
            <FooterLink to="/">Shop Prints</FooterLink>
            <FooterLink to="/">Collect Original</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Customer Services</FooterLinkTitle>
            <FooterLink to="/sign-up">Contact</FooterLink>
            <FooterLink to="/">Contact The Studio</FooterLink>
            <FooterLink to="/">Returns And Liability</FooterLink>
            <FooterLink to="/">Shipping Policy</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Connect</FooterLinkTitle>
            <FooterLink to="/sign-up">Submit Video</FooterLink>
            <FooterLink to="/">Giving Back</FooterLink>
            <FooterLink to="/">Product Care Information</FooterLink>
            <FooterLink to="/">FAQs</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            
          </SocialLogo>
          <WebsiteRights>ARCTICSSY</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;