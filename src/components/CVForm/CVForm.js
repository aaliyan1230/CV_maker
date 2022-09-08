import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Certification from "./Certification";
import Skills from "./Skills";
import Button from "../Utils/Button";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeCertification,
  onAddCertification,
  onDeleteCertification,
  onChangeSkill,
  onAddSkill,
  onDeleteSkill,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <Certification
      certification={cv.certification}
      onChange={onChangeCertification}
      onAdd={onAddCertification}
      onDelete={onDeleteCertification} 
      />
      <Skills
      skills={cv.skills}
      onChange={onChangeSkill}
      onAdd={onAddSkill}
      onDelete={onDeleteSkill} 
      />
      <>
        <Button text="Generate PDF" onClick={onPrint} primary></Button>
        <Button text="Load Example" onClick={onLoadExample} secondary></Button>
        <Button text="Reset" onClick={onReset} red></Button>
      </>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;
