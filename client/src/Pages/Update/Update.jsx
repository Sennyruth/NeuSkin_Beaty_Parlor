import { useFormik } from "formik";
import * as Yup from "yup";
import { useState} from "react";
import { apiUrl } from "../../Utils/Config";
import useUpdateId from "../Store/updateStore";

function Update() {
  const catchId = useUpdateId((state) => state.catchId);
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
    onSubmit: async (values) => {
      // console.log(values);
      try {
        setError(false);
        const response = await fetch(
          `${apiUrl}/api/users/updateappointment/${catchId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            credentials: "include",
          }
        );
        const data = await response.json();
        console.log(data);
        alert("updated successfully");
      } catch (error) {
        setError(error.message);
      }
    },
    validationSchema: validationschema,
  });
  return (
    <div className="form-containers">
      <h2 className="newsletter-title">Update Appointment</h2>
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
          {formik.errors.time && formik.touched.time ? (
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
            <option value="face threading">face threading</option>
            <option value="manicure">manicure</option>
            <option value="pedicure">pedicure</option>
            <option value="waxing">waxing</option>
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
  );
}

export default Update;
