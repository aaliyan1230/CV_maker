import React from "react";
import Skill from "./Skill";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Skills = ({ skills, onChange, onAdd, onDelete }) => {
  
  const skillItem = skills.map((skillItem) => (
    <Skill
      key={skillItem.id}
      id={skillItem.id}
      skill={skillItem}
      onChange={onChange}
      onDelete={onDelete}
    ></Skill>
  ));

  return (
    <Section title="Skills" titlePadding="0.5rem" direction="column">
      {skillItem}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Skills;
