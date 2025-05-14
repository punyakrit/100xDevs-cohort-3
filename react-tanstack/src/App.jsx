import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

async function getter() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return response.data;
}

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </div>
  );
}

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getter,
    refetchInterval: 4*1000
  });

  if (error) {
    return <div>Error while fetching</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
