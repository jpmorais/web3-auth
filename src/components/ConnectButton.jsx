import React from "react";
import { ethers } from "ethers";

const ConnectButton = ({setConta}) => {
  const handleClick = async () => {

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const conta = await provider.send("eth_requestAccounts");
        console.log(`Conta selecionada ${conta}`)
        setConta(conta)            
    } catch (error) {
        console.log(`Erro ao conectar a MetaMask`)
        setConta([])
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 py-2 px-4 rounded-lg  border-red-900 bg-red-900 text-white font-semibold"
    >
      Connect to Metamask
    </button>
  );
};

export default ConnectButton;
