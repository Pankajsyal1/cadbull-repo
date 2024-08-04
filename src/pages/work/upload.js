import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";
import UploadFiles from "@/components/UploadFile";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const UploadWork = () => {
  return (
    <Fragment>
      <Head>
        <title>Upload Work | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>

      <section className="py-lg-5 py-4 auth-page">
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-12">
              <PageHeading title={"Upload Work"} description={"Simple. Fast. Beautiful."} />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9 col-xl-7">
              <form>
                <div className="mb-4 mb-md-5">
                  <UploadFiles acceptedFiles="If you a file in a .zip format, by uploading it here" />
                </div>
                <div className="row mb-4 mb-md-5 g-3">
                  {/* Work Title */}
                  <div className="col-lg-12">
                    <div>
                      <label>Work Title</label>
                    </div>
                    <p className="mb-1 text-gray">250 characters max</p>
                    <input type="text" className="form-control" placeholder="Enter Your Work Title" value="" />
                  </div>
                  {/* Description */}
                  <div className="col-lg-12">
                    <div>
                      <label>Description</label>
                    </div>
                    <QuillNoSSRWrapper theme="snow" placeholder="The clearer and shorter the better" />

                  </div>
                  {/* File Type */}
                  <div className="col-lg-6">
                    <div>
                      <label>File Type</label>
                    </div>
                    <select className="form-select" aria-label="Role">
                      <option value="0">Select File Type</option>
                      <option value="1">3D Max</option>
                      <option value="2">3D Max</option>
                      <option value="3">3D Max</option>
                    </select>
                  </div>
                  {/* Category */}
                  <div className="col-lg-6">
                    <div>
                      <label>Category</label>
                    </div>
                    <select className="form-select" aria-label="Role">
                      <option value="0">Select Category</option>
                      <option value="1">3D Max</option>
                      <option value="2">Architect</option>
                      <option value="3">Architect</option>
                    </select>
                  </div>
                  {/* Subcategory */}
                  <div className="col-lg-6">
                    <div>
                      <label>Subcategory</label>
                    </div>
                    <select className="form-select" aria-label="Role">
                      <option value="0">Select Subcategory</option>
                      <option value="1">Architect</option>
                      <option value="2">Architect</option>
                      <option value="3">Architect</option>
                    </select>
                  </div>
                  {/* Keyword */}
                  <div className="col-lg-6">
                    <div>
                      <label>Keyword</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Keyword" value="" />
                  </div>
                </div>
                <div className="mb-4 mb-md-5">
                  <div>
                    <label className="mb-2">Upload Image</label>
                  </div>
                  <UploadFiles />
                </div>
                <div className="text-end">
                  <button data-aos="flip-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                    data-aos-duration="500" className="btn btn-secondary col-12 col-sm-4 col-md-3">SUBMIT WORK</button>
                </div>
              </form>
            </div>
          </div >
        </div >
      </section >
    </Fragment >
  );
}

UploadWork.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default UploadWork;