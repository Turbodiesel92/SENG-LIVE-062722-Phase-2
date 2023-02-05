import React from "react";

const ProjectForm = () => {
  return (
    <form className="form">
      <h2> Add new project</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="about">About</label>
      <input type="text" name="about" id="about" />
      <button type="submit">Add project</button>
    </form>
  );
};

export default ProjectForm;
