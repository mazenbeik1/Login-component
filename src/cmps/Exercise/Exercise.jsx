import { Image } from "react-bootstrap";

const Exercise = (props) => {
    return ( 
        <>
            <video controls width="300" height="300">
                    <source type="video/mp4" src={props.img} />
            </video>
            <p>{props.name}</p>
        </> 
    );
}
 
export default Exercise;