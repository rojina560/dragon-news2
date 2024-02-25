import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
        .then(data => setCategories(data))
    }
     
        , [])
    console.log(categories)
    return (
      <div className="space-y-4">
        {categories.map((category) => (
          <h1 className='text-center'>
            <Link key={category.id} to={`category/${category.id}`}>
              {category.name}
            </Link>
          </h1>
        ))}
      </div>
    );
};

export default LeftSideNavbar;