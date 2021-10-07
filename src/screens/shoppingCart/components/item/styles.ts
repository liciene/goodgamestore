import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#3E3275',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    paddingVertical: 7,
    margin: 7,
    borderRadius: 7,
    width: '90%',
    flexDirection: 'row',
  },
  textContainer: {
    width: '67%',
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
  containerAmount: {
    paddingTop: -50,
    paddingLeft: -10,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  viewDescriptionAmount: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 37,
    paddingVertical: 10,
  },
  descriptionAmount: {
    fontSize: 14,
    color: '#3E3275',
  },
  descriptionParcialPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4320F5',
  },
  containerButton: {
    width: 102,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3E3275',
  },
  buttonMore: {
    backgroundColor: '#826AF7',
    alignContent: 'center',
    alignSelf: 'center',
  },
  buttonLess: {
    backgroundColor: '#826AF7',
    alignContent: 'center',
    alignSelf: 'center',

  },
});

export default styles;
