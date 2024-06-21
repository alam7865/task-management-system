let arr = [
  {
    id: "1",
    title: "task 1",
    description: "Task for description 1",
    status: "pending",
    date: "18/06/2024",
  },

  {
    id: "2",
    title: "task 2",
    description: "Task for description 2",
    status: "completed",
    date: "18/06/2024",
  },

  {
    id: "3",
    title: "task 3",
    description: "Task for description 3",
    status: "rejected",
    date: "18/06/2024",
  },

  {
    id: "4",
    title: "task 4",
    description: "Task for description 4",
    status: "upcoming",
    date: "18/06/2024",
  },

  {
    id: "5",
    title: "task 5",
    description: "Task for description 5",
    status: "completed",
    date: "18/06/2024",
  },

  {
    id: "6",
    title: "task 6",
    description: "Task for description 6",
    status: "upcoming",
    date: "18/06/2024",
  },

  {
    id: "7",
    title: "task 7",
    description: "Task for description 7",
    status: "completed",
    date: "18/06/2024",
  },

  {
    id: "8",
    title: "task 8",
    description: "Task for description 8",
    status: "completed",
    date: "18/06/2024",
  },

  {
    id: "9",
    title: "task 9",
    description: "Task for description 9",
    status: "pending",
    date: "18/06/2024",
  },

  {
    id: "10",
    title: "task 10",
    description: "Task for description 10",
    status: "rejected",
    date: "18/06/2024",
  },
];

let searchValue = "task 1";

let result = arr.filter((el) => {
  return el.title.includes(searchValue);
});
console.log(result);
