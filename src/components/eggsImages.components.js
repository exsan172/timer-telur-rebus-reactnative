import React from "react";
import { Image, StyleSheet, View } from 'react-native'
import { useRecoilState } from 'recoil'
import { EegsImages } from '../store'

const EggsImages = () => {
    const [eggs, setEggs] = useRecoilState(EegsImages)

    return (
        <View style={style.container}>
            {
                eggs === "mentah" &&
                <Image source={require(`../assets/images/telur_mentah.png`)} style={style.images}/>
            }

            {
                eggs === "matang" &&
                <Image source={require(`../assets/images/telur_mateng.png`)} style={style.images}/>
            }

            {
                eggs === "setengah_matang" &&
                <Image source={require(`../assets/images/telur_2_5.png`)} style={style.images}/>
            }

            {
                eggs === "tiga_perempat" &&
                <Image source={require(`../assets/images/telur_3_4.png`)} style={style.images}/>
            }
        </View>
    )
}

const style = StyleSheet.create({
    images : {
        width:170,
        height: 202
    },
    container : {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30
    }
})

export default EggsImages