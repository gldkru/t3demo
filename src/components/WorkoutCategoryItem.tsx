import { useDeleteWorkoutList } from "@/lib/hooks";
import { Paper, Box, Flex, CloseButton } from "@mantine/core";

type WorkoutListItemProps = {
  id: string;
  name: string;
  description?: string | null;
};

export const WorkoutCategoryItem = ({
  id,
  name,
  description,
}: WorkoutListItemProps) => {
  const deleteWorkoutList = useDeleteWorkoutList(undefined, true);

  const onClickDelete = async () => {
    try {
      await deleteWorkoutList.mutateAsync({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper p="md" shadow="sm">
      <Flex justify={"space-between"}>
        <Box>
          {name}: {description}
        </Box>
        <CloseButton size="xl" iconSize={20} onClick={onClickDelete} />
      </Flex>
    </Paper>
  );
};
