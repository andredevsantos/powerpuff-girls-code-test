import { IRouteProps } from '../library/RouteProps';
import EpisodeScreen from '../screens/EpisodeScreen';
import HomeScreen from '../screens/HomeScreen';

const routes: IRouteProps[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Episode',
        component: EpisodeScreen
    }
];

export default routes;
