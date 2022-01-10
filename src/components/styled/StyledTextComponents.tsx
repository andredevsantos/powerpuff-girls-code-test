import React from 'react';
import { Text } from 'react-native';

export type Props = {
    children?: any,
    style?: object
}

export const BodyText = (props: Props) => {
    return <Text style={{ ...props.style, fontWeight: '400', fontSize: 16, marginVertical: 10, flexShrink: 1}} {...props}>{props.children}</Text>
}

export const TitleText = (props: Props) => {
    return <Text style={{ ...props.style, fontWeight: '700', fontSize: 32, marginVertical: 10, flexShrink: 1}} {...props}>{props.children}</Text>
}

export const SubTitleText = (props: Props) => {
    return <Text style={{ ...props.style, fontWeight: '600', fontSize: 20, marginVertical: 10, flexShrink: 1}} {...props}>{props.children}</Text>
}

export const DetailText = (props: Props) => {
    return <Text style={{ ...props.style, fontWeight: '500', fontSize: 14, marginVertical: 1, opacity: 0.8, flexShrink: 1}} {...props}>{props.children}</Text>
}

export const SmallText = (props: Props) => {
    return <Text style={{ ...props.style, fontWeight: '400', fontSize: 13, marginVertical: 10, flexShrink: 1}} {...props}>{props.children}</Text>
}