import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  DiPython,
  DiReact,
  DiNodejs,
  DiGit,
  DiGithubBadge,
  DiVisualstudio,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiLinux,
  DiTerminal
} from 'react-icons/di';
import { BiBrain } from 'react-icons/bi';
import {
  SiCplusplus,
  SiC,
  SiGooglecloud
} from 'react-icons/si';
import { GiArtificialIntelligence, GiProcessor, GiArtificialHive } from 'react-icons/gi';
import { VscCode } from 'react-icons/vsc';
import { FaCode, FaDatabase } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #0984e3;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: rgba(9, 132, 227, 0.1);
  border-radius: 20px;
  font-size: 1rem;
  color: #2d3436;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    color: #0984e3;
  }

  &:hover {
    background: rgba(9, 132, 227, 0.2);
    transform: translateY(-2px);
  }
`;

function Skills() {
  const programmingLanguages = [
    { name: 'Python', icon: <DiPython /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'SQL', icon: <FaDatabase /> }
  ];

  const aiAndMl = [
    { name: 'Machine Learning', icon: <BiBrain /> },
    { name: 'Natural Language Processing', icon: <GiArtificialIntelligence /> }
  ];

  const coreCs = [
    { name: 'Data Structures & Algorithms', icon: <FaCode /> },
    { name: 'Operating Systems', icon: <DiLinux /> },
    { name: 'Memory Management', icon: <GiProcessor /> },
    { name: 'OOP', icon: <VscCode /> },
    { name: 'SDLC', icon: <DiTerminal /> }
  ];

  const webTech = [
    { name: 'HTML', icon: <DiHtml5 /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'Node.js', icon: <DiNodejs /> },
    { name: 'React', icon: <DiReact /> }
  ];

  const toolsAndPlatforms = [
    { name: 'Git', icon: <DiGit /> },
    { name: 'GitHub', icon: <DiGithubBadge /> },
    { name: 'VS Code', icon: <DiVisualstudio /> },
    { name: 'Google Vision API', icon: <SiGooglecloud /> },
    { name: 'YOLO', icon: <GiArtificialHive /> }
  ];

  return (
    <SkillsSection>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <SkillsContainer>
              {programmingLanguages.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>AI & ML</CategoryTitle>
            <SkillsContainer>
              {aiAndMl.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Core Computer Science</CategoryTitle>
            <SkillsContainer>
              {coreCs.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Web Technologies</CategoryTitle>
            <SkillsContainer>
              {webTech.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Tools & Platforms</CategoryTitle>
            <SkillsContainer>
              {toolsAndPlatforms.map((skill, index) => (
                <SkillItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsContainer>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}

export default Skills; 