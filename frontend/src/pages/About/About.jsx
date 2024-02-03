import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <hr></hr>
        <p>
         <b> Welcome to Advocate Avenue, your trusted platform for finding the best lawyers in your locality.
          We understand that legal matters can be complex and challenging, and finding the right legal
          representation is crucial. Advocate Avenue simplifies this process for you.</b>
        </p>
        <p>
         <b> Our mission is to connect individuals with experienced and reliable lawyers who specialize in
          various fields of law. Whether you are dealing with family matters, business disputes, or any other
          legal concern, Advocate Avenue is here to help.</b>
        </p>
        {/* <h2>How It Works</h2> */}
        <p>
        <b>Advocate Avenue is more than just a platform; it's a commitment to making legal services accessible and convenient for everyone. By bridging the gap between clients and lawyers, we strive to simplify the legal process and empower individuals and businesses to navigate the complexities of the law with confidence.</b>

          {/* Using Advocate Avenue is simple. Just follow these steps: */}
        </p>
        {/* <ol>
          <li>Specify your state and district to narrow down your search.</li>
          <li>Browse through a curated list of lawyers in your selected area.</li>
          <li>View detailed profiles, including experience, expertise, and client reviews.</li>
          <li>Schedule an appointment with the lawyer of your choice with just a click.</li>
        </ol> */}
        <p>
          <b>It is committed to making the legal process accessible and convenient for everyone.
          We believe in empowering individuals to make informed decisions when it comes to choosing legal
          representation.</b>
        </p>
        {/* <h2>Contact Us</h2> */}
        <div className="hello" >
        <p>
          <b>Have questions or feedback? Feel free to visit the <Link to='/contactus'>Contact Us</Link> page</b>
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUsPage;
