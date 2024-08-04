import CategoriesList from "../CategoriesList";
import Icons from "../Icons";

const CategoriesDrawer = ({ categories }) => {

  return (

    <div class="offcanvas offcanvas-bottom category-drawer" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop1" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Categories</h5>
        <button type="button" class="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr className="m-0"/>
      <div class="offcanvas-body sort-by-wrapper">
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
      </div>
    </div>
  );
}

export default CategoriesDrawer;