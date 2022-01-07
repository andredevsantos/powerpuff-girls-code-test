import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Episode from "./EpisodePreview";

const styles = StyleSheet.create({
})

export type Props = {
    seasonId: number,
    seasonNumber: number,
    epSelect: Function
}

const Season: FC<Props> = ({ seasonId, seasonNumber, epSelect }) => {
    const [showDataEpisodes, setshowDataEpisodes] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (seasonId > 0) {
            fetch(`https://api.tvmaze.com/seasons/${seasonId}/episodes`)
                .then((response) => response.json())
                .then((data) => {
                    setshowDataEpisodes(data)
                })
                .catch((err) => console.log(err + 'No data found'))
        }
    }, []);

    const onPressHandler = () => {
        setIsVisible(!isVisible)
    }

    return (
        <View style={{ marginTop: 40, width: '100%' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Season {seasonNumber}</Text>
                <Button
                    title={isVisible ? 'Hide season' : 'Show season'}
                    onPress={onPressHandler}
                />
            </View>
            {isVisible && (
                // Episode list
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    
                </View>
            )}
        </View>
    )
}

export default Season;