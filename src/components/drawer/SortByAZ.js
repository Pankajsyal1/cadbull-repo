const SortByAZ = () => {
  return (

    <div class="offcanvas offcanvas-bottom" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop3" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Sort by</h5>
        <button type="button" class="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr className="m-0"/>
      <div class="offcanvas-body sort-by-wrapper">
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>A to Z </h6>
            </div>
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>Z to A</h6>
            </div> 
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortByAZ;