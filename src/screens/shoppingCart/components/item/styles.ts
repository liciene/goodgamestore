import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 7,
    margin: 7,
    borderRadius: 7,
    width: '90%',
    flexDirection: 'row',
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
    height: 40,
    marginTop: 5,
    marginLeft: 135,
    alignItems: 'flex-end',
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
});

export default styles;
