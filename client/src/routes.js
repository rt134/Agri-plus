// @material-ui/icons

import ChatPage from './views/Chat/Chat'
import DashboardPage from "./views/Dashboard/Dashboard";
import ProfilePage from "./views/Profile/Profile"
import DiseaseDetectionPage from "./views/DiseaseDetection/DiseaseDetection"
import ContractFarmingPage from "./views/ContractFarming/ContractFarming"
import Foodgrains from './views/Products/FoodGrains/Foodgrains';
import Vegetables from './views/Products/Vegetables/Vegetables';
import Pesticides from './views/Products/Pesticides/Pesticides';
import Support from './views/Support/support';


// Icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import GrainIcon from '@material-ui/icons/Grain';
import EcoIcon from '@material-ui/icons/Eco';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import MessageIcon from '@material-ui/icons/Message';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import SearchIcon from '@material-ui/icons/Search';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/client",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: Person,
    component: ProfilePage,
    layout: "/client",
  },
  {
    path: "/detectdisease",
    name: "Detect disease",
    icon: SearchIcon,
    component: DiseaseDetectionPage,
    layout: "/client",
  },
  {
    path: "/freshvegetables",
    name: "Fresh vegetables",
    icon: EcoIcon,
    component: Vegetables,
    layout: "/client",
  },
  {
    path: "/farmgoods",
    name: "Farm Goods",
    icon: GrainIcon,
    component: Foodgrains,
    layout: "/client",
  },
  {
    path: "/pesticides",
    name: "Pesticides",
    icon: EmojiNatureIcon,
    component: Pesticides,
    layout: "/client",
  },
  {
    path: "/contractfarming",
    name: "Contract Farming",
    icon: LibraryBooksIcon,
    component: ContractFarmingPage,
    layout: "/client",
  },
  {
    path: "/chat",
    name: "Chat",
    icon: MessageIcon,
    component: ChatPage,
    layout: "/client",
  },
  {
    path: "/support",
    name: "Support",
    icon: PermPhoneMsgIcon,
    component: Support,
    layout: "/client",
  },
  
];

export default dashboardRoutes;
