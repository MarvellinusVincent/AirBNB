// Listings.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';

const Listings = () => {
  const listingsData = [
    {
      image: require('../assets/images/picture1.png'),
      description: 'Beautiful House with a view',
      rating: 4.5,
      roomType: 'Entire house',
      price: '$120',
    },
    {
      image: require('../assets/images/picture2.png'),
      description: 'Large Hotel Room',
      rating: 4.8,
      roomType: 'Private Room',
      price: '$150',
    },
    {
      image: require('../assets/images/picture3.png'),
      description: 'Luxury House with an infinity pool',
      rating: 5.0,
      roomType: 'Entire house',
      price: '$350',
    },
    
  ];
  return (
      <View style={styles.listingsContainer}>
        {listingsData.map((listing, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {/* Handle continue with phone */}}>
          <View key={index} style={styles.listingItem}>
            <View style={styles.imageContainer}>
              <Image source={listing.image} style={styles.listingImage} />
              <View style={styles.heartIconContainer}>
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
            <View style={styles.listingDetails}>
              <View style={styles.descriptionRatingContainer}>
                <Text style={styles.descriptionText}>{listing.description}</Text>
                <View style={styles.ratingContainer}>
                  <AntDesign name="star" size={20} color="black" />
                  <Text style={styles.ratingText}>{listing.rating}</Text>
                </View>
              </View>
              <Text style={styles.roomTypeText}>{listing.roomType}</Text>
              <Text style={styles.boldPrice}>{listing.price} <Text style={styles.nightText}> night</Text></Text>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  listingsContainer: {
    paddingTop: 150,
    padding: 16,
  },
  listingItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  listingImage: {
    height: 350,
    resizeMode: 'cover',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  listingDetails: {
    padding: 16,
  },
  descriptionRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items at the center of the container
    marginBottom: 12, // Add margin bottom to create some space between description and room type
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  roomTypeText: {
    marginBottom: 12,
  },

  bottomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8, // Adjust the margin according to your preference
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    flexDirection: 'row', // Arrange "price" and "/night" horizontally
    alignItems: 'center', // Align items vertically
    color: 'green',
    fontWeight: 'bold',
  },
  boldPrice: {
    fontWeight: 'bold', // Make the "price" text bold
    marginRight: 4, // Add margin between "price" and "/night"
  },
  nightText: {
    fontWeight: 'normal', // Keep the "/night" text normal weight
  },
});

export default Listings;