import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";
import React, { Suspense, useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

const DEFAULT_SEARCH_RESULTS_NUMBER = 10;
const loadMoreSearechResultsNumber = 8;

function SearchResultsDetails(props) {
  return (
    <div className="search-results">
        Returned {props.amount} results: <span className="search-results-terms">{props.searchTerm}</span>
    </div>  
  )
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
  // we only need the names for browse results - maybe need optimization later
  let only_names_arr = filtered_arr.flat().filter(function(val, ind) {return ind % 2 == 0} );

  return only_names_arr;

}

function Cards(props) {
  var lowerCardsResults = props.searchResults.slice(7, props.searchResults.length);

  var lowerResults = [];
  for (let i=0; i<Math.min(props.currentResultsShown-6, lowerCardsResults.length); i++) {
    lowerResults.push(<SiteCard  site = {dwebData['sites'][lowerCardsResults[i]]}/>);
  }

  return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              { props.searchResults.slice(0, 6).map((site, index) => (
                            <SiteCard key={index} location="search_results" site = {dwebData['sites'][site]}/>
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

        <div className="row">
          {lowerResults}
        </div>


   
      </div>
      )
}


const LoadMore = ({totalResults, currentResultsShown, setCurrentResultsShown}) => {
    if (totalResults>currentResultsShown){
      return (
      <div className="text-center load-more-div">
          <button type="button" className="btn btn-outline-secondary load-more-btn" onClick={() => {
                    setCurrentResultsShown(currentResultsShown+loadMoreSearechResultsNumber)
                }}>Load More</button>
      </div>
      )
    }else{
      return ('')
    }
}


function SearchResults(props){

    const [currentResultsShown, setCurrentResultsShown] = useState(DEFAULT_SEARCH_RESULTS_NUMBER);
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