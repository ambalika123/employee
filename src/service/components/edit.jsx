import React, { Component } from "react";
const EditTable = ({ match }) => {
  return <h1>Edit Employee{match.params.id}</h1>;
};

export default EditTable;
