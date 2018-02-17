import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card-section';
import Button from './button';

const AlbumDetail = ({ album }) => { 
    const { artist, title, thumbnail_image, image, url } = album;
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
