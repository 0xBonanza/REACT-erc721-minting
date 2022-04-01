
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    color: "white",
    justifyContent: "center",
    marginTop: 'auto',
    fontSize: 11,
  },
  spanPad: {
    marginLeft: 5,
    marginRight: 5
  }
}))

// header is a function () and here is what it does => {}
export const Footer = () => {

    const classes = useStyles()

    return(

        <div className={classes.footer}>© 2022 by 0xBonanza, visit <span className={classes.spanPad}><a style={{ color: 'white' }} href="https://github.com/0xBonanza"> our Github </a></span> for more!</div>

    )
}
