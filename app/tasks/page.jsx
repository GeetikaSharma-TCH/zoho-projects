'use client';
import axios from "axios";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
const TaskPage = () => {
    const fetchUsers = () => {
        console.log('asdasd')
        fetch('http://localhost:3000/api/user-data')
        .then((response) => console.log('response', response))
        .catch((error) => console.log('error', error))
    }
    return ( 
        <div>
            <Header/>
             <div className="flex flex-nowrap">
                <div><LeftSidebar/></div>
                <div className="w-[900px] bg-pink-50" onClick={fetchUsers}>Task Page</div>
            </div>
        </div>
           
    );
}
export default TaskPage;