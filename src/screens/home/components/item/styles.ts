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
    width: '73%',
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
    width: 110,
    height: 40,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#826AF7',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#AFA2FA',
  },
  containerButton: {
    marginEnd: 10,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',

  },
});

export default styles;
