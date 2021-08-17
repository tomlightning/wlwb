import React from "react";
import { Helmet } from 'react-helmet'
import { withRouter } from "react-router";
import routes from './routes'

function Navbar(props) {
  const home = (props.location.pathname === "/") ? true : false

  if (home) {
    return <NavBarMainPage/>
  } else {
    return <NavBarSecondaryPage/>
  }
}

function NavBarSecondaryPage(props){
  return (
    <nav className="navbar navbar-expand-xl h-100">
            <img className="navbar-brand h-100 d-none d-xl-block" src="./images/logo.svg" alt="Esteroids logo and tagline"/>

            <img className="navbar-brand h-100 d-xl-none d-xxl-none" src="./images/logo.svg" alt="Esteroids logo and tagline"/>

      <button className="navbar-toggler navbar-toggler-right collapsed esteroids-navbar-toggler" 
              type="button" data-bs-toggle="collapse" data-bs-target="#search-bar" 
              aria-expanded="false" onClick={setNavbarCollapsedColor}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <form id="search-bar" className="navbar-nav w-35 navbar-collapse collapse search-bar">
        <div className="input-group mb-3 search-icon">
            <input type="text" className="form-control searchbox" placeholder="search dWebsites" 
                   aria-label="search dWebsites" aria-describedby="basic-addon2"/>

            <div className="input-group-append">
              <span id="basic-addon2" className="input-group-text search-button">
                <img src="./images/search.svg" className="search-icon" alt="Search icon"/>
               </span>
            </div>
          </div>
      </form>

    </nav>
  )
}

function NavBarMainPage(props){
  return (
    <nav className="navbar navbar-expand-xl flex-grow-0">
       <img className="navbar-brand" src="./images/logo_and_tagline.svg" alt="Esteroids logo and tagline"/>

      <button className="navbar-toggler navbar-toggler-right collapsed" 
        type="button" data-bs-toggle="collapse" data-bs-target="#navb" 
        aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navb" className="navbar-collapse collapse order-3">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a id="nav-link-1" className="nav-link" href="/">New 
              <i class="green_dropdown_arrow"/>
            </a>
          </li>
          <li className="nav-item">
            <a id="nav-link-2" className="nav-link" href="/">Popular 
              <i class="green_dropdown_arrow"/>
            </a>
          </li>
          <li className="nav-item">
            <a id="nav-link-3" className="nav-link" href="/">Recently Updated
              <i class="green_dropdown_arrow"/>
            </a>
          </li>
          <li className="nav-item">
            <a id="nav-link-4" className="nav-link" href="/">All
              <i class="green_dropdown_arrow"/>
            </a>
          </li>
        </ul>
      </div> {/*-- navb */}
    </nav>
  )
}

function setNavbarCollapsedColor() {
  console.log("click");
//   let l1 = document.getElementById("nav-link-1");
//   let l2 = document.getElementById("nav-link-2");
//   let l3 = document.getElementById("nav-link-3");
//   let l4 = document.getElementById("nav-link-4");

//   let class_list = "";

//   l1.classList.length == 2 ? class_list = "nav-link" : class_list = "nav-link nav-link-collapsed";

//   l1.classList = class_list;
//   l2.classList = class_list;
//   l3.classList = class_list;
//   l4.classList = class_list;
}

class Header extends React.Component{

    render() {
        const { location } = this.props;
        console.log("location.pathname: ", location.pathname);
        console.log("routes: ", routes);
        const page_title = routes[location.pathname]['pageTitle']||'Esteroids: decentralized web front page';

        return ( <> <Helmet>
          <title>{page_title}</title>
          </Helmet>
          <Navbar location = {location}/>
        </>)
  }
}

export default withRouter(Header);