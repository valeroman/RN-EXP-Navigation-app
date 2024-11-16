# Welcome to your Expo app 👋



## Paquetes instalados

- https://www.nativewind.dev/



## Configuracion de Nativewind

1  - Instalar paquetes
   `yarn add nativewind tailwindcss react-native-reanimated react-native-safe-area-context`

2 - Run `npx tailwindcss init`  to create a `tailwind.config.js` file

3 - Agregar esta lineas en el archivo `tailwind.config.js`
   ` content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],`

4 - Crear el archivo `global.css`, dentro de la carpeta app y copiamos lo siguiente:
   `@tailwind base;
   @tailwind components;
   @tailwind utilities;`

5 - No me salio el archivo babel.config.js al crear el proyecto, lo agrego manualmente:

`module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`

6 - Crear el archivo `metro.config.js` ejecutando el comando `npx expo customize metro.config.js`

   y agregamos esto:
   `
   const { getDefaultConfig } = require("expo/metro-config");
   const { withNativeWind } = require("nativewind/metro");

   const config = getDefaultConfig(__dirname);

   module.exports = withNativeWind(config, { input: "./app/global.css" });
   `
7 - Creamos el archivo `_layout.tsx`, dentro de la carpeta `app`

   `
      import { View, Text } from 'react-native'
      import React from 'react'
      import { Slot } from "expo-router";

      import './global.css';

      const RootLayout = () => {
      return (
         <Slot />
      )
      }

      export default RootLayout;
   `tsx

8 - Creamos el archivo `nativewind-env.d.ts` y agregamos esto:
   `/// <reference types="nativewind/types" />`


