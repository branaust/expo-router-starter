import { Slot, Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: true, title: "Login" }}
      />
    </Stack>
  );
}
