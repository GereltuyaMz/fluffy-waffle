import React from 'react';
import { AuthProvider } from "./AuthProvider";
import { GalioProvider } from "galio-framework";
import Routes from "./Routes";
import { argonTheme } from "../constants";


export const Providers = () => {
  return (
    <GalioProvider theme={argonTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GalioProvider>
  )
}