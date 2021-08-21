import React from "react";
import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";

const default_cards_number = "12";

function Cards(props) {
  if (props.category == "all") 
    var websites = Object.keys(dwebData['sites']);
  else
    var websites = dwebData[props.category];

  // shuffle the 'popular' and 'all' categories
  if (props.category == "all" || props.category == "popular")
     websites = websites.sort(() => Math.random() - 0.5);


  var rows = [];
  for (let i=0; i<props.cards_number; i++) {
    rows.push(<SiteCard  site = {dwebData['sites'][websites[i]]}/>);
  }

  return (<div className="row">
            {rows}
          </div>
      )
}


class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {category: 'new', cards_number: default_cards_number};
    this.onCategoryChanged = this.onCategoryChanged.bind(this);
  }


  onCategoryChanged (e) {
    this.setState({category: e.target.value});
    this.setState({cards_number: default_cards_number});
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
          <Cards category={this.state.category} cards_number = {this.state.cards_number}/>
          <div className="text-center load-more-div">
            <button type="button" className="btn btn-outline-secondary load-more-btn">Load More</button>
          </div>  
        </div>
      );
    }
}

export default Browse;