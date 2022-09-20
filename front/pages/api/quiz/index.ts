import data from "data/data";
import { Question, Topic } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Topic | any>
) {
  const { roadId, topicId, level = 0 } = req.query;

  const road = data.find((road) => road.id === Number(roadId));

  if (road) {
    const topic = road.topics.find((topic) => topic.id === Number(topicId));
    if (topic) {
      let questions = topic.questions;

      if (Number(level) !== 0) {
        questions = topic.questions.filter(
          (question) => question.level === Number(level)
        );
      }
      questions = questions?.sort(() => 0.5 - Math.random());

      res.status(200).json({ ...topic, questions });
    } else {
      res.status(404).json({ message: `Topic with id: ${topicId} not found.` });
    }
  } else {
    res.status(404).json({ message: `Road with id: ${roadId} not found.` });
  }
}
