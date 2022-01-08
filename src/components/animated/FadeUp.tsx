import React, { useEffect, useRef } from "react"
import { Animated, View } from "react-native"

export type Props = {
    children: any,
    delay?: number,
    duration?: number | 10000,
    styles?: Object
}

const FadeUp = (props: Props) => {
    const opacity = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(100)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: props.duration,
                delay: props.delay,
                useNativeDriver: true
            }),
            Animated.timing(position, {
                toValue: 0,
                duration: props.duration,
                delay: props.delay,
                useNativeDriver: true
            })
        ]).start()
    }, [opacity])


    return (
        <Animated.View style={{ ...props.styles, opacity: opacity, transform: [{ translateY: position }] }}>{props.children}</Animated.View>
    )
}

export default FadeUp