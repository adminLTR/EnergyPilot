import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        path: '/',
        children: [
            {
                index: true,
                element: <h2>Index</h2>
            },
            {
                path: 'notifications/',
                element: <h2>Notifications</h2>
            },
        ]
    }
]);

export default router;