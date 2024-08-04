const SortByDrawer = () => {
  return (

    <div class="offcanvas offcanvas-bottom" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Sort by</h5>
        <button type="button" class="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr className="m-0"/>
      <div class="offcanvas-body sort-by-wrapper">
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>DWG </h6>
              <p className="m-0">CAD BLOCKS</p>
            </div>
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>BIM</h6>
              <p className="m-0">BIM OBJECTS</p>
            </div> 
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>SKP</h6>
              <p className="m-0">3D MODELS</p>
            </div> 
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>MAX</h6>
              <p className="m-0">3D MODELS</p>
            </div> 
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className='m-0 text-primary fw-bold lh-sm'>3DS</h6>
              <p className="m-0">3D STUDIO MAX</p>
            </div>  
            <div>
              <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortByDrawer;