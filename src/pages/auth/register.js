import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Icons from "@/components/Icons";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

const pageTitle = {
  title: 'Register A New Account',
  description: "Choose from 254195+ Free & Premium CAD Files with new additions published every second month"
}



const Register = () => {
  return (<Fragment>
    <Head>
      <title>Cadbull | Register</title>
      <meta name="description" content="World Largest 2d CAD Library." />
    </Head>
    <AuthLayout title={pageTitle.title} description={pageTitle.description}>

      {/* Form  */}
      <form className="row g-3 mb-3 mb-md-4">
        {/* Email  */}
        <div className="col-lg-12">
          <div className="d-flex gap-2 align-items-center mb-1">
            <Icons.Email />
            <label>Email Id</label>
          </div>
          <input type="email" className="form-control" placeholder="Enter Your Email" value="" />
        </div>
        {/* First Name  */}
        <div className="col-md-6 col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-1">
            <Icons.User />
            <label>First Name</label>
          </div>
          <input type="text" className="form-control" placeholder="Type First Name" value="" />
        </div>
        {/* Last Name  */}
        <div className="col-md-6 col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-1">
            <Icons.User />
            <label>Last Name</label>
          </div>
          <input type="text" className="form-control" placeholder="Type Last Name" value="" />
        </div>
        {/* Password */}
        <div className="col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-1">
            <Icons.Password />
            <label>Password</label>
          </div>
          <input type="password" className="form-control" placeholder="8 Digit Pin" value="" />
        </div>
        {/* Confirm Password */}
        <div className="col-lg-6">
          <div className="d-flex gap-2 align-items-center mb-1">
            <Icons.Password />
            <label>Confirm Password</label>
          </div>
          <input type="password" className="form-control" placeholder="8 Digit Pin" value="" />
        </div>
        <div className="col-lg-12">
          <div className="mt-2 mt-md-3">
            <button type="submit" className="btn btn-lg btn-secondary w-100">Register to Your Account</button>
          </div>
        </div>
      </form>
      {/* Social Button  */}
      <div className="mt-4 d-flex flex-column flex-xl-row gap-3 gap-xl-2 mb-3 mb-md-4">
        <button type="button" className="btn btn-default d-flex gap-1 align-items-center justify-content-center">
          <Icons.Google />
          <span>Login in with Google</span>
        </button>
        <button type="button" className="btn btn-secondary-variant d-flex gap-1 align-items-center justify-content-center">
          <Icons.Facebook />
          <span>Login in with Facebook</span>
        </button>
        <button type="button" className="btn btn-success d-flex gap-1 align-items-center justify-content-center">
          <Icons.Whatsapp />
          <span>Login in with Whatsapp</span>
        </button>
      </div>
      <div className="text-center">
        <p><span>Already Signed Up?</span> <Link href="/auth/login" className="text-danger">Login your account.</Link></p>
      </div>
    </AuthLayout>
  </Fragment>
  );
}

Register.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default Register;