import React from "react";
// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'

// TimeAgo.addLocale(en)
// const timeAgo = new TimeAgo('en-US')

function isFirst(check) {
    const first = check ? "card-upper-rect-first-row-search-results" : "";

    return first;
}

class SiteCard extends React.Component{


    getScreenshotUrl(){
        if (this.props.site.sc){
            try {
                
                return './images/screenshots/'+this.props.site.name+'_screenshot.jpg';
            }
            catch {
                return './images/logo_placeholder.png';
            }
        } else{
            return './images/logo_placeholder.png';
        }
    }

    getLink(){
        return 'https://'+this.props.site.name + '.eth.link';
    }

    
    getAddress() {
        return this.props.site.name + '.eth';
    }


    getColumnSize(location) {
        if (location == "search_results") 
            return 'col-xl-4 col-lg-6 col-md-6 btn';
        else 
            return 'col-xl-3 col-lg-4 col-sm-6 btn';
    }

    render(){

        return(
            <div className={this.getColumnSize(this.props.location)}>
                <div className={"card-upper-rect " + isFirst(this.props.first) + " d-flex flex-column justify-content-center align-items-center"}>
                  <img className="card-img" src={this.getScreenshotUrl()}/>
                  <div className="card-site-name"> {this.props.site.title} </div>
                </div> 
                <div className="card-content d-flex flex-column justify-content-around align-items-center">
                  <div className="card-site-description">
                    {this.props.site.desc}
                  </div>
                  <div className="card-site-link">
                    <a href={this.getLink()}> {this.getAddress()} </a>
                  </div>
                </div>
             </div>
        );
    }
}

export default SiteCard;