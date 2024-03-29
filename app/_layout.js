import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(2, 136, 209)",
          },
          headerTintColor: "white",
          headerTitle: "Filmventory",
        }}
      />
    </QueryClientProvider>
  );
};

export default Layout;
