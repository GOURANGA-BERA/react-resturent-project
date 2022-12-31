import React from "react";
import "./Resturent.css";

function Menucard({ menudata }) {
  //   console.log(menudata);
  return (
    <>
      {menudata.map((element) => {
        const { id, image, name, category, price, description } = element;
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-no">{id}</span>
                  <br />
                  <span className="card-author subtitle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <p className="card-describtion subtitle">{description}</p>
                  <div className="card-read">Read</div>
                  <div>
                    <img className="image" src={image} alt="maggi-image" />
                    <p id="order-price">Order Now{price}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Menucard;
