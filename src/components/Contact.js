import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    age: null,
    gender: null,
    total_bilirubin: null,
    direct_bilirubin: null,
    alkphos_alkaline_phosphotase: null,
    sgpt_alamine_aminotransferase: null,
    sgot_aspartate_aminotransferase: null,
    total_proteins: null,
    alb_albumin: null,
    ag_ratio_albumin_and_globulin_ratio: null,
  });
  const [predictionResult, setPredictionResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://ec2-16-16-187-111.eu-north-1.compute.amazonaws.com:5050/predict",
        {}
      )
      .then((response) => {
        setShowResult(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      {/* Prediction Services */}
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Prediction Services</h2>
              <form className="form-signup" onSubmit={handleSubmit}>
                <div className="row input-group-newsletter">
                  <div className="col">
                    <input
                      className="form-control mb-2"
                      id="age"
                      type="number"
                      placeholder="Age of the patient"
                      aria-label="Age of the patient..."
                      name="age"
                      value={formData.age || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="gender"
                      type="text"
                      placeholder="Gender of the patient"
                      aria-label="Gender of the patient..."
                      name="gender"
                      value={formData.gender || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="total_bilirubin"
                      type="number"
                      placeholder="Total bilirubin..."
                      aria-label="Total bilirubin..."
                      name="total_bilirubin"
                      value={formData.total_bilirubin || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="direct_bilirubin"
                      type="number"
                      placeholder="Direct bilirubin..."
                      aria-label="Direct bilirubin..."
                      name="direct_bilirubin"
                      value={formData.direct_bilirubin || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="alkphos_alkaline_phosphotase"
                      type="number"
                      placeholder="Alkphos alkaline phosphotase..."
                      aria-label="Alkphos alkaline phosphotase..."
                      name="alkphos_alkaline_phosphotase"
                      value={formData.alkphos_alkaline_phosphotase || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="sgpt_alamine_aminotransferase"
                      type="number"
                      placeholder="Sgpt alamine aminotransferase..."
                      aria-label="Sgpt alamine aminotransferase..."
                      name="sgpt_alamine_aminotransferase"
                      value={formData.sgpt_alamine_aminotransferase || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="sgot_aspartate_aminotransferase"
                      type="number"
                      placeholder="Sgot aspartate aminotransferase..."
                      aria-label="Sgot aspartate aminotransferase..."
                      name="sgot_aspartate_aminotransferase"
                      value={formData.sgot_aspartate_aminotransferase || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="total_proteins"
                      type="number"
                      placeholder="Total proteins..."
                      aria-label="Total proteins..."
                      name="total_proteins"
                      value={formData.total_proteins || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="alb_albumin"
                      type="number"
                      placeholder="Alb albumin..."
                      aria-label="Alb albumin..."
                      name="alb_albumin"
                      value={formData.alb_albumin || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      className="form-control mb-2"
                      id="ag_ratio_albumin_and_globulin_ratio"
                      type="number"
                      placeholder="A/G ratio albumin and globulin ratio..."
                      aria-label="A/G ratio albumin and globulin ratio..."
                      name="ag_ratio_albumin_and_globulin_ratio"
                      value={formData.ag_ratio_albumin_and_globulin_ratio || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-4 border-solid border-2 border-white-600 py-2 px-4 rounded">
                <h2 className="text-white mt">Prediction</h2>
                {showResult && (
                  <pre className="text-white">Result: {predictionResult}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          {/* Contact information */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright © Your Website 2023
        </div>
      </footer>
    </>
  );
}

export default Contact;
