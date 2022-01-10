import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './src/config/routes';
import { useLogging } from './src/hooks/useLogging';

const Stack = createStackNavigator();

const App = () => {
    const [logging] = useLogging('Application');

    useEffect(() => {
        logging.info('Loading application.');
    }, [logging]);

    return (
        <NavigationContainer>
            {/* initialRouteName sets default screen */}
            <Stack.Navigator initialRouteName={'Home'}>
                {routes.map((route, index) => (
                    <Stack.Screen key={index} name={route.name} component={route.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;