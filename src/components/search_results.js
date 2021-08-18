import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";
import React, { Suspense, useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

function SearchResultsDetails(props) {
  return (
    <div className="search-results">
        Returned {props.amount} results: <span className="search-results-terms">{props.searchTerm}</span>
    </div>  
  )
}

function CardsRow(props) {
  if (!props.first) {
    return (
      <div className="row">
        <SiteCard size = {props.size}  site = {dwebData['sites'][props.sites[0]]}/>
        <SiteCard size = {props.size} site = {dwebData['sites'][props.sites[1]]}/>
        <SiteCard size = {props.size} site = {dwebData['sites'][props.sites[2]]}/>
      </div>
    )
  } else {
    return (
      <div className="row">
        <SiteCard size = {props.size}  site = {dwebData['sites'][props.sites[0]]} first = "true"/>
        <SiteCard size = {props.size} site = {dwebData['sites'][props.sites[1]]} first = "true"/>
        <SiteCard size = {props.size} site = {dwebData['sites'][props.sites[2]]} first = "true"/>
      </div>
    )
  }
}

const searchResults = (searchTerm, sites) => {

  let arr =  Object.entries(sites);
  let lowerCaseSearchKey = searchTerm.toLowerCase()
  let filtered_arr =  arr.filter(function(site) {
    let site_details = Object.entries(site[1]) 
    return ( 
        (site_details[0][1].toLowerCase().search(lowerCaseSearchKey) >= 0) || 
        (site_details[1][1].toLowerCase().search(lowerCaseSearchKey) >= 0) || 
        (site_details[2][1].toLowerCase().search(lowerCaseSearchKey) >= 0))
   });
  //  return filtered_arr;
  let only_names_arr = filtered_arr.flat().filter(function(val, ind) {return ind % 2 == 0} );

  return only_names_arr;

}

function Cards(props) {
  

  return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              { props.searchResults.slice(0, props.currentResultsShown).map((site, index) => (
                            <SiteCard key={index} size="3" site = {dwebData['sites'][site]}/>
                          )) }
            </div>
          
          </div>

            <div className="col-md-3 v-100">
              <div className="NFTW-search-results d-flex flex-column justify-content-center align-items-center">
                <img className="card-img" src="./images/NFTW_placeholder.jpg"/>
                <div className="card-site-name"> This belongs to YOU! </div>
              </div>
            </div>
        </div>

   
      </div>
      )
}

{/* <CardsRow size = "4" sites = {websites.slice(0,3)} first = "true" />
<CardsRow size = "4" sites = {websites.slice(3,6)} />

<CardsRow size = "3" sites = {websites.slice(6,9)} />
<CardsRow size = "3" sites = {websites.slice(9,12)} /> */}

const LoadMore = ({totalResults, currentResultsShown, setCurrentResultsShown}) => {
    console.log(currentResultsShown);
    console.log(setCurrentResultsShown);
    if (totalResults>currentResultsShown){
      return (
      <div className="text-center load-more-div">
          <button type="button" className="btn btn-outline-secondary load-more-btn" onClick={event => {
                    setCurrentResultsShown(currentResultsShown+12)
                }}>Load More</button>
      </div>
      )
    }else{
      return ('')
    }
}


function SearchResults(props){

    

   

    const [currentResultsShown, setCurrentResultsShown] = useState(12);
    const search_results = searchResults(props.searchTerm, dwebData["sites"]);

    let location = useLocation();
    if (props.searchTerm==''){
      props.setSearchTerm(new URLSearchParams(location.search).get("term"))
    }

    return (
      <div className="container">
        <SearchResultsDetails amount = {search_results.length} searchTerm = {props.searchTerm}/>
        <Cards category="new" searchTerm = {props.searchTerm} searchResults={search_results} currentResultsShown={currentResultsShown} />
        <LoadMore totalResults={search_results.length} currentResultsShown={currentResultsShown}  setCurrentResultsShown={setCurrentResultsShown}/> 
      </div>
    );
}

export default SearchResults;