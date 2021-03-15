import React from "react";
import { Dropdown as Select } from "react-bootstrap";

export const Curiosity = () => {
  return (
    <>
      <Select.Item eventKey="FHAZ">Front Hazard Avoidance Camera</Select.Item>
      <Select.Item eventKey="RHAZ">Rear Hazard Avoidance Camera</Select.Item>
      <Select.Item eventKey="MAST">Mast Camera</Select.Item>
      <Select.Item eventKey="CHEMCAM">Chemistry and Camera Complex</Select.Item>
      <Select.Item eventKey="MAHLI">Mars Hand Lens Imager</Select.Item>
      <Select.Item eventKey="MARDI">Mars Descent Imager</Select.Item>
      <Select.Item eventKey="NAVCAM">Navigation Camera</Select.Item>
      <Select.Item eventKey="ALL">All Cameras</Select.Item>
    </>
  );
};

export const OpportunitySpirit = () => {
  return (
    <>
      <Select.Item eventKey="FHAZ">Front Hazard Avoidance Camera</Select.Item>
      <Select.Item eventKey="RHAZ">Rear Hazard Avoidance Camera</Select.Item>
      <Select.Item eventKey="NAVCAM">Navigation Camera</Select.Item>
      <Select.Item eventKey="PANCAM">Panoramic Camera</Select.Item>
      <Select.Item eventKey="MINITES">Mini-TES</Select.Item>
      <Select.Item eventKey="ALL">All Cameras</Select.Item>
    </>
  );
};
