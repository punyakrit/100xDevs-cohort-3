import React from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

async function balanceFinder() {
  const res = await client.getBalance({
    address: "0x5A2D9361b0B9eE704aa05b6BDeCdBF75ce239674",
  });
  console.log(res)
  return res;
}

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GetBalance />
      </QueryClientProvider>
    </div>
  );
}

function GetBalance() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: balanceFinder,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
