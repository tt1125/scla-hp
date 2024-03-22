import React from "react";
import '../index.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Padding } from "@mui/icons-material";

export const Home = () => {
  return (
    <main>
      <Header />
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: "-1" }} className="bgImage">
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundImage: "url('bg.jpg')", backgroundSize: "cover", backgroundPosition: "bottom", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: "rgba(0,0,0,0.6)" }}>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "white", fontSize: "8rem", fontWeight: "normal" }}>
          ほげほげほげほげほげ
        </span>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
        <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "800px", gap: "20px" }}>
          <p style={{ color: "white", fontSize: "4rem", fontWeight: "normal" }}>ほげほげほげほげほげほげほげ</p>
          <p style={{ color: "white", fontSize: "2rem", fontWeight: "normal" }}>
            ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
            ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
          </p>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
        <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "800px", gap: "20px" }}>
          <p style={{ color: "white", fontSize: "4rem", fontWeight: "normal" }}>ほげほげほげほげほげほげほげほげほげ</p>
          <p style={{ color: "white", fontSize: "2rem", fontWeight: "normal" }}>
            ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
            ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
          </p>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: "white", fontSize: "3rem", marginRight: "auto", marginLeft: "12rem", marginBottom: "8rem" }}>Find out about us</p>
        <div style={{ height: "60%", width: "100%", backgroundColor: "rgba(255,255,255,0.2)" }}>
          <div style={{ height: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ paddingLeft: "10rem" }}>
              <p style={{ color: "white", fontSize: "2rem" }}>Uniting Passion, Creativity, and Community</p>
              <p style={{ color: "white", fontSize: "2rem" }}>ー組織詳細へー</p>
            </div>
            <img src="about.jpg" alt="" style={{ height: "100%" }} />
          </div>
        </div>

      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "white", fontSize: "8rem", fontWeight: "normal" }}>
          うんぬんかんぬん
        </span>
      </div>
      <Footer />
    </main>
  );
}
