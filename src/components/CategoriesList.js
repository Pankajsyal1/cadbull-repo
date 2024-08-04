import Link from 'next/link'
import React from 'react'

function CategoriesList({ active, url, icon, title, counts }) {
  return (
    <li className={`d-flex justify-content-between align-items-center gap-2 ${active ? 'active' : ''}`}>
      <Link href={url} className='d-inline-flex gap-1 align-items-center'>
        <img src={icon.src} alt="icon" width={30} />
        <span className='fw-normal'>{title}</span>
      </Link>
      <p>{counts}</p>
    </li>
  )
}

export default CategoriesList