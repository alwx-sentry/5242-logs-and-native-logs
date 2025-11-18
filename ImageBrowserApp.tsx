import React from 'react';
import { View, Image } from 'react-native';

interface ImageBrowserAppProps {
    images?: string[];
}

export default class ImageBrowserApp extends React.Component<ImageBrowserAppProps> {
    renderImage(imgURI: string) {
        // that's just to illustrate the console output
        console.log(imgURI);
        // eslint-disable-next-line react-native/no-inline-styles
        return <Image source={{ uri: imgURI }} style={{ width: 100, height: 100 }} />;
    }
    render() {
        return <View>{this.props.images?.map(this.renderImage)}</View>;
    }
}