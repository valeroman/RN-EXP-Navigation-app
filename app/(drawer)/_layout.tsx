import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,

        sceneStyle: {
          backgroundColor: 'white'
        }
      }}

    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) =>
            <Ionicons
              name='albums-outline'
              color={color}
              size={size}
            />
        }}
      />

      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          drawerIcon: ({ color, size }) =>
            <Ionicons
              name='person-circle-outline'
              color={color}
              size={size}
            />
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ color, size }) =>
            <Ionicons
              name='calendar-outline'
              color={color}
              size={size}
            />
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout;