import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { SvgUri } from 'react-native-svg'

const dimensionsWidth = Dimensions.get('window').width

const Header = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.marginL} >
                <TouchableOpacity onPress={() => console.log('drawe')}>
                    <SvgUri
                        style={styles.homeButton}
                        uri={Image.resolveAssetSource(require('../assets/svgs/homeSvg.svg')).uri}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.innerStyle}>
                <SvgUri
                    style={styles.logo}
                    uri={Image.resolveAssetSource(require('../assets/svgs/LogoSvg.svg')).uri}
                />
                <Text style={styles.text}>Netahsilat</Text>
            </View>
            <View style={styles.marginR}>

                <SvgUri
                    style={styles.tlIcon}
                    uri={Image.resolveAssetSource(require('../assets/svgs/tlSvg.svg')).uri}
                />
            </View>
        </View>


    )
}

export default Header

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
        paddingVertical: 8,
    },
    innerStyle: {
        alignItems: 'center',

    },
    logo: {
        aspectRatio: 3.704615,
        width: dimensionsWidth / 100 * 28.79,
        height: undefined,

    },
    text: {
        color: Colors.green,
        fontSize: Fonts.sml,
        fontWeight: '500',
        fontStyle: 'italic'
    },
    homeButton: { aspectRatio: 1, width: dimensionsWidth / 100 * 6.39, height: undefined },
    tlIcon: { aspectRatio: 1, width: dimensionsWidth / 100 * 8.29, height: undefined },
    marginR: { marginRight: 16 },
    marginL: { marginLeft: 16 },

})