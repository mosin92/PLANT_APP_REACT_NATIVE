import { View, Text, Image, Animated, TouchableOpacity, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { colors, fonts, sizes } from '../constants/theme'
import { IconButton, LineDivider, PlantBox } from '../components'
import { globalStyle, icons, images, Route } from '../constants'

const plant_data = [
    {
        id: 0,
        lable: 'Production',
        ref: React.createRef()
    },
    {
        id: 1,
        lable: 'Inspiration',
        ref: React.createRef()
    },
    {
        id: 2,
        lable: 'Shop',
        ref: React.createRef()
    },
]

const TabIndicator = ({ ScrollX, measureLayout }) => {

    const inputRange = plant_data.map(
        (_, i) => i * sizes.width
    )

    const TabWidth = ScrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(item => item.width)
    })

    const TabTranslateX = ScrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(item => item.x)
    })


    return (
        <Animated.View
            style={{
                position: 'absolute',
                bottom: 0,
                borderRadius: sizes.radius,
                backgroundColor: colors.primary,
                height: 4,
                transform: [
                    {
                        translateX: TabTranslateX
                    }
                ],
                width: TabWidth
            }}
        />
    )
}




const Home = ({ navigation }) => {

    const ScrollX = React.useRef(new Animated.Value(0)).current
    const flatlistRef = useRef()

    const Tabs = () => {

        const containerRef = useRef()
        const [measureLayout, setmeasureLayout] = React.useState([])

        React.useEffect(() => {
            let data = []
            plant_data.forEach(tab => {
                tab?.ref?.current?.measureLayout(
                    containerRef.current,
                    (x, y, width, height) => {

                        data.push({
                            x, y, width, height
                        })

                        if (data.length === plant_data.length) {
                            setmeasureLayout(data)
                            console.log("meansure layout----", measureLayout)
                        }
                    }
                )
            })
        }, [containerRef?.current])

        const onPressTab = (index) => {
            flatlistRef?.current.scrollToOffset({
                offset: index * sizes.width
            })
        }

        return (
            <View
                ref={containerRef}
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}
            >
                {
                    measureLayout.length > 0 &&

                    <TabIndicator ScrollX={ScrollX} measureLayout={measureLayout} />
                }
                {
                    plant_data.map(
                        (item, index) => (

                            <TouchableOpacity
                                key={`tab-${index}`}
                                ref={item.ref}
                                onPress={() => onPressTab(index)}
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: 5,
                                }}
                            >

                                <Text
                                    style={{
                                        color: colors.black,
                                        ...fonts.h3,
                                        fontWeight: '500'
                                    }}
                                >
                                    {item.lable}
                                </Text>

                            </TouchableOpacity>
                        )
                    )
                }

            </View>
        )
    }





    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: sizes.padding,
                    paddingHorizontal: sizes.padding
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
                // onPress={() => navigation.navigate(Route.private.profile)}
                />

            </View>
        )
    }

    const renderProfile = () => {
        return (
            <View
                style={{
                    marginTop: sizes.padding,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: sizes.padding
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
                    onPress={() => navigation.navigate(Route.private.profile)}
                />
            </View>
        )
    }

    const renderContent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: sizes.radius
                }}
            >
                {/* Tabs */}

                <View
                    style={{
                        height: 60,
                        paddingHorizontal: sizes.padding
                    }}
                >
                    <Tabs ScrollX={ScrollX} />
                    {/* Line Divider */}
                    <LineDivider />
                </View>

                {/* Content */}

                <Animated.FlatList
                    ref={flatlistRef}
                    data={plant_data}
                    keyExtractor={item => `plant_tab-${item.id}`}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                        Animated.event(
                            [
                                {
                                    nativeEvent: { contentOffset: { x: ScrollX } }
                                }
                            ],
                            {
                                useNativeDriver: false
                            }
                        )
                    }
                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                width: sizes.width
                            }}
                        >
                            <PlantBox />
                        </View>
                    )}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
            }}
        >
            {/* Header */}

            {renderHeader()}

            {/* profile */}

            {renderProfile()}

            {/* Tab content */}

            {renderContent()}

        </View>
    )
}

export default Home