import React from 'react'
import styles from "./Footer.module.css"

export default function Footer  ()  {
    return (
        <div className={styles.footer}>
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className={styles.name}>
        Made by{" "}
        <a href="https://www.youtube.com/c/RoadsideCoder" target="__blank">
          Roadside Coder
        </a>
      </span>
      <div className={styles.iconContainer}>
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/c/RoadsideCoder" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
    )
}
