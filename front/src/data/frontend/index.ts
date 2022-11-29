import { Road } from "data/road";
export default {
  id: 1,
  name: "novo dado",
  description: "",
  color: "#00FF00",
  topics: [
    {
      id: 1,
      name: "geral",
      questions: [
        {
          id: 1,
          name: "Qual a diferença entre HTML e CSS?",
          answerId: 1,
          level: 1,
          alternatives: [
            { id: 1, content: "a" },
            { id: 2, content: "b" },
            { id: 3, content: "c" },
            { id: 4, content: "d" },
          ],
        },
        {
          id: 2,
          name: "2",
          answerId: 1,
          level: 1,
          alternatives: [
            { id: 1, content: "a" },
            { id: 2, content: "b" },
            { id: 3, content: "c" },
            { id: 4, content: "d" },
          ],
        },
        {
          id: 3,
          name: "3",
          answerId: 1,
          level: 1,
          alternatives: [
            { id: 1, content: "a" },
            { id: 2, content: "b" },
            { id: 3, content: "c" },
            { id: 4, content: "d" },
          ],
        },
      ],
    },
  ],
} as Road;
