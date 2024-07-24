import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {apiUrl} from "../../Utils/Config"
import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Contacts.css"



function Contacts() {

  const [error, setError] = useState(false);

  const validationschema = Yup.object({
date: Yup.date().required("Date is required"),

    time: Yup.string()
      .required("time is required")
      .min(3, "time should not be less than 3 characters")
      .max(10, "time should not be more than 10 characters"),

    number: Yup.number().required("Phone Number is required"),

    service: Yup.string().required("service required"),
  });
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      number: "",
      service: "",
    },
    onSubmit: async (formState) => {
      console.log(formState);
      try {
        setError(false);
        const response = await fetch(`${apiUrl}/api/users/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
          credentials:'include'
        });
        const data = await response.json();
        console.log(data);
        alert("booked successfully")
      } catch (error) {
        setError(error.message);
      }
    },
    validationSchema: validationschema,
  });
  return (
    <div>
      <div className="contacts">
        <div className="contacts-section">
        <h1 className="maintitle">  Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, explicabo ducimus blanditiis voluptate, odit asperiores iste temporibus quaerat neque velit dolorum obcaecati ut aliquam, nulla deserunt sequi! Dolores, cupiditate aut.</p>
        </div>
       
      </div>
      <div className="contact-container-text">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-cards">
        <div className="contact-container-visit">
          <div className="contact-icons">
            <IoHome />
          </div>
          <h3>VISIT US</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            modi impedit in. Officia autem, sapiente alias laudantium ratione
            nulla! Neque.
          </p>
          <p className="cont-text">Address: 1234 Main St, Anytown, CA 12345</p>
        </div>
        <div className="contact-container-visit">
          <div className="contact-icons">
            <IoCall />
          </div>
          <h3>CALL US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
            minus neque fuga dicta eaque natus distinctio ab molestias
            molestiae!
          </p>
          <p className="cont-text">Phone: (+254) 456-7890</p>
        </div>
        <div className="contact-container-visit">
          <div className="contact-icons">
            <MdEmail />
          </div>
          <h3>CONTACT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quaerat harum minima nesciunt ratione recusandae quae nisi
            distinctio, adipisci eveniet.
          </p>
          <p className="cont-text">Email: info@neuskinbeautyparlor.com</p>
        </div>
      </div>
      <div className="map-form">
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.90123248419!2d36.648199841059146!3d-1.329758195873312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1c9f26ac0519%3A0x27e09cffb4d4bbe!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1721727774922!5m2!1sen!2ske" width="600" height="450"></iframe>
      </div>
  <div className="form-containers">
          <h2 className="newsletter-title">Book an Appointment</h2>
          <form onSubmit={formik.handleSubmit}>
            <p className="eror">{error && error}</p>
            <div className="firstname">
              <label htmlFor="date">Date of Service</label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date of Service"
                value={formik.valuesdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errorsdate && formik.toucheddate ? (
                <div className="error">{formik.errorsdate}</div>
              ) : null}
            </div>
            <div className="time">
              <label htmlFor="duetime">time</label>
              <br />
              <input
                type="time"
                id="duetime"
                placeholder="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.time && formik.touched.time? (
                <div className="error">{formik.errors.time}</div>
              ) : null}
            </div>
            <div className="phonenumber">
              <label htmlFor="number">Phone Number</label>
              <br />
              <input
                type="number"
                id="number"
                placeholder="Your Phone Number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.number && formik.touched.number ? (
                <div className="error">{formik.errors.number}</div>
              ) : null}
            </div>

            <div className="servic">
              <label htmlFor="lname">Service</label>
              <br />
              <select
                id="service"
                className="select"
                name="service"
                value={formik.values.service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="face threading">
                  face threading
                </option>
                <option value="manicure">manicure</option>
                <option value="pedicure">pedicure</option>
                <option value="waxing">
                  waxing
                </option>
                <option value="facials">Facials</option>
                <option value="natural relaxation">Natural relaxation</option>
                <option value="skincare">skincare</option>
              </select>
              <br />
              {formik.errors.service && formik.touched.service ? (
                <div className="error">{formik.errors.service}</div>
              ) : null}
            </div>
            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
    </div>
      </div>
     
    </div>







  
  )
}

export default Contacts
