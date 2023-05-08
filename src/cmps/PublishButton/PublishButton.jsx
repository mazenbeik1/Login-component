import Button from "react-bootstrap/esm/Button";

const PublishButton = (props) => {
    const topic = props.topic;
    const msg = props.msg;
    return ( 
        <Button variant={props.variant} onClick={()=>{console.log(props.topic + ' ' + props.message)}}/>
     );
}
 
export default PublishButton;