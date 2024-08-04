import GetOff from "@/components/GetOff";
import { Fragment } from "react";
import SearchCategories from "@/components/SearchCategories";
import Link from "next/link";

const CategoriesLayout = ({ children, title, description, categories, type, pageName ="Categories" }) => {

  return (
    <Fragment>

      <section className="bg-light py-md-5 py-4 category-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-12">
              <div className="text-center text-md-start" data-aos="flip-down"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                data-aos-duration="500">
                <h2 className="text-primary fw-bold mb-1">{title}</h2>
                <p>{description}</p>
              </div>
              {/* Breadcrum  */}
              <div className="mt-4" data-aos="flip-left"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
                data-aos-duration="500">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center justify-content-md-start">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div >
      </section >

      {/* Categories  */}
      < section className="py-lg-5 py-4" >
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <SearchCategories categories={categories} type={type} />
            </div>
            <div className="col-xl-9">
              {children}
            </div>
          </div>
        </div>
      </section >


      {/* Get Off  */}
      < GetOff />
    </Fragment >
  );
}

export default CategoriesLayout;