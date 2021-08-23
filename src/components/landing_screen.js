import ScrollToTop from "./scroll_to_top";
import React, { useState, useEffect } from 'react';

import Header from "./header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// componentDidMount(){
//   this.nameInput.focus();
// }

// const useFocus = () => {
//   const htmlElRef = useRef(null)
//   const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

//   return [ htmlElRef, setFocus ] 
// }

function MainSearchBar(props){
  
  let history = useHistory();

  const handleSearch = event =>{
      if (props.searchTerm == "")
          return;

      event.preventDefault();
      history.push({
        pathname: '/search',
        search: '?term='+props.searchTerm
      });  
  }
  //const [inputRef, setInputFocus] = useFocus()


  return (
        <form  onSubmit={handleSearch} >
          <div className="input-group mt-4">
            <input type="text"  ref={input => input && input.focus()} value={props.searchTerm} onChange={event => {
                    props.setSearchTerm(event.target.value)
                }} className="form-control searchbox mainsearch" placeholder="Search dWebsites" aria-label="Search dWebsites" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button type="submit" className="input-group-text search-button" id="basic-addon2"><img src="./images/search.svg" alt="Search icon"/></button>
            </div>
          </div>
        </form>);
}

function SearchXXL(props) {
    return (
        <div className="col-xl-6 d-none d-xxl-block my-auto">
              
            <div className="landing-page-description"> 
                A search engine for the decentralized web
            </div>

            <MainSearchBar searchTerm={props.searchTerm} 
                            setSearchTerm={props.setSearchTerm}/>
        </div>
    )
}

function SearchLGXL(props) {
    return (
        <div className="col-lg-6 d-none d-lg-block d-xxl-none  my-auto">          
          <div className="landing-page-description-lg"> 
            A search engine for the decentralized web
          </div>

          <MainSearchBar searchTerm={props.searchTerm} 
                            setSearchTerm={props.setSearchTerm}/>
        </div>
    )
}

function SearchMD(props) {
    return (
        <div className="col-md-6 d-none d-sm-none d-md-block d-lg-none d-xl-none d-xxl-none mw-50 my-auto">
          <div className="landing-page-description-md"> 
            A search engine for the decentralized web
          </div>

          <MainSearchBar searchTerm={props.searchTerm} 
                            setSearchTerm={props.setSearchTerm}/>
        </div>
    )
}


function SearchSM(props) {
    return (
        <div className="col-md-6 d-none d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none mw-50 my-auto">
          <div className="landing-page-description-sm"> 
            A search engine for the decentralized web
          </div>

          <MainSearchBar searchTerm={props.searchTerm} 
                            setSearchTerm={props.setSearchTerm}/>
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

function SearchNFTMainXS(props) {
    return (
        <div className="col-12 d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none mh-100 my-auto">
          <div className="text-center m-3">
                <img className="mw-75"  src="./images/TDW_Landingpage_placeholder-small.png" alt="TDW placeholder"/>
            </div>

            <MainSearchBar  searchTerm={props.searchTerm} 
                            setSearchTerm={props.setSearchTerm}/>
        </div>
    )
}



function BrowseSitesHelper(){
  const [browseInView, setBrowseInView] = useState(false);

  useEffect(() => {
    var el = document.getElementById('browse_sites');

      function isElementInViewport (el) {
    
    
        var rect = el.getBoundingClientRect();
      
        
        if (rect.top==0&&rect.bottom==0){
          return false;
        }
        
        return (rect.bottom >= 0 && rect.right >= 0 && (rect.top + 10) < (window.innerHeight || document.documentElement.clientHeight) && (rect.left + 10) < (window.innerWidth || document.documentElement.clientWidth));
      }
            
      function onVisibilityChange(el, callback) {
        var old_visible;
        return function () {
            var visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == 'function') {
                    
                    callback(visible);
                }
            }
        }
      }
          
      const visibleSetTrue = setBrowseInView
      var handler = onVisibilityChange(el, function(visible) {
        
        visibleSetTrue(visible);
        
      });
            
          
    window.addEventListener('DOMContentLoaded', handler, false);
    window.addEventListener('load', handler, false);
    window.addEventListener('scroll', handler, false);
    window.addEventListener('resize', handler, false);
  

  })
         
  let class_names = "position-absolute bottom-0 w-95 text-center bounce btn"
  if (browseInView){
    class_names +=" invisible"
  }
  return (<div className={class_names} onClick={() => {   
      window.setTimeout(() => {
        const id = 'browse_sites'
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({block: "start",
            inline: "center",
            behavior: "smooth",
            alignToTop: true});
            
        }
      }, 200); 
            }}>
            <img src="./images/arrow.svg" alt="Arrow down"/>Browse dWebsites
          </div>);
 
}

const LandingScreen = ({searchTerm, setSearchTerm})=>{

    return (
        <div id="main-container" className="container d-flex flex-column vh-100 position-relative">
            <Header />

            <div className="row main-section">
                <SearchXXL searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}/>
                <NFTMainLXXL/>
                <SearchLGXL searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}/>
                <NFTMainLGXL/>
                <SearchMD searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}/>
                <NFTMainMD/>
                <SearchSM searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}/>
                <NFTMainSM/>
                <SearchNFTMainXS searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}/>
            </div>

            <BrowseSitesHelper />
        </div>
    )
}


export default LandingScreen;