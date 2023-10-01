import { Link, Outlet, useLocation } from "react-router-dom";

import LinkButton from "../components/LinkButton";

export default function Layout({}) {
    const location = useLocation();
    return (
        <div>
            <aside>
                <img src="" alt="" />
                <nav><ul>
                    <li><Link to={'/'}><LinkButton active={location.pathname === '/'}>
                        Home
                    </LinkButton></Link></li>
                </ul></nav>
            </aside>
        </div>
    );
}