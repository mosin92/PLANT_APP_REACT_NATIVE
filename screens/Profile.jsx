import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, sizes } from '../constants/theme'
import { globalStyle, icons, images } from '../constants'
import { CustomSwitch, IconButton, LineDivider, TextButton } from '../components'
import Slider from '@react-native-community/slider';

const Profile = ({ navigation }) => {

    // states

    const [sliderVal, setSliderVal] = useState('')
    const [sliderVal2, setSliderVal2] = useState('')
    const [notiSwitch, setNotiSwitch] = useState(false)
    const [newsSwitch, setNewSwitch] = useState(false)

    // UI RENDER

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

    const renderSetting = () => {
        return (
            <View
                style={{
                    ...globalStyle.row
                }}
            >
                {/* Title */}

                <Text
                    style={{
                        ...globalStyle.heading
                    }}
                >
                    Browse
                </Text>

                {/* profile pic */}

                <IconButton
                    icon={images.avatar}
                    containerStyle={{
                        width: 35,
                        height: 35,
                        borderRadius: sizes.padding
                    }}
                // onPress={() => navigation.navigate(Route.private.profile)}
                />

            </View>
        )
    }

    const Section = ({ title, subtitle, onEditPress, hideBtn = false }) => {
        return (
            <View
                style={{
                    ...globalStyle.row,
                    marginTop: sizes.padding
                }}
            >

                <View>
                    {/* Title */}

                    <Text
                        style={{
                            color: colors.gray2,
                        }}
                    >
                        {title}
                    </Text>

                    {/* subtitle */}
                    <Text
                        style={{
                            color: colors.black,
                            fontWeight: '600',
                            marginTop: 3
                        }}
                    >
                        {subtitle}
                    </Text>
                </View>

                {/* Edit button */}

                {
                    !hideBtn &&
                    <TextButton
                        label={"Edit"}
                        labelStyle={{
                            color: colors.primary
                        }}
                    // onPress={onEditPress}
                    />
                }


            </View>
        )
    }


    const renderUserInfo = () => {

        return (
            <View
                style={{
                    marginTop: sizes.radius
                }}
            >
                <Section
                    title={"Username"}
                    subtitle={"Mohsin Malik"}
                />

                <Section
                    title={"Location"}
                    subtitle={"Islamabad"}
                />

                <Section
                    title={"E-mail"}
                    subtitle={"mohsina994@gmail.com"}
                    hideBtn={true}
                />
            </View>
        )
    }

    const renderWealth = () => {
        return (
            <View
            >
                <Text
                    style={{
                        color: colors.black,
                        fontWeight: '600',
                        marginTop: 3
                    }}
                >
                    Budget
                </Text>

                <Slider
                    style={{
                        height: 19,
                        marginTop: sizes.radius
                    }}
                    minimumValue={0}
                    maximumValue={500}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.secondary}
                    maximumTrackTintColor="rgba(157,163,180,0.70)"
                    onValueChange={(val) => setSliderVal(val)}
                />
                <View
                    style={{
                        height: 20
                    }}
                >
                    <Text
                        style={{
                            color: colors.black,
                            flex: 1,
                            position: 'absolute',
                            right: 0
                        }}
                    >
                        $ {sliderVal}
                    </Text>
                </View>

                {/*  */}
                <Text
                    style={{
                        color: colors.black,
                        fontWeight: '600',
                        marginTop: 3
                    }}
                >
                    Monthly cap
                </Text>

                <Slider
                    style={{
                        height: 19,
                        marginTop: sizes.radius
                    }}
                    minimumValue={0}
                    maximumValue={500}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.secondary}
                    maximumTrackTintColor="rgba(157,163,180,0.70)"
                    onValueChange={(val) => setSliderVal2(val)}
                />
                <View
                    style={{
                        height: 20
                    }}
                >
                    <Text
                        style={{
                            color: colors.black,
                            flex: 1,
                            position: 'absolute',
                            right: 0
                        }}
                    >
                        $ {sliderVal2}
                    </Text>
                </View>



            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    // ...globalStyle.row
                }}
            >
                <View
                    style={{
                        ...globalStyle.row
                    }}
                >
                    <Text
                        style={{
                            color: colors.black
                        }}
                    >
                        Notications
                    </Text>

                    <CustomSwitch
                        isSelected={notiSwitch}
                        onPress={() => {
                            setNotiSwitch(prev => !prev)
                        }}
                    />

                </View>

                <View
                    style={{
                        marginTop: sizes.padding,
                        ...globalStyle.row
                    }}
                >
                    <Text
                        style={{
                            color: colors.black
                        }}
                    >
                        Newsletter
                    </Text>

                    <CustomSwitch
                        isSelected={newsSwitch}
                        onPress={() => {
                            setNewSwitch(prev => !prev)
                        }}
                    />
                </View>

            </View>
        )
    }

    // main return
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: sizes.padding,
                backgroundColor: colors.white
            }}
        >
            {/* Header */}

            {renderHeader()}

            {/* settings */}

            {renderSetting()}

            {/* body content */}

            {/* User Info */}

            {renderUserInfo()}

            {/* Line Divider */}

            <LineDivider
                containerStyle={{
                    marginVertical: sizes.padding,
                }}
            />

            {renderWealth()}

            <LineDivider
                containerStyle={{
                    marginVertical: sizes.padding,
                }}
            />

            {/* footer */}

            {renderFooter()}

        </View>
    )
}

export default Profile