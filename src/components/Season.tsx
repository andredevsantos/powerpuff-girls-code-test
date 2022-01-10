import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { IEpisode } from "../library/ShowInterface";
import FadeUp from "./animated/FadeUp";
import EpisodeThumb from "./EpisodeThumb";
import { SubTitleText } from "./styled/StyledTextComponents";

export type Props = {
    seasonId: number,
    seasonNumber: number,
    epSelect: Function
}

const Season: React.FunctionComponent<Props> = ({ seasonId, seasonNumber, epSelect }) => {
    const [showDataEpisodes, setshowDataEpisodes] = useState<IEpisode[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    // Fetches single episode info
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
                <SubTitleText>Season {seasonNumber}</SubTitleText>
                <Button
                    title={isVisible ? 'Close season' : 'Open season'}
                    onPress={onPressHandler}
                />
            </View>
            {isVisible && (
                // Episode list
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', flexShrink: 1}}>
                    {showDataEpisodes.map((e, i) => {
                        return (
                            <FadeUp delay={200 * (i / 2)}>
                                <EpisodeThumb key={e.id} episode={e} epSelect={epSelect} />
                            </FadeUp>
                        )
                    })}
                </View>
            )}
        </View>
    )
}

export default Season;