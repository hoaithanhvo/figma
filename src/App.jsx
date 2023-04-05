import { useState, useContext, useEffect } from 'react'
import styles from "./App.module.scss"
import picture1 from "../image/picture1.jpg"
function App() {

  const [count, setCount] = useState(0)
  const dem = () => {
    setCount(count + 2)
  }

  return (

    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.item1}>
          <p>DIGITAL AGENCY</p>
        </div>
        <div className={styles.item}>
          <p>home</p>
          <p>about</p>
          <p>Testimonials</p>
          <p>contsact</p>
        </div>
      </div>
      <div className={styles.hero_section}>

        <div>
          <h1 className={styles.building}>Building digital products, brands & experience</h1>
          <p className={styles.digital}>Digital Agency is your online team mangement tool that easy and prompt</p>
          <button className={styles.button}>CONTACT US</button>
        </div>
        <div>
          {/* <image></image> */}
          <img className={styles.img} src='../image/picture2.png'></img>
        </div>
      </div>
      <div className={styles.companies}>

        <p>Trusted by 4,000+ companies</p>
        <div className={styles.logos}>
          <div className={styles.company_logo}>
            <div style={{ backgroundColor: "#f5f5f5" }}><img src='../image/spotify.png'></img></div>

            {/* <img className={styles.pic} src='../image/Vector2.png'></img> */}

            <div style={{ display: "flex", justifyContent: "space-evenly", width: "200px", height: "34px", alignItems: "center" }}>
              <div style={{ position: "relative", height: "45px", textAlign: "center", }}>
                <img style={{ position: "absolute" }} className={styles.pic1} src='../image/1.png'></img>
                <img style={{ position: "absolute" }} className={styles.pic2} src='../image/2.png'></img>
                <img style={{ position: "absolute" }} className={styles.pic3} src='../image/3.png'></img>
                <img style={{ position: "absolute" }} className={styles.pic4} src='../image/4.png'></img>

              </div>
              <img src='../image/Vector2.png'></img></div>
            <div>
              <img style={{ marginRight: "5px" }} src='../image/Vector3.png'></img>
              <img src='../image/Vector3_2.png'></img>

            </div>
            <div>
              <img src='../image/Vector 4.png'></img>

            </div>

          </div>


        </div>
      </div>
      <div className={styles.branding}>
        <img className={styles.img} src='../image/picture3.png'></img>
        <div>
          <h1 className={styles.h1_branding}>
            Branding & Design system
          </h1>
          <p style={{ marginTop: "150px", position: "absolute", right: "0px", width: "365px", height: "83px", fontSize: "17px", fontWeight: "400", lineHeight: "27px" }}>
            Commonly Used In The Graphic, Rrint & Publishing Industris For Previewing Visual Layout And Mockups

          </p>
        </div>



      </div>
    </div>

  )
}

export default App
