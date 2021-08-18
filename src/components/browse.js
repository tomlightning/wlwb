import { dwebData } from "../data/ens_dict.js";
import SiteCard from "./site_card";


function MenuSelect(props){
  return ( <select className="category-select" id="category-select">
  <option value="new">New</option>
  <option value="popular">Popular</option>
  <option value="recent">Recently Updated</option>
  <option value="all">All</option>
</select>);

}

function Menu(props) {
  if (props.size == "l") {
    return (
        <div className="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
          <div className="container text-center">
            <MenuSelect />
          </div>
      </div>
    );
  } else if (props.size == "s") {
      return (
        <div className="d-none d-sm-block">
          <div className="container">
          <MenuSelect />
          </div>
        </div>
      )
    } else {
      return ("<></>")
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

  return (<>
            <CardsRow sites = {websites.slice(0,4)} />
            <CardsRow sites = {websites.slice(4,8)} />
            <CardsRow sites = {websites.slice(8,12)} />
            <CardsRow sites = {websites.slice(12,16)} />
          </>
      )
}


function Browse(){
    return (
      <div className="container" id="browse_sites">
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