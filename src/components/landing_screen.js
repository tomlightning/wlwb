import ScrollToTop from "./scroll_to_top";
import React from 'react';
import {Link} from "react-router-dom";

import Header from "./header";

function SearchXXL() {
    return (
        <div className="col-xl-6 d-none d-xxl-block my-auto">
              
            <div className="landing-page-description"> 
                A search engine for the decentralized web
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control searchbox" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <span className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></span>
                </div>
            </div>
        </div>
    )
}

function SearchLGXL() {
    return (
        <div className="col-lg-6 d-none d-lg-block d-xxl-none  my-auto">          
          <div className="landing-page-description-lg"> 
            A search engine for the decentralized web
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control searchbox" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></span>
            </div>
          </div>
        </div>
    )
}

function SearchMD() {
    return (
        <div className="col-md-6 d-none d-sm-none d-md-block d-lg-none d-xl-none d-xxl-none mw-50 my-auto">
          <div className="landing-page-description-md"> 
            A search engine for the decentralized web
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control searchbox" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></span>
            </div>
          </div>
        </div>
    )
}


function SearchSM() {
    return (
        <div className="col-md-6 d-none d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none mw-50 my-auto">
          <div className="landing-page-description-sm"> 
            A search engine for the decentralized web
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control searchbox" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></span>
            </div>
          </div>
        </div>
    )
}

function NFTMainLXXL() {
    return (
        <div className="col-xl-6 d-none d-xxl-block  my-auto">
          <img className="TFW-landing-page mw-100" src="./images/TDW_Landingpage_placeholder.png" alt="TDW placeholder"/>
        </div>
    )
}

function NFTMainLGXL() {
    return (
        <div className="col-lg-6 d-none d-lg-block d-xxl-none  my-auto">
          <img className="TFW-landing-page mw-100" src="./images/TDW_Landingpage_placeholder.png" alt="TDW placeholder"/>
        </div>
    )
}

function NFTMainMD() {
    return (
        <div className="col-md-6 d-none d-sm-none d-md-block d-lg-none d-xl-none  d-xxl-none mw-50 my-auto">
          <img className="mw-100" src="./images/TDW_Landingpage_placeholder.png" alt="TDW placeholder"/>
        </div>
    )
}

function NFTMainSM() {
    return (
        <div className="col-md-6 d-none d-sm-block d-md-none d-lg-none d-xl-none  d-xxl-none mw-50 my-auto">
          <img className="mw-100" src="./images/TDW_Landingpage_placeholder-small.png" alt="TDW placeholder"/>
        </div>
    )
}

function SearchNFTMainXS() {
    return (
        <div className="col-12 d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none mh-100 my-auto">
          <div className="text-center m-3">
                <img className="mw-75"  src="./images/TDW_Landingpage_placeholder-small.png" alt="TDW placeholder"/>
            </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control searchbox" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></span>
            </div>
          </div>
        </div>
    )
}

function LandingScreen(){

    return (
        <div id="main-container" className="container d-flex flex-column vh-100 position-relative">
            <Header />

            <div className="row main-section">
                <SearchXXL/>
                <NFTMainLXXL/>
                <SearchLGXL/>
                <NFTMainLGXL/>
                <SearchMD/>
                <NFTMainMD/>
                <SearchSM/>
                <NFTMainSM/>
                <SearchNFTMainXS/>
            </div>

            <div className="position-absolute bottom-0 w-95 text-center bounce">
                <img src="./images/arrow.svg" alt="Arrow down"/> Browse dWebsites
            </div>
        </div>
    )
}


export default LandingScreen;