import TimeLine from "./TimeLine";
import { CircularProgress } from "@mui/material";
const PortoHeader = () => {
    return ( 
        <>
            <div className="header" >
                <p>PORTFOLIO IS UNDER CONSTRUCTION</p><CircularProgress />
                <br />
                <img className="avatar" src="/imgs/prof.jpg"/>
                <div className="title">
                    <h1 className="name">Mazen Elbeik</h1> <br/> <p className="profeciency"><strong>MERN STACK DEVELOPER & IoT ENGINEER</strong></p>
                </div>
                <TimeLine/>
            </div>
        </>
     );
}
 
export default PortoHeader;