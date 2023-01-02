// import React, { useState } from "react";
// import { Image } from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useFonts } from '@use-expo/font';
// import { Asset } from "expo-asset";
// import { Block, GalioProvider } from "galio-framework";
// import { NavigationContainer } from "@react-navigation/native";

// // Before rendering any navigation stack
// import { enableScreens } from "react-native-screens";
// enableScreens();

// import Screens from "./navigation/Screens";
// import { Images, articles, argonTheme } from "./constants";

// // cache app images
// const assetImages = [
//   Images.Onboarding,
//   Images.LogoOnboarding,
//   Images.Logo,
//   Images.Pro,
//   Images.ArgonLogo,
//   Images.iOSLogo,
//   Images.androidLogo,
// ];

// // cache product images
// articles.map(article => assetImages.push(article.image));

// function cacheImages(images) {
//   return images.map(image => {
//     if (typeof image === "string") {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'ArgonExtra': require('./assets/font/argon.ttf'),
//   });

//   function _loadResourcesAsync() {
//     return Promise.all([...cacheImages(assetImages)]);
//   }

//   function _handleLoadingError(error) {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   if (fontsLoaded) {
//     return (
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <GalioProvider theme={argonTheme}>
//             {/* <Block flex> */}
//             <Screens />
//             {/* </Block> */}
//           </GalioProvider>
//         </NavigationContainer>
//       </SafeAreaProvider>
//     );
//   } else {
//     return null
//   }
// }

import React from 'react';
import { Providers } from './navigation';

const App = () => {
  return <Providers />;
}

export default App;