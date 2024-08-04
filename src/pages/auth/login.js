import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Icons from "@/components/Icons";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

const pageTitle = {
  title: 'Login to Your Account',
  description: "Choose from 254195+ Free & Premium CAD Files with new additions published every second month"
}



const Register = () => {
  return (
    <Fragment>
      <Head>
        <title>Cadbull | Login</title>
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
          {/* Password */}
          <div className="col-lg-12">
            <div className="d-flex gap-2 align-items-center mb-1">
              <Icons.Password />
              <label>Password</label>
            </div>
            <input type="password" className="form-control" placeholder="8 Digit Pin" value="" />
          </div>
          {/* Forget your password? */}
          <div className="col-lg-12">
            <Link href="/auth/forgot-password" className="text-danger">Forgot your password?</Link>
          </div>
          <div className="col-lg-12">
            <div className="mt-2 mt-md-3">
              <button type="submit" className="btn btn-lg btn-secondary w-100">Login to Your Account</button>
            </div>
          </div>
        </form>
        {/* Social Button  */}
        <div className="mt-4 d-flex flex-column flex-xl-row gap-3 mb-3 mb-md-4">
          <button type="button" className="btn btn-default d-flex gap-1 align-items-center justify-content-center flex-grow-1">
            <Icons.Google />
            <span>Google</span>
          </button>
          <button type="button" className="btn btn-secondary-variant d-flex gap-1 align-items-center justify-content-center flex-grow-1">
            <Icons.Facebook />
            <span>Facebook</span>
          </button>
          <button type="button" className="btn btn-success d-flex gap-1 align-items-center justify-content-center flex-grow-1">
            <Icons.Whatsapp />
            <span>Whatsapp</span>
          </button>
        </div>
        <div className="text-center">
          <p><span>Don&apos;t have an account?</span> <Link href="/auth/register" className="text-danger">Sign Up</Link></p>
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