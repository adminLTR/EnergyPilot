import { Link, Outlet, useLocation } from "react-router-dom";

import LinkButton from "../components/LinkButton";

import homeSvg from "../img/home.svg";
import alertSvg from "../img/alert.svg";
import logoutSvg from "../img/logout.svg";
import messageSvg from "../img/message.svg";
import notificationSvg from "../img/notification.svg";
import packageSvg from "../img/package.svg";
import settingsSvg from "../img/settings.svg";

export default function Layout({}) {
    const location = useLocation();

    return (
        <div className="flex h-full w-full">
            <aside className="w-2/12 sticky left-0 top-0 bg-black p-4">
                <img src="https://res.cloudinary.com/dimcnbuqs/image/upload/v1698076820/imagen_2023-10-23_104415465-PhotoRoom.png-PhotoRoom_o8m6rt.png" alt="" className="mb-20 mt-5"/>
                <nav><ul>
                    <li><Link to={'/'}><LinkButton active={location.pathname === '/'} img={homeSvg}>
                        Home
                    </LinkButton></Link></li>
                    <li><Link to={'notifications/'}><LinkButton active={location.pathname === 'notifications/'} img={notificationSvg}>
                        Notifications
                    </LinkButton></Link></li>
                    <li><Link to={'devices/'}><LinkButton active={location.pathname === 'devices/'} img={packageSvg}>
                        Devices
                    </LinkButton></Link></li>
                    <li><Link to={'smartsaver/'}><LinkButton active={location.pathname === 'smartsaver/'} img={messageSvg}>
                        SmartSaver
                    </LinkButton></Link></li>
                    <li><Link to={'settings/'}><LinkButton active={location.pathname === 'settings/'} img={settingsSvg}>
                        Settings
                    </LinkButton></Link></li>
                    <li><Link to={'about/'}><LinkButton active={location.pathname === 'about/'} img={alertSvg}>
                        About Us
                    </LinkButton></Link></li>
                    <li><Link to={'logout/'}><LinkButton active={location.pathname === 'logout/'} img={logoutSvg}>
                        Log Out
                    </LinkButton></Link></li>
                </ul></nav>
            </aside>
            <main className="w-full p-4">
                <Outlet/>
            </main>
        </div>
    );
}