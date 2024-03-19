import React from "react";
import '../index.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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
      <div style={{ height: "100vh", display: "flex", alignItems: "center" , paddingInline:"20rem"}}>
        <div style={{height:"80%", width:"50%" , borderRadius:"5%", backgroundColor:"rgba(255,255,255,0.3)"}}></div>


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
