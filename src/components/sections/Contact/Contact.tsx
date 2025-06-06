import React from 'react';
import {
  ContactSection,
  SectionTitle,
  ContactContent,
  ContactText,
  ContactInfo,
  ContactItem,
} from './Contact.styles';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contactLinks = [
  { icon: <MdEmail />, label: 'Email', href: 'mailto:haobp.dev@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hao-bui1401/' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/haobui14' },
];

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Let's Connect</SectionTitle>
      <ContactContent>
        <ContactText>
          I'm always interested in new opportunities and interesting projects. Whether you have a
          question or just want to say hi, feel free to reach out!
        </ContactText>
        <ContactInfo>
          {contactLinks.map((link) => (
            <ContactItem key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon} {link.label}
            </ContactItem>
          ))}
        </ContactInfo>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 