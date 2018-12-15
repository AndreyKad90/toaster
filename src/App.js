import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ToasterContainer, ToasterService } from './toaster';
import { SIDE_CONTAINER_CONFIG, TOP_CONTAINER_CONFIG } from './toaster/config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToasterContainer config={TOP_CONTAINER_CONFIG}/>
        <ToasterContainer config={SIDE_CONTAINER_CONFIG}/>

        <div style={{position: 'fixed', bottom: '40px'}}>
          <button onClick={() => ToasterService.showPositiveBannerToaster(
            'Copied!' + Math.round(Math.random())
          )}>
            pb
          </button>
          <button onClick={() => ToasterService.showNegativeBannerToaster(
            'Copied!' + Math.round(Math.random())
          )}>
            nb
          </button>
          <button onClick={() => ToasterService.showWarningBannerToaster(
            'Copied!' + Math.round(Math.random())
          )}>
            wb
          </button>
          <button onClick={() => ToasterService.showPositiveLongToaster('Title', 'Copied!' + Math.round(Math.random() * 2))}>
            pl
          </button>
          <button onClick={() => ToasterService.showNegativeLongToaster('Title', 'Copied!' + Math.round(Math.random() * 2))}>
            nl
          </button>
          <button onClick={() => ToasterService.showWarningLongToaster('Title', 'Copied!' + Math.round(Math.random() * 2))}>
            wl
          </button>
          <button onClick={() => ToasterService.showPositiveShortToaster('Copied!' + Math.round(Math.random() * 2))}>
            ps
          </button>
          <button onClick={() => ToasterService.showNegativeShortToaster('Copied!' + Math.round(Math.random() * 2))}>
            ns
          </button>
          <button onClick={() => ToasterService.showWarningShortToaster('Copied!' + Math.round(Math.random() * 2))}>
            ws
          </button>
        </div>
      </div>
    );
  }
}

export default App;
