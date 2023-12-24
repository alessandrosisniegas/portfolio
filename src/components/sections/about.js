import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['C++', 'Kotlin', 'Python', 'HTML/CSS/JavaScript', 'MERN Stack', 'Prometheus', 'Grafana', 'Kubernetes', 'Docker', 'Google Cloud'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
Hi! The first language I've programmed in and my University's primary language is <b>C++</b>, making it my strongest choice of language. I coded all my initial projects in <b>C++</b> and is the language that I use to teach students when being a <a href ="https://www.csuchico.edu/csci/" target="_blank">Teacher & Lab Assistant</a> for <b>Data Structure & Algorithms</b> courses at my University.
</p>
<p>
I have both <b>back-end</b> and <b>front-end</b> experience (specifically in <b>Data Management</b>, <b>Information Retrieval</b>, <b>Web Applications</b>, and <b>Cloud Computing</b> including work with the <b>Salesforce Cloud</b>) from my <a href ="/#jobs">Software Engineering internships.</a>
</p>
<p>
I've recently developed a high interest towards <b>Augmented Reality</b>, specifically in <b>Android apps</b>. This led me to do my <a href ="https://drive.google.com/file/d/1sNWM0ZfJXiCIEvh3i_0pwsMYuxQ7jYyk/view?usp=sharing" target="_blank">Undergraduate Research</a> focused on <b>Monocular Visual Simultaneous Localization and Mapping</b>, where I dive deep into algorithms for real-time <b>Feature Extraction</b> and <b>Mapping</b>, significantly advancing <b>Depth Perception</b>, <b>Loop Closure</b>, and <b>Relocolization</b> in mobile monocular camera apps. I aim to further apply what I've researched by continuing to develop an android AR object placement app using <b>Kotlin</b>, <b>C++</b>, <b>Jetpack Compose</b>, <b>Unity</b>, and <b>Android Studio</b>
</p>
<p>
<b>Cloud Computing</b> and <b>Networks</b> has also been very a high interest in mine. I've been working with <b>Google Cloud</b> a lot, especially during my databases courses at my University, as well as developing Network Monitoring projects using <b>Prometheus & Grafana</b> to collect and query metrics on end-to-end dataflows, and using <b>Kubernetes & Docker</b> for container orchestration.
</p>

            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p> */}

            {/* <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
