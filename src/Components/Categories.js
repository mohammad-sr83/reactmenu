import React, { useState } from "react";

const Categories = ({ cate ,filtemenu}) => {

  const [click, setClick] = useState('all')
  return (
    <div className="btn-container">
      {cate.map((categurey,index) => (
        <button
          key={index}
          type="button"
          className={click == categurey ? 'filter-btn highlight' : 'filter-btn'}
          onClick={() => {
            setClick(categurey) 
            filtemenu(categurey)
          }}>
          {categurey}
        </button>
      ))}
    </div>
  );
};

export default Categories;
