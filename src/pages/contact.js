import MainLayout from "@/layouts/MainLayout";
import Icons from "@/components/Icons";
import flag from "@/assets/icons/flag.png";
import Head from "next/head";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";


const contactDetail = [
  {
    image: <Icons.PhoneRed/>,
    detail: "+91 989 874 8697"
  },
  {
    image: <Icons.EmailRed/>,
    detail: "support@cadbull.com"
  },
  {
    image: <Icons.AddressRed/>,
    detail: "403 Fortune Business Hub, Beside Science City Road, Sola, Ahmedabad"
  }
]

const ContactUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>
      <section className="py-lg-5 py-4 auth-page">
        <div className="container">
          <div className="row mb-4 justify-content-center">
            <div className="col-xxl-10">
              <PageHeading title={"Contact Us"} description={"Choose from 254195+ Free & Premium CAD Files with new additions published every second month."} />

              <div className="text-md-center mt-3 mb-4">
                {/* Contact Detail  */}
                <ul className="d-xxl-flex justify-content-between gap-2 align-content-center mb-0">
                  {
                    contactDetail.map((res,index) => {
                      return (
                        <li data-aos="flip-up"
                          data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                          data-aos-duration="500" key={index} className="d-flex gap-2 align-items-center mb-3 mb-xxl-0">
                          <span>{res.image}</span>
                          <h6 className="text-primary fw-semibold">{res.detail}</h6>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="row mx-2 gx-4 gy-3 form-wrapper rounded-xxl align-items-center">
            <div className="col-md-12">
              <div className="mb-3 mb-md-4 p-md-4" data-aos="flip-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                data-aos-duration="500">
                <h3 className="mb-1 text-primary">
                  Get In
                  <span> Touch!</span></h3>
                <div className="d-flex gap-3 align-items-md-center flex-column flex-md-row">
                  <p className="flex-shrink-0">Tell us more about yourself and what you&apos;re got in mind </p>
                  <div className="divider flex-shrink-0 flex-grow-1 w-xs-100"></div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-lg-4">
                {/* Form  */}
                <form className="row g-3 mb-3 mb-md-4">
                  {/* First Name  */}
                  <div className="col-xl-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>First Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Type First Name" value="" />
                  </div>
                  {/* Last Name  */}
                  <div className="col-xl-6">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.User />
                      <label>Last Name</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Type Last Name" value="" />
                  </div>
                  {/* Phone Number *  */}
                  <div className="col-lg-12">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Phone />
                      <label>Phone Number</label>
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
                      <input type="text" className="ps-1 border-start-0 form-control" placeholder="Enter Your Phone Number" value="" />
                    </div>
                  </div>
                  {/* Email  */}
                  <div className="col-lg-12">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Email />
                      <label>Email Id</label>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter Your Email" value="" />
                  </div>
                  {/* Message */}
                  <div className="col-lg-12">
                    <div className="d-flex gap-2 align-items-center mb-1">
                      <Icons.Edit />
                      <label className="no-required">Message</label>
                    </div>
                    <textarea className="form-control" placeholder="Write Message"></textarea>
                  </div>

                  <div className="col-lg-12">
                    <div className="mt-2 mt-md-3">
                      <button type="submit" className="btn btn-lg btn-secondary w-100">Send Message</button>
                    </div>
                  </div>
                </form >
              </div >
            </div >
            <div className="col-md-7">
              <div className="form-wrapper-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30771532.608255956!2d61.100352727251355!3d19.70024819710164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1689752159777!5m2!1sen!2sin" className="w-100 rounded-3" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div >
        </div >
      </section >

    </Fragment >
  );
}

ContactUs.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default ContactUs;