import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";
import Section from "../Utils/Section";

const Content = ({ personalInfo, experience, education, certifications }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  const certificationItems = certifications.map((certificationItem)=>(
    
    <CertificationItem key={certificationItem.id} certificationItem={certificationItem} />

  ));

  return (
    <ContentWrapper>
      <Section title="Description" contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
        {educationItems}
      </Section>
      <Section title="Courses and Certifications" direction="column" contrastTitle>
        {certificationItems}
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.div`
  font-style: italic;
`;

export default Content;
