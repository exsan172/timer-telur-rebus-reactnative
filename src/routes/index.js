import React from "react";
import { AppOpenAdProvider } from '@react-native-admob/admob'
import Home from '../pages/home'
import { RecoilRoot } from 'recoil'


const Routes = () => {
    return (
        <RecoilRoot>
            <AppOpenAdProvider unitId={"ca-app-pub-1994477125998232/7705726246"} options={{ showOnColdStart: true, loadOnDismissed:true }}>
                <Home/>
            </AppOpenAdProvider>
        </RecoilRoot>
    )
}

export default Routes