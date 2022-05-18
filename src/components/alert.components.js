import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import Modal from "react-native-modal"
import { useRecoilState } from 'recoil'
import { alertFinish } from '../store'

const AlertMsg = () => {
    const [alert, setAlert] = useRecoilState(alertFinish)

    return (
        <View>
            <Modal isVisible={true}>
                <View style={style.modalContainer}>
                    <View style={{display:'flex', height:65, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>
                            Telur sudah siap !
                        </Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:"#1abc9c", width:90, padding:7, justifyContent:'center', alignItems:'center', borderRadius:4}} onPress={() => setAlert(false)}>
                            <Text style={{color:"#fff"}}>Tutup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    modalContainer : {
        display:'flex',
        backgroundColor:'#fff',
        padding:10,
        height:120,
        borderRadius:5
    }
})

export default AlertMsg