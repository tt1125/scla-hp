
import React from 'react';
import { KeyboardDoubleArrowUp, X } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"



export const Footer = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (

        <div style={{ height: "30vh", border: "1px black solid", display: "flex", alignItems: "center", backgroundColor: "black", justifyContent: "space-between", paddingInline: "5rem" }}>
            <Button style={{display:"block"}}><img src="scla3.png" alt="SCLA" style={{ width: "24rem" }} /> 
            <div style={{display:"flex" , flexDirection:"column" }}>
                <p className='windowContents' style={{ color: "white", fontSize: "1rem" }}>Saga University Computer Laboratory Association</p> 
                {/* <p className='windowContents' style={{ color: "white", fontSize: "1rem"}}>コンピュータ研究会</p> */}
                </div></Button>
            <div style={{  display: "flex", flexDirection: "column" }}>
                <Button style={{ fontSize: "1.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>About ー組織ー</Button>
                <Button style={{ fontSize: "1.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>Event ー活動ー</Button>
                <Button style={{ fontSize: "1.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>News ー新着情報ー</Button>
                <Button style={{ fontSize: "1.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>Contact ー照会ー</Button>
            </div>
            <IconButton onClick={() => { window.open("https://twitter.com/saga_ucomputer", "_blank"); }} size='large' color="primary" sx={{}}>
                <X sx={{ fontSize: "4rem" }} color="primary" />
            </IconButton>
            <IconButton onClick={toTop} color="primary" sx={{ border: "1px solid", }}>
                <KeyboardDoubleArrowUp sx={{ fontSize: "4rem" }} color="primary" />
            </IconButton>
        </div>

    )
}
