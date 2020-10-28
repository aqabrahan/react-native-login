import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native';

const Loading = props => {
  const { message } = props;
  return (
    <View>
      <Text style={style.loading}>{message}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  loading: {
    fontSize: 40,
  }
})

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading content',
};

export default Loading;
