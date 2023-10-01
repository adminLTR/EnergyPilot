import { Link, Outlet, useLocation } from "react-router-dom";

import LinkButton from "../components/LinkButton";


export default function Layout({}) {
    const location = useLocation();

    return (
        <div>
            <aside className="bg-gray-300 ">
                <img src="" alt="" />
                <nav><ul>
                    <li><Link to={'/'}><LinkButton active={location.pathname === '/'}>
                        Home
                    </LinkButton></Link></li>
                    <li><Link to={'notifications/'}><LinkButton active={location.pathname === 'notifications/'}>
                        Notifications
                    </LinkButton></Link></li>
                </ul></nav>
            </aside>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}