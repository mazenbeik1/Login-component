import Console from "../Console/Console";
import SideBar from "../Sidebar/SideBar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../firebase/config";

const Home = () => {


    const navigate = useNavigate();

	useEffect(()=>{
		if(!auth.currentUser){
			navigate('/signup');
			alert("please login first");
		}
	})

    let { id } = useParams();
    return (
        <>
            <SideBar placement='start' name='Circuits' />
            {/* <SideBar placement='end' name='Components' /> */}
            <div style={{backgroundColor: 'rgba(239, 233, 233, 0.671)', height:'70vh', width:'80vw', margin:'30px auto 30px auto', overflow: 'scroll'}}>
                <Console/>
            </div>
        </>
    )
}


export default Home;