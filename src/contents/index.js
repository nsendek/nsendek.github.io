import P1 from "./project1";
import P2 from "./project2";
import P3 from "./project3";
import P4 from "./project4";

const simple = [
  {
    id: "project1",
    title : "Project 1",
    path : "/projects/project1",
    thumbnail: 'https://i.imgur.com/OdiNNyym.jpg',
    summary : ""
  },
  {
    id: "project2",
    title : "Project 2",
    path : "/projects/project2",
    thumbnail: 'https://i.imgur.com/67r0FdBm.jpg',
    summary : ""
  },
  {
    id: "project3",
    title : "Project 3",
    path : "/projects/project3",
    thumbnail: 'https://i.imgur.com/SVDaEjIm.jpg',
    summary : ""
  },
  {
    id: "project4",
    title : "Project 4",
    path : "/projects/project4",
    thumbnail: 'https://i.imgur.com/bahJfL9m.jpg',
    summary : ""
  },
]

const components =  {
  project1 : P1,
  project2 : P2,
  project3 : P3,
  project4 : P4
}

export {
  simple,
  components
}