import Link from "next/link";
import { FaUserTie,FaRegListAlt, FaTasks,FaBoxTissue } from 'react-icons/fa';

const LeftSidebar = () => {
    return (
        <div className="w-[200px] h-[900px] bg-blue-200">
            <ul>
                <li className="text-lg font-bold font-serif p-5"><FaUserTie/><Link href="/users">Users</Link></li>
                <li className="text-lg font-bold font-serif p-5"><FaRegListAlt/><Link href="/projects">Projects</Link></li>
                <li className="text-lg font-bold font-serif p-5"><FaTasks/><Link href="/tasks">Tasks</Link></li>
                <li className="text-lg font-bold font-serif p-5"><FaBoxTissue/><Link href="/bugs">Bugs</Link></li>
            </ul>
        </div>
    );
}
 
export default LeftSidebar;