import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assest/star_icon.png'
import star_dull_icon from '../Assest/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdiplay-rigth">
            <h1>{product.name}</h1>
            <div className="productdisplay-rigth-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-rigth-prices">
                <div className="productdisplay-rigth-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-rigth-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-rigth-description">
                Elevate your wardrobe with the timeless appeal of our Elegant Navy Blue Button-Up Shirt. Order now and experience the perfect blend of style and comfort.
                Feel free to tailor the description based on the specific details of the clothing item you are showcasing, and add any unique selling points or features that make it stand out.
            </div>
            <div className="productdisplay-rigth-size">
                <h1>Select Size</h1>
                <div className="productdisplay-rigth-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-rigth-category'>
                <span>Category : </span>Women, T-Shirt, Crop Top  
            </p>
            <p className='productdisplay-rigth-category'>
                <span>Tags : </span> Modern, Latest
            </p>
            
        </div>
    </div>
  )
}

export default ProductDisplay