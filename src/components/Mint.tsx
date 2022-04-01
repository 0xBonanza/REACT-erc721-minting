import React, { useEffect, useState, Component } from "react"
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core"
import { useMintToken, useViewRemainingCards } from "../hooks"
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
  Button,
  CircularProgress,
  Snackbar,
  makeStyles,
  Input,
  LinearProgress
} from "@material-ui/core"
import {utils} from "ethers"
import Alert from "@material-ui/lab/Alert"


/**
 * @dev this handles the main page
 */

export const MintNFT = () => {

    const useStyles = makeStyles((theme) => ({
      main: {
        marginLeft: '25%',
        marginRight: '25%',
        textAlign: "center",
        marginBottom: 40,
        marginTop: 25,

      },
      explanation: {
        display: 'inline-block',
        textAlign: 'left',
        marginBottom: '10px',
        padding: '25px',
        border: 'solid',
        borderColor: 'white',
        borderWidth: 'thick',
        background: 'linear-gradient(30deg, #7ee8fa, #fb7ba2)',
        color: "black"
      },
      submitNumber: {
        marginRight: '5px',
        alignItems: "center",
      },
      tokenLeft: {
        alignItems: "center",
        marginRight: '15px',
        background: '#3F51B5',
        color: 'white',
        marginBottom: 40
      },
      lowExplanation: {
        fontSize: 10,
        color: 'grey'
      },
      txtLeft: {
        color: '#3F51B5'
      }
    }))

    const {notifications} = useNotifications()
    const classes = useStyles()
    const mintPrice = 10000000000000000

    const { send: MintTokenSend, state: MintTokenState } = useMintToken()
    const handleMintSubmit = () => {
        const mintValue = Number(mintPrice * tokenNumber)
        return MintTokenSend(tokenNumber.toString(), {value: mintValue.toString()})
    }

    const [tokenNumber, setTokenNumber] = useState<number>(0)
    console.log(tokenNumber)
    const handleInstanceValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTokenNumber(event.target.value === "" ? 0 : Number(event.target.value))
    }

    const data = useViewRemainingCards()
    const remainingTokens = Number(data)

    const isMining = MintTokenState.status === "Mining"

    // @dev handles the submission success
    const [showMintSuccess, setShowMintSuccess] = useState(false)

    const handleCloseSnack = () => {
        setShowMintSuccess(false)
    }

    // @dev handles the snack showing success
    useEffect(() => {
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionSucceed" &&
                notification.transactionName === "Mint token").length > 0) {
                    setShowMintSuccess(true)
                }
    }, [notifications, showMintSuccess])

    return (
        <div>
            <div className={classes.main}>
                <div className={classes.explanation}>
                    <p><span className={classes.txtLeft}><b>Ready to mint?</b></span></p>
                    <p><span className={classes.tokenLeft}>COLLECTION</span>Available on <a href={"https://testnets.opensea.io/collection/bonanza-testers-club-on-rinkeby"}>OpenSea</a></p>
                    <p><span className={classes.tokenLeft}>REMAINING</span>{remainingTokens}/1000</p>
                    <LinearProgress variant="determinate" value={(1000-remainingTokens)/10} />
                    <p><span className={classes.tokenLeft}>PRICE</span>0.01 ETH</p>
                    <p><span className={classes.tokenLeft}>MINT</span>
                    <Input
                        className={classes.submitNumber}
                        onChange={handleInstanceValueChange}
                        inputProps={{
                        min: 1,
                        max: 2,
                        step: 1,
                        type: "number"
                    }}/><span className={classes.lowExplanation}>(you can mint maximum 2 NFTs)</span></p>
                    <p><Button
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={handleMintSubmit}
                      disabled={isMining}
                    >
                        {isMining ? <CircularProgress size={26} /> : "MINT"}
                    </Button></p>
                </div>
                <p>(please allow up to 1 hour for Opensea to refresh the token you just minted)</p>
            </div>
            <div>
                <Snackbar
                open={showMintSuccess}
                autoHideDuration={5000}
                onClose={handleCloseSnack}>
                    <Alert onClose={handleCloseSnack} severity="success">
                        Mint success! You can now check your ERC721 token on Opensea Testnet
                    </Alert>
                </Snackbar>
            </div>
        </div>

  )
}