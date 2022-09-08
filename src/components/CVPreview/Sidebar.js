import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";

const Sidebar = ({ personalInfo, sk }) => {
  const skills=sk.map((s)=>(<li>{s.name}</li>));
  return (
    <SidebarWrapper>
      <Photo src={personalInfo.photo} />
      <Section title="Personal Details" contrastTitle direction="column">
        <Subsection title="Address">{personalInfo.address}</Subsection>
        <Subsection title="Phone Number">{personalInfo.phoneNumber}</Subsection>
        <Subsection title="Email">{personalInfo.email}</Subsection>
      </Section>
      <Section title="Skills" contrastTitle direction="column">
        {skills}
      </Section>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default Sidebar;
