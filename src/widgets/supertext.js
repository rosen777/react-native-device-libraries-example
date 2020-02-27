import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const Supertext = (props) => {
    // Putting the styles as an array whatever we had previosuly
        return(
            <Text 
                {...props}
                style={[styles.supertext, props.style]}
            >
                {props.children}
            </Text>
        )
}

const styles = StyleSheet.create({
    supertext:{
        backgroundColor: 'blue',
        fontSize: 20,
        color: 'white',
        padding: 10,
        width: 300
    }
})

export default Supertext