import React from "react";
import Input from "../Utils/Input";
import Button from "../Utils/Button";

const CertificationItem = ({ id, certificationItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="name"
        placeholder="Course/Certification name"
        value={certificationItem.name}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="source"
        placeholder="Source"
        value={certificationItem.source}
      />
        <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="date"
        placeholder="Month Year"
        value={certificationItem.date}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="link"
        placeholder="Link"
        value={certificationItem.link}
      />
      <Button text="Delete" onClick={() => onDelete(id)}></Button>
    </>
  );
};

export default CertificationItem;
