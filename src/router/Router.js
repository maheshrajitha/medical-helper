import Login from '../Pages/auth/Login';
import ChannelDoctor from '../Pages/channelling/ChannelDoctor';
import PutAppoinment from '../Pages/channelling/PutAppoinment';
import MyChannellings from '../Pages/doctor/MyChannellings';
import Appoinments from '../Pages/receptionist/Appoinments';
const routes = [
    {
        path: '/',
        component: ChannelDoctor,
        nav: true,
        footer: true,
        exact : true
    },
    {
        path: '/login',
        component: Login,
        nav: true,
        footer: true,
        exact: true
    },
    {
        path: '/channel/:docId',
        component: PutAppoinment,
        nav: true,
        footer: true
    },
    {
        path: '/doctor',
        component: MyChannellings,
        nav: false,
        footer: false,
        doc: true,
        reception : false
    },
    {
        path: '/appoinments',
        component: Appoinments,
        reception: true,
    }
];

export default routes;