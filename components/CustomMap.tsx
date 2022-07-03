import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import useMap from "../hooks/useMap";
import * as Linking from "expo-linking";
import Store from "../lib/Store";
import CustomMarker from "./CustomMarker";

import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";

interface CustomMapProps {
  handleStore: (store: Store) => void;
}

export default function Map(props: CustomMapProps) {
  const { mapRef, handleNavigateToPoint } = useMap();
  const { handleStore } = props;
  const [response, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [stores, setStores] = useState<Store[]>(new Array<Store>());

  /** Location permissions try */
  useEffect(() => {
    if (!response) return;
    if (response.status === PermissionStatus.UNDETERMINED) {
      requestPermission();
    }
  }, [response]);

  /** Sync location coordinates */
  useEffect(() => {
    if (response === null) return;

    if (response.status === PermissionStatus.GRANTED) {
      (async () => {
        let location = await getCurrentPositionAsync({});
        setLocation(location);
      })();
    }
  }, [response]);

  /** Sync markers of stores */
  useEffect(() => {
    (async () => {
      if (!location) return;
      const stores = Store.get(location);
      setStores(stores);
    })();
  }, [location]);

  /** Sync markers of stores */
  useEffect(() => {}, [location]);

  if (response === null) {
    return (
      <View style={styles.container}>
        <Text>Waiting response..</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {response.status === PermissionStatus.UNDETERMINED && (
          <PremisionsPrompt
            handleGrant={() => {
              if (response.canAskAgain) {
                requestPermission();
              } else {
                Linking.openSettings();
              }
            }}
            canAskAgain={response.canAskAgain}
          />
        )}
        {response.status === PermissionStatus.DENIED && (
          <PremisionsPrompt
            handleGrant={() => {
              if (response.canAskAgain) {
                requestPermission();
              } else {
                Linking.openSettings();
              }
            }}
            canAskAgain={response.canAskAgain}
          />
        )}
        {response.status === PermissionStatus.GRANTED && (
          <View style={styles.mapWrapper}>
            {location && (
              <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                mapType="standard"
                initialRegion={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.003,
                }}
                zoomEnabled={true}
                zoomTapEnabled={false}
                rotateEnabled={false}
              >
                {stores.map((store, index) => {
                  return (
                    <CustomMarker
                      key={index}
                      handlePress={() => {
                        handleStore(store);
                      }}
                      latitude={store.latitude}
                      longitude={store.longitude}
                    />
                  );
                })}
              </MapView>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapWrapper: { width: "100%", height: "100%" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  promptText: {
    textAlign: "center",
  },
});

interface PremisionsPrompt {
  handleGrant: () => void;
  canAskAgain: boolean;
}

function PremisionsPrompt(props: PremisionsPrompt) {
  const { handleGrant, canAskAgain } = props;

  return (
    <View>
      {canAskAgain ? (
        <View>
          <Text style={styles.promptText}>
            {"Para ver tiendas debes habilitar el acceso a tu ubicación"}
          </Text>
          <Button title="Dar permiso" onPress={handleGrant} />
        </View>
      ) : (
        <View>
          <Text style={styles.promptText}>
            {
              "Para ver tiendas ve a configuraciones y habilita el acceso a tu ubicación"
            }
          </Text>
          <Button title="Abrir Configuraciones" onPress={handleGrant} />
        </View>
      )}
    </View>
  );
}
