import Link from 'next/link';
import Icons from './Icons';


const Pagination = () => {
  return (
    <div className="row mt-4 mt-md-5">
      <div className="col-md-12">
        <div className='text-center'>
          <nav aria-label="Page navigation justify-content-center">
            {/* small screens  */}
            <ul className="pagination gap-3 shadow-none d-md-none">
              <li className="page-item">
                <Link className="page-link text-white d-inline-flex gap-2" href="" aria-label="Previous">
                  <span aria-hidden="true"><Icons.WhiteArrowLeft /></span>
                  <span>Previous</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link text-white d-inline-flex gap-2" href="" aria-label="Next">
                  <span>Next</span>
                  <span aria-hidden="true"><Icons.WhiteArrowRight /></span>
                </Link>
              </li>
            </ul>
            {/* large screens  */}
            <ul className="pagination d-none d-md-inline-flex">
              <li className="page-item">
                <Link className="page-link" href="" aria-label="Previous">
                  <span aria-hidden="true"><Icons.WhiteArrowLeft /></span>
                </Link>
              </li>
              <li className="page-item"><Link className="page-link" href="">1</Link></li>
              <li className="page-item"><Link className="page-link active" href="">2</Link></li>
              <li className="page-item"><Link className="page-link" href="">3</Link></li>
              <li className="page-item"><Link className="page-link" href="">4</Link></li>
              <li className="page-item"><Link className="page-link" href="">5</Link></li>
              <li className="page-item"><Link className="page-link" href="">6</Link></li>
              <li className="page-item"><Link className="page-link" href="">7</Link></li>
              <li className="page-item"><Link className="page-link" href="">8</Link></li>
              <li className="page-item"><Link className="page-link" href="">9</Link></li>
              <li className="page-item"><Link className="page-link" href="">10</Link></li>
              <li className="page-item">
                <Link className="page-link" href="" aria-label="Next">
                  <span aria-hidden="true"><Icons.WhiteArrowRight /></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}


export default Pagination;