import React from "react";

function Projects() {
  return (
    <>
      <div>
        <section className="about-section text-center" id="about">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-4">Prevention over cure</h2>
                <p className="text-white-50">
                  Liver disease often remains asymptomatic in its early stages
                  and is frequently diagnosed incidentally during routine blood
                  tests or imaging scans for unrelated conditions. Signs of
                  liver dysfunction may manifest in these tests, indicating the
                  need for further evaluation. Additionally, CT scans intended
                  for other purposes, like kidney assessments, may reveal
                  indications of liver issues such as fatty liver or scarring.
                </p>
              </div>
            </div>
            <img className="img-fluid" src="assets/img/ipad.png" alt="..." />
          </div>
        </section>

        {/* Projects */}

        <section className="projects-section bg-light" id="projects">
          <div className="container px-4 px-lg-5">
            {/* Featured Project Row */}
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src="assets/img/bg-masthead.jpg"
                  alt="..."
                />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Hepatitis C</h4>
                  <p className="text-black-50 mb-0">
                    Primarily transmitted through infected blood, often via
                    shared needles or in conjunction with HIV. Healthcare
                    workers face risks from accidental needle exposure. Symptoms
                    may remain dormant for years, emphasizing the importance of
                    testing, especially for baby boomers, who are particularly
                    at risk.
                  </p>
                </div>
              </div>
            </div>

            {/* Project One Row */}
            <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/demo-image-01.jpg"
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Hepatitis B</h4>
                      <p className="mb-0 text-white-50">
                        Primarily transmitted through unprotected sex or shared
                        needles. Prolonged infection increases the risk of liver
                        cancer and other complications. It can also be passed
                        from mother to baby during childbirth. Early detection
                        and treatment are crucial to prevent long-term health
                        consequences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Two Row */}
            <div className="row gx-0 justify-content-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/demo-image-02.jpg"
                  alt="..."
                />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">Hepatitis A</h4>
                      <p className="mb-0 text-white-50">
                        Spreads through intimate contact, injected drugs, and
                        contaminated food or drinks. Easily transmitted in
                        overcrowded or unsanitary settings, especially after
                        natural disasters, where exposure to sewage is likely.
                        Symptoms may not manifest, with recovery typically
                        occurring within 6 months without lasting effects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center items-center h-screen">
          <h1 className="text-center xl:text-5xl">Symptoms</h1>
        </div>
        {/*///////////////  Symptomps  ///////////  */}

        <section className="projects-section bg-light" id="projects">
          <div className="container px-4 px-lg-5">
            {/* Featured Project Row */}
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src="assets/img/symp1.jpg"
                  alt="..."
                />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <p className="text-black-50 mb-0">
                    Liver disease often remains asymptomatic in its early stages
                    and is frequently diagnosed incidentally during routine
                    blood tests or imaging scans for unrelated conditions. Signs
                    of liver dysfunction may manifest in these tests, indicating
                    the need for further evaluation. Additionally, CT scans
                    intended for other purposes, like kidney assessments, may
                    reveal indications of liver issues such as fatty liver or
                    scarring.
                  </p>
                </div>
              </div>
            </div>

            {/* Project One Row */}
            <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/symp2.jpg"
                  alt="..."
                />
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <p className="mb-0 text-white-50">
                        Upper abdominal pain. Nausea or loss of appetite.
                        Fatigue and malaise (feeling generally tired and ill).
                        Jaundice, yellowing of the eyes and skin Belly pain
                        Swelling in your belly, called ascites Swollen legs and
                        ankles Dark urinePale-colored stool A poor appetite
                        Vomiting Frequent and easy bruising on the skin
                        ​Dark-colored pee (urine). Light-colored poop (stool).
                        Digestive difficulties, especially with fats. Weight
                        loss and muscle loss. Musty-smelling breath. Mild brain
                        impairment (hepatic encephalopathy). Pruritus (itchy
                        skin, but with no visible rash).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Two Row */}
            <div className="row gx-0 justify-content-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/symp3.jpg"
                  alt="..."
                />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <p className="mb-0 text-white-50">
                        Liver diseases encompass a wide range of conditions,
                        each with its unique causes. Understanding these causes
                        is crucial for prevention, early detection, and
                        effective management. Here are the primary contributors
                        to liver disease:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
