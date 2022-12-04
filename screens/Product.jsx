import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { globalStyle, icons } from '../constants'
import { colors, fonts, sizes } from '../constants/theme'
import { products } from '../constants/mocks'
import { FormInput, IconButton, TextButton, LineDivider } from '../components'


const Product = ({ navigation }) => {

    // UI RENDER

    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: sizes.radius,
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
                    onPress={() => navigation.goBack()}
                />

            </View>
        )
    }

    const renderDesc = () => {
        return (
            <View
                style={{
                    marginTop: sizes.radius
                }}
            >
                <Text
                    style={{
                        color: colors.gray,
                        ...fonts.body,
                        lineHeight: 20.0
                    }}
                >
                    {products[0].description}
                </Text>
            </View >
        )
    }

    const renderTags = () => {
        return (
            <View
                style={{
                    marginTop: sizes.radius,
                    flexDirection: 'row',
                    flex: 1
                }}
            >
                {
                    products[0].tags.map(
                        (item, index) => (
                            <TouchableOpacity
                                key={`tags-${index}`}
                                style={{
                                    height: 35,
                                    minWidth: 40,
                                    borderRadius: sizes.padding,
                                    borderColor: colors.gray,
                                    borderWidth: 1,
                                    marginRight: sizes.padding,
                                    paddingHorizontal: sizes.base,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.black
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        )
    }

    const renderGallery = () => {
        return (
            <View
            >
                <Text
                    style={{
                        color: colors.black,
                        ...fonts.h1,
                        fontWeight: 'bold'
                    }}
                >
                    Gallery
                </Text>

                {/* gallery images */}
                <View
                    style={{
                        flexDirection: 'row',
                        // height: 200,
                        marginTop: sizes.padding
                    }}
                >
                    {products[0].images.splice(1, 2).map(
                        (item, index) => (
                            <Image
                                key={`gallery-${index}`}
                                resizeMode='contain'
                                source={item}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginRight: sizes.radius
                                }}
                            />
                        )
                    )}

                    {/* add more */}

                    <TouchableOpacity
                        style={{
                            width: 55,
                            height: 55,
                            borderRadius: sizes.base,
                            backgroundColor: "#DDDDDD",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: colors.gray
                            }}
                        >
                            +6
                        </Text>
                    </TouchableOpacity>


                </View>

            </View>
        )
    }


    const renderImageSlider = () => {

        return (

            <FlatList
                horizontal
                pagingEnabled
                data={products[0].images}
                keyExtractor={(item, i) => `item-${i}`}
                scrollEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    console.log("-----image", item)
                    return (
                        <Image
                            source={item}
                            resizeMode='contain'
                            style={{
                                width: sizes.width,
                                height: 250,
                            }}
                        />
                    )
                }}
            />
        )
    }


    // main contaner
    return (
        <ScrollView
            style={{
                ...globalStyle.container,

            }}
            contentContainerStyle={{
                paddingVertical: sizes.padding
            }}
        >
            {/* header */}
            {renderHeader()}


            {/* Image Gallery Slider */}

            {renderImageSlider()}
            <View
                style={{
                    paddingHorizontal: sizes.padding
                }}
            >
                <Text
                    style={{
                        marginTop: sizes.padding,
                        color: colors.black,
                        ...fonts.h1,
                        fontWeight: 'bold'
                    }}
                >
                    {products[0].name}
                </Text>

                {/* Tags */}

                {renderTags()}

                {/* desc */}

                {renderDesc()}

                {/* Line divider */}

                <LineDivider
                    containerStyle={{
                        marginVertical: sizes.padding
                    }}
                />

                {/* Gallery */}


                {renderGallery()}


            </View>

        </ScrollView>
    )
}

export default Product