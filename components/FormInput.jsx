import { View, Text, TextInput } from 'react-native'
import { colors, fonts, sizes } from '../constants/theme'

const FormInput = ({
    containerStyle,
    label,
    placholder,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoComplete = "off",
    autoCapitalize = "none",
    errorMsg = "",
    inputStyle,
    value,
    maxLength,
    inputContainerStyle
}) => {
    return (
        <View style={{ ...containerStyle, marginVertical: 5 }}>

            {/* label & error msg */}
            {
                label &&
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >

                    <Text style={{
                        color: colors.gray, ...fonts.body, fontSize: 18
                    }} >{label}</Text>

                    {
                        errorMsg &&
                        <Text style={{ color: 'red', ...fonts.body }}>{errorMsg}</Text>
                    }

                </View>

            }


            {/* text input */}

            <View
                style={{
                    flexDirection: 'row',
                    borderRadius: sizes.radius,
                    // marginTop: sizes.base,
                    paddingHorizontal: sizes.padding,
                    backgroundColor: colors.gray2,
                    height: 40,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}

                <TextInput
                    maxLength={maxLength}
                    value={value}
                    style={{
                        flex: 1,
                        color: colors.black,
                        fontWeight: '500',
                        fontSize: 18,
                        ...inputStyle
                    }}
                    placeholder={placholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={colors.gray}
                    keyboardType={keyboardType}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}

                />
                {appendComponent}

            </View>

        </View>
    )
}

export default FormInput