/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';
import ImageBrowserApp from './ImageBrowserApp';

Sentry.init({
  dsn: '',
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.mobileReplayIntegration()
  ],
  enableLogs: true,
});

interface AppProps {
  images?: string[];
}

function App(props: AppProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBrowserApp images={props.images} />
      <Button title='Try!' onPress={() => {
        Sentry.logger.warn("SENTRY DEMO: Try button pressed");
      }} />
    </View>
  );
}

export default Sentry.wrap(App);