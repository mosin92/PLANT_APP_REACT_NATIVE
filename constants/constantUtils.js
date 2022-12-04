import { Alert } from 'react-native'

// show alert

const showAlertbox = (title, message, firstBtnOnpress, firstbtnText) => {

    Alert.alert(
        title,
        message,
        [
            {
                text: firstbtnText || "OK",
                onPress: firstBtnOnpress
            }
        ]
    )
}

export {
    showAlertbox
}