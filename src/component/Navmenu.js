import React from "react";

function Navmenu(props) {
  return (
    <div className="items">
      {props.y.map((el, i) => (
        <ul className="menu">
          <li>{el.item}</li>
          {el.subitem
            ? el.subitem.map((el, i) => (
                <ul className="dropdownMenu">
                  <li>{el}</li>
                </ul>
              ))
            : null}
        </ul>
      ))}
    </div>
  );
}
export default Navmenu;
