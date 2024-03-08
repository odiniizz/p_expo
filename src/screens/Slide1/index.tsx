import { Text, Image, View, ImageBackground } from "react-native"
import {styles} from './styles'
import {stylesg} from '../../styles/globalstyles'

export function Slide1(){
    const slide = require('../../assets/pedemocafundo.png')
    const fome = require('../../assets/fome.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            <Text style={stylesg.texto}>Bateu aquela vontade de comer um docinho, né?</Text>
            <View style={stylesg.icone}>
            <Image source={fome}></Image>
            </View>
        </ImageBackground>
    )
}