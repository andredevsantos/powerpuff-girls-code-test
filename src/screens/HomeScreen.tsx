import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import { ScrollView } from 'react-native-gesture-handler';
import { IShowObject } from '../library/ShowInterface';

const defaultSeasons: object[] = [
    {
        id: 0
    }
];

const defaultData: IShowObject = {
    id: 0,
    image: {}
}

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Home Screen');
    const { navigation, route } = props;

    const [showData, setShowData] = useState<IShowObject>(defaultData);
    const [showSeasons, setSeasonsData] = useState(defaultSeasons);
    // const [epSelected, setEpSelected] = useState(false);

    navigation.setOptions({ title: `${showData.name}` });

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    const tvShowURL = 'https://api.tvmaze.com/shows/1955';
    const tvShowSeasonsURL = 'https://api.tvmaze.com/shows/1955/' + 'seasons';

    // API Fetch to get show description and season list
    useEffect(() => {
        Promise.all([
            fetch(tvShowURL),
            fetch(tvShowSeasonsURL)
        ]).then(async ([res, ress]) => {
            const show = await res.json()
            const seasons = await ress.json()
            return [show, seasons]
        }).then(data => {
            setShowData(data[0])
            setSeasonsData(data[1])
        })
            .catch((err) => console.log(err + 'No data found'))
    }, []);

    console.log(showData)
    console.log(showSeasons)

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.coverContainer}>
                    <Image
                        style={styles.cover}
                        source={{
                            uri: showData.image.original
                        }} />
                    <View style={{}}>
                        <Text style={styles.title}>{showData.name}</Text>
                        <Text style={styles.description}>{showData.summary}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 30,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    coverContainer: {
        width: '100%',
        marginBottom: 30,
        flex: 1,
        alignItems: 'center',
    },
    cover: {
        resizeMode: 'cover',
        width: '100%',
        aspectRatio: 2 / 3,
        maxHeight: 500,
        borderRadius: 5,
    }
});

export default HomeScreen;