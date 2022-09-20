import { Topic } from "data/road";
import api from "shared/api";

export const getQuiz = async (
  roadId: string,
  topicId: string,
  level: string
) => {
  const params = new URLSearchParams();
  params.append("roadId", roadId);
  params.append("topicId", topicId);
  params.append("level", level);
  console.log(level);

  const response = await api.get<Topic>(`/quiz`, { params });

  return response.data;
};
