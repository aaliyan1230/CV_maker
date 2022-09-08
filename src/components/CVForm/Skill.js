import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const Skill = ({ id, skill, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="name"
        placeholder="Skill"
        value={skill.name}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default Skill;
