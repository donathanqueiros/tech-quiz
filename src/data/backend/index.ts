import { Road } from "data/road";

export default {
  id: 4,
  name: "backend",
  color: "purple",
  description: "esse é o road do backend",
  topics: [
    {
      id: 1,
      name: "geral",
      description: "",
      questions: [
        {
          id: 1,
          name: "",
          answerId: 0,
          level: 1,
          alternatives: [
            {
              id: 1,
              content: "python",
            },
            {
              id: 2,
              content: "java",
            },
            {
              id: 3,
              content: "C#",
            },
            {
              id: 4,
              content: "PHP",
            },
          ],
        },
      ],
    },
  ],
} as Road;
