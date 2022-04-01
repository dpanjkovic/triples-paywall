import React from "react";

function Footer() {
  const showSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "flex";
  };
  
  const hideSubmenu = () => {
    document.getElementsByClassName("submenu")[0].style.display = "none";
  };
  
  return (
    <>
      <footer className="App-header">
        <div className="flex flex-row items-center">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mr-4" />
          <img src={require("../../assets/images/footer-saudi.png")} />
        </div>
        <nav>
          <div className="item">For Investors</div>
          <div className="item">Products</div>
          <div className="item">About us</div>
          <div className="item">Contact us</div>
        </nav>
      </footer>
      <img src={require("../../assets/images/footer-divider.png")} className="footer-divider" />
      <div className="footer-privacy">
        <div>
          <div>© 2021 Paywall (Limited liability company)</div>
          <div>Privacy Policy</div>
          <div>Cookies</div>
        </div>
        <div>
          <img src={require("../../assets/images/twitter.png")} />
          <img src={require("../../assets/images/fb.png")} />
          <img src={require("../../assets/images/linkedin.png")} />
        </div>
      </div>
      <div className="copyright">All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
</div>
    </>
  );
}

export default Footer;
