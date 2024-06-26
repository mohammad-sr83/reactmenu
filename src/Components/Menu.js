import React from "react";

const Menu = ({title,price,dec,img}) => {
  return (
    <div className="section-center">
      <article className="menu-item">
        <img src={img} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{dec}</p>
        </div>
      </article>
    </div>
    
  );
};

export default Menu;
