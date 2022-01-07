import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import { useState } from 'react';

export interface IEpisode{
    name: string,
    image: {
        original: string,
    }
    season: string,
    runtime: number,
    airdate: string,
    summary: string
}

const EpisodeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Episode Screen');
    const { navigation, route } = props;
    const [epData, setEpData] = useState();

    navigation.setOptions({ title: `Episode ${route.params.number} from season ${route.params.season}` });

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    return (
        <View style={styles.container}>
            <Image
            style={{width: '100%', aspectRatio: 3/2}}
                source={{ uri: route.params.image.original }}
            />
            <Text style={styles.title}>{route.params.name}</Text>
            <Text style={styles.textDetails}>Episode {route.params.number} from season {route.params.season}</Text>
            <Text style={styles.textDetails}>Runtime: {route.params.runtime}</Text>
            <Text style={styles.textDetails}>Airdate: {route.params.airdate}</Text>
            <Text>{route.params.summary}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 6
    },
    subTitle: {
        fontSize: 20,
    },
    textDetailsSmall: {
        fontSize: 13,
        marginVertical: 6
    },
    summary: {
        fontSize: 18
    }
});

export default EpisodeScreen;