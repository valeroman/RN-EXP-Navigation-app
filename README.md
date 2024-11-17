# Welcome to your Expo app 👋

## Configuracion de Nativewind

- Documentacion: https://www.nativewind.dev/

1  - Instalar paquetes
   `yarn add nativewind tailwindcss react-native-reanimated react-native-safe-area-context`

2 - Run `npx tailwindcss init`  to create a `tailwind.config.js` file

3 - Agregar esta lineas en el archivo `tailwind.config.js`
  ```js
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  ```

4 - Crear el archivo `global.css`, dentro de la carpeta app y copiamos lo siguiente:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5 - No me salio el archivo babel.config.js al crear el proyecto, lo agrego manualmente:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

6 - Crear el archivo `metro.config.js` ejecutando el comando `npx expo customize metro.config.js`

   y agregamos esto:
   ```tsx
   const { getDefaultConfig } = require("expo/metro-config");
   const { withNativeWind } = require("nativewind/metro");

   const config = getDefaultConfig(__dirname);

   module.exports = withNativeWind(config, { input: "./app/global.css" });
   ```
7 - Creamos el archivo `_layout.tsx`, dentro de la carpeta `app`

   ```ts
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
   ```

8 - Creamos el archivo `nativewind-env.d.ts` y agregamos esto:
   `/// <reference types="nativewind/types" />`


## Configurar Fuentes

- Documentación: https://fonts.google.com/specimen/Work+Sans?query=work

- Estando en goggle fonts buscamos la fuente `work sans` y la descargamos

- Descomprimimos el archivo `work_sans.zip` y seleccionamos las fuentes de:

`WorkSans-Black.ttf`, `WorkSans-Light.ttf`, `WorkSans-Medium.ttf`

1 - Configuramos el archivo `tailwind.config.js`

```js
fontFamily: {
   'work-black': ['WorkSans-Black', 'sans-serif'],
   'work-light': ['WorkSans-Light', 'sans-serif'],
   'work-medium': ['WorkSans-Medium', 'sans-serif'],
}
```

2 - Cargamos las fuentes en la aplicacion:

- AAbrimos el archivo `_layuout.tsx` y agregamos lo siguiente:

```javascript
import React, { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';

import './global.css';
import { useFonts } from 'expo-font';

// **Nueva línea añadida**
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  // **Nuevas líneas añadidas**
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    // **Nueva lógica añadida**
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // **Nueva condición añadida**
  if (!fontsLoaded && !error) return null;

  return (
    <Slot />
  );
};

export default RootLayout;
```