import React from "react";

function Header() {
  return (
    <>
      {/* Navigation */}
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">
              Health is wealth
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Types
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#signup">
                    Symptoms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Masthead */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center pl-4">
              {" "}
              {/* Added padding-left */}
              <h1 className="mx-auto my-0 text-uppercase text-left">
                WHy it is a necessity
              </h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Your liver is a vital organ responsible for numerous essential
                functions in your body, including filtering toxins from your
                blood. However, its role as a filter makes it susceptible to
                damage from excessive toxins over time. Liver disease
                encompasses a range of chronic conditions that progressively
                harm the liver. Common causes include viral infections, toxic
                exposure, and metabolic disorders. While the liver can
                regenerate, constant damage can overwhelm its regenerative
                capacity, leading to long-term complications. <br></br>Our goal
                is to empower individuals with early detection and intervention
                strategies, ultimately promoting liver health and overall
                well-being. Explore our platform to learn more about liver
                disease prediction and prevention.
              </h2>
              <a className="btn btn-primary" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
