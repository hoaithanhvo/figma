import { useState, useContext, useEffect } from "react";
import styles from "./App.module.scss";
import Business from "./assets/picture2.png";
import Spotify from "./assets/spotify.png";
import pic1 from "./assets/1.png";
import pic2 from "./assets/2.png";
import pic3 from "./assets/3.png";
import pic4 from "./assets/4.png";
import slack from "./assets/Vector2.png";
import dropbox from "./assets/Vector3.png";
import dropbox1 from "./assets/Vector3_2.png";
import zoom from "./assets/Vector4.png";
import picture3 from "./assets/picture3.png";
import menu from "./assets/menu.png";
import arrow from "./assets/Arrow 1.png";
import branding1 from "./assets/branding1.png";
import man1 from "./assets/man1.png";
import man2 from "./assets/man2.png";
import contact from "./assets/contact.png";
import footer1 from "./assets/footer1.png";
import footer2 from "./assets/footer2.png";
import footer3 from "./assets/footer3.png";
import footer4 from "./assets/footer4.png";

function App() {


  return (
    <div className={styles.container}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className={styles.navbar}>
        <div className={styles.item1}>
          <p>DIGITAL AGENCY</p>
        </div>
        <div className={styles.item}>
          <p>home</p>
          <p>about</p>
          <p>testimonials</p>
          <p>contsact</p>
        </div>
        <div className={styles.menu}>
          <img className={styles.menu_logo} style={{ width: "24px", height: "24px" }} src={menu}></img>
        </div>
      </div>
      <div className={styles.hero_section}>
        <div>
          <h1 className={styles.building}>
            Building digital products, brands & experience
          </h1>
          <p className={styles.digital}>
            Digital Agency is your online team mangement tool that easy and
            prompt
          </p>
          <button className={styles.button}>CONTACT US</button>
        </div>
        <div>
          {/* <image></image> */}
          <img className={styles.img} src={Business}></img>
        </div>
      </div>
      <div className={styles.companies}>
        <p>Trusted by 4,000+ companies</p>
        <div className={styles.logos}>
          <div className={styles.company_logo}>
            <img className={styles.pic} src={Spotify}></img>

            <div
              className={styles.puzzle}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                height: "34px",
                alignItems: "center",
              }}
            >
              <div
                className={styles.puzzle_item}
                style={{ position: "relative", textAlign: "center" }}
              >
                <img
                  style={{ position: "absolute" }}
                  className={styles.pic1}
                  src={pic1}
                ></img>
                <img
                  style={{ position: "absolute" }}
                  className={styles.pic2}
                  src={pic2}
                ></img>
                <img
                  style={{ position: "absolute" }}
                  className={styles.pic3}
                  src={pic3}
                ></img>
                <img
                  style={{ position: "absolute" }}
                  className={styles.pic4}
                  src={pic4}
                ></img>
              </div>
              <img className={styles.slack} src={slack}></img>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className={styles.dropbox}
                style={{ marginRight: "5px" }}
                src={dropbox}
              ></img>
              <img className={styles.dropbox1} src={dropbox1}></img>
            </div>
            <div>
              <img className={styles.zoom} src={zoom}></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.branding}>
        <img className={styles.img} src={picture3} />
        <div>
          <h1 className={styles.h1_branding}>Branding & Design system</h1>
          <p className={styles.commonly}>
            Commonly Used In The Graphic, Rrint & Publishing Industris For
            Previewing Visual Layout And Mockups
          </p>
          <img className={styles.arrow} src={arrow}></img>
        </div>
      </div>
      <div className={styles.branding1}>
        <div>
          <h1 className={styles.h1_branding}>Custome & Plugin Development</h1>
          <p className={styles.commonly}>
            Commonly Used In The Graphic, Rrint & Publishing Industris For
            Previewing Visual Layout And Mockups
          </p>
          <img className={styles.arrow} src={arrow}></img>
        </div>

        <img className={styles.img} src={branding1} />
      </div>
      <div className={styles.test}>
        <p style={{ fontSize: "16px" }}>TESTIMONIALS</p>
        <h1 className={styles.read}>Read What Other Have To Say</h1>
        <div className={styles.testimonial}>
          <div className={styles.name_item}>
            <img className={styles.man1} src={man1}></img>
            <p className={styles.name}>Andrew Rathore</p>
            <p className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
          <div className={styles.name_item}>
            <img className={styles.man1} src={man2}></img>
            <p className={styles.name}>Vera Duncan</p>
            <p className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
          <div className={styles.name_item}>
            <img className={styles.man1} src={man1}></img>
            <p className={styles.name}>Mark Smith</p>
            <p className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <img className={styles.img} src={contact}></img>
        <div className={styles.box}>
          <h1 className={styles.text}>Be A Part Of The Next Big Thing</h1>
          <p className={styles.text1}>
            We work with Brans, Startups, to SMEs. Colaborate for more impact
            and growt
          </p>
          <button className={styles.button}>CONTACT US</button>
        </div>
      </div>
      <>

      </>
      <div className={styles.footer}>
        <div className={styles.text0}>
          <h4 className={styles.text1}>Digital Agency</h4>
          <p className={styles.text2}>
            Building digital products, brands & experience
          </p>
        </div>
        <div className={styles.text}>
          <h4 className={styles.text1}>Resources</h4>
          <div className={styles.text2}>
            <p>Guides</p>
            <p>Blog</p>
            <p>Cuistomer Stories</p>
            <p>Glossery</p>
          </div>
        </div>
        <div className={styles.text}>
          <h4 className={styles.text1}>Company</h4>
          <div className={styles.text2}>
            <p>About Us</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={styles.text}>
          <h4 className={styles.text1}>Social Media</h4>
          <div className={styles.text2}>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <p className={styles.bottom}>© Matheus. Todos os direitos reservados</p>
    </div>
  );
}

export default App;
