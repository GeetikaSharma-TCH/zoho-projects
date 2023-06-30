import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
const BugsPage = () => {
    return ( 
        <div>
            <Header/>
             <div className="flex flex-nowrap">
                <div><LeftSidebar/></div>
                <div className="w-[900px] bg-pink-50">Bugs Page</div>
            </div>
        </div>
           
    );
}
export default BugsPage;