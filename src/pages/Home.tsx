import React from "react";
import '../index.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <main>
      <Header/>
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: "-1" }} className="bgImage">
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundImage: "url('bg.jpg')", backgroundSize: "cover", backgroundPosition: "bottom", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: "rgba(0,0,0,0.6)"}}>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "white", fontSize: "8rem", fontWeight: "normal" }}>
          未来を創る、コードと共に。
        </span>
      </div>
      <div style={{ height: "100vh" , display:"flex" , justifyContent:"center"}}>
        <div style={{height:"100%" , display: "flex", justifyContent: "center", alignItems: "center",  flexDirection: "column" , maxWidth:"800px" , gap:"20px"  }}>
          <p style={{ color: "white", fontSize: "4rem", fontWeight: "normal" }}>未来への扉を開く、プログラミングの旅</p>
          <p style={{ color: "white", fontSize: "2rem", fontWeight: "normal" }}>
            私たちのサークルでは、プログラミングを通じて未来を創造することを信条としています。
            コーディングの力で新しい技術やアプリケーションを開発し、世界に革新をもたらすことを目指しています。
            未来のテクノロジストやイノベーターを育成するためのプラットフォームとして、一緒に学び、成長しましょう。
          </p>
        </div>
      </div>
      <div style={{ height: "100vh" , display:"flex" , justifyContent:"center"}}>
        <div style={{height:"100%" , display: "flex", justifyContent: "center", alignItems: "center",  flexDirection: "column" , maxWidth:"800px" , gap:"20px"  }}>
          <p style={{ color: "white", fontSize: "4rem", fontWeight: "normal" }}>コーディングはアート。</p>
          <p style={{ color: "white", fontSize: "2rem", fontWeight: "normal" }}>
          私たちのサークルは、コーディングを芸術と捉え、プログラミングの世界で創造性を発揮することを重視しています。
          アルゴリズムやデザインの美しさを追求し、テクノロジーを通じて感動的な体験を生み出すことに情熱を持っています。一緒に、未知の領域への探求を楽しみましょう。
          </p>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <div>
           News 
          </div>
          <div style={{ color: "white", fontSize: "8rem", fontWeight: "normal" }}>
            ほげほげほげほげ
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "white", fontSize: "8rem", fontWeight: "normal" }}>
          うんぬんかんぬん
        </span>
      </div>
      <Footer/>
    </main>
  );
}
