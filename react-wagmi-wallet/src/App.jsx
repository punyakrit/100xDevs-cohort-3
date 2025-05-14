import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { gweiUnits, weiUnits } from "viem";
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance, useSendTransaction } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnector />
        <ConnectedAddress/>
        <EthSend />
      </QueryClientProvider>
    </WagmiProvider>
  );
}


function ConnectedAddress(){
  const {address} = useAccount()
  const balance = useBalance({address:address})

  return(<div>
    {address} : 
    {balance?.data?.formatted}
  </div>)
}

function WalletConnector() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

function EthSend() {
  const { data: hash, sendTransaction } = useSendTransaction()

    async function sendTx() {
        const to = document.getElementById("to").value;
        const value = document.getElementById("value").value;
        sendTransaction({ to, value: parseEther(value) });
    }

    // Todo: use refs here
    return <div>
      <input id="to" placeholder="0xA0Cf…251e" required />
      <input id="value" placeholder="0.05" required />
      <button onClick={sendTx}>Send</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
}

export default App;
