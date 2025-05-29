// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from '@emotion/styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/main.css';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.8rem 0;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  margin-right: auto;
  padding-right: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  li {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 0.5rem;

    li {
      margin: 0.5rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #007bff;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
    width: 100%;

    &:after {
      bottom: 5px;
    }
  }
`;

const PageContainer = styled(motion.div)`
  padding-top: 80px;
  min-height: 100vh;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <StyledNav>
        <NavContainer>
          <ul>
            <NavBrand>NARREDDY RISHITHA</NavBrand>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </MenuButton>
            <NavLinks isOpen={isMenuOpen}>
              <li><StyledNavLink to="/home" onClick={handleLinkClick}>Home</StyledNavLink></li>
              <li><StyledNavLink to="/skills" onClick={handleLinkClick}>Skills</StyledNavLink></li>
              <li><StyledNavLink to="/education" onClick={handleLinkClick}>Education</StyledNavLink></li>
              <li><StyledNavLink to="/experience" onClick={handleLinkClick}>Experience</StyledNavLink></li>
              <li><StyledNavLink to="/projects" onClick={handleLinkClick}>Projects</StyledNavLink></li>
              <li><StyledNavLink to="/contact" onClick={handleLinkClick}>Contact</StyledNavLink></li>
            </NavLinks>
          </ul>
        </NavContainer>
      </StyledNav>

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={
            <PageContainer {...pageTransition}>
              <Home />
            </PageContainer>
          } />
          <Route path="/skills" element={
            <PageContainer {...pageTransition}>
              <Skills />
            </PageContainer>
          } />
          <Route path="/education" element={
            <PageContainer {...pageTransition}>
              <Education />
            </PageContainer>
          } />
          <Route path="/experience" element={
            <PageContainer {...pageTransition}>
              <Experience />
            </PageContainer>
          } />
          <Route path="/projects" element={
            <PageContainer {...pageTransition}>
              <Projects />
            </PageContainer>
          } />
          <Route path="/contact" element={
            <PageContainer {...pageTransition}>
              <Contact />
            </PageContainer>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
