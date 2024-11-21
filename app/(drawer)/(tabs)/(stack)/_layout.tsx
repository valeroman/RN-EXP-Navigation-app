import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useNavigation, router } from 'expo-router';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {

        if (canGoBack) {
            router.back();
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                //animation: 'flip'
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => {
                    const isBackEnabled = canGoBack === true; // Asegurar booleano
                    return (
                        <Ionicons
                            name={isBackEnabled ? 'arrow-back-outline' : 'grid-outline'}
                            size={20}
                            className="mr-5"
                            onPress={() => onHeaderLeftClick(isBackEnabled)}
                        />
                    );
                },
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: "Inicio"
                }}
            />

            <Stack.Screen
                name='products/index'
                options={{
                    title: "Products"
                }}
            />

            <Stack.Screen
                name='profile/index'
                options={{
                    title: "Profile"
                }}
            />

            <Stack.Screen
                name='settings/index'
                options={{
                    title: "Settings"
                }}
            />

        </Stack>
    )
}

export default StackLayout;