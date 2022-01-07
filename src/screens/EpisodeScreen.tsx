import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';

const EpisodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Contact Screen');
    const { navigation, route } = props;

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    return (
        <View style={styles.container}>
            <Text>Episode screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default EpisodeScreen;
