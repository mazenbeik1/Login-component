import { Image } from "react-bootstrap";
import TimeLine from "./TimeLine";
import { CircularProgress, ImageListItemBar } from "@mui/material";
const PortoHeader = () => {
    return ( 
        <>
            <div className="header" >
                <Image className="avatar" src="/imgs/prof.jpg" roundedCircle/>
                <br />
                <div className="title">
                    <h1 className="name">Mazen Elbeik</h1> <br/> <p className="profeciency"><strong>MERN STACK DEVELOPER & IoT ENGINEER</strong></p>
                </div>
                <TimeLine/>
                <br />
                <p>PORTFOLIO IS UNDER CONSTRUCTION</p><CircularProgress color="inherit"/>
            </div>
        </>
     );
}
 
export default PortoHeader;