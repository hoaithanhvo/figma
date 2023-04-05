import { useState, useContext, useEffect } from 'react'
import styles from "./App.module.scss"
import Business from './assets/picture2.png'
import Spotify from './assets/spotify.png'
import pic1 from "./assets/1.png"
import pic2 from "./assets/2.png"
import pic3 from "./assets/3.png"
import pic4 from "./assets/4.png"
import slack from "./assets/Vector2.png"
import dropbox from "./assets/Vector3.png"
import dropbox1 from "./assets/Vector3_2.png"
import zoom from "./assets/Vector4.png"
import picture3 from "./assets/picture3.png"






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
          <p>testimonials</p>
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
          <img className={styles.img} src={Business}></img>
        </div>
      </div>
      <div className={styles.companies}>

        <p>Trusted by 4,000+ companies</p>
        <div className={styles.logos}>
          <div className={styles.company_logo}>
            {/* <div style={{ backgroundColor: "#f5f5f5" }}><img src='../image/spotify.png'></img></div> */}

            <img className={styles.pic} src={Spotify}></img>

            <div style={{ display: "flex", justifyContent: "space-evenly", width: "200px", height: "34px", alignItems: "center" }}>
              <div style={{ position: "relative", height: "45px", textAlign: "center", }}>
                <img style={{ position: "absolute" }} className={styles.pic1} src={pic1}></img>
                <img style={{ position: "absolute" }} className={styles.pic2} src={pic2}></img>
                <img style={{ position: "absolute" }} className={styles.pic3} src={pic3}></img>
                <img style={{ position: "absolute" }} className={styles.pic4} src={pic4}></img>

              </div>
              <img src={slack}></img></div>
            <div>
              <img style={{ marginRight: "5px" }} src={dropbox}></img>
              <img src={dropbox1}></img>

            </div>
            <div>
              <img src={zoom}></img>

            </div>

          </div>


        </div>
      </div>
      <div className={styles.branding}>
        <img className={styles.img} src={picture3} />
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
