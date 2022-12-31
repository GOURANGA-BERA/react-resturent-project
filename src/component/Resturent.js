import React, { useState } from "react";

import Menu from "./MenuApi";
import Menucard from "./Menucard";

function Resturent() {
  const [menudata, setmenudata] = useState(Menu);

  function breakfast(catagory) {
    const res = Menu.filter((item) => {
      return item.category === catagory;
    });
    setmenudata(res);
  }

  function Lunch(catagory) {
    const res = Menu.filter((item) => {
      return item.category === catagory;
    });
    setmenudata(res);
  }

  function Evening(catagory) {
    const res = Menu.filter((item) => {
      return item.category === catagory;
    });
    setmenudata(res);
  }

  function All() {
    setmenudata(Menu);
  }

  return (
    <>
      <div className="btn-group">
        <div className="btn">
          <button onClick={() => breakfast("breakfast")}>breakfast</button>
          <button onClick={() => Lunch("lunch")}>Lunch</button>
          <button onClick={() => Evening("evening")}>Evening</button>
          <button onClick={() => All()}>All</button>
        </div>
      </div>
      <Menucard menudata={menudata} />
    </>
  );
}

export default Resturent;
