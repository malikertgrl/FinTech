import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants';

export interface Props {
    name: string;
    source: any;
    total: string;
    percent:string;
}

const Bank = ({ name, source, total,percent }: Props) => {
    return (
        <View style={styles.bankStyle}>
            <View style = {styles.innerBankStyle}>
                <View>
                    <Image source={source} />

                </View>
                <View style={styles.bankType}>
                    <Text>{name}</Text>
                </View>
            </View>

            <View style={styles.totalStyle} >
                <View>
                    <Text style= {styles.text}> {percent}</Text>
                </View>
                <View>
                    <Text style= {styles.textSeperator}>  | </Text>
                </View>
                <View style={styles.margin}>
                    <Text  style={styles.text}>{total}</Text>
                </View>
            </View>


        </View>
    )
}

export default Bank

const styles = StyleSheet.create({
    bankStyle: { flexDirection: 'row', justifyContent:'space-between', marginVertical:8 },
    bankType: { marginLeft: 10, fontSize:Fonts.f14, fontWeight:'400' },
    totalStyle:{flexDirection:'row', alignItems:'center'},
    innerBankStyle:{flexDirection:'row', alignItems:'center'},
    text:{color:Colors.graySecondary},
    textSeperator: {color:Colors.grayThirty},
    margin:{marginLeft:5}
})