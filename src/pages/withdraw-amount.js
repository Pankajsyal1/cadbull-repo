import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";


const WithdrawAmount = () => {
  return (
    <Fragment>
      <Head>
        <title>Withdraw Amount | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>

      <section className="py-lg-5 py-4 auth-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PageHeading title={"Withdraw Amount"} description={"How much amount would you like to Withdraw?"} />
            </div>
          </div>

          <div className="row justify-content-center mx-2">
            <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5 form-wrapper rounded-xxl">
              <div className="p-sm-4">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-xl-12">
                    <div className="mb-3 mb-md-4 text-center">
                      <h5 className="text-primary"><span>Available balance:</span> <span>$0</span></h5>
                    </div>
                  </div>
                </div>
                <form className="row g-3 mb-3 mb-md-4 justify-content-center">
                  {/* Withdrawal Amount  */}
                  <div className="col-lg-12 col-xl-12">
                    <div>
                      <label>Withdrawal Amount</label>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter Your Withdrawal Amount" value="" />
                    <h6 className="text-primary mt-2 fw-medium">$1 USD Fee per withdrawal</h6>
                  </div>
                  <div className="col-lg-12 col-xl-12">
                    <p className="text-danger lh-sm">You must have more than 10 USD to redeem money.</p>
                  </div>
                  <div className="col-lg-12 col-xl-12">
                    <div className="mt-2 mt-md-3 d-flex flex-column gap-3 form-button-group">
                      <div className="d-flex gap-3 flex-column flex-sm-row">
                        <button type="submit" className="btn btn-lg btn-primary w-100 rounded">Submit Withdrawal</button>
                        <Link href={'/'} className="btn btn-lg btn-danger-variant  w-100">Cancel</Link>
                      </div>
                      <button type="button" className="btn btn-lg btn-secondary w-100">Add Payment Method</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

WithdrawAmount.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default WithdrawAmount;