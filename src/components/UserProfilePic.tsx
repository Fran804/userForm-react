import React, { useContext } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const UserProfilePic = () => (
  <Avatar.Image
    size={85}
    style={styles.pic}
    source={require('../../assets/employee.png')}
  />
);

const styles = StyleSheet.create({
  pic: {
    position: 'absolute',
    zIndex: 1,
    top: -50,
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'black'
  }
});

export default UserProfilePic;
