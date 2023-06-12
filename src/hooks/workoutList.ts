import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

export const useGetWorkoutLists = () => {
  const { data: sessionData } = useSession();

  return api.workoutList.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });
};

export const useCreateWorkoutList = () => {
  const utils = api.useContext();

  return api.workoutList.create.useMutation({
    onSuccess: () => {
      utils.workoutList.getAll.invalidate(); // cache устарел
    },
  });
};

export const useEditWorkoutList = () => api.workoutList.edit.useMutation();

export const useDeleteWorkoutList = () => {
  const utils = api.useContext();

  return api.workoutList.delete.useMutation({
    onSuccess: () => {
      utils.workoutList.getAll.invalidate(); // cache устарел
    },
  });
};
