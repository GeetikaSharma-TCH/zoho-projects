import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
const ProjectsPage = () => {
    return ( 
        <div>
            <Header/>
             <div className="flex flex-nowrap">
                <div><LeftSidebar/></div>
                <div className="w-[900px] bg-pink-50">Projects Page</div>
            </div>
        </div>
           
    );
}
export default ProjectsPage;