import { useContext } from "react";
import { WalletContext, WalletProvider } from "@viaprotocol/web3-wallets";

function App() {
  return (
    <WalletProvider>
      <NestedComponent />
    </WalletProvider>
  );
}

function NestedComponent() {
  const { connect, isConnected, address } = useContext(WalletContext);

  if (!isConnected) {
    return (
      // Select MetaMask and connect to ETH Mainnet
      <button
        type="button"
        onClick={() => connect({ name: "MetaMask", chainId: 1 })}
      >
        Connect wallet
      </button>
    );
  }

  return <p>{address}</p>;
}
