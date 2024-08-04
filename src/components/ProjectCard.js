import premium from "@/assets/icons/premium.png";
import save from "@/assets/icons/save.png";
import heart from "@/assets/icons/heart.png";
import Icons from "./Icons";
import Link from "next/link";

const ProjectCard = ({ image, views, title, type, url }) => {
  return (
    <div className='project-day-card h-100' data-aos="flip-left"
      data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
      data-aos-duration="500">
      <Link className="h-100" href={url}>
        <div className='project-day-card-image mb-3 position-relative'>
          <img src={image?.src} alt="project" className='w-100 img-fluid drawing-image' />
          <div className='z-1 action-buttons-wrapper position-absolute bottom-0 end-0 d-inline-flex flex-column gap-2 pe-2 pb-2'>
            <button className='link-btn'><img src={heart.src} className='border-0' alt="icon" /></button>
            <button className='link-btn'><img src={save.src} className='border-0' alt='icon' /></button>
          </div>
        </div>
        <div className='project-day-card-description d-flex justify-content-between'>
          <p className='ps-3'>{title}</p>
          <div>
            <span className='badge bg-secondary text-white'>{type}</span>
            <div className='d-flex gap-1 mt-2 align-items-center'>
              <span><Icons.Eye /></span>
              <span className="text-grey">{views}</span>
            </div>
          </div>
        </div>
        <div className='text-end mt-2'>
          <img src={premium.src} alt="icon" className='img-fluid' />
        </div>
        <div className='project-day-card-link'>
          <p className='pe-2'>MORE DETAILS</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;