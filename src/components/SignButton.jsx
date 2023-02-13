import React from "react";
import { ethers } from "ethers";

const SignButton = ({setAssinatura, message}) => {

  const handleClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const assinatura = await signer.signMessage(message)
    console.log(`assinatura ${assinatura}`)
    setAssinatura(assinatura)
  }

  return (
    <button onClick={handleClick} className="border-2 py-2 px-4 rounded-lg  border-zinc-400 bg-zinc-400 font-semibold">
        Assinar
    </button>
  );
};

export default SignButton;
