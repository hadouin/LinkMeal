import React, { useState, useEffect } from "react";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_700Bold,
  Comfortaa_600SemiBold,
} from "@expo-google-fonts/comfortaa";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import LoadScreen from "./app/screens/LoadScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNav from "./app/navigation/RootNav";
import { SafeAreaView } from "react-native";
import { createServer } from "miragejs";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      };
    });
  },
});

export default function App() {
  const [data, setData] = useState([]);
  let [movies, setMovies] = React.useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json.movies));
  }, []);

  const [fontsLoaded] = useFonts({
    IcoMoon: require("./app/assets/icomoon/icomoon.ttf"),
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <LoadScreen />;
  }

  return (
    <SafeAreaProvider>
      <RootNav />
    </SafeAreaProvider>
  );
}
