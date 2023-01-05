import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DataContext } from '../../Context/DataContext';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Callout,
} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';


const initialRegion = {
  latitude: 40.41661,
  longitude: -3.709261,
}

const PoisMap = ({ polygonCoords, pois }) => {
  const { handleModal } = useContext(DataContext);

  const mappedPolygonCoords = polygonCoords?.map(el => {
    const sp = el.split(',');
    return { longitude: Number(sp[0]), latitude: Number(sp[1]) };
  });


  return (
    <MapView
      camera={{
        center: initialRegion,
        zoom: 15,
      }}
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      zoomEnabled
      initialRegion={initialRegion}>
      <Polygon
        fillColor="rgba(243, 84, 18, 0.3)"
        strokeColor="white"
        strokeWidth={2}
        coordinates={mappedPolygonCoords}
      />
      {pois.map((marker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            <Callout
              style={styles.callout}
              tooltip
              alphaHitTest
              onPress={() => handleModal(marker)}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
                {marker.name.toUpperCase()}
              </Text>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: '#cccccc', fontSize: 12 }}>22:00</Text>
                <Ionicons name="location" size={15} color="#f35412" />
                <Text style={{ color: '#f35412', fontSize: 12 }}>
                  {marker.category.name.length > 21
                    ? `${marker.category.name.substring(0, 21)}...`
                    : marker.category.name}
                </Text>
              </View>
            </Callout>
            <Image
              source={{ uri: marker.category.marker.url }}
              style={{
                width: 60,
                height: 60,
              }}
              resizeMode="contain"
            />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default PoisMap;

const styles = StyleSheet.create({
  callout: {
    backgroundColor: '#202020',
    width: 200,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
