import React from "react";
import FadeUp from "./animated/FadeUp";
import { Text } from 'react-native';

type Props = {
    children?: any
}

const GenreTag = (props: Props) => {
    return (
        <FadeUp styles={{borderRadius: 20, paddingVertical: 8, paddingHorizontal: 20, backgroundColor: '#EBEBEB', marginBottom: 10, marginRight: 10}}>
            <Text style={{fontSize: 13, fontWeight: '400'}}>{props.children}</Text>
        </FadeUp>
    )
}

export default GenreTag;