// components/SegmentedProgressBar.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constant';

const SegmentedProgressBar = ({
  step,
  totalSteps,
}: {
  step: number;
  totalSteps: number;
}) => {
  const segments = [];

  for (let i = 1; i <= totalSteps; i++) {
    segments.push(
      <View
        key={i}
        style={[
          styles.segment,
          { backgroundColor: i <= step ? COLORS.primary : COLORS.inputBG }, // filled or empty
        ]}
      />,
    );
  }

  return <View style={styles.container}>{segments}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width * 0.3,
    alignSelf: 'center',
  },
  segment: {
    flex: 1,
    height: 2,
    marginHorizontal: 1,
    borderRadius: 4,
  },
});

export default SegmentedProgressBar;
