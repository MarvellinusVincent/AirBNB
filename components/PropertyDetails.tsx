// PropertyDetails.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Define a type for the route parameters
type RootStackParamList = {
  PropertyDetails: { property: { image: any, description: string, roomType: string, price: string } };
};

interface PropertyDetailsProps {
  route: RouteProp<RootStackParamList, 'PropertyDetails'>;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ route }) => {
  const { property } = route.params;
    const handleReserveProperty = () => {
    // Add logic here to handle property reservation
    alert('Property reserved!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={property.image} style={{ width: 200, height: 200, marginBottom: 16 }} />
      <Text>{property.description}</Text>
      <Text>{property.roomType}</Text>
      <Text>{property.price}</Text>
      {/* Include a button to reserve the property */}
      <TouchableOpacity onPress={handleReserveProperty} style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Reserve Property</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reserveButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  reserveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PropertyDetails;
