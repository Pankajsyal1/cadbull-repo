import Link from "next/link";
import Icons from "../Icons";
import logo from "@/assets/images/logo.png";
import profile from "@/assets/icons/profile.png";


const links = [
  {
    url: "/", title: "HOME", active: true
  },
  {
    url: "/categories", title: "CATEGORIES", active: false
  },
  {
    url: "/work/upload", title: "UPLOAD FILE", active: false
  },
  {
    url: "/pricing", title: "PRICING", active: false
  },
  {
    url: "/house-plan", title: "HOUSE PLAN", active: false
  },
  {
    url: "/about", title: "ABOUT US", active: false
  },
  {
    url: "/contact", title: "CONTACT US", active: false
  }
]

const Header = () => {
  return (
    <header className="py-1">
      <div className="container">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <Link href="/"><img src={logo.src} alt="logo" className="logo" /></Link>
            <button className="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             
              <Link href={'/auth/login'} className="btn btn-secondary d-inline-flex d-xl-none gap-1 align-items-center text-white me-2"><Icons.User /></Link>
              <span><Icons.HamBurger /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mt-3 mt-xl-0 me-auto mb-2 mb-lg-0 mx-auto d-flex gap-lg-4 gap-3">
                {
                  links.map((link, index) => {
                    return (
                      <li className="" key={index}>
                        <Link className={`${link.active ? 'active' : ''}`} aria-current="page" href={link.url}>{link.title}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <Link href={'/auth/login'} className="d-none btn btn-secondary d-xl-inline-flex gap-1 align-items-center"><Icons.User /> <span>LOGIN</span></Link>
              <div className="dropdown-center mt-3 mt-xl-0">
                <button className="dropdown-toggle border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profile.src} alt="profile" width={30} />
                </button>
                <ul className="dropdown-menu dropdown-menu-xl-end border-0 shadow-lg pt-1 mt-2">
                  <li>
                    <Link href="/profile" className="dropdown-item d-flex gap-2 align-items-center">
                      <img src={profile.src} alt="profile" width={30} />
                      <div>
                        <h6 className="lh-sm text-black fw-bold"><small>John Cena</small></h6>
                        <p className="lh-sm"><small>johncena@gmail.com</small></p>
                      </div>
                    </Link>
                  </li>
                  <li className="dropdown-divider my-1"></li>
                  <li><Link href="/profile/edit" className="dropdown-item bg-transparent text-black"><small>Edit Profile</small></Link></li>
                  <li><Link href="/favourites" className="dropdown-item bg-transparent text-black"><small>Favourites</small></Link></li>
                  <li><Link href="/contact" className="dropdown-item bg-transparent text-black"><small>Contact Us</small></Link></li>
                  <li className="dropdown-divider my-1"></li>
                  <li><button className="dropdown-item bg-transparent text-black"><small>Logout</small></button></li>
                </ul>
              </div>
            </div>
          </div >
        </nav >
      </div >
    </header >
  );
}

export default Header;