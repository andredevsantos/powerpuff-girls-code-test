import React from "react"
import { StyleSheet, Image, Button, Text, View } from 'react-native';
import { IEpisode } from "../library/ShowInterface";

export type Props = {
    episode: IEpisode,
    epSelect: Function
}

const EpisodeThumbnail: React.FunctionComponent<Props> = ({ episode, epSelect }) => {

    const onPressHandler = () => {
        epSelect(episode)
    }

    return (
        <View>
            <Text>{episode.number}. {episode.name}</Text>
            <View>
                <Image
                    source={{ uri: episode.image.medium }}
                />
            </View>
            <View>
                <Text style={{ width: 'auto', flexShrink: 1, marginBottom: 10 }}>
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

export default EpisodeThumbnail;