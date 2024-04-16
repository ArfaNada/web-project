import image1 from  '../assets/image1.jpg';
import Card from 'react-bootstrap/Card';
import Calendar from '../components/Calendar';
import DateTime from '../components/DateTime';
import { Link } from 'react-router-dom';
import './StudentDash.css';
import SideNavBar from '../components/SideNavBar';


function StudentDash(/*{student}*/){
    const styleContainer={
        backgroundColor: "white",
        minHeight: "100vh",
        width: "200%",
        alignItems: "ce",
        //border: "2px solid red",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginRight : "80px ",
        
    }
    const styleImage={
        borderRadius:"8px",
        width:"100%",
        height:"100%"
    }
    const styleImageDiv={
        borderRadius:"8px",
        position:"relative",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        marginBottom:"2%",
        //border:"2px solid red",
        marginTop:"4%",
        marginLeft:"0%",
        marginRight:"10%",
        marginBottom:"4%",
        width:"100%",
    }
    const styleDate={
        position:"absolute",
        top:"40%",
        right:"10%",
        fontSize:"22px"
    }
    const styleTime={
        position:"absolute",
        top:"50%",
        right:"10%",
        fontSize:"22px"
    }
    const styleBoxcontainer={
        width:"100%",
        display:"flex",
        flexDirection:"",
        gap:"2%",
        marginBottom:"4%"
    }
    const styleBox={
        border:"#E6E5E1",
        backgroundColor:"#E6E5E1",
        width:"50%",
        height:"100%",
        
    }
    const styleBox2={
        border:"#E0E1E5",
        backgroundColor:"#E0E1E5",
        width:"100%",
        height:"100%",
        
    }
    
    const styleIcon={
        position:"absolute",
        width:"10%",
        right:"0%",
        bottom:"0%",
    }
    const d = new Date();
    const showTime = d.getHours() 
        + ':' + d.getMinutes() 

    const styleBody={
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        
      
    }
return(

<div style={styleBody}>
        <nav style={{marginRight: "0%",justifyContent :"left",width:"100%", height:"100%"}}>
                <SideNavBar/>
        </nav>
        <div style={styleContainer}>
                
                <div style={styleImageDiv}> 
                    <img  style={styleImage} src={image1}></img>
                     <div style={styleDate}><DateTime/></div>
                </div>


                <div style={styleBoxcontainer}>

                        <Card style={styleBox}>
                            <Card.Body>
                                <Card.Title>Current Appointments:</Card.Title>
                                <Card.Text style={{fontSize:"18px"}} >
                                    {/*student.nb_appointments*/12}
                                </Card.Text>
                                <div style={{position:"relative"}}>
                                    <img style={styleIcon} src="https://static.thenounproject.com/png/1161015-200.png"></img>
                                </div>
                            </Card.Body>
                        </Card>

                        <Link to="/notifications" style={{ display: 'block', flex: 1 }}>
                            <Card style={styleBox2}>
                                <Card.Body>
                                    <Card.Title>Current requests:</Card.Title>
                                    <Card.Text style={{fontSize:"18px"}}>
                                        {/*tutor.nb_requests*/4}
                                    </Card.Text>
                                    <div style={{position:"relative"}}>
                                        <img style={styleIcon} src="https://static.thenounproject.com/png/1161015-200.png"></img>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                </div>

                <div style={{width: "100%",marginBottom: "4%",display: "flex",justifyContent: "center",}} >
                    <Calendar/>
                </div>
        </div>
</div>





)
}
export default StudentDash;
