const employees = [
  {
    id: "1",
    firstname: "Ambalika",
    lastname: "Patidar",
    email: "ambalika@gmail.com",
    phone: 7000534322,
    department: { id: "D1", name: "Web Developer" },
  },
  {
    id: "2",
    firstname: "Ashi",
    lastname: "Singh",
    email: "ashi@gmail.com",
    phone: 7000524322,
    department: { id: "D2", name: "HR" },
  },
  {
    id: "3",
    firstname: "Ayushi",
    lastname: "Patidar",
    email: "ayushi@gmail.com",
    phone: 7000534222,
    department: { id: "D1", name: "Web Developer" },
  },
  {
    id: "4",
    firstname: "Anisha",
    lastname: "Bhatia",
    email: "anisha@gmail.com",
    phone: 8000534322,
    department: { id: "D2", name: "HR" },
  },
  {
    id: "5",
    firstname: "Khushi",
    lastname: "Joshi",
    email: "khushi@gmail.com",
    phone: 7000534322,
    department: { id: "D1", name: "Web Developer" },
  },
  {
    id: "6",
    firstname: "Bhagwati",
    lastname: "Prasad",
    email: "bhagwati@gmail.com",
    phone: 5400534322,
    department: { id: "D3", name: "Marketing" },
  },
  {
    id: "7",
    firstname: "Tarun",
    lastname: "Sharma",
    email: "tarun@gmail.com",
    phone: 8970534322,
    department: { id: "D3", name: "Marketing" },
  },
  {
    id: "8",
    firstname: "Ajay",
    lastname: "Joshi",
    email: "ajay@gmail.com",
    phone: 7000534999,
    department: { id: "D1", name: "Web Developer" },
  },
];

export function getEmployees() {
  return employees;
}
