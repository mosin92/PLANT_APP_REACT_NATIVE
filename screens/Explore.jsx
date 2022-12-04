import { View, Text, TextInput, Image, ScrollView, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, sizes, fonts } from '../constants/theme'
import { IconButton, TextButton } from '../components'
import { globalStyle, icons, images, Route } from '../constants'
import { explore } from '../constants/mocks'

const Explore = ({ navigation }) => {

    const [searchtxt, setsearchTxt] = useState(null)

    const searchFocus = useRef(new Animated.Value(0.6)).current

    // handler 

    const handleOnFocus = (status) => {

        Animated.timing(
            searchFocus,
            {
                toValue: status ? 0.9 : 0.6,
                duration: 300,
                useNativeDriver: false
            },
        ).start()
    }

    // UI Render
    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: sizes.padding,
                }}
            >
                <IconButton
                    containerStyle={{
                        width: 25
                    }}
                    icon={icons.back_lg}
                    iconStyle={{
                        width: 25,
                        heigth: 25,
                        tintColor: colors.gray
                    }}
                    onPress={() => navigation.goBack()}
                />

            </View>
        )
    }

    const renderSubHeader = () => {
        return (
            <View
                style={{
                    ...globalStyle.row
                }}
            >

                <Text
                    style={{
                        color: colors.black,
                        ...fonts.h1,
                        fontWeight: 'bold'
                    }}
                >
                    Explore
                </Text>


                <Animated.View
                    style={{
                        marginLeft: sizes.base,
                        flex: searchFocus,
                        backgroundColor: "#DDDDDD",
                        height: 45,
                        borderRadius: sizes.radius,
                        justifyContent: 'center',
                        paddingHorizontal: sizes.base,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1
                        }}
                        value={searchtxt}
                        onChangeText={(val) => setsearchTxt(val)}
                        placeholder="Search..."
                        onFocus={() => handleOnFocus(true)}
                        onBlur={() => handleOnFocus(false)}
                    />

                    <IconButton
                        icon={icons.search}
                        iconStyle={{
                            width: 17,
                            height: 17,
                            tintColor: colors.gray
                        }}
                    />
                </Animated.View>
            </View>
        )
    }

    const renderContent = () => {

        return (
            <View
                style={{
                    marginTop: sizes.radius
                }}
            >
                {/* image */}

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        explore.map(
                            (item, index) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(Route.private.product)}
                                >
                                    <Image
                                        key={`explore-${index}`}
                                        source={item}
                                        style={{
                                            marginTop: sizes.base,
                                            marginRight: 5
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        )
                    }

                </View>

            </View >
        )
    }


    // main container
    return (
        <ScrollView
            style={{
                flexGrow: 1,
                backgroundColor: colors.white,
                paddingHorizontal: sizes.padding,

            }}
            contentContainerStyle={{
                paddingBottom: sizes.radius
            }}
        >
            {/* header */}

            {renderHeader()}

            {/* sub header */}

            {renderSubHeader()}

            {/* content */}

            {renderContent()}

            {/* Explore btn */}

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <TextButton
                    label={"Filter"}
                    // onPress={() => navigation.navigate(Route.public.login)}
                    gradient
                    buttonContainerStyle={{
                        position: 'absolute',
                        bottom: 10,
                        height: 45,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '90%'
                    }}
                    labelStyle={{
                        fontWeight: '600',
                        ...fonts.h3
                    }}
                />
            </View>


        </ScrollView>
    )
}

export default Explore