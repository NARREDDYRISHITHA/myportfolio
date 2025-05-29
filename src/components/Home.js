import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3436;
  font-weight: 700;
  letter-spacing: 1px;
`;

const TagsContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tag = styled(motion.span)`
  background: rgba(9, 132, 227, 0.1);
  color: #0984e3;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
`;

const Description = styled(motion.p)`
  max-width: 800px;
  line-height: 1.8;
  font-size: 1.2rem;
  color: #636e72;
  margin: 1.5rem auto;
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  background: #0984e3;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin: 1.5rem 0;
  box-shadow: 0 4px 15px rgba(9, 132, 227, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(9, 132, 227, 0.4);
    color: white;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: #2d3436;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: #0984e3;
  }
`;

function Home() {
  return (
    <HomeSection>
      <ProfileImage
        src="/images/Rishi.jpeg"
        alt="Rishitha Narreddy"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      />

      <Title
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        NARREDDY RISHITHA
      </Title>

      <TagsContainer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Tag whileHover={{ scale: 1.05 }}>ML Enthusiast</Tag>
        <Tag whileHover={{ scale: 1.05 }}>Frontend Developer</Tag>
        <Tag whileHover={{ scale: 1.05 }}>Problem Solver</Tag>
      </TagsContainer>

      <Description
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Innovative and results-driven professional with expertise in Python, SQL, and web technologies,
        combined with hands-on experience in machine learning, computer vision, and sustainability-focused innovation.
        Passionate about problem-solving and continuous learning, seeking an opportunity to apply my skills
        in a dynamic, collaborative environment to drive meaningful impact.
      </Description>

      <ResumeButton
        href="https://drive.google.com/file/d/1VwrQ57COlUy5xAql7ySBKlSUbrNQ6bS9/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
        Download Resume
      </ResumeButton>

      <SocialLinks
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <SocialIcon
          href="https://github.com/NARREDDYRISHITHA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-github"></i>
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/rishitha-narreddy-9886a4268/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-linkedin"></i>
        </SocialIcon>
      </SocialLinks>
    </HomeSection>
  );
}

export default Home;
