import classes from "./Welcome.module.css";
import logo from "../../img/Logo/convease-logo.png";

function Welcome() {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <div id={classes.header}>
        <img className={classes["converse-img"]} src={logo} alt="" />
      </div>
      <div
        id="text0"
        data-text="Select Country & Language"
        className={`${classes["text-header"]} ${classes["font-2"]}`}
      >
        Select Country & Language
      </div>
      <div className={classes["height-text"]}>
        <div
          data-text="NORTH AMERICA"
          className={`${classes["font-1"]} ${classes.text1}`}
        >
          NORTH
          <br />
          AMERICA
        </div>
        <div
          data-text="EUROPE"
          className={`${classes["font-1"]} ${classes.text2}`}
        >
          EUROPE
        </div>
        <div
          data-text="ASIA PACIFIC"
          className={`${classes["font-1"]} ${classes.text3}`}
        >
          ASIA
          <br />
          PACIFIC
        </div>
      </div>
      {/* <!-- TEXT COUNTRY --> */}
      <div className={classes["text-country"]}>
        {/* <!-- NORTH --> */}
        <div className={classes["son-of-north"]}>
          <a href="/vn">
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["lane1-of-north"]} ${classes["son1-of-north"]}`}
              data-text="United States (EN)"
            >
              United States (EN)
            </div>
          </a>
          {/* <!-- <a href="https://www.converse.com/us" class="font-0 lane1-of-north son1-of-north" data-text="United States (EN)">United States (EN)</a> --> */}
          <div className={classes["lane2-of-north"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-north"]}`}
              >
                Canada (EN) <span>|</span>
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-north"]}`}
              >
                Canada (FR)
              </div>
            </a>
          </div>
        </div>
        {/* <!-- EUROPE --> */}
        <div className={classes["son-of-europe"]}>
          <div className={classes["lane1-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              >
                Belgium |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              >
                Belgique |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              >
                België
              </div>
            </a>
          </div>
          <div className={classes["lane2-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son4-of-eu"]}`}
              >
                Denmark
              </div>
            </a>
          </div>
          <div className={classes["lane3-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son5_6-of-eu"]}`}
              >
                Deutschland |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son5_6-of-eu"]}`}
              >
                Germany
              </div>
            </a>
          </div>
          <div className={classes["lane4-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son7_8-of-eu"]}`}
              >
                España |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son7_8-of-eu"]}`}
              >
                Spain
              </div>
            </a>
          </div>
          <div className={classes["lane5-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son9-of-eu"]}`}
              >
                Finland
              </div>
            </a>
          </div>
          <div className={classes["lane6-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son10_11-of-eu"]}`}
              >
                Français |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son10_11-of-eu"]}`}
              >
                France
              </div>
            </a>
          </div>
          <div className={classes["lane7-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son12-of-eu"]}`}
              >
                Great Britain
              </div>
            </a>
          </div>
          <div className={classes["lane8-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son13-of-eu"]}`}
              >
                Ireland
              </div>
            </a>
          </div>
          <div className={classes["lane9-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son14_15-of-eu"]}`}
              >
                Italia |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son14_15-of-eu"]}`}
              >
                Italy
              </div>
            </a>
          </div>
          <div className={classes["lane10-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son16_17-of-eu"]}`}
              >
                Luxembourg (FR) |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son16_17-of-eu"]}`}
              >
                Luxembourg (EN)
              </div>
            </a>
          </div>
          <div className={classes["lane11-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son18_19-of-eu"]}`}
              >
                Nederland |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son18_19-of-eu"]}`}
              >
                Netherlands
              </div>
            </a>
          </div>
          <div className={classes["lane12-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son20_21-of-eu"]}`}
              >
                Österreich |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son20_21-of-eu"]}`}
              >
                Austria
              </div>
            </a>
          </div>
          <div className={classes["lane13-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son22-of-eu"]}`}
              >
                Россия
              </div>
            </a>
          </div>
          <div className={classes["lane14-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son23-of-eu"]}`}
              >
                Polska
              </div>
            </a>
          </div>
          <div className={classes["lane15-of-eu"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son24-of-eu"]}`}
              >
                Portugal
              </div>
            </a>
          </div>
        </div>
        {/* <!-- ASIA --> */}
        <div className={classes["son-of-asia"]}>
          <div className={classes["lane1-of-asia"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1-of-asia"]}`}
              >
                Australia
              </div>
            </a>
          </div>
          <div className={classes["lane2-of-asia"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              >
                China |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              >
                中国
              </div>
            </a>
          </div>
          <div className={classes["lane3-of-asia"]}>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son4_5-of-asia"]}`}
              >
                Korea |
              </div>
            </a>
            <a href="/vn">
              <div
                className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              >
                대한민국
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
