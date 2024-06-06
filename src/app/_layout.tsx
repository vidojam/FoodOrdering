
import { Stack } from "expo-router";
import { startTransition } from "react";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
