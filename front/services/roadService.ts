import { Road } from "data/road";
import api from "shared/api";

export const getRoads = async () => {
  const response = await api.get<Road[]>("/roads");
  return response.data;
};
