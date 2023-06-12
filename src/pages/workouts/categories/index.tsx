import { WorkoutCategoryForm } from "@/components/WorkoutCategoryForm";
import { WorkoutCategoryList } from "@/components/WorkoutCategoryList";
import { Aside } from "@mantine/core";
import { NextPage } from "next";

const WorkoutsCategoriesPage: NextPage = () => {
  return (
    <>
      <WorkoutCategoryList />
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 500 }}>
        <Aside.Section grow>
          <WorkoutCategoryForm />
        </Aside.Section>
      </Aside>
    </>
  );
};

export default WorkoutsCategoriesPage;
