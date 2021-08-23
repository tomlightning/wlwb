import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";
import React from "react";


const DEFAULT_NUMBER_OF_CARDS = 12;
const load_more_cards = 12;

function Cards(props) {
  if (props.category === "all") 
    var websites = Object.keys(dwebData['sites']);
  else
    var websites = dwebData[props.category];

  // shuffle the 'popular' and 'all' categories
  if (props.category === "all" || props.category === "popular")
     websites = websites.sort(() => Math.random() - 0.5);


  var cards = [];
  for (let i=0; i<props.cards_number; i++) {
    cards.push(<SiteCard  site = {dwebData['sites'][websites[i]]} key={i} />);
  }

  return (<div className="row" id="browse_sites">
            {cards}
          </div>
      )
}



function BrowseMenuSelect(props){
  return ( <select className="category-select" id="category-select" 
              value={props.category} onChange={props.onCategoryChanged}>
            <option value="new">New</option>
            <option value="popular">Popular</option>
            <option value="recent">Recently Updated</option>
            <option value="all">All</option>
          </select>);

}

function BrowseMenu(props) {
  if (props.size === "l") {
    return (
        <div className="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
          <div className="container text-center">
            
            <BrowseMenuSelect onCategoryChanged={props.onCategoryChanged} category={props.category} />
          </div>
      </div>
    );
  } else if (props.size === "s") {
      return (
        <div className="d-none d-sm-block">
          <div className="container">
          <BrowseMenuSelect onCategoryChanged={props.onCategoryChanged} category={props.category} />
          </div>
        </div>
      )
    } else {
      return ("<></>")
    }
}



class Browse extends React.Component {

  constructor(props) {
    super(props);

    let load_more = true;
    let cards_number = DEFAULT_NUMBER_OF_CARDS;
    let def_cat = this.props.def_cat;

    if (dwebData[def_cat].length <= DEFAULT_NUMBER_OF_CARDS) {
      load_more = false;
      cards_number = dwebData[def_cat].length;
    }

    this.state = {category: def_cat, cards_number: cards_number, load_more: load_more};
    this.onCategoryChanged = this.onCategoryChanged.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }


  onCategoryChanged (e) {
    this.setState({category: e.target.value});
    this.setState({cards_number: DEFAULT_NUMBER_OF_CARDS});
    this.setState({load_more: true});
  }

  onLoadMore(e) {
    var websites;
    if (this.state.category === "all") 
      websites = Object.keys(dwebData['sites']);
    else
      websites = dwebData[this.state.category];

    let new_cards_number = parseInt(this.state.cards_number) + load_more_cards;

    if (new_cards_number >= websites.length) {
      new_cards_number = websites.length;
      this.setState({load_more: false});
    }

    this.setState({cards_number: new_cards_number});
  }

    

    render() { 
      var loadMoreButton;
      
      if (this.state.load_more) 
        loadMoreButton = "btn btn-outline-secondary load-more-btn";
      else
        loadMoreButton = "btn btn-outline-secondary load-more-btn invisible";

      return (
        <div className="container" id="browse_sites">

          <BrowseMenu size="l" onCategoryChanged={this.onCategoryChanged} category={this.state.category} />
          <BrowseMenu size="s" onCategoryChanged={this.onCategoryChanged} category={this.state.category} />

          <Cards category={this.state.category} cards_number = {this.state.cards_number}/>
          <div className="text-center load-more-div">
            <button type="button" onClick={this.onLoadMore}
                    className={loadMoreButton}>Load More</button>
          </div>  
        </div>
      );
    }
}

export default Browse;