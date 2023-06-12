import { useForm } from "@mantine/form";
import { TextInput, Group, Button } from "@mantine/core";

interface FormValues {
  name: string;
  description?: string;
}

export function WorkoutForm() {
  const form = useForm<FormValues>({
    initialValues: { name: "", description: "" },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
