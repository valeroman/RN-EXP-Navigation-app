import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
      
    >
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
            drawerIcon: ({ color, size }) => 
              <Ionicons 
                name='person-circle-outline' 
                color={ color }
                size={ size }
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
                color={ color }
                size={ size }
              />
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout;