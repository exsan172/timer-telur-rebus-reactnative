import React, { useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import BackgroundTimer from 'react-native-background-timer'
import { useRecoilState } from 'recoil'
import Sound from 'react-native-sound'
import { startTimer, counting, EegsImages, alertFinish } from '../store'
import notif from '../assets/sound/notif.wav'

let counts=""

Sound.setCategory("notif")
const music = new Sound(notif, Sound.MAIN_BUNDLE, (err) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    
    console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());
})

const ButtomAction = () => {
    const [timer, setTimer] = useRecoilState(startTimer)
    const [count, setCount] = useRecoilState(counting)
    const [eggs, setEggs] = useRecoilState(EegsImages)
    const [alert, setAlert] = useRecoilState(alertFinish)

    useEffect(() => {
        music.setVolume(1)
    }, [])

    const countDown = (second, kind) => {
        setEggs(kind)
        setTimer(true)
        counts = BackgroundTimer.setInterval(() => {
            let minusSec = second--
            const conv_min = Math.floor(second/60)
            const conv_sec = minusSec-conv_min*60

            setCount({
                minute : conv_min.toString().length > 1 ? conv_min : '0'+conv_min,
                second : conv_sec.toString().length > 1 ? conv_sec : '0'+conv_sec
            })

            if(minusSec === 0) {
                BackgroundTimer.clearInterval(counts)
                setCount({
                    minute : "00",
                    second : "00"
                })
                setTimer(false)
                setEggs("mentah")

                music.play()
                setAlert(true)
            }
        }, 1000)
    }

    const stop = () => {
        setCount({
            minute : "00",
            second : "00"
        })
        setTimer(false)
        setEggs("mentah")
        BackgroundTimer.clearInterval(counts)
    }

    return (
        <View style={style.container}>
            {
                timer === true ?
                    <TouchableOpacity onPress={() => stop()} style={style.btnStop}>
                        <Text style={style.textStyle}>
                            Stop Timer
                        </Text>
                    </TouchableOpacity>
                :
                    <View>
                        <TouchableOpacity onPress={() => countDown(360, "tiga_perempat")} style={style.btnStop}>
                            <Text style={style.textStyle}>
                                Telur 3/4 Matang
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => countDown(480, "setengah_matang")} style={style.btnStop}>
                            <Text style={style.textStyle}>
                                Telur 1/2 Matang
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => countDown(900, "matang")} style={style.btnStop}>
                            <Text style={style.textStyle}>
                                Telur Matang
                            </Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    btnStop : {
        backgroundColor: "#1abc9c",
        padding:8,
        borderRadius:5,
        alignItems:'center',
        width:150,
        margin:5
    }, 

    container : {
        display:'flex',
        alignItems: 'center'
    },

    textStyle : {
        color: "#fff"
    }
})

export default ButtomAction