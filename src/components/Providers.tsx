"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query needs Context to work properly
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;