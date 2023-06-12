import { useForm } from "@mantine/form";
import { TextInput, Group, Button } from "@mantine/core";
import { useCreateWorkoutList } from "@/lib/hooks";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { TRPCClientError } from "@trpc/client";
import { api } from "@/utils/api";

interface FormValues {
  name: string;
  description?: string;
}

export function WorkoutCategoryForm() {
  const createWorkoutCategory = useCreateWorkoutList(undefined, true);

  const form = useForm<FormValues>({
    initialValues: { name: "", description: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      notifications.show({
        id: "create-workout-category",
        loading: true,
        title: "Creating workout category",
        message: "Please wait, this might take a while",
        autoClose: false,
        withCloseButton: false,
      });

      await createWorkoutCategory.mutateAsync({
        data: {
          name: values.name,
          description: values.description || "",
        },
      });

      notifications.update({
        id: "create-workout-category",
        color: "teal",
        title: "Workout category created",
        message: "You have successfully created a new workout category",
        icon: <IconCheck size="1rem" />,
        autoClose: 2000,
      });

      form.reset();
    } catch (error) {
      if (error instanceof TRPCClientError) {
        notifications.update({
          id: "create-workout-category",
          color: "red",
          title: "Error creating workout category",
          message: error.message,
          autoClose: 3000,
        });
      } else {
        notifications.update({
          id: "create-workout-category",
          color: "red",
          title: "Error creating workout category",
          message: "Something went wrong, please try again later",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput label="Название" {...form.getInputProps("name")} />

      <TextInput
        mt="md"
        label="Описание"
        {...form.getInputProps("description")}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
