import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#816AF7',
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 7,
    margin: 7,
    borderRadius: 7,
    width: '90%',
    height: 120,

  },
  containerTotal: {
    height: 40,
    marginTop: 5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  descriptionFreight: {
    fontSize: 14,
    color: '#4320F5',
    paddingRight: 30,
  },
  descriptionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3275',
    paddingRight: 30,
  },
  containerAmount: {
    height: 40,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E3275',
    paddingRight: 50,
  },
  descriptionParcialPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4320F5',
    paddingLeft: 50,
  },
});

export default styles;
