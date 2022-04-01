import { useContractFunction, useEthers, useContractCall } from "@usedapp/core"
import BonanzaTestersClub from "../chain-info/contracts/BonanzaTestersClub.json"
import { utils, constants } from "ethers"
import { Contract } from "@ethersproject/contracts"
import networkMapping from "../chain-info/deployments/map.json"


/**
 * @dev use the contract the view the instance winners (args: instance / account)
 */

export const useViewRemainingCards = () => {

  const { chainId } = useEthers()

  const { abi } = BonanzaTestersClub
  const BonanzaTestersClubContractAddress = chainId ? networkMapping[String(chainId)]["BonanzaTestersClub"][0] : constants.AddressZero
  const BonanzaTestersClubInterface = new utils.Interface(abi)

  const BonanzaTestersClubContract = new Contract(
    BonanzaTestersClubContractAddress,
    BonanzaTestersClubInterface
  )

    console.log(BonanzaTestersClubContractAddress)

    // @dev calls the instanceWinnerView function
    const [data]: any = useContractCall({
    abi: BonanzaTestersClubInterface,
    address: BonanzaTestersClubContractAddress,
    method: "viewRemainingCards",
    args: [],
    }) ?? [];

    return data;

}

