import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We may collect personal information such as your name, email
            address, and other contact details when you sign up for our
            services.
          </p>
          <p>
            We may automatically collect information about how you interact with
            our website or application, including your IP address, browser type,
            pages visited, and the time and date of your visit.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
