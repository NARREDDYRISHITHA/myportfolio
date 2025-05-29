// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
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
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary-color);
  }
`;

const ProjectCardContainer = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-color);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &:before {
      transform: scaleY(1);
    }
  }
`;

const ProjectTitle = styled.h5`
  font-size: 1.5rem;
  color: var(--heading-color);
  margin-bottom: 1.5rem;
  padding-left: 1rem;
`;

const PointsList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
    line-height: 1.6;
    
    &:before {
      content: '→';
      color: var(--primary-color);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const TechStack = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TechLabel = styled.span`
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 0.5rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBox = styled.span`
  background: rgba(9, 132, 227, 0.1);
  color: #0984e3;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(9, 132, 227, 0.2);
    transform: translateY(-2px);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function ProjectCard({ title, points, technologies }) {
  const techArray = technologies.split(', ');

  return (
    <ProjectCardContainer
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <PointsList
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {points.map((point, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {point}
          </motion.li>
        ))}
      </PointsList>
      <TechStack>
        <TechLabel>Technologies Used:</TechLabel>
        <TechList>
          {techArray.map((tech, index) => (
            <TechBox key={index}>
              {tech.trim()}
            </TechBox>
          ))}
        </TechList>
      </TechStack>
    </ProjectCardContainer>
  );
}

function Projects() {
  return (
    <ProjectsSection>
      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </SectionTitle>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <ProjectCard
          title="Formal Dress and ID Card Detection with Google Vision API & YOLO"
          points={[
            "Developed a real-time system to detect whether a person is wearing a formal dress and carrying an ID card.",
            "Integrated Google Vision API for formal dress detection.",
            "Used YOLOv8 for ID card detection from a webcam feed.",
            "Implemented OpenCV for real-time video processing.",
            "Set up an email alert system when dress code or ID card violations are detected.",
            "Captured images and sent them as attachments in email alerts."
          ]}
          technologies="Python, OpenCV, Google Vision API, YOLOv8 (Ultralytics), SMTP (Email)"
        />

        <ProjectCard
          title="Gesture-Based Computer Control System"
          points={[
            "Developed a Human-Computer Interaction (HCI) system using hand gestures and voice commands.",
            "Integrated MediaPipe for real-time hand tracking and gesture recognition.",
            "Implemented speech recognition for additional control commands.",
            "Enabled key functions like volume control, tab switching, and scrolling.",
            "Used multithreading to ensure real-time responsiveness for the system.",
            "Utilized Python libraries like OpenCV, MediaPipe, PyAutoGUI, and Speech Recognition."
          ]}
          technologies="Python, OpenCV, MediaPipe, PyAutoGUI, Speech Recognition"
        />

        <ProjectCard
          title="Aspect-Based Sentiment Analysis System"
          points={[
            "Developed a web-based system for analyzing product feedback using aspect-based sentiment analysis.",
            "Integrated Python and Flask to build the web application.",
            "Supported text translation for multilingual feedback analysis using Google Translate API.",
            "Used Pandas, TextBlob, and SpaCy for sentiment analysis and polarity score calculation.",
            "Enabled file uploads (CSV, DOCX, TXT) for bulk analysis of feedback.",
            "Designed a user-friendly GUI for manual text input and feedback processing."
          ]}
          technologies="Python, Flask, HTML, CSS, JavaScript, Pandas, TextBlob, Transformers, NLTK, SpaCy, Google Translate API"
        />
      </motion.div>
    </ProjectsSection>
  );
}

export default Projects;
