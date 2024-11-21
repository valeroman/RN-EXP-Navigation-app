import { Drawer } from 'expo-router/drawer';
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer>
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout;