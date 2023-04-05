import { useState, useContext, useEffect } from 'react'
import styles from "./App.module.scss"
import viteLogo from './assets/picture1.jpg'
// import picture1 from "../image/picture1.jpg"
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
          <img className={styles.img} src={viteLogo}></img>
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
        <img className={styles.img} src='data:image/jpeg;base64,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'></img>
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
