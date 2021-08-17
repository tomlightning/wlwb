import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";

function Menu(props) {
  if (props.size == "l") {
    return (
        <div className="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">

          <div className="container text-center">
            <select className="category-select" id="category-select">
              <option value="new">New</option>
              <option value="popular">Popular</option>
              <option value="recent">Recently Updated</option>
              <option value="all">All</option>
            </select>
          </div>
      </div>
    )} else if (props.size == "s") {
      return (
        <div class="d-none d-sm-block">

          <div class="container">
            <select class="category-select" id="category-select">
              <option value="new">New</option>
              <option value="popular">Popular</option>
              <option value="recent">Recently Updated</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      )
    } else {
      return ("")
    }
}

function CardsRow(props) {
  return (
    <div className="row">
      <SiteCard size = "3"  site = {dwebData['sites'][props.sites[0]]}/>
      <SiteCard size = "3" site = {dwebData['sites'][props.sites[1]]}/>
      <SiteCard size = "3" site = {dwebData['sites'][props.sites[2]]}/>
      <SiteCard size = "3" site = {dwebData['sites'][props.sites[3]]}/>
    </div>
  )
}

function Cards(props) {
  const websites = dwebData[props.category];

  return (
        <div className="row">
          <CardsRow sites = {websites.slice(0,4)} />
          <CardsRow sites = {websites.slice(4,8)} />
          <CardsRow sites = {websites.slice(8,12)} />
          <CardsRow sites = {websites.slice(12,16)} />
        </div>
      )
}


function Browse(){
    return (
      <div className="container">
        <Menu size ="l"/>
        <Menu size ="s"/>
        <Cards category="new"/>
        <div className="text-center load-more-div">
          <button type="button" className="btn btn-outline-secondary load-more-btn">Load More</button>
        </div>  
      </div>
    );
}

export default Browse;