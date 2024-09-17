import {SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

const MapScreen = () => {
  return (
    <SafeAreaView style={{flex: .93}}>
      <WebView
        source={{uri: 'https://www.google.com/maps'}}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};
export default MapScreen;
