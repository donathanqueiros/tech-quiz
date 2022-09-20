import { Road } from "data/road";
import api from "shared/api";

const url = "/roads";

export const getRoads = async () => {
  const response = await api.get<Road[]>(url);
  return response.data;
};

export const getRoadById = async (id: string) => {
  const response = await api.get<Road>(`${url}/${id}`);
  return response.data;
};
