import React from "react";
import { CharacterProvider } from "./core/character-provider";
import { Layout } from "./layout";
import { RouterComponent } from "./core/router";

export const App = () => {
  return (
      <CharacterProvider>
        <Layout>
          <RouterComponent />
        </Layout>
      </CharacterProvider>    
  );
};
