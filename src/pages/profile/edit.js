import MainLayout from "@/layouts/MainLayout";
import Icons from "@/components/Icons";
import profile from "@/assets/icons/profile.png";
import upload from "@/assets/icons/upload.png";
import flag from "@/assets/icons/flag.png";
import Head from "next/head";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";


const EditProfile = () => {
  return (
    <Fragment>
      <Head>
        <title>Edit Profile | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>

      <section className="py-lg-5 py-4 profile-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PageHeading title={"Edit Profile"} description={"Choose from 254195+ Free & Premium CAD Files with new additions published every second month."} />
            </div>
          </div>
          {/* Form */}
          <div>
            <form>
              <div className="form-wrapper rounded-xxl p-3 p-md-4 p-lg-5 mb-md-4 mb-3">
                <div className="row g-3">
                  {/* Upload Profile Image */}
                  <div className="col-lg-12">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="position-relative d-inline-block">
                        <img src={profile.src} width={80} alt="profile" />
                        <div className="upload-icon-wraper position-absolute end-0 bottom-0">
                          <input type="file" className="opacity-0" />
                          <div className="icon-upload">
                            <img src={upload.src} width={24} alt="profile" />
                          </div>
                        </div>
                      </div>
                      {/* Profile Detail  */}
                      <div>
                        <h4 className="text-primary">Elenation <span className="fw-bold">LLP</span></h4>
                        <p>manage your personal information, password and more</p>
                      </div>
                    </div>
                  </div>
                  {/* Personal Information */}
                  <div className="col-lg-12">
                    <div className="mt-3">
                      <h5 className="text-primary">Personal  <span className="fw-bold">Information</span></h5>
                    </div>
                  </div>
                  {/* First Name */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>First Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your First Name" value="EleNatioN" />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Last Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Last Name" value="LLP" />
                  </div>
                  {/* Email  */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Email />
                      <label>Email Address</label>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" value="technical.elenationllp@gmail.com" />
                  </div>
                  {/* PayPal ID  */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.PayPal />
                      <label>PayPal ID</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your PayPal ID" value="456987" />
                  </div>
                  {/* Mobile  */}
                  <div className="col-lg-6 col-md-6">
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
                  {/* Address  */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Address />
                      <label>Address</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Address" value="403 Fortune Business Hub, Beside Science City, Science City Road Sola," />
                  </div>
                  {/* City */}
                  <div className="col-lg-6 col-md-6">
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
                  <div className="col-lg-6 col-md-6">
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
                  {/* Gender */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Gender</label>
                    </div>
                    <select defaultValue="Male" className="form-select" aria-label="State">
                      <option value="0">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                  {/* Birth Date */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.DOB />
                      <label>Birth Date</label>
                    </div>
                    <input type="date" className="form-control" placeholder="Enter Birth Date" value="20 Feb, 2023" />
                  </div>
                  {/* Occupation */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Occupation</label>
                    </div>
                    <select defaultValue="Architect" className="form-select" aria-label="State">
                      <option value="0">Select Occupation</option>
                      <option value="1">Architect</option>
                      <option value="2">Designer</option>
                    </select>
                  </div>
                  {/* Interest */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Interest />
                      <label>Interest</label>
                    </div>
                    <select defaultValue="Academics community" className="form-select" aria-label="State">
                      <option value="0">Select Interest</option>
                      <option value="1">Academics community</option>
                      <option value="2">Academics community</option>
                    </select>
                  </div>
                  {/* Summary */}
                  <div className="col-lg-12">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Edit />
                      <label>Summary</label>
                    </div>
                    <textarea className="form-control" placeholder="Write Summary"></textarea>
                  </div >
                  {/* Title  */}
                  < div className="divider mt-4 mb-2" ></div >
                  <div>
                    <h5 className="text-black">Social <span >Profile</span></h5>
                  </div>
                  {/* Facebook * */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <label className="no-required">Facebook</label>
                    </div>
                    <div className="input-group">
                      <input type="url" className="form-control border-end-0" placeholder="Add Facebook Link" value="https:www.facebook.com/login" />
                      <div className="input-group-text ps-0 bg-white"> <Icons.FacebookProfile /></div>
                    </div>
                  </div>
                  {/* Twitter * */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <label className="no-required">Twitter</label>
                    </div>
                    <div className="input-group">
                      <input type="url" className="form-control border-end-0" placeholder="Add Twitter Link" value="https:www.twitter.com/login" />
                      <div className="input-group-text ps-0 bg-white"> <Icons.Twitter /></div>
                    </div>
                  </div>
                  {/* Add another social profile * */}
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <label className="no-required">Add another social profile</label>
                    </div>
                    <div className="input-group">
                      <input type="url" className="form-control border-end-0" placeholder="Add another social profile" value="www.example.com/login" />
                      <div className="input-group-text ps-0 bg-white"> <Icons.AddOutline /></div>
                    </div>
                  </div>
                </div >
              </div >

              {/* Buttons  */}
              < div className="row justify-content-center" >
                <div className="col-md-11 col-lg-8 form-button-group">
                  <div className="mt-2 mt-md-3 d-flex flex-column flex-md-row gap-3 gap-md-2" data-aos="flip-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                    data-aos-duration="500">
                    <button type="submit" className="btn btn-secondary w-100 rounded-2">Save Change</button>
                    <button type="button" className="btn btn-danger-variant  w-100">Cancel</button>
                    <button type="button" className="btn btn-primary w-100 rounded-2 btn-primary-variant{">Manage Billing</button>
                    <button type="button" className="btn btn-light-secondary w-100">Delete Account</button>
                  </div>
                </div>
              </div >
            </form >
          </div >
        </div >
      </section >
    </Fragment >
  );
}

EditProfile.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default EditProfile;