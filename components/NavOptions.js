import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';

const data = [
    {
      id: '123',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '456',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen',
    },
  ];  

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
              style={tw`bg-black p-2 pl-6 pb-8 pt-4 m-2`}
              
            >
                <View>
                    <Image
                        style={{ width: 120, height:120, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`text-white mt-2 text-lg`}>{item.title}</Text>
                    <Icon 
                      style={tw`p-2 w-10 mt-4 bg-white`}
                      name="arrowright"
                      color="black"
                      type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions

