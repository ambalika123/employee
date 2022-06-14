export const departments = [
  { id: "D1", name: "Web Developer" },
  { id: "D2", name: "HR" },
  { id: "D3", name: "Marketing" },
];

export function getDepartments() {
  return departments.filter((d) => d);
}
