import { Road } from "data/road";
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

  const response = await api.get<Road>(`/quiz`, { params });

  return response.data;
};
