const emp_attendance = [
  {
    emp_id: 1,
    attendance: [
      {
        date: "01-01-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-02-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-03-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-04-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-05-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-06-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-07-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-08-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
    ],
    emp_id: 2,
    attendance: [
      {
        date: "01-01-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-02-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-03-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-04-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-05-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-06-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-07-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
      {
        date: "01-08-2022",
        start_time: "7:30",
        end_time: "19:30",
      },
    ],
  },
];

export function getAttendance() {
  return emp_attendance;
}

// emp_attendance.map( atten => {
//     atten.attendance.map( em_at => {
//       console.log(em_at.date);
//     })
// })
