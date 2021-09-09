const navigation = jest.genMockFromModule('@react-navigation/native');

module.exports = {
  ...navigation,
  useNavigation: () => ({ navigate: jest.fn() })
};
