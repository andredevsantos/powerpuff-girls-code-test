import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import { ScrollView } from 'react-native-gesture-handler';

interface IShowObject {
    name: string,
    summary: string,
    image: {
        original: string
    }
}

interface SeasonsObject {
    seasons: [
        season: SeasonObject
    ]
}

type SeasonObject = {
    season: {
        id: number
    }
}

const defaultSeasons: object[] = [
    {
        id: 0
    }
];

const defaultData: IShowObject = {
    name: '',
    summary: '',
    image: {
        original: ''
    }
}

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Home Screen');
    const { navigation, route } = props;

    const [showData, setShowData] = useState(defaultData);
    const [showSeasons, setSeasonsData] = useState(defaultSeasons);
    const [epSelected, setEpSelected] = useState(false);

    navigation.setOptions({ title: `${showData.name}`});

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
            <View>
                <View>
                    <Image
                        source={{
                            uri: showData.image.original
                        }} />
                    <View>
                        <Text>{showData.name}</Text>
                        <Text>{showData.summary}</Text>
                    </View>
                </View>
                <View>
                </View>
            </View>
        </ScrollView>
    );
};


export default HomeScreen;