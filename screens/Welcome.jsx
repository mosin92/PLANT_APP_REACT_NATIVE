import { View, Text, StyleSheet, Animated, Image } from 'react-native'
import React, { useRef } from 'react'
import { globalStyle, mocks, Route } from '../constants'
import { colors, fonts, sizes } from '../constants/theme'
import TextButton from '../components/TextButton'

const Dots = ({ ScrollX }) => {

    const dotPosition = Animated.divide(ScrollX, sizes.width)

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: -20,
                left: 0,
                width: '100%'
            }}
        >

            {
                mocks.onboard_illustration.map(
                    (item, index) => {
                        const OpacityAnimated = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.6, 1, 0.6]
                        })
                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 7,
                                    backgroundColor: colors.gray,
                                    marginHorizontal: 6,
                                    opacity: OpacityAnimated
                                }}
                            />
                        )
                    }
                )
            }
        </View>
    )
}

const Welcome = ({ navigation }) => {

    const ScrollX = useRef(new Animated.Value(0)).current
    const flatlistRef = useRef()
    // render UI

    const renderHeader = () => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    paddingHorizontal: sizes.padding,
                }}
            >
                {/* Title */}
                <Text
                    style={{
                        color: colors.black,
                        ...fonts.h1,
                        fontWeight: '600'
                    }}
                >
                    Your home {''}

                    <Text
                        style={{
                            color: colors.primary,
                        }}
                    >
                        Greener.
                    </Text>

                </Text>


                {/* SubTitle */}

                <Text
                    style={{
                        color: colors.gray,
                        marginTop: 3
                    }}
                >
                    Enjoy the experience
                </Text>

            </View>
        )
    }

    const renderSlider = () => {
        return (
            <View
                style={{
                }}
            >


                <Animated.FlatList
                    data={mocks.onboard_illustration}
                    ref={flatlistRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment='center'
                    keyExtractor={(item, i) => `onboard-${item.id}`}
                    onScroll={Animated.event([
                        {
                            nativeEvent: { contentOffset: { x: ScrollX } }
                        }
                    ],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <Image
                                style={{
                                    width: sizes.width,
                                    height: sizes.height / 2
                                }}
                                source={item.imgSource}
                            />
                        )
                    }}

                />

                {/* render Dots */}
                <Dots ScrollX={ScrollX} />
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingHorizontal: sizes.padding,
                    marginTop: sizes.padding,
                    alignItems: 'center',

                }}
            >
                {/* Login  */}

                <TextButton
                    label={"Login"}
                    onPress={() => navigation.navigate(Route.public.login)}
                    gradient
                    buttonContainerStyle={{
                        height: 45,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '95%'
                    }}
                    labelStyle={{
                        fontWeight: '600',
                        ...fonts.h3
                    }}
                />

                {/* SignUP */}

                <TextButton
                    label={"Signup"}
                    onPress={() => navigation.navigate(Route.public.signup)}
                    buttonContainerStyle={{
                        height: 45,
                        backgroundColor: colors.white,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        width: "90%",
                        zIndex: 999,
                        shadowColor: colors.black,
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        shadowOffset: {
                            height: 2,
                            width: 5
                            // height: -300,
                            // width: -550
                        },
                        elevation: 15,
                    }}
                    labelStyle={{
                        color: colors.black,
                        fontWeight: '600',
                        ...fonts.h3
                    }}
                />

                {/* Term and condition */}

                <TextButton
                    label={"Terms and Conditions"}
                    buttonContainerStyle={{
                        marginTop: sizes.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    labelStyle={{
                        color: colors.gray,
                        ...fonts.h3
                    }}
                />
            </View>
        )
    }
    // main return statement
    return (
        <View
            style={{
                ...globalStyle.container,

                paddingVertical: sizes.padding,
            }}
        >
            {/* Header */}

            {renderHeader()}

            {/* body */}

            <View
                style={{
                    flex: 1,
                    marginTop: sizes.padding * 2,
                    overflow: 'visible'
                }}
            >
                {renderSlider()}
            </View>

            {/* footer */}

            {renderFooter()}

        </View>
    )
}

export default Welcome