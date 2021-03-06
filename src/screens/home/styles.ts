import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#816AF7',
    alignItems: 'center',
    paddingVertical: 7,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerMenu: {
    borderRadius: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  containterCart: {
    borderRadius: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 10,
    width: 40,
    height: 40,
  },
  badge: {
    marginRight: 3,
    marginTop: -25,
    backgroundColor: '#4b0082',
  },
  imageCart: {
    height: 30,
    width: 30,
    color: '#4b0082',
  },
  productList: {
    backgroundColor: '#4320F5',
    alignContent: 'center',
    flex: 1,
  },
});

export default styles;
