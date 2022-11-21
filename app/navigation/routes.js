import Auth from "../components/screens/Auth/Auth";
import Home from "../components/screens/Home/Home";
import Logout from "../components/screens/Logout/Logout";
import Receipts from "../components/screens/Receipts/Receipts";
import Services from "../components/screens/Services/Services";

export const routes = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Receipts',
        component: Receipts
    },
    {
        name: 'Services',
        component: Services
    },
    {
        name: 'Logout',
        component: Logout
    },
]