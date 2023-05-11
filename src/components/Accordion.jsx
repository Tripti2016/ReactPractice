import { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="Accordion">
            <ul>
          <li onClick={() => handleClick(index)}>
            {item.title}
          </li></ul>
          {activeIndex === index && <div className="accordion-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
