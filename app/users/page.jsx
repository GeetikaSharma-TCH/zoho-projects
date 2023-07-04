'use client'
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import axios from 'axios'
import UsersData from '@/app/components/usersData'; 

const UsersPage = () => {
   
    // const users = fetchUsers()
    // console.log('users',users)

    return ( 
        <div>
            <Header/>
             <div className="flex flex-nowrap">
                <div><LeftSidebar/></div>
                <div className="w-[900px] bg-pink-50">
                    Users Page
                    <UsersData/>
                </div>
            </div>
        </div>
           
    );
}
export default UsersPage;