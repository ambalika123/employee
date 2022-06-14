import React, { Component } from "react";
import { getAttendance } from "./attendanceData";
import moment from "moment";
import { paginate } from "../../utils/paginate";
import Pagination from "./pagination";
class Attendance extends Component {
  state = {
    attendance: getAttendance(),
    pageSize: 4,
    currentPage: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, attendance: allAttendance } = this.state;
    const attendance = paginate(allAttendance, currentPage, pageSize);
    console.log(attendance.length);
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>
          Attendance of employee: {this.props.match.params.id}
        </h2>
        <table className="table" style={{ fontSize: 20 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {this.state.attendance.map((atten) => (
              <>
                {atten.attendance.map((emp_at) => (
                  <tr key={atten.emp_id}>
                    <td key={emp_at.date}>
                      {moment(emp_at.date).format("LL")}
                    </td>
                    <td>{emp_at.start_time}</td>
                    <td>{emp_at.end_time}</td>
                    <td>12 Hrs</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          //  itemsCount={count}
        />
      </div>
    );
  }
}

export default Attendance;
