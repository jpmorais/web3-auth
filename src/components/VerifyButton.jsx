import React from 'react'
import { ethers } from 'ethers'

const VerifyButton = ({setVerificada, assinatura, message}) => {

   
    const handleClick = async () => {
        const retorno = ethers.utils.verifyMessage(message, assinatura)
        console.log(`Verificação da assinatura ${retorno}`)
        setVerificada(retorno)
    }

  return (
    <button
      onClick={handleClick}
      className="border-2 py-2 px-4 rounded-lg  border-green-900 bg-green-900 text-white font-semibold"
    >
      Verify signature
    </button>
  )
}

export default VerifyButton