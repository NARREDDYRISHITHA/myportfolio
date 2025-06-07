import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const EducationSection = styled.section`
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

const EducationCardContainer = styled(motion.div)`
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
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Title = styled.h5`
  font-size: 1.25rem;
  color: var(--heading-color);
  margin: 0;
`;

const Institution = styled.h6`
  font-size: 1rem;
  color: var(--primary-color);
  margin: 0.25rem 0;
`;

const Details = styled.div`
  text-align: right;
  color: var(--secondary-color);
  font-size: 0.875rem;
  
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const CertificationCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  padding: 0.75rem;
  background: #f8f9fa;
`;

const CertificationContent = styled.div`
  padding: 1rem;
`;

const CertificationTitle = styled.h5`
  color: var(--heading-color);
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;

const CertificationDescription = styled.p`
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.4;
`;

const ViewButton = styled(motion.a)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: var(--link-color);
    color: white;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function EducationCard({ title, institution, period, cgpaOrPercentage, logo }) {
  return (
    <EducationCardContainer
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <LogoContainer>
        <motion.img
          src={logo}
          alt={`${title} logo`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </LogoContainer>
      <ContentContainer>
        <Header>
          <div>
            <Title>{title}</Title>
            <Institution>{institution}</Institution>
          </div>
          <Details>
            <p>{period}</p>
            <p>{cgpaOrPercentage}</p>
          </Details>
        </Header>
      </ContentContainer>
    </EducationCardContainer>
  );
}

function Education() {
  return (
    <EducationSection>
      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionTitle>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <EducationCard
          title="Bachelor of Technology in Computer Science and Engineering"
          institution="Kalasalingam Academy of Research and Education, Virudhunagar, T.N."
          period="2022-Present"
          cgpaOrPercentage="CGPA: 9.10/10.0"
          logo="/images/klu logo.png"
        />
        <EducationCard
          title="Pre-University"
          institution="Narayana Junior College, Proddatur, A.P."
          period="2022"
          cgpaOrPercentage="Percentage: 91.9%"
          logo="/images/narayana logo.jpg"
        />
        <EducationCard
          title="Secondary Schooling"
          institution="Aditya High School, Proddatur, A.P."
          period="2019-2020"
          cgpaOrPercentage="Percentage: 95.16%"
          logo="/images/aditya school logo.jpg"
        />
      </motion.div>

      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </SectionTitle>

      <CertificationsGrid
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <CertificationCard
          variants={cardVariants}
        >
          <CertificationImage src="/images/cousera logo.svg" alt="Neural Networks Certificate" />
          <CertificationContent>
            <CertificationTitle>Neural Networks Certificate</CertificationTitle>
            <CertificationDescription>
              Completed course on Neural Networks and PyTorch (IBM - Coursera).
            </CertificationDescription>
            <ViewButton
              href="https://coursera.org/share/13301506867b9ec385a976ce5e7c9af2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </ViewButton>
          </CertificationContent>
        </CertificationCard>

        <CertificationCard
          variants={cardVariants}
        >
          <CertificationImage src="/images/codechef logo.svg" alt="DBMS Certificate" />
          <CertificationContent>
            <CertificationTitle>DBMS Certification</CertificationTitle>
            <CertificationDescription>
              Certified in Database Management Systems from CodeChef platform.
            </CertificationDescription>
            <ViewButton
              href="https://www.codechef.com/certificates/public/df46858"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </ViewButton>
          </CertificationContent>
        </CertificationCard>
      </CertificationsGrid>
    </EducationSection>
  );
}

export default Education;
