import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Animated } from 'react-native';
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";

export default function Explore() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const handleScrollEndDrag = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setHeaderVisible(true);
  };

  const handleScrollEnd = () => {
    // Additional logic if needed when scrolling ends
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Animated.View style={[styles.header, { opacity: headerVisible ? 1 : 0 }]}>
        <ExploreHeader />
      </Animated.View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        onScroll={handleScroll}
        onScrollEndDrag={handleScrollEndDrag}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
      >
        <Listings />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
});
