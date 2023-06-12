import { Card, Group, Menu, ActionIcon, Text, rem } from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons-react";

type WorkoutListItemProps = {
  title: string;
  description?: string;
};

export const WorkoutItem = ({ title, description }: WorkoutListItemProps) => {
  return (
    <Card withBorder radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>{title}</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
                Удалить
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" color="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
};
