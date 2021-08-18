import {Link} from "react-router-dom";

function Footer(){
    return (
        <div className="container">
            <div className="row">
                <div className="footer d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row footer-items">
                    
                    <div className="footer-items d-none d-lg-block">
                      <img src="./images/twitter.svg" alt="Twitter icon"/>&nbsp;&nbsp; TWITTER &nbsp;&nbsp; <img src="./images/blue_arrow_left.svg" alt="left blue arrow"/>
                    </div>

                    <div className="footer-items d-lg-none d-xl-non d-xxl-none">
                      <img src="./images/twitter.svg" alt="Twitter icon"/>
                    </div>

                    <div className="footer-items d-none d-lg-block">
                      <Link to="/about">
                        <img src="./images/info.svg" alt="info emoji"/>&nbsp;&nbsp; ABOUT ESTEROIDS &nbsp;&nbsp;<img src="./images/blue_arrow_left.svg" alt="left blue arrow"/>
                      </Link>
                    </div>

                    <div className="footer-items d-lg-none d-xl-non d-xxl-none">
                      <Link to="/about">
                        <img src="./images/info.svg" alt="info emoji"/>
                      </Link>
                    </div>

                  </div>
                  <div className="footer-items d-none d-lg-block">
                    <Link to="/privacy">
                      <img src="./images/logo.svg" alt="Esteroids logo"/>
                      </Link>
                  </div>
                  <div className="footer-items">
                    <Link to="/privacy">
                      PRIVACY POLICY&nbsp;&nbsp;<img src="./images/blue_arrow_left.svg" alt="left blue arrow"/>
                    </Link>
                  </div>
                </div>
              </div>
         </div>
    );
}

export default Footer;