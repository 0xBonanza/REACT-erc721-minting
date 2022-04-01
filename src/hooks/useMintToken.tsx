import { useContractFunction, useEthers } from "@usedapp/core"
import BonanzaTestersClub from "../chain-info/contracts/BonanzaTestersClub.json"
import { utils, constants } from "ethers"
import { Contract } from "@ethersproject/contracts"
import networkMapping from "../chain-info/deployments/map.json"

/**
 * Expose { send, state } object to facilitate unstaking the user's tokens from the TokenFarm contract
 */
export const useMintToken = () => {
  const { chainId } = useEthers()

  const { abi } = BonanzaTestersClub
  const BonanzaTestersClubContractAddress = chainId ? networkMapping[String(chainId)]["BonanzaTestersClub"][0] : constants.AddressZero
  const BonanzaTestersClubInterface = new utils.Interface(abi)

  const BonanzaTestersClubContract = new Contract(
    BonanzaTestersClubContractAddress,
    BonanzaTestersClubInterface
  )

  return useContractFunction(BonanzaTestersClubContract, "mintBonanza", {transactionName: "Mint token"})

}

