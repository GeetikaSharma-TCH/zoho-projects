'use client';
console.log('useradata==== 222')

// import axios from 'axios';

const UsersData = () => {
    console.log('useradata')
    const token = "RteCJur0Ywsk"
    const getData = () => {
        console.log('ere')
        // axios.get("https://projectsapi.zoho.in/restapi/portal/60022279860/projects/",
        // {
        //     headers: {
        //         "Authorization" : `Bearer ${token}`,
        //         "Access-Control-Allow-Headers" : "Content-Type",
        //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        //         "Access-Control-Allow-Credentials": 'true'
        //     },
        //     mode:"no-cors"
        // })
        // .then((res) => console.log('res', res))
        // .catch((err) => console.log('err', err))
        
        // https://projectsapi.zoho.in/restapi/portals/
        
        fetch(
            "https://projectsapi.zoho.in/portal/60022279860",{
                mode : "no-cors"
            }
          ) 
          .then((res) => console.log('res', res))
          .catch((err) => console.log('err', err))
           

        // fetch("https://projectsapi.zoho.in/restapi/portals/", {
        // method: "GET",
        // mode : "no-cors",
        // // body: JSON.stringify({
        // //   description,
        // // }),
        // headers: {
        //     "content-type": "application/json",
        //     "Authorization" : `Bearer ${token}`,
        // },
        // })
    }
    return ( 
        <div>
            {/* <Header></Header>
            <span>About Us Page</span> 
            <Posts></Posts> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full ml-100px mt-100px" onClick={getData}>Get Users</button>
        </div>
    );
}
 
export default UsersData;