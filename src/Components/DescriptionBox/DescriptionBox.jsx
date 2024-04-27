import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (145)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to CROWN where style meets simplicity! Discover fashion-forward collections curated for comfort and versatility. From timeless classics to trendsetting pieces, our quality craftsmanship ensures you look and feel your best. Embrace your individuality with size-inclusive options, and enjoy an effortless shopping experience on our user-friendly site. Elevate your style effortlessly shop CROWN today!</p>
            <p>"Explore CROWN your go-to destination for chic, comfortable, and on-trend fashion. From timeless essentials to statement pieces, our carefully curated collections offer quality and style. Embrace your unique look with our size-inclusive range, and enjoy a seamless shopping experience. Elevate your wardrobe with CROWN where fashion meets flair!"</p>
        </div>
    </div>
  )
}

export default DescriptionBox