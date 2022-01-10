import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/StackScreenProps';
import { useState } from 'react';
import { RemoveTags } from '../library/RemoveTags';
import { BodyText, DetailText, TitleText } from '../components/styled/StyledTextComponents';

export interface IEpisode {
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
    const [epData, setEpData] = useState<IEpisode>();

    // Sets header title
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
            <TitleText>{route.params.name}</TitleText>
            <DetailText>Episode {route.params.number} from season {route.params.season}</DetailText>
            <DetailText>Runtime: {route.params.runtime}</DetailText>
            <DetailText>Airdate: {route.params.airdate}</DetailText>
            <BodyText>{RemoveTags(route.params.summary)}</BodyText>
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
    textDetails: {
        fontSize: 13,
        marginVertical: 6
    },
    summary: {
        fontSize: 18
    }
});

export default EpisodeScreen;