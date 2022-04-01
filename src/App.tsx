import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core"
import {Main} from "./components/Main"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {DAppProvider, ChainId} from "@usedapp/core"


function App() {
  return (

    <div className="App">
        <DAppProvider config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
        notifications: {
            expirationPeriod: 1000,
            checkInterval: 1000
        }
        }}>

        <div id="header"><Header></Header></div>
        <div id="content"><Main></Main></div>
        <div id="footer"><Footer></Footer></div>

        </DAppProvider>
    </div>

  );
}

export default App;
