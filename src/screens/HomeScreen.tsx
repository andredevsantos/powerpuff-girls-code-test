import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import { ScrollView } from 'react-native-gesture-handler';
import { IEpisode, IShowObject } from '../library/ShowInterface';
import Season from '../components/Season';
import { RemoveTags } from "../library/RemoveTags";
import FadeUp from '../components/animated/FadeUp';
import { BodyText, DetailText, TitleText } from '../components/styled/StyledTextComponents';
import GenreTag from '../components/GenreTag';

export interface ISeason {
    id: number,
    number: number,
}

const defaultData: IShowObject = {
    id: 0,
    summary: '',
    image: {
        original: ''
    }
}

const HomeScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
    const [logging] = useLogging('Home Screen');
    const { navigation, route } = props;

    const [showData, setShowData] = useState<IShowObject>(defaultData);
    const [showSeasons, setSeasonsData] = useState<ISeason[]>([]);

    // Sets header title
    navigation.setOptions({ title: `${showData.name}` });

    // Navigates to episode page and passes episode info
    const onEpSelect = (e: IEpisode) => {
        navigation.navigate('Episode', e)
    }

    useEffect(() => {
        logging.info({ navigation, route });
    }, [logging]);

    // Change this value to search new show
    const tvShowID = '1955'

    const tvShowURL = `https://api.tvmaze.com/shows/${tvShowID}`;
    const tvShowSeasonsURL = `${tvShowURL}/${'seasons'}`;

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


    return (
        <ScrollView style={styles.content}>
            <View style={styles.container}>
                <View style={styles.showIntroContainer}>
                    <View style={styles.showImageContainer}>
                        <Image
                            style={styles.showImage}
                            source={{
                                uri: showData.image?.original
                            }} />
                    </View>
                    <FadeUp delay={200} styles={{width: '100%', flexShrink: 1}}>
                        <TitleText>{showData.name}</TitleText>
                        <DetailText>{showData.genres?.map(e => <GenreTag>{e}</GenreTag>)}</DetailText>
                        <DetailText>Premiered: {showData.premiered}</DetailText>
                        <DetailText>Status: {showData.status}</DetailText>
                        <BodyText>
                            {RemoveTags(showData.summary)}
                        </BodyText>
                    </FadeUp>
                </View>
                <View>
                    {showSeasons.map((e, i) => {
                        return (
                            <FadeUp delay={200 * (i / 2)} >
                                <Season key={e.id} seasonId={e.id} seasonNumber={e.number} epSelect={onEpSelect} />
                            </FadeUp>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 30,
        backgroundColor: 'white',
        maxWidth: 900,
        marginHorizontal: 'auto'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    showIntroContainer: {
        width: 'auto',
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    showImageContainer: {
        width: '100%'
        // minWidth: 260
    },
    showImage: {
        resizeMode: 'cover',
        width: '100%',
        aspectRatio: 2 / 3,
        maxHeight: 400,
        borderRadius: 20,
        marginHorizontal: 'auto'
    }
});

export default HomeScreen;