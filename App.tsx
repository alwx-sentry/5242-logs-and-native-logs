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
  dsn: 'INSERT_DSN_HERE',
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] })
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
        console.warn('SENTRY DEMO: Console: Try button pressed');
        Sentry.logger.info("SENTRY DEMO: Try button pressed");
      }} />
      <Button title='Throw error' onPress={() => {
        throw new Error('SENTRY DEMO: unhandled error')
      }} />
    </View>
  );
}

export default Sentry.wrap(App);