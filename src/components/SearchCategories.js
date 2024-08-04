import React, { Fragment } from 'react'
import Icons from './Icons'
import Link from 'next/link'
import CategoriesList from './CategoriesList'
import { useRouter } from 'next/router'
import SortByDrawer from './drawer/SortByDrawer'
import CategoriesDrawer from './drawer/CategoriesDrawer'


const SearchCategories = ({ categories, type }) => {
  const router = useRouter()
  return (
    <Fragment>
      <div className='d-xl-none'>
        <ul className='list-unstyled gap-md-3 justify-content-center d-flex gap-2 gap-md-2 align-items-center justify-content-md-center'>
          <li>
            <button type='button' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"  className='link-btn d-inline-flex align-items-center'>
              <Icons.Sort />
              <span className='ms-1 fw-bold text-primary'>Sort by</span>
            </button>
          </li>
          <li className='text-grey'>|</li>
          <li>
            <button type='button' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop1" aria-controls="staticBackdrop" className='link-btn d-inline-flex align-items-center'>
              <Icons.Categories />
              <span className='ms-1 fw-bold text-primary'>Category</span>
            </button>
          </li>
          {
            (router.pathname === '/categories/sub/cad-landscaping' || router.pathname ==='/categories/sub/garden-cad-blocks' || router.pathname === '/categories/search') ?
            <Fragment>
                <li className='text-grey'>|</li>
                <li><Icons.Categories />
                  <button type='button' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop1" aria-controls="staticBackdrop" className='link-btn d-inline-flex align-items-center'>
                    <span className='ms-1 fw-bold text-primary'>Subcategory</span>
                  </button>
                </li>
            </Fragment>: ''
          }
          
        </ul>
        <hr />
        <SortByDrawer/>
        <CategoriesDrawer categories={categories}/>
      </div>
      <aside className='d-none d-xl-block'>
        <h5 className='bg-secondary text-white px-3 py-2'>{type}</h5>
        <div className='p-3'>
          <form className='mx-auto mb-3 mb-md-4'>
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">
                <Icons.Search />
              </span>
              <input type="text" className="form-control  border-start-0 ps-0" placeholder="Search categories" aria-label="Search categories" />
            </div>
          </form>
          <ul className='list-unstyled category-list-wrapper mb-0 d-flex flex-column gap-2'>
            {
              categories.map((category,index) => {
                return (
                  <CategoriesList key={index} {...category} />
                )
              })
            }
          </ul>
          <div>
          </div>
        </div>
      </aside>
    </Fragment>
  )
}

export default SearchCategories