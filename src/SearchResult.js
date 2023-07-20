import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import React from 'react'
import "./SearchResult.css"
import StarIcon from "@material-ui/icons/StarRate";

const SearchResult = ({img, location, title, description, star, price, total}) => {
  return (
    <div className='search-result'>
         <img src={img} alt="Image"/>
         <FavoriteBorderOutlinedIcon className="search-result-heart"/>
         <div className='search-result-info'>
            <div className='search-result-infoTop'>
                 <p>{location}</p>
                 <div className='change'>
                 <h3>{title}</h3>
                 <p>________</p>
                 <p>{description}</p>
                 </div>
            </div>
            <div className='search-result-infoBottom'>
                 <div className='search-result-stars'>
                    <StarIcon className='serach-result-star' />
                     <p><strong>{star}</strong></p>

                 </div>
                 <div id='search-result-price'>
                    <h2>{price}</h2>
                    <p id="bottom">{total}</p>
                 </div>
            </div>
         </div>
    </div>
  )
}

export default SearchResult