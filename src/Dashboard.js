import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'
import { Neomorph } from 'react-native-neomorph-shadows'
import perfectSize from './theme/Screen'
import Images from './theme/Images'
import Colors from './theme/Colors'
export default function Dashboard() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Gmail</Text>
                <Text style={styles.headerText}>Images</Text>
                <Text style={styles.headerText}>|</Text>
                <Image 
                    source={Images.Bell}
                    style={styles.headerNotificationIcon}
                />
                <Neomorph 
                    darkShadowColor={Colors.blackColor}
                    lightShadowColor='white'
                    swapShadows
                    style={styles.headerEndSection}
                >
                    <View style={[styles.dot, {backgroundColor: Colors.blueDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.redDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.yellowDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.greenDotColor}]} />
                </Neomorph>
            </View>

            <Text style={styles.headerDate}>Tuesday | <Text style={{color: Colors.blackColor, fontWeight: 'bold'}}>Feb 02</Text></Text>
            <View style={{marginTop: perfectSize(56)}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Neomorph
                        swapShadows
                        style={styles.menuItems}
                    >
                        <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-around', marginTop: perfectSize(18)}}>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Wifi}
                                    style={[styles.icon, {tintColor: Colors.blueDotColor}]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Bluetooth}
                                    style={[styles.icon, {tintColor: Colors.headerTextColor}]}
                                />
                            </Neomorph>
                        </View>
                        <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-around', marginTop: perfectSize(18)}}>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Notification}
                                    style={[styles.icon, {tintColor: Colors.headerTextColor}]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.AlarmClock}
                                    style={[styles.icon, {tintColor: Colors.headerTextColor}]}
                                />
                            </Neomorph>
                        </View>
                    </Neomorph>
                    <Neomorph
                        swapShadows
                        style={styles.menuItems}
                    >
                        <Text style={{fontWeight: 'bold', fontSize: perfectSize(12), marginTop: perfectSize(23)}}>Animals</Text>
                        <Text style={[styles.headerText, {fontSize: perfectSize(9)}]}>Maroon 5</Text>
                        <Neomorph
                            swapShadows 
                            style={{height: perfectSize(5), shadowRadius: 10 ,width: perfectSize(140),borderWidth: 1, backgroundColor: Colors.backgroundColor, borderRadius: 23, borderColor: Colors.headerTextColor, marginTop: perfectSize(23)}}
                        >
                            <View style={{height: '100%', width: '50%', backgroundColor: Colors.yellowDotColor}} />
                            <View style={{flexDirection:'row', marginTop: perfectSize(23), alignItems: 'center', justifyContent: 'space-around'}}>
                                <Image
                                    source={Images.Backward}
                                    style={[styles.icon, {tintColor: Colors.headerTextColor}]}
                                />
                                <Image
                                    source={Images.Pause}
                                    style={[styles.icon, {tintColor: Colors.yellowDotColor}]}
                                />
                                <Image
                                    source={Images.Forward}
                                    style={[styles.icon, {tintColor: Colors.headerTextColor}]}
                                />
                            </View>
                        </Neomorph>
                    </Neomorph>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: perfectSize(23)}}>
                    <View
                        style={styles.menuItems}
                    >
                        <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-around', marginTop: perfectSize(18)}}>
                            <Neomorph
                                swapShadows
                                style={[styles.menuIcons,{borderRadius: perfectSize(18), height: perfectSize(56), width: perfectSize(56)}]}
                            >
                                <Image
                                    source={Images.Rain}
                                    style={[styles.icon, {tintColor: Colors.blueDotColor}]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={[styles.menuIcons,{borderRadius: perfectSize(18), height: perfectSize(56), width: perfectSize(56)}]}
                            >
                                <Text style={{color: Colors.blackColor, fontWeight: 'bold'}}>85 F</Text>
                            </Neomorph>
                        </View>
                        <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-around', marginTop: perfectSize(18)}}>
                            <Neomorph
                                swapShadows
                                style={[styles.menuIcons, {height: perfectSize(80),width: perfectSize(140), borderRadius: perfectSize(18)}]}
                            >
                                
                                <Text style={{fontWeight: 'bold', fontSize: perfectSize(12)}}>India</Text>
                                <Text style={[styles.headerText, {fontSize: perfectSize(9)}]}>Light Rain</Text>
                            </Neomorph>
                        </View>
                    </View>
                    <View
                        style={[styles.menuItems, {flexDirection: 'row', justifyContent: 'space-around'}]}
                    >
                        <Neomorph
                            inner
                            style={{height: perfectSize(150), width: perfectSize(56), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: perfectSize(18), marginTop: perfectSize(41)}}
                        >
                            <View 
                                style={{height: '50%', width: '100%', backgroundColor: Colors.yellowDotColor, borderTopLeftRadius: perfectSize(5), borderTopRightRadius: perfectSize(5), position: 'absolute', bottom: 0, borderBottomLeftRadius: perfectSize(18), borderBottomRightRadius: perfectSize(18)}}
                            >
                                <Text style={{fontSize: perfectSize(18), color: 'white', textAlign: 'center', fontWeight: 'bold', top: '56%'}}>50%</Text>
                            </View>
                        </Neomorph>
                        <Neomorph
                            inner
                            style={{height: perfectSize(150), width: perfectSize(56), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: perfectSize(18), marginTop: perfectSize(41)}}
                        >
                            <View 
                                style={{height: '70%', width: '100%', backgroundColor: Colors.yellowDotColor, borderTopLeftRadius: perfectSize(5), borderTopRightRadius: perfectSize(5), position: 'absolute', bottom: 0, borderBottomLeftRadius: perfectSize(18), borderBottomRightRadius: perfectSize(18)}}
                            >
                                <Image 
                                    source={Images.Speaker}
                                    style={{height: perfectSize(23), width: perfectSize(23), alignSelf: 'center', top: '67%', tintColor: 'white'}}
                                />
                            </View>
                        </Neomorph>
                    </View>
                </View>
                <Text style={{textAlign: 'center', marginTop: perfectSize(100), fontSize: perfectSize(23), fontWeight: 'bold', letterSpacing: perfectSize(5)}}>11:48</Text>
                <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', width: perfectSize(100)}}>
                    <View style={[styles.dot, {backgroundColor: Colors.blueDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.redDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.yellowDotColor}]} />
                    <View style={[styles.dot, {backgroundColor: Colors.greenDotColor}]} />
                </View>
            </View>
            <View  style={styles.footer}>
                <Neomorph swapShadows style={styles.footer}>
                    <Neomorph swapShadows style={{height: perfectSize(40), width: perfectSize(40), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: 23, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={Images.Phone}
                            style={styles.footerIcon}
                        />

                    </Neomorph>
                    <Neomorph swapShadows style={{height: perfectSize(40), width: perfectSize(40), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: 23, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={Images.Email}
                            style={styles.footerIcon}
                        />

                    </Neomorph>
                    <Neomorph swapShadows style={{height: perfectSize(40), width: perfectSize(40), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: 23, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={Images.Menu}
                            style={styles.footerIcon}
                        />

                    </Neomorph>
                    <Neomorph swapShadows style={{height: perfectSize(40), width: perfectSize(40), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: 23, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={Images.Settings}
                            style={styles.footerIcon}
                        />

                    </Neomorph>
                    <Neomorph swapShadows style={{height: perfectSize(40), width: perfectSize(40), backgroundColor: Colors.backgroundColor, shadowRadius: 10, borderRadius: 23, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={Images.Message}
                            style={styles.footerIcon}
                        />

                    </Neomorph>
                </Neomorph>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    header: {
        height: perfectSize(50),
        width: '100%',
        marginTop: perfectSize(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    headerText: {
        color: Colors.headerTextColor,
        fontSize: perfectSize(12)
    },
    headerEndSection: {
        height: perfectSize(30), 
        width: perfectSize(90), 
        backgroundColor: Colors.backgroundColor, 
        shadowRadius: 10, 
        borderRadius: perfectSize(23),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    headerNotificationIcon: {
        height: perfectSize(18),
        width: perfectSize(18), 
        tintColor: Colors.headerTextColor
    },
    dot: {
        height: 10,
        width: 10, 
        borderRadius: 23, 
    },
    headerDate: {
        color: Colors.headerTextColor,
        fontSize: perfectSize(18),
        textAlign: 'right',
        right: perfectSize(36),
        marginTop: perfectSize(23)
    },
    menuItems: {
        height: perfectSize(156),
        width: perfectSize(150),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        alignItems: 'center',
    },
    menuIcons: {
        height: perfectSize(50),
        width: perfectSize(50),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: perfectSize(25),
        width: perfectSize(25)
    },
    footer: {
        height: perfectSize(50),
        width: perfectSize(300),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        marginTop: perfectSize(23),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    footerIcon: {
        height: perfectSize(18),
        width: perfectSize(18),
        tintColor: Colors.headerTextColor
    }
})