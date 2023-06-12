import { WorkoutCategoryForm } from "@/components/WorkoutCategoryForm";
import { Aside } from "@mantine/core";
import { NextPage } from "next";

const WorkoutsCategoriesCreate: NextPage = () => {
  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 500 }}>
      <Aside.Section grow>
        <WorkoutCategoryForm />
      </Aside.Section>
    </Aside>
  );
};

export default WorkoutsCategoriesCreate;
