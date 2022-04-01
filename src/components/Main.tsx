import {useEthers} from "@usedapp/core"
import helperConfig from "../helper-config.json"
import brownieConfig from "../brownie-config.json"
import {constants} from "ethers"
import { Snackbar, Typography, makeStyles, Box } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {ConnectionRequiredMsg} from "."
import cover from "../0x.png"
import card from "../card.png"
import networkMapping from "../chain-info/deployments/map.json"
import {MintNFT} from "./Mint"


const useStyles = makeStyles((theme) => ({
  mainTitle: {
    display: 'flex',
    color: "#E2EEFF",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    padding: '10px',
    fontWeight: 700,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
  title: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(4),
    fontSize: 20
  },
  mint: {
    display: 'in-line',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    fontSize: 20,
    padding: '10px',
    background: 'linear-gradient(45deg, #7ee8fa 30%, #eec0c6 90%)'
  },
  img: {
        width: "52px",
    },
  card: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginBottom: 25,
        marginTop: 25,
        width: "40%"
    },
  box:{
    display: 'flex',
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: 700,
  },
  instruction: {
    background: 'linear-gradient(45deg, #FFE9C6 30%, #FFD99F 90%)'
  },

}))

export const Main = () => {
    const { account } = useEthers()

    const {chainId} = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "dev"
    const classes = useStyles()
    const isConnected = account !== undefined
    console.log(isConnected)
    const url = "https://rinkeby.etherscan.io/address/0x2BC95a503C1020e45c6f31D4b14ee2b176F6D1D1"

  return (
    <Box>
        <div className={classes.mainTitle}>
            <b>Want to be part of the Bonanza Club?</b>
        </div>
        <div>
             <img className={classes.card} src={card} alt="0x"/>
        </div>
        <div className={classes.box}>
            <span className={classes.mint}>MINT our ERC721 NFT token on Rinkeby!</span>
        </div>
        <div className={classes.title}>
            Get an overview of the contract on <a style={{ color: 'white' }} href={url}>Etherscan</a> or get some Faucet Rinkeby ETH on <a style={{ color: 'white' }} href="https://faucets.chain.link/">Chainlink</a> to give it a try!
        </div>
        {isConnected ?
            <>
              <MintNFT />
            </>
        : <ConnectionRequiredMsg />
        }
    </Box>
  )

}