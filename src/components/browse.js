import React from "react";
import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";


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
  if (props.category == "all") 
    var websites = Object.keys(dwebData['sites']);
  else
    var websites = dwebData[props.category];

  // shuffle the 'popular' and 'all' categories
  if (props.category == "all" || props.category == "popular")
     websites = websites.sort(() => Math.random() - 0.5);


  return (<>
            <CardsRow sites = {websites.slice(0,4)} />
            <CardsRow sites = {websites.slice(4,8)} />
            <CardsRow sites = {websites.slice(8,12)} />
            <CardsRow sites = {websites.slice(12,16)} />
          </>
      )
}


class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: 'new'};
    this.onCategoryChanged = this.onCategoryChanged.bind(this);
  }


  onCategoryChanged (e) {
    this.setState({category: e.target.value});
  }

    browseMenuSelect(){
      return ( <select className="category-select" id="category-select" 
                  value={this.state.category} onChange={this.onCategoryChanged}>
      <option value="new">New</option>
      <option value="popular">Popular</option>
      <option value="recent">Recently Updated</option>
      <option value="all">All</option>
    </select>);

    }

    browseMenu(size) {
      if (size == "l") {
        return (
            <div className="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
              <div className="container text-center">
                {this.browseMenuSelect()}
              </div>
          </div>
        );
      } else if (size == "s") {
          return (
            <div className="d-none d-sm-block">
              <div className="container">
              {this.browseMenuSelect()}
              </div>
            </div>
          )
        } else {
          return ("<></>")
        }
    }

    render() { 
      return (
        <div className="container" id="browse_sites">
          {this.browseMenu("l")}
          {this.browseMenu("s")}
          <Cards category={this.state.category}/>
          <div className="text-center load-more-div">
            <button type="button" className="btn btn-outline-secondary load-more-btn">Load More</button>
          </div>  
        </div>
      );
    }
}

export default Browse;