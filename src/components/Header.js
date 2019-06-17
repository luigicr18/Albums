import React from 'react';
import { Text, View } from 'react-native';
import { yellow } from 'ansi-colors';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </View>
    )
    
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
       justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;