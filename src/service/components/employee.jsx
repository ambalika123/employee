import React, { Component } from "react";
import { getEmployees } from "../employeeData.js";
import Pagination from "./pagination.jsx";
import { paginate } from "../../utils/paginate.js";
import { getDepartments } from "../departmentData.js";
import ListGroup from "./listGroup.jsx";
import _ from "lodash";
import EmployeeTable from "./employeeTable.jsx";
class Employee extends Component {
  state = {
    employees: [],
    departments: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "firstname", order: "asc" },
  };
  componentDidMount() {
    const departments = [
      { id: "", name: "All Departments" },
      ...getDepartments(),
    ];
    this.setState({ employees: getEmployees(), departments });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleDelete = (employee) => {
    const employees = this.state.employees.filter((e) => e.id !== employee.id);
    this.setState({ employees });
  };

  handleEdit = (employee) => {
    console.log("edit");
  };

  handleAttendance = () => {
    console.log("Attendance");
  };

  handleDepartmentSelect = (department) => {
    this.setState({ selectedDepartment: department, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      employees: allEmployees,
      selectedDepartment,
    } = this.state;
    const filtered =
      selectedDepartment && selectedDepartment.id
        ? allEmployees.filter((m) => m.department.id === selectedDepartment.id)
        : allEmployees;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const employees = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: employees };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: employees } = this.getPagedData();
    const { length: count } = this.state.employees;
    //  let count = this.state.employees.length;

    if (count === 0) return "There are no employees in the database";
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.departments}
            onItemSelect={this.handleDepartmentSelect}
            selectedItem={this.state.selectedDepartment}
          />
        </div>
        <div className="col">
          <p style={{ fontSize: 25, color: "blue", textAlign: "center" }}>
            Showing details of {totalCount} employee in the database
          </p>
          <EmployeeTable
            //because we want to intialize the page with the last sort order
            sortColumn={sortColumn}
            employees={employees}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onCheck={this.handleAttendance}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Employee;
