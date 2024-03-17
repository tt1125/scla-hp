import { Link } from "react-router-dom";
import '../index.css'
import { Button } from "@mui/material";

export const Header = () => {

    return (
        <div style={{ width: "100%", height: "15rem", display: "flex", alignItems: "center", position: "fixed", justifyContent: "space-between"}}>
            <Button sx={{ marginLeft: "6rem",}}>
            <img src="scla2.png" alt="SCLA" style={{ width: "20rem", height: "6rem",  color: "white", cursor: "pointer" }} />    
            </Button>        <div>
                <div style={{marginRight:"6rem"}}>
                    <span className="hoverLine" style={{ fontSize: "2.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>About</span>
                    <span className="hoverLine" style={{ fontSize: "2.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>Event</span>
                    <span className="hoverLine" style={{ fontSize: "2.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>News</span>
                    <span className="hoverLine" style={{ fontSize: "2.5rem", color: "white", marginInline: "1rem", cursor: "pointer" }}>Contact</span>
                </div>
            </div>
        </div>
    )
}

