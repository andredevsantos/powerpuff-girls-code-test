import React, { FC, useEffect, useState } from "react"
import { StyleSheet, Image, Button, Text, View } from 'react-native';
import { RemoveTags } from "../library/RemoveTags";
import { IEpisode } from "../library/ShowInterface";

export type Props = {
    episode: IEpisode,
    epSelect: Function
}

const EpisodeThumb: React.FunctionComponent<Props> = ({ episode, epSelect }) => {

    const onPressHandler = () => {
        epSelect(episode)
    }

    // Take out <p> tags and make text shorter
    const descriptionText = (text: string) => {
        let originalSummary = text;
        let cutSummary = RemoveTags(originalSummary, ['<p>', '</p>']).slice(0, 100) + '...'
        return cutSummary
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{episode.number}. {episode.name}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={{ uri: episode.image.medium }}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={{ width: 'auto', flexShrink: 1, marginBottom: 10 }}>
                    {descriptionText(episode.summary)}
                </Text>
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