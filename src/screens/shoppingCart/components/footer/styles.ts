import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#AFA2FA',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#3E3275',
    paddingVertical: 7,
    margin: 7,
    borderRadius: 7,
    width: '90%',
    height: 120,

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
    // paddingRight: 30,
  },
  descriptionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3275',
    // paddingRight: 30,
  },
});

export default styles;
