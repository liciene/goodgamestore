import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 7,
    marginVertical: 7,
    borderRadius: 7,
    width: '90%',
    flexDirection: 'row',
  },
  textContainer: {
    height: 50,
  },
  descriptionName: {
    fontSize: 14,
    color: '#4320F5',
  },
  descriptionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3275',
  },
  button: {
    width: 107,
    height: 40,
    marginTop: 5,
    marginLeft: 148,
    alignItems: 'flex-end',
    backgroundColor: '#826AF7',
  },
});

export default styles;
