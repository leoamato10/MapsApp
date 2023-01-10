import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ModalContext } from '../../Context/ModalContext';

const ModalHeader = ({ imageUrl, name }) => {
  const { modalVisible, setModalVisible } = useContext(ModalContext);

  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: imageUrl }} style={{ width: 40, height: 40 }} />
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>
          {name.toUpperCase()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.modalButton}>
        <Text style={{ color: '#666666', fontSize: 22 }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  modalButton: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});
