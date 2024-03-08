import { ImageBackground } from "react-native"
import {styles} from './styles'

export function Slide4(){
    const slide = require('../../assets/brigadeirofundo.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>

        </ImageBackground>
    )
}