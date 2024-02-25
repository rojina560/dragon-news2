import { defaults } from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {
    const {_id ,title,image_url,details,name,published_date,img} = aNews || {}
    
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {
              details.length > 200 ? <p>
                {details.slice(0, 200)}
                <Link to={`/news/${_id}`} className='text-blue-400'>Read More</Link>
              </p> : <p>{details}</p>
            }

          
          </div>
        </div>
      </div>
    );
};

export default NewsCard;