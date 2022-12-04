import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { colors, fonts, sizes } from '../constants/theme'
import { categories } from '../constants/mocks'

const PlantBox = () => {
    return (
        <ScrollView
            style={{
                // paddingHorizontal: sizes.padding, marginTop: sizes.padding

            }}
            contentContainerStyle={{
                // paddingBottom: sizes.base
            }}
        >

            <FlatList
                numColumns={2}
                data={categories}
                keyExtractor={item => `items-${item.id}`}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: sizes.base
                }}

                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity
                            style={{
                                width: sizes.width * 0.4,
                                marginRight: (index % 2 == 0) ? sizes.base : 0,
                                marginTop: sizes.padding,
                                height: 150,
                                backgroundColor: colors.white,
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
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* Image */}
                            <Image
                                source={item.image}
                                resizeMode='contain'
                                style={{
                                    width: 35,
                                    height: 35
                                }}
                            />
                            {/* title */}
                            <Text
                                style={{
                                    paddingTop: 3,
                                    fontWeight: 'bold',
                                    color: colors.black
                                }}
                            >

                                {item.name}
                            </Text>

                            {/* SubTitle */}
                            <Text
                                style={{
                                    paddingTop: 3,
                                    fontWeight: 'bold',
                                    color: colors.gray2,
                                    ...fonts.body,
                                    fontSize: 12
                                }}
                            >
                                {item.count} Products
                            </Text>

                        </TouchableOpacity>
                    )
                }
            />

        </ScrollView>
    )
}

export default PlantBox