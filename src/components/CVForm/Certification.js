import React from "react";
import CertificationItem from "./CertificationItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Certification = ({ certification, onChange, onAdd, onDelete }) => {
  
  const certificationItems = certification.map((certificationItem) => (
    <CertificationItem
      key={certificationItem.id}
      id={certificationItem.id}
      certificationItem={certificationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></CertificationItem>
  ));

  return (
    <Section title="Certifications and Courses" titlePadding="0.5rem" direction="column">
      {certificationItems}
      <Button text="Add" onClick={onAdd}></Button>
    </Section>
  );
};

export default Certification;
