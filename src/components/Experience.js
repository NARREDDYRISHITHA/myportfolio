import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled(motion.h3)`
  font-size: 2rem;
  color: var(--heading-color);
  margin-bottom: 2rem;
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

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  min-width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Company = styled.h5`
  font-size: 1.25rem;
  color: var(--heading-color);
  margin: 0;
`;

const Role = styled.h6`
  font-size: 1rem;
  color: var(--primary-color);
  margin: 0.25rem 0;
`;

const Period = styled.p`
  color: var(--secondary-color);
  font-size: 0.875rem;
  margin: 0;
`;

const ResponsibilitiesList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    
    &:before {
      content: '•';
      color: var(--primary-color);
      position: absolute;
      left: 0;
      top: 0;
    }
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

function TechnicalExperienceCard({ company, role, period, logo, responsibilities }) {
  return (
    <ExperienceCard
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <LogoContainer>
        <motion.img
          src={logo}
          alt={`${company} logo`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </LogoContainer>
      <ContentContainer>
        <Header>
          <div>
            <Company>{company}</Company>
            <Role>{role}</Role>
          </div>
          <Period>{period}</Period>
        </Header>
        <ResponsibilitiesList
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {responsibilities.map((item, index) => (
            <motion.li key={index} variants={listItemVariants}>
              {item}
            </motion.li>
          ))}
        </ResponsibilitiesList>
      </ContentContainer>
    </ExperienceCard>
  );
}

function NonTechnicalExperienceCard({ role, organization, period, description, image }) {
  return (
    <ExperienceCard
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <LogoContainer>
        <motion.img
          src={image}
          alt={`${organization} logo`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </LogoContainer>
      <ContentContainer>
        <Header>
          <div>
            <Company>{role}</Company>
            <Role>{organization}</Role>
          </div>
          <Period>{period}</Period>
        </Header>
        <ResponsibilitiesList
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {description.map((item, index) => (
            <motion.li key={index} variants={listItemVariants}>
              {item}
            </motion.li>
          ))}
        </ResponsibilitiesList>
      </ContentContainer>
    </ExperienceCard>
  );
}

function Experience() {
  return (
    <ExperienceSection>
      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </SectionTitle>

      <TechnicalExperienceCard
        company="MulticoreWare (MCW)"
        role="Research Intern"
        period="June 2024 – December 2024"
        logo="/images/mcw-logo.jpg"
        responsibilities={[
          "Annotated over 4,000+ images using Label Studio to enhance dataset quality for ML model training.",
          "Applied data augmentation techniques to handle class imbalance and boost model generalization.",
        ]}
      />

      <NonTechnicalExperienceCard
        role="Co-Lead"
        organization="Placements and Career Tutelage (PACT)"
        period="Dec 2024 – Present"
        description={[
          "Organized mock interviews and group discussions for pre-final and final-year students.",
          "Coordinated events with industry experts and guest lectures.",
        ]}
        image="/images/pact logo.jpg"
      />

      <NonTechnicalExperienceCard
        role="Co-Secretary"
        organization="KARE Open Source Society (KARE - OSS)"
        period="July 2024 – Present"
        description={[
          "Organized events and fostered collaboration within the open-source community.",
        ]}
        image="/images/OSS logo.webp"
      />
    </ExperienceSection>
  );
}

export default Experience;
