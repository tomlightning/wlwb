import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";

function SearchResultsDetails(props) {
  return (
    <div class="search-results">
        Returned {props.amount} results: <span class="search-results-terms">{props.term}</span>
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

function Cards(props) {
  const websites = dwebData["popular"];

  return (
      <div>
        <div className="row">
          <div class="col-md-9">
            <CardsRow size = "4" sites = {websites.slice(0,3)} first = "true" />
            <CardsRow size = "4" sites = {websites.slice(3,6)} />
          </div>

            <div class="col-md-3 v-100">
              <div class="NFTW-search-results d-flex flex-column justify-content-center align-items-center">
                <img class="card-img" src="./images/NFTW_placeholder.jpg"/>
                <div class="card-site-name"> This belongs to YOU! </div>
              </div>
            </div>
        </div>

          <CardsRow size = "3" sites = {websites.slice(6,9)} />
          <CardsRow size = "3" sites = {websites.slice(9,12)} />
      </div>
      )
}


function SearchResults(props){
    return (
      <div className="container">
        <SearchResultsDetails amount = {props.amount} term = {props.term}/>
        <Cards category="new"/>
        <div className="text-center load-more-div">
          <button type="button" className="btn btn-outline-secondary load-more-btn">Load More</button>
        </div>  
      </div>
    );
}

export default SearchResults;