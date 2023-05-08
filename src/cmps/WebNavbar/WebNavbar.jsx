import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/config";
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { _resetUser } from '../../Redux/user';
// import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react';
import Avatar from '@mui/material/Avatar';

function WebNavbar(props) {
    const user = useSelector((state) => state.user.email);
    const signStatus = useSelector((state) => state.user.signStatus);
    const dispatch = useDispatch();
    console.log(user);



    // useEffect(()=>{
    //     setUser(props.user);
    // },[])

    const navigate = useNavigate();

    const handleSign =()=>{
        if(!(auth?.currentUser?.email)){
            navigate("/login");
        }else{
            signout();
        }
    }

    const signout = async()=>{
        try {
            await signOut(auth);
            dispatch(_resetUser());
        } catch (error) {
            console.log(error);
        }
        console.log(auth?.currentUser?.email);
    }



    return (
        <Navbar className='navbar'>
            <Container>
                <img src="/imgs/logo.png" alt="" style={{width: "7vh"}}/>
                {/* <Wrap>
                    <WrapItem>
                        <Avatar size='xs' name='Mazen Elbeik' src='/imgs/logo.png'/>
                    </WrapItem>
                </Wrap> */}
                <Navbar.Brand as={Link} to="/" >MeSoverse</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Image src='/imgs/guest.png' style={{width:'7vh', backgroundColor: 'white', margin: '0 10px'}} rounded/>

                    {/* <Wrap>
                        <WrapItem> */}
                            {/* <Avatar sx={{ width: 70, height: 70 }} src='/imgs/prof.jpg'/> */}
                        {/* </WrapItem>
                    </Wrap> */}

                    {/* <Navbar.Text>
                        <Link to="/signup" className='usernameOnNavbar'></Link>
                    </Navbar.Text> */}
                    <Nav>
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={user}
                        menuVariant="dark"
                        >
                        <NavDropdown.Item onClick={()=>{console.log('object')}}>Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleSign}>
                            {signStatus}
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default WebNavbar;