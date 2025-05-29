// src/components/Contact.js
import React, { memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import styled from '@emotion/styled';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--heading-color);
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 0.5rem;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--primary-color);
  }
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  will-change: transform, opacity;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  transition: transform 0.2s ease;
  will-change: transform;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.i`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ContactLabel = styled.h3`
  font-size: 1.25rem;
  color: var(--heading-color);
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
  display: inline-block;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const simpleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const ContactCardMemo = memo(({ icon, label, href, text, external }) => (
  <ContactCard
    variants={simpleVariants}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <ContactIcon className={icon} />
    <ContactLabel>{label}</ContactLabel>
    <ContactLink
      href={href}
      {...(external ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
    >
      {text}
    </ContactLink>
  </ContactCard>
));

function Contact() {
  return (
    <LazyMotion features={domAnimation}>
      <ContactSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </SectionTitle>

        <ContactGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <ContactCardMemo
            icon="fas fa-envelope"
            label="Email"
            href="mailto:risithan582@gmail.com"
            text="risithan582@gmail.com"
          />

          <ContactCardMemo
            icon="fab fa-linkedin"
            label="LinkedIn"
            href="https://www.linkedin.com/in/rishitha-narreddy-9886a4268/"
            text="Connect with me"
            external
          />

          <ContactCardMemo
            icon="fab fa-github"
            label="GitHub"
            href="https://github.com/NARREDDYRISHITHA"
            text="View my projects"
            external
          />
        </ContactGrid>
      </ContactSection>
    </LazyMotion>
  );
}

export default memo(Contact);
