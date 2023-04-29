import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import UserCardInfo from './UserCardInfo';
import UserProfilePic from './UserProfilePic';
import { UserCardProps } from '../props/UserCardProps';

const UserCard: React.FC<UserCardProps> = ({ navigation, user }) => (
  <Pressable onPress={() => navigation.navigate('user-edit', { user })}>
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <UserProfilePic />
        <View style={styles.nameContainer}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '2%' }}>
            {user.name}
          </Text>
        </View>
        <View style={styles.row}>
          <UserCardInfo title="Username" content={user.username} />
          <UserCardInfo title="Email" content={user.email} />
          <UserCardInfo title="Phone Number" content={user.phone} />
          <UserCardInfo title="City" content={user.address.city} />
        </View>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    backgroundColor: '#cdcec8',
    marginBottom: '25%'
  },
  logoContainer: {
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#E5F6E9',
    borderRadius: 20
  },
  logo: {
    width: 60,
    height: 60
  },
  userInfoContainer: {
    flex: 2,
    flexDirection: 'column',
    padding: 20
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 15
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 10,
    flexBasis: '33%',
    justifyContent: 'space-between'
  }
});

export default UserCard;
