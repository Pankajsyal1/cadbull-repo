import MainLayout from "@/layouts/MainLayout";
import Icons from "@/components/Icons";
import flag from "@/assets/icons/flag.png";
import Head from "next/head";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";


const DesignerProfile = () => {
  return (
    <Fragment>
      <Head>
        <title>Designer Profile | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>

      <section className="py-lg-5 py-4 profile-page designer-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PageHeading title={"Designer Profile"} description={"Choose from 254195+ Free & Premium CAD Files with new additions published every second month."} />
            </div>
          </div>
          {/* Form */}
          <div>
            <form>
              <div className="form-wrapper rounded-xxl p-4 p-md-5 mb-md-5 mb-4">
                <div className="row g-3">
                  {/* Personal Information */}
                  <div className="col-lg-12">
                    <div className="mt-3">
                      <h5 className="text-primary">Personal <span className="fw-bold">Information</span></h5>
                    </div>
                  </div>
                  {/* First Name */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>First Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your First Name" value="Zaha Hadid" />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Last Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Last Name" value="LLP" />
                  </div>
                  {/* Email  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Email />
                      <label>Email Address</label>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" value="technical.elenationllp@gmail.com" />
                  </div>
                  {/* Mobile  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Phone />
                      <label>Mobile</label>
                    </div>
                    <div className="input-group">
                      <div className="input-group-text pe-0 bg-white">
                        <div className="dropdown">
                          <button className="dropdown-toggle border-0 bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={flag.src} width={24} alt="profile" /> <span> +91</span>
                          </button>
                          <ul className="dropdown-menu  border-0 shadow-lg pt-1 mt-2">
                            <li><a className="dropdown-item">+92</a></li>
                            <li><a className="dropdown-item">+93</a></li>
                            <li><a className="dropdown-item">+93</a></li>
                          </ul>
                        </div>
                      </div>
                      <input type="text" className="ps-1 border-start-0 form-control" placeholder="Enter Your Mobile" value="989 874 8697" />
                    </div>
                  </div>
                  {/* Awards  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Awards />
                      <label>Awards</label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="text" className="form-control" placeholder="Type of awards name" value="" />
                      <input type="date" className="form-control" placeholder="Select of Year" value="" />
                    </div>
                  </div>
                  {/* Address  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Address />
                      <label>Address</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Address" value="403 Fortune Business Hub, Beside Science City, Science City Road Sola," />
                  </div>
                  {/* City */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Building />
                      <label>City</label>
                    </div>
                    <select defaultValue="Gujrat" className="form-select" aria-label="City">
                      <option value="0">Select City</option>
                      <option value="1">Mohali</option>
                      <option value="2">Shimla</option>
                      <option value="3">Gujrat</option>
                    </select>
                  </div>
                  {/* State */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Building />
                      <label>State</label>
                    </div>
                    <select defaultValue="Ahmedabad" className="form-select" aria-label="State">
                      <option value="0">Select State</option>
                      <option value="1">Punjab</option>
                      <option value="2">Himachal</option>
                      <option value="3">Ahmedabad</option>
                    </select>
                  </div>
                  {/* Zipcode  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Zipcode />
                      <label>Zipcode</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Zipcode" value="362720" />
                  </div>
                  {/* Country  */}
                  <div className="col-lg-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Map />
                      <label>Country</label>
                    </div>
                    <div className="input-group w-100 select-country">
                      <div className="input-group-text pe-0 bg-white w-100">
                        <div className="dropdown w-100 text-start">
                          <button className="dropdown-toggle border-0 bg-white w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={flag.src} width={24} alt="profile" />
                            <span className="ms-2">India</span>
                          </button>
                          <ul className="dropdown-menu  border-0 shadow-lg pt-1 mt-2 w-100">
                            <li><a className="dropdown-item">
                              <img src={flag.src} width={24} alt="profile" />
                              <span className="ms-2">India</span>
                            </a></li>
                            <li><a className="dropdown-item">
                              <img src={flag.src} width={24} alt="profile" />
                              <span className="ms-2">India</span></a></li>
                            <li><a className="dropdown-item">
                              <img src={flag.src} width={24} alt="profile" />
                              <span className="ms-2">India</span></a></li >
                          </ul >
                        </div >
                      </div >
                    </div >
                  </div >

                  {/* Gender */}
                  < div className="col-lg-6" >
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Gender</label>
                    </div>
                    <select defaultValue="Male" className="form-select" aria-label="State">
                      <option value="0">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div >
                  {/* Birth Date */}
                  < div className="col-lg-6" >
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.DOB />
                      <label>Birth Date</label>
                    </div>
                    <input type="date" className="form-control" placeholder="Enter Birth Date" value="20 Feb, 2023" />
                  </div >
                  {/* Occupation */}
                  < div className="col-lg-6" >
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Occupation</label>
                    </div>
                    <select defaultValue="Architect" className="form-select" aria-label="State">
                      <option value="0">Select Occupation</option>
                      <option value="1">Architect</option>
                      <option value="2">Designer</option>
                    </select>
                  </div >
                  {/* Interest */}
                  < div className="col-lg-6" >
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Interest />
                      <label>Interest</label>
                    </div>
                    <select defaultValue="Academics community" className="form-select" aria-label="State">
                      <option value="0">Select Interest</option>
                      <option value="1">Academics community</option>
                      <option value="2">Academics community</option>
                    </select>
                  </div >
                  {/* Summary */}
                  < div className="col-lg-12" >
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Edit />
                      <label>Summary</label>
                    </div>
                    <textarea className="form-control" placeholder="Write Summary" ></textarea >
                  </div >
                  <div className="col-12 col-md-4 col-lg-3 col-xl-2 form-button-group">
                    <div className="mt-2 mt-md-3">
                      <button type="submit" className="btn btn-secondary rounded-2 w-100">Create Profile</button>
                    </div>
                  </div>
                </div >
              </div >
            </form >
          </div >
        </div >
      </section >
    </Fragment >
  );
}

DesignerProfile.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default DesignerProfile;