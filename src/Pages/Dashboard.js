import { useEffect, useState } from "react";
import "../styles/css/Dashboard.css";
import {
Routes,
Route,
Link,
useNavigate,
useLocation,
Navigate,
Outlet,
} from "react-router-dom";

function Dashboard(props){
    const [userPosts,setUserPosts] = useState([])
    const [userIdd,setUserId] = useState(localStorage.getItem('userIdd'));
    
    let navigate = useNavigate();

    const SESSION_TIMEOUT = 120000; // 2 MINUTES
    // const SESSION_TIMEOUT = 10000; // 
    setTimeout(() => {
        // alert('Your Session has expired.')
        localStorage.clear();
        navigate("/");
    }, SESSION_TIMEOUT);

    // useEffect(() => {
    //     if(!userIdd)
    //     {
    //         localStorage.setItem('userIdd', props.userId)
    //         setUserId(props.userId);
    //     }
    // },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userIdd}`)
        .then(response => response.json())
        .then(data => {
            const darrr = [];
            darrr.push(data);
            setUserPosts([...darrr]);
        })
        .catch(err => console.log('error'))
    }, [])

    window.onbeforeunload = (e) => {
        // localStorage.setItem('userIdd', props.userId)
        setUserId(props.userId);
    };
return(

    <div className="wrapperOut">
        <h1>Posts for userId : {userIdd}</h1>
        <table>
            <thead>
                <tr>
                <th>Post Id</th>
                <th>Post Title</th>
                <th>PostBody</th>
                </tr>
            </thead>
            <tbody>
               {
                 userPosts.length> 0 &&   userPosts.map((tr) => {
                        return (
                            <tr key={tr.id + new Date()}>
                                <td>{tr.id}</td>
                                <td>{tr.title}</td>
                                <td>{tr.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
)
}
export default Dashboard;