import { Fragment } from "react";
import Link from "next/link";
import drawing from "@/assets/images/drawing-detail.png";
import Icons from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import FileDescription from "@/components/FileDescription";
import autoCad from "@/assets/images/filetype/dwg.png"
import cad from "@/assets/images/filetype/cad.png"
import goldblocks from "@/assets/images/filetype/dwg-yellow.png"
import drawing1 from "@/assets/images/drawing-image.png";
import ProjectCard from "@/components/ProjectCard";
import ad_1 from "@/assets/images/ad-1.png";
import ad_2 from "@/assets/images/ad-2.png";
import banner_1 from "@/assets/images/banner-1.png";
import banner_2 from "@/assets/images/banner-2.png";
import MainLayout from "@/layouts/MainLayout";
import fb from "@/assets/icons/social/fb.png";
import pin from "@/assets/icons/social/pin.png";
import link from "@/assets/icons/social/link.png";
import wp from "@/assets/icons/social/wp.png";
import gmail from "@/assets/icons/social/gmail.png";
import linkedin from "@/assets/icons/social/in.png";
import fbchat from "@/assets/icons/social/fbchat.png";
import pinit from "@/assets/icons/social/pinit.png";
import india from "@/assets/icons/social/india.png";
import Pagination from "@/components/Pagination";



const projects = [
  {
    id: 1,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  },
  {
    id: 2,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  },
  {
    id: 3,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  },
  {
    id: 4,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  },
  {
    id: 5,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  },
  {
    id: 6,
    image: drawing1,
    title: "Ground Floor Bathroom Details And Dimension Autocad Fil",
    type: "DWG",
    views: 369,
    url: '/categories/view/1'
  }
]

const social = [
  { image: fb, url: '/' },
  { image: pin, url: '/' },
  { image: link, url: '/' },
  { image: wp, url: '/' },
  { image: gmail, url: '/' },
  { image: linkedin, url: '/' },
  { image: fbchat, url: '/' },
  { image: pinit, url: '/' }
]

const ViewDrawing = ({ }) => {

  return (
    <Fragment>

      <section className="bg-light py-md-5 py-4 category-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div data-aos="flip-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                data-aos-duration="500">
                <h3 className="text-primary fw-bold">2D block of garden benches in AutoCAD drawing, CAD file, dwg file</h3>
              </div>
              {/* Breadcrum  */}
              <div className="mt-4" data-aos="flip-left"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                data-aos-duration="500">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="">Categories</Link></li>
                    <li className="breadcrumb-item"><Link href="">CAD Landscaping</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Garden CAD Blocks</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div >
      </section >

      {/* Categories  */}
      <section className="py-lg-5 py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className=" d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-1 gap-md-2 gap-xl-3 justify-content-center justify-content-md-start">
                  {social.map((res, index) => <a data-aos="flip-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                    data-aos-duration="500" key={index} href={res.url} className="link-btn">
                    <img src={res.image.src} className="img-fluid" alt="icons" />
                  </a>)

                  }
                </div>
                <div className="d-none d-md-inline-flex gap-3 align-items-center" data-aos="flip-left"
                  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                  data-aos-duration="500">
                  <button type="button" className="link-btn"><Icons.Like /></button>
                  <button type="button" className="link-btn"><Icons.Save /></button>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-light p-3 rounded-2 shadow-sm" data-aos="flip-left"
                  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                  data-aos-duration="500">
                  <img src={drawing.src} className="img-fluid" alt="drawing" />
                </div>
              </div>
              <div className="py-3 py-md-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-md-5 mb-4 shadow-sm px-5 py-3 rounded-1 border-start border-5 border-start-primary">
                        <div className="px-3">
                          <SectionHeading mainHeading={""} subHeading={" "} mainHeadingBold={"Description"} />
                          <p>This architectural drawing is a 2D block of garden benches in AutoCAD drawing, CAD file, and dwg file. For more details and information download the drawing file. Thank you for visiting our website cadbull.com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-3 mb-md-5 mb-4">
                    <FileDescription
                      bgColor={'#20325A'}
                      image={autoCad}
                      type={'File Type:'}
                      title={'AutoCAD Drawing file'}
                    />
                    <FileDescription
                      bgColor={'#3D6098'}
                      image={cad}
                      type={'Category::'}
                      title={'Cad Landscaping'}
                    />
                    <FileDescription
                      bgColor={'#5B5B5B'}
                      image={cad}
                      type={'Sub Category::'}
                      title={'Garden CAD Blocks'}
                    />
                    <FileDescription
                      bgColor={'#E9E9EB'}
                      image={goldblocks}
                      type={'Gold FIle::'}
                      title={'Garden CAD Blocks'}
                      className={'text-primary'}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="bg-white shadow-sm p-2 p-md-5" data-aos="flip-left"
                        data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                        data-aos-duration="500">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-7">
                            <div className="d-flex gap-md-3 gap-2">
                              <div className="flex-shrink-0">
                                <Icons.Avatar />
                              </div>
                              <div>
                                <h6 className="text-primary fw-semibold d-flex gap-1 align-items-center"><span>Viddhi Chajjed </span>
                                  <img src={india.src} width={22} alt="flag" /> </h6>
                                <p> <small className="text-primary mb-2">February 17, 2023 AT 2:40 AM</small>c</p>
                                <p className="d-none d-md-block">This architectural drawing is a 2D block of garden benches in AutoCAD drawing, CAD file, and dwg file. For more details and information download the drawing file.</p>
                                <div className=" mt-1 d-md-none text-start text-md-end">
                                  <Link href="/profile" className="btn btn-primary">View Profile</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-none d-md-block col-md-3 text-start text-md-end">
                            <Link href="/profile" className="btn btn-primary">View Profile</Link>
                          </div>
                          <p className="d-md-none mt-3">This architectural drawing is a 2D block of garden benches in AutoCAD drawing, CAD file, and dwg file. For more details and information download the drawing file.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-12 col-12 text-center">
                      <div className=" text-center mt-4 mt-md-5 d-inline-flex flex-column  flex-sm-row gap-2 gap-md-3">
                        <button type="button" className="btn-success-split"><span><Icons.Download /></span><span>Download</span></button>
                        <button type="button" className="btn-primary-split"><span><Icons.Add /></span><span>Add to libary</span></button>
                        <button type="button" className="btn-danger-split"><span><Icons.File /></span><span>Related Files</span></button>
                      </div>
                    </div>
                  </div>

                  <div className="py-4 py-md-5">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-4 mb-md-5 ps-5">
                          <SectionHeading subHeading={'find Latest'} mainHeading={'Similar'} mainHeadingBold={'Files'} />
                        </div>
                      </div>
                    </div>
                    <div className="row gy-4 mb-4 mb-md-5">
                      {
                        projects.map((project) => {
                          return (
                            <div className="col-md-6 col-lg-6 col-xxl-4" key={project.id}>
                              <ProjectCard {...project} />
                            </div>
                          )
                        })
                      }
                    </div>

                    <Pagination />
                    {/* <div className="row">
                      <div className="col-md-12">
                        <div className="text-center">
                          <Link href={'/categories'} className="btn btn-secondary">BROWSE</Link>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>


            </div>
            <div className="col-lg-3">
              <div className="d-flex flex-column gap-3">
                <div data-aos="flip-left"
                  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                  data-aos-duration="500">
                  <aside>
                    <h5 className='bg-secondary text-white px-3 py-2'>Search</h5>
                    <div className='p-3'>
                      <form className="d-flex gap-3 flex-column">
                        {/* Category */}
                        <div>
                          <select defaultValue="" className="form-select" aria-label="Category">
                            <option value="0">All Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                          </select>
                        </div>
                        {/* Select Sub Category */}
                        <div>
                          <select defaultValue="" className="form-select" aria-label="Sub Category">
                            <option value="0">Select Sub Category</option>
                            <option value="1">Sub Category 1</option>
                            <option value="2">Sub Category 2</option>
                            <option value="3">Sub Category 3</option>
                          </select>
                        </div>
                        {/* Category */}
                        <div>
                          <select defaultValue="" className="form-select" aria-label="Category">
                            <option value="0">All Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                          </select>
                        </div>
                        <div className="mt-2obbs">
                          <button className="btn btn-secondary w-100">Search</button>
                        </div>
                      </form>
                      <div>
                      </div>
                    </div>
                  </aside>
                </div>
                <div data-aos="flip-right"
                  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                  data-aos-duration="500">
                  <img src={banner_1.src} className="img-fluid w-100 rounded-2 shadow-sm" alt="ad" />
                </div>
                <div data-aos="flip-left"
                  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                  data-aos-duration="500">
                  <img src={banner_2.src} className="img- w-100  rounded-2 shadow-sm" alt="ad" />
                </div>
                <div>
                  <img src={ad_1.src} className="img-fluid w-100  rounded-2 shadow-sm" alt="ad" />
                </div>
                <div>
                  <img src={ad_2.src} className="img-fluid w-100  rounded-2 shadow-sm" alt="ad" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Fragment >
  );
}



ViewDrawing.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default ViewDrawing;