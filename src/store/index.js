import { atom } from 'recoil'

export const EegsImages = atom({
    key: "eegsImages",
    default : "mentah"
})

export const startTimer = atom({
    key: "startTimer",
    default : false
})

export const counting = atom({
    key: "counting",
    default : {
        minute : "00",
        second : "00"
    }
})

export const alertFinish = atom({
    key: "alertFinish",
    default : false
})