import { useFindManyWorkoutList } from "@/lib/hooks";
import { WorkoutCategoryItem } from "./WorkoutCategoryItem";
import { Stack } from "@mantine/core";

export const WorkoutCategoryList = () => {
  const { data } = useFindManyWorkoutList({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Stack spacing={"md"}>
        {data?.map((category) => (
          <WorkoutCategoryItem key={category.id} {...category} />
        ))}
      </Stack>
    </>
  );
};
