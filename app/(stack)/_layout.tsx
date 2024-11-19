import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='home/index'
                options={{
                    title: "Home Screen"
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: "Products Screen"
                }}
            />

            <Stack.Screen
                name='profile/index'
                options={{
                    title: "Profile Screen"
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: "Settings Screen"
                }}
            />

        </Stack>
    )
}

export default StackLayout;