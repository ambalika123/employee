//we have made this component so that there is same level of abstraction in employee component
import React, { Component } from "react";
import Table from "./table";
import { Link } from "react-router-dom";
class EmployeeTable extends Component {
  //logic for determinig the sort order
  columns = [
    { path: "id", label: "Id" },
    { path: "firstname", label: "First Name" },
    { path: "lastname", label: "Last Name" },
    { path: "email", label: "Email" },
    { path: "phone", label: "Phone" },
    { path: "department.name", label: "Department" },
    {
      key: "delete",
      content: (employee) => (
        <button
          onClick={() => this.props.onDelete(employee)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (employee) => (
        <button
          onClick={() => this.props.onEdit(employee)}
          className="btn btn-primary btn-sm"
        >
          <Link to={`/edit/${employee.id}`} style={{ color: "white" }}>
            Edit
          </Link>
        </button>
      ),
    },
    {
      key: "attendance",
      content: (employee) => (
        <button
          onClick={() => this.props.onCheck(employee)}
          className="btn btn-secondary btn-sm"
        >
          <Link to={`/attendance/${employee.id}`} style={{ color: "white" }}>
            Attendance
          </Link>
        </button>
      ),
    },
  ];
  render() {
    //onDelete and onLike are functional references
    const { employees, onDelete, onSort, sortColumn, onCheck, onEdit } =
      this.props;
    return (
      <Table
        columns={this.columns}
        data={employees}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
export default EmployeeTable;
