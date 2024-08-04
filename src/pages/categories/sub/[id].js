import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { Fragment } from "react";
import drawing1 from "@/assets/images/drawing-image.png";
import CategoriesLayout from "@/layouts/CategoriesLayouts";
import Icons from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import icon from "@/assets/icons/categories.png";
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

const categories = [
  {
    title: 'CAD Landscape',
    icon: icon,
    counts: '218',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  },
  {
    title: 'Fountain CAD Blocks',
    icon: icon,
    counts: '1059',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  },
  {
    title: 'Garden CAD Blocks',
    icon: icon,
    counts: '750',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  },
  {
    title: 'Public garden CAD Blocks',
    icon: icon,
    counts: '318',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  },
  {
    title: 'Garden automation',
    icon: icon,
    counts: '20,000+',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  }
  , {
    title: 'Private Garden CAD Blocks',
    icon: icon,
    counts: '200',
    url: '/categories/sub/garden-cad-blocks/',
    active: false
  }
]


const CadLandscaping = () => {
  return (
    <Fragment>
      <Head>
        <title>Cad Landscaping | Cadbull </title>
        <meta name="description" content="World Largest 2d CAD Library." />
      </Head>
      <CategoriesLayout title={"Cad Landscaping"} description={"Improving the aesthetic appearance of an area by changing its contours, adding ornamental features, or planting trees and shrubs that create beautiful landscape."} categories={categories} type={"Categories"}>
        <section>
          <div className="container">
            <div className="row mb-4 mb-md-5">
              <div className="col-lg-12">
                <div className='d-flex justify-content-between align-items-md-center flex-column flex-md-row gap-2'>
                  <div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mt-2  mt-md-0 mb-md-0">
                        <li className="breadcrumb-item"><a href="">Categories</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cad Landscaping</li>
                      </ol>
                    </nav>
                  </div>
                  <div>
                    <div className='d-flex gap-2 justify-content-end flex-column flex-md-row'>
                      <form>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <Icons.Search />
                          </span>
                          <input type="text" className="form-control  border-start-0 border-end-0 rounded-end-0 ps-0" placeholder="For e.g. House Design" aria-label="For e.g. House Design" />
                          <span className="input-group-text p-0">
                            <button type='submit' className='btn btn-secondary rounded-start-0'>SEARCH</button>
                          </span>
                        </div>
                      </form>
                      <div className="d-none d-xl-flex gap-2">
                        <div className="d-flex">
                          <span className="input-group-text bg-white border-end-0 rounded-end-0 pe-0">
                            Type :
                          </span>
                          <select defaultValue="Gold" className="form-select border-start-0  rounded-start-0" aria-label=".form-select-sm example">
                            <option value="1">Gold</option>
                            <option value="2">Silver</option>
                            <option value="3">Bronze</option>
                          </select>
                        </div>
                        {/* Sort by : DWG */}
                        <div className="d-flex">
                          <span className="input-group-text bg-white border-end-0 rounded-end-0 pe-0">
                            Sort by :
                          </span>
                          <select defaultValue="DWG" className="form-select border-start-0 rounded-start-0" aria-label=".form-select-sm example">
                            <option value="1">BIM</option>
                            <option value="2">SKP</option>
                            <option value="3">MAX</option>
                            <option value="3">3DS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {
                projects.map((project) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-4" key={project.id}>
                      <ProjectCard {...project} />
                    </div>
                  )
                })
              }
            </div>

            <Pagination />
            {/* <div className="row mt-4 justify-content-center mt-md-5">
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="text-center">
                  <Link href="" className="btn btn-secondary">BROWSE</Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </CategoriesLayout >
    </Fragment >
  );
}

CadLandscaping.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default CadLandscaping;