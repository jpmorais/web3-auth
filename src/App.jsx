import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import ConnectButton from "./components/ConnectButton";
import SignButton from "./components/SignButton";
import EditMessage from "./components/EditMessage";
import VerifyButton from "./components/VerifyButton";

const App = () => {

  const [conta, setConta] = useState(null)
  const [assinatura, setAssinatura] = useState('')
  const [message, setMessage] = useState('')
  const [verificada, setVerificada] = useState(null)

  useEffect(() => {
    async function main() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const conta = await provider.send("eth_accounts");
      if (conta.length > 0) {
        setConta(conta)
      }
    }
    main()
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <div className="tracking-widest p-4 border-2 border-zinc-100 rounded-lg my-2">{conta}</div>
      {!conta && <ConnectButton setConta={setConta} />}
      <EditMessage message={message} setMessage={setMessage} />
      <SignButton setAssinatura={setAssinatura} message={message} />
      <div className="tracking-widest p-4 border-2 border-zinc-100 rounded-lg my-2 max-w-lg">{assinatura.substring(0,10)}...{assinatura.substring(assinatura.length-10,assinatura.length)}</div>
      <VerifyButton setVerificada={setVerificada} message={message} assinatura={assinatura} />
      <div className="tracking-widest p-4 border-2 border-zinc-100 rounded-lg my-2">{verificada}</div>
    </div>
  );
};

export default App;
