import { queryClient } from "@/service/client";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Router } from "./Router";
import { ThemeProvider } from "@/hooks/useTheme";

export const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="system"
        storageKey="polyfy-ui-theme"
      >
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
