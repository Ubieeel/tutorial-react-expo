import { Image } from "react-native-web"
import { StyleSheet, Text } from "react-native"

export default function Logo() {
    return (
        <view style={styles.container}>
        <Image style={styles.logo} 
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        />
        </view>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 59,
        padding: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
