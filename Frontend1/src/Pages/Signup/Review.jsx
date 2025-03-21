import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";
ReactModal.setAppElement("#root");

const Review = ({ formData, goToTab }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const MySwal = withReactContent(Swal);

    // Show loading alert
    MySwal.fire({
      title: "Submitting...",
      text: "Please wait while we process your request.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const formDataWithImage = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataWithImage.append(key, formData[key]);
      });

      if (profileImage) {
        formDataWithImage.append("image", profileImage);
      }

      await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Show success alert
      MySwal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login"); // Redirect after confirmation
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error alert
      MySwal.fire({
        title: "Error!",
        text: "Failed to submit the form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // ------------ OTP Verification ---------------

  return (
    <>
      <div>
        <h3>Review and Submit</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Full Name</label>
              <p className="Signup-Review">{formData.fullName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Age</label>
              <p className="Signup-Review">{formData.age}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Gender</label>
              <p className="Signup-Review">{formData.gender}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Father's Name</label>
              <p className="Signup-Review">{formData.fatherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Mother's Name</label>
              <p className="Signup-Review">{formData.motherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Grandfather's Name</label>
              <p className="Signup-Review">{formData.GrandFatherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Height</label>
              <p className="Signup-Review">{formData.height}</p>
            </div>
            <div className="form-field">
              <label className="label-main">DOB</label>
              <p className="Signup-Review">{formData.dob}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Married Status</label>
              <p className="Signup-Review">{formData.maritalstatus}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Password</label>
              <p className="Signup-Review">{formData.password}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Family Head</label>
              <p className="Signup-Review">{formData.FamilyHead}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Family Head Occupation</label>
              <p className="Signup-Review">{formData.FamilyHeadOccupation}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Brothers</label>
              <p className="Signup-Review">{formData.siblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Sisters</label>
              <p className="Signup-Review">{formData.Sistersiblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Belong(Pehchan)</label>
              <p className="Signup-Review">{formData.pehchan}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Education</label>
              <p className="Signup-Review">{formData.education}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Working</label>
              <p className="Signup-Review">{formData.working}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Annual Income</label>
              <p className="Signup-Review">{formData.annualIncome}</p>
            </div>
            <div className="form-field">
              <label className="label-main">House</label>
              <p className="Signup-Review">{formData.house}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Phone</label>
              <p className="Signup-Review">{formData.phone}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Email</label>
              <p className="Signup-Review">
                {formData.email.length > 13
                  ? formData.email.slice(0, 13) + "..."
                  : formData.email}
              </p>
            </div>
            <div className="form-field">
              <label className="label-main">Area</label>
              <p className="Signup-Review">{formData.area}</p>
            </div>
            <div className="form-field">
              <label className="label-main">City</label>
              <p className="Signup-Review">{formData.city}</p>
            </div>
            <div className="form-field">
              <label className="label-main">State</label>
              <p className="Signup-Review">{formData.state}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Pin Code</label>
              <p className="Signup-Review">{formData.pin}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Country</label>
              <p className="Signup-Review">{formData.country}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Budget</label>
              <p className="Signup-Review">{formData.weddingBudget}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Style</label>
              <p className="Signup-Review">{formData.weddingStyle}</p>
            </div>
            <div className="form-field">
              <label htmlFor="ProfilePhoto" className="label-main">
                Upload Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="submit-btn login-page-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="submit-btn login-page-btn bg-secondary mt-1"
          onClick={() => goToTab(2)}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default Review;
