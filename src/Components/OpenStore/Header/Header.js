import "./Header.css";
import flag from "../../../img/Logo/silkVietnam.png";

function Header() {
  return (
    <div className="header">
      <div className="button_li">
        <a href="/">
          <img src={flag} htmlFor="i3" alt="" className="flagVN" />
        </a>
        <div className="logo font-3">
          <div className="decoration" htmlFor="i3">
            VI
          </div>{" "}
          &nbsp;
          <div className="decoration" htmlFor="i3">
            US
          </div>
        </div>
        <div className="logo-space"></div>
        <label
          className="button-navbar1 fas fa-arrow-left"
          htmlFor="i3"
        ></label>
        <input type="radio" name="inmage" id="i1" defaultChecked />
        <input type="radio" name="inmage" id="i2" />
        <input type="radio" name="inmage" id="i3" />

        <div className="div-of-img_li-navbar">
          <li className="li1-carousel font-2">
            FREE SHIPPING FOR MEMBERS! &nbsp;&nbsp;
            <div className="a-navbar font-0 text-color">
              Sign In or Sign up to Save.
            </div>
          </li>
          <li className="li2-carousel font-2">
            30-DAY FREE RETURNS
            <span className="span-of-li2 font-0 text-color">
              Keep what you love, return what you don't
            </span>
            &nbsp;
            <div className="a-navbar font-0 text-color">See Details.</div>
          </li>
          <li className="li3-carousel font-2">
            FREE SHIPPING FOR MEMBERS! &nbsp;&nbsp;
            <div className="a-navbar font-0 text-color">
              Sign In or Sign up to Save.
            </div>
          </li>
        </div>
        <label className="button-navbar2" htmlFor="i2"></label>
      </div>
    </div>
  );
}

export default Header;
