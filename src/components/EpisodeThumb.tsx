import React from "react"
import { StyleSheet, Image, Button, Text, View } from 'react-native';
import { RemoveTags } from "../library/RemoveTags";
import { IEpisode } from "../library/ShowInterface";
import { BodyText, SmallText } from "./styled/StyledTextComponents";

export type Props = {
    episode: IEpisode,
    epSelect: Function,
}

const EpisodeThumb: React.FunctionComponent<Props> = ({ episode, epSelect }) => {
    const episodeObj: IEpisode = {
        id: episode.id ?? Math.random(),
        name: episode.name ?? 'Name not available',
        number: episode.number ?? 0,
        image: {
            medium: episode.image?.medium ?? 'https://via.placeholder.com/150',
        },
        summary: episode.summary ?? 'Summary not available'
    }

    const onPressHandler = () => {
        epSelect(episode)
    }

    // Take out <p> tags and make text shorter
    const descriptionText = (text: string) => {
        let originalSummary = text;
        let cutSummary = RemoveTags(originalSummary).slice(0, 100) + '...'
        return cutSummary
    }

    return (
        <View style={styles.container}>
            <BodyText style={{ fontWeight: "bold" }}>{episode.number}. {episode.name}</BodyText>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={{ uri: episodeObj.image?.medium}}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <SmallText>
                    {descriptionText(episodeObj.summary)}
                </SmallText>
                <Button
                    onPress={onPressHandler}
                    title="Read more"
                    color="#C86527"
                    accessibilityLabel="Click to read more about this episode"
                />
            </View>
        </View>
    )
}

export default EpisodeThumb;

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        width: '100%',
        maxWidth: 300,
        height: 340
    },
    imageContainer: {
        width: '100%',
        marginVertical: 20
    },
    image: {
        width: '100%',
        aspectRatio: 1 * 1.8,
        resizeMode: 'cover',
        borderRadius: 5
    },
    descriptionContainer: {
        width: '100%',
        flex: 1,
        justifyContent: "space-between",
    },
})