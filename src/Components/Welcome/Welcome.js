import classes from "./Welcome.module.css";
import logo from "../../img/Logo/convease-logo.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

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
          <div
            className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["lane1-of-north"]} ${classes["son1-of-north"]}`}
            data-text="United States (EN)"
            onClick={() => navigate("/vn")}
          >
            United States (EN)
          </div>

          {/* <!-- <a href="https://www.converse.com/us" class="font-0 lane1-of-north son1-of-north" data-text="United States (EN)">United States (EN)</a> --> */}
          <div className={classes["lane2-of-north"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-north"]}`}
              onClick={() => navigate("/vn")}
            >
              Canada (EN) <span>|</span>
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-north"]}`}
              onClick={() => navigate("/vn")}
            >
              Canada (FR)
            </div>
          </div>
        </div>
        {/* <!-- EUROPE --> */}
        <div className={classes["son-of-europe"]}>
          <div className={classes["lane1-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Belgium |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Belgique |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1_2_3-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              België
            </div>
          </div>
          <div className={classes["lane2-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son4-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Denmark
            </div>
          </div>
          <div className={classes["lane3-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son5_6-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Deutschland |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son5_6-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Germany
            </div>
          </div>
          <div className={classes["lane4-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son7_8-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              España |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son7_8-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Spain
            </div>
          </div>
          <div className={classes["lane5-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son9-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Finland
            </div>
          </div>
          <div className={classes["lane6-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son10_11-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Français |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son10_11-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              France
            </div>
          </div>
          <div className={classes["lane7-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son12-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Great Britain
            </div>
          </div>
          <div className={classes["lane8-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son13-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Ireland
            </div>
          </div>
          <div className={classes["lane9-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son14_15-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Italia |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son14_15-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Italy
            </div>
          </div>
          <div className={classes["lane10-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son16_17-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Luxembourg (FR) |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son16_17-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Luxembourg (EN)
            </div>
          </div>
          <div className={classes["lane11-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son18_19-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Nederland |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son18_19-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Netherlands
            </div>
          </div>
          <div className={classes["lane12-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son20_21-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Österreich |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son20_21-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Austria
            </div>
          </div>
          <div className={classes["lane13-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son22-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Россия
            </div>
          </div>
          <div className={classes["lane14-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son23-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Polska
            </div>
          </div>
          <div className={classes["lane15-of-eu"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son24-of-eu"]}`}
              onClick={() => navigate("/vn")}
            >
              Portugal
            </div>
          </div>
        </div>
        {/* <!-- ASIA --> */}
        <div className={classes["son-of-asia"]}>
          <div className={classes["lane1-of-asia"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son1-of-asia"]}`}
              onClick={() => navigate("/vn")}
            >
              Australia
            </div>
          </div>
          <div className={classes["lane2-of-asia"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              onClick={() => navigate("/vn")}
            >
              China |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              onClick={() => navigate("/vn")}
            >
              中国
            </div>
          </div>
          <div className={classes["lane3-of-asia"]}>
            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son4_5-of-asia"]}`}
              onClick={() => navigate("/vn")}
            >
              Korea |
            </div>

            <div
              className={`${classes["font-0"]} ${classes["hover-underline"]} ${classes["son2_3-of-asia"]}`}
              onClick={() => navigate("/vn")}
            >
              대한민국
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
