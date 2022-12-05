import LeftLink from "../LeftLink/LeftLink";
import LeftSublink from "../LeftSublink/LeftSublink";
import LeftSublinks from "../LeftSublinks/LeftSublinks";

import "./LeftLinks.scss";

const LeftLinks = () => {
  return (
    <div className="left-links">
      <LeftLink>Services</LeftLink>
      <LeftLink>Food</LeftLink>
      <LeftLink>
        Car
        <LeftSublinks>
          <LeftSublink itemLink="Fixing" />
          <LeftSublink itemLink="Washing" />
          <LeftSublink itemLink="Fuel" />
        </LeftSublinks>
      </LeftLink>
      <LeftLink>Oleg</LeftLink>
      <LeftLink>Natella</LeftLink>
      <LeftLink>Nikita</LeftLink>
      <LeftLink>Relaxation</LeftLink>
      <LeftLink>Other</LeftLink>
      <LeftLink>Unknown</LeftLink>
    </div>
  );
};
export default LeftLinks;
