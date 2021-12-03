import loginIcon from "../../../img/Icon/Account-login-ava.png";
import heartIcon from "../../../img/Icon/Heart-icon.png";
import cartIcon from "../../../img/Icon/Cart-shoping.png";
import searchIcon from "../../../img/Icon/Icon-Search-2.png";
import logo from "../../../img/Logo/convease2.logo.png";

function Navbar() {
  return (
    <div className="body-search">
      <div className="element-left">
        <img src={logo} alt="" className="logo-search" />
        {/* <input type="checkbox" id="push-header" /> */}
        <label
          htmlFor="push-header"
          className="a1 pointer hover-alpha font-2 decoration user-select"
        >
          Women
        </label>
        {/* <!-- <p1 className="a1 pointer hover-alpha font-2 decoration" >Women</p1> --> */}
        <p className="a2 pointer hover-alpha font-2 decoration">Men</p>
        <p className="a3 pointer hover-alpha font-2 decoration">Kids</p>
        <p className="a4 pointer hover-alpha font-2 decoration">Custom</p>
        <p className="a5 pointer hover-alpha font-2 decoration">
          Limited Edition
        </p>
        <p className="a6 pointer hover-alpha font-2 decoration">Sale</p>
        <p className="a7 pointer hover-alpha font-2 decoration">Explore</p>

        {/* <!-- contain of a --> */}
        <div className="contain1-a-header"></div>
        <div className="contain-a-header">
          <label
            htmlFor="push-header"
            className="label1-header font-2 pointer user-select"
          >
            X
          </label>
          <div className="a1-header"></div>
        </div>
      </div>
      <div className="element-right">
        <div className="font-2 decoration a8 ableClick">Sign In</div>
        <div>
          <img src={loginIcon} alt="" className="icon ableClick" />
        </div>
        <div>
          <img src={heartIcon} alt="" className="icon ableClick" />
        </div>
        <div>
          <img src={cartIcon} alt="" className="icon ableClick" />
        </div>
        <input type="checkbox" id="check-search" />

        <label className="search" htmlFor="check-search">
          <p className="font-2 p-search user-select">Search</p>
          <img
            src={searchIcon}
            alt=""
            className="search-icon icon user-select"
          />
        </label>
        <label className="search1" htmlFor="check-search">
          <p className="font-2 p-search user-select">X</p>
        </label>

        <div className="search-dad" htmlFor="check-search">
          <div className="overlay-search"></div>
          <div className="search-baby">
            <div className="baby-1">
              <div className="child-of-baby-1">
                <div className="child-of-baby-1-1">
                  {/* <a
                    href="https://httpstatuses.com/"
                    className="a-of-child-of-baby-1"
                  ></a> */}
                  <div className="text-of-child-of-baby-1-1 color-white font-2">
                    Shop New Arrivals
                  </div>
                </div>
                <div className="flex-child-baby1-2">
                  <div className="child-of-baby-1-2">
                    <p className="text-1-child-of-baby-1-2 font-2 color-white">
                      Best Sellers
                    </p>
                    <p
                      className="
                          text-2-child-of-baby-1-2
                          fontawesome-free-5
                          color-white
                        "
                    >
                      All your favorite styles.
                    </p>
                    <a
                      href="https://httpstatuses.com/"
                      className="
                          text-3-child-of-baby-1-2
                          font-2
                          color-white
                          decoration
                        "
                    >
                      Shop Now
                    </a>
                    {/* <a
                      href="https://httpstatuses.com/"
                      className="
                          fas
                          fa-arrow-right
                          width-arrow
                          color-white
                          decoration
                        "
                    ></a> */}
                  </div>
                  <div className="child-of-baby-1-3">
                    {/* <a
                      href="https://httpstatuses.com/"
                      className="a-of-child-of-baby-1-3"
                    ></a> */}
                    <div className="text-of-child-of-baby-1-3 font-2">
                      Customize Your Own
                    </div>
                  </div>
                </div>
              </div>

              <div className="child-of-baby-2">
                <div className="flex-child-of-baby-2-1">
                  <div className="child-of-baby-2-1">
                    <p className="text-1-child-of-baby-2-1 font-2 color-white">
                      Have a question?
                    </p>
                    <a
                      href="https://httpstatuses.com/"
                      className="
                          text-3-child-of-baby-2-1
                          font-2
                          color-white
                          decoration
                        "
                    >
                      Check out our FAQ page
                    </a>
                    {/* <a
                      href="https://httpstatuses.com/"
                      className="
                          fas
                          fa-arrow-right
                          width-arrow-2
                          color-white
                          decoration
                        "
                    ></a> */}
                  </div>
                  <div className="child-of-baby-2-2">
                    {/* <a
                      href="https://httpstatuses.com/"
                      className="a-of-child-of-baby-2-2"
                    ></a> */}
                    <div className="text-of-child-of-baby-2-2 font-2">
                      Shop Seasonal Color
                    </div>
                  </div>
                </div>
                <div className="child-of-baby-2-3">
                  {/* <a
                    href="https://httpstatuses.com/"
                    className="a-of-child-of-baby-2-3"
                  ></a> */}
                  <div className="text-of-child-of-baby-2-3 font-2">
                    Shop Archive Prints
                  </div>
                </div>
              </div>
            </div>

            <div className="baby-2">
              <div className="child-of-baby2-1">
                {/* <!-- <h2 className="h2-of-baby2-1 font-2" data-text="search">search</h2> --> */}
                <div className="form-of-baby2-1">
                  <input
                    type="email"
                    id="input-of-form-of-baby2-1"
                    autoComplete=""
                  />
                  <label
                    htmlFor="input-of-form-of-baby2-1"
                    className="label-name-of-form-of-baby2-1"
                  >
                    <span className="content-name-of-form-of-baby2-1">
                      WHAT ARE YOU LOOKING FOR
                      <img
                        src="/assets/img/Icon/Icon-Search-2.png"
                        alt=""
                        className="img-of-form-of-baby2-1"
                      />
                    </span>
                  </label>
                  <h2 className="h2-of-baby2-1 font-2" data-text="search">
                    search
                  </h2>
                </div>
              </div>

              <div className="child-of-baby2-2">
                {/* <!-- <h3 className="h3-of-baby2-2 font-2" data-text="TOP&nbsp;SEARCHES">TOP&nbsp;SEARCHES</h3> --> */}
                <ul className="ul-of-baby2-2 font-2">
                  {/* <!-- <h3 className="h3-of-baby2-2 font-2" data-text="TOP&nbsp;SEARCHES">TOP&nbsp;SEARCHES</h3> --> */}
                  <a
                    href="https://httpstatuses.com/"
                    className="decoration hover-alpha margin-a-of-baby2-2"
                  >
                    CLOTHING
                  </a>
                  <a
                    href="https://httpstatuses.com/"
                    className="decoration hover-alpha margin-a-of-baby2-2"
                  >
                    CHUCK 70
                  </a>
                  <a
                    href="https://httpstatuses.com/"
                    className="decoration hover-alpha margin-a-of-baby2-2"
                  >
                    JACK PURCELL
                  </a>
                  <a
                    href="https://httpstatuses.com/"
                    className="decoration hover-alpha margin-a-of-baby2-2"
                  >
                    SALE
                  </a>
                  <h3
                    className="h3-of-baby2-2 font-2"
                    data-text="TOP&nbsp;SEARCHES"
                  >
                    TOP&nbsp;SEARCHES
                  </h3>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
