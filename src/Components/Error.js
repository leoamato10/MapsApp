import { View, Text } from 'react-native'
import React from 'react'

const Error = ({ error }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>ERROR: {JSON.stringify(error)}</Text>
        </View>
    )
}

export default Error;