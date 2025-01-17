import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location"
import { colors } from "../global/colors";
import MapPreview from "../components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";
import { useNavigation } from '@react-navigation/native';

const LocationSelector = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerPostAddress, result] = usePostUserLocationMutation();
  const navigation = useNavigation(); 

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permisos para acceder a la ubicación denegados");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (err) {}
    })();
  }, [location]);

  const onConfirmAddress = () => {
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    };
    dispatch(setUserLocation(locationFormatted));

    triggerPostAddress({localId, location: locationFormatted});
    navigation.navigate("My Profile");
  };

  return (
    <View style={styles.container}>
      <Text>Mi dirección</Text>
      {location.latitude ? (
        <View style={styles.noLocationContainer}>
          <Text>
            Lat: {location.latitude}, long: {location.longitude}
          </Text>
          <MapPreview location={location} />
          <Text>{address}</Text>
          <Pressable style={styles.button} onPress={onConfirmAddress}>
            <Text style={styles.text}>Confirmar Dirección</Text>
          </Pressable>
        </View>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      paddingBottom: 130,
      paddingTop: 40,
    },
    noLocationContainer: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    address: {
      padding: 10,
      fontFamily: "HindRegular",
      fontSize: 16,
    },
    button: {
      width: "80%",
      elevation: 10,
      backgroundColor: colors.body,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
    text: {
      fontFamily: "HindRegular",
      fontSize: 18,
      color: "white",
    },
  });
  
