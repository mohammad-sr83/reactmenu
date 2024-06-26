import React, { useState } from "react";


const Categories = ({cate}) => {
  const [isclick , setIsclick]=useState(false)
  return (
    <div className="btn-container">
      {cate.map((categurey)=>(
        <button
        type="button"
        // highlight class  for highlight main category
        className={isclick ? 'filter-btn highlight':'filter-btn'}
        onClick={()=>setIsclick(true)}
      >
        {categurey}
      </button>
      ))}
    </div>
  );
};

export default Categories;
