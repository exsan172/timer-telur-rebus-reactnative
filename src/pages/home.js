import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import { useRecoilState } from 'recoil'
import { BannerAd } from '@react-native-admob/admob'
import { startTimer, counting, alertFinish } from '../store'

import ButtomAction from "../components/buttonAction.components"
import EggsImages from "../components/eggsImages.components"
import AlertMsg from "../components/alert.components"

const home = () => {
    const [timer, setTimer] = useRecoilState(startTimer)
    const [count, setCount] = useRecoilState(counting)
    const [alert, setAlert] = useRecoilState(alertFinish)

    return (
        <>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <BannerAd size={'FULL_BANNER'} unitId={"ca-app-pub-1994477125998232/9954569346"} />
            </View>
            <View style={style.container}>
                {
                    alert === true &&
                    <AlertMsg/>
                }
                
                <View>
                    <EggsImages/>
                </View>
                <View style={style.timer}>
                    <Text style={style.timerText}>
                        {count.minute} : {count.second}
                    </Text>
                </View>
                <View>
                    <ButtomAction/>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container : {
        display: 'flex',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'100%',
        merginTop:"-100px"
    },

    timer : {
        display:'flex',
        alignItems:'center',
        marginBottom:20
    },

    timerText : {
        fontSize:40
    }
})

export default home