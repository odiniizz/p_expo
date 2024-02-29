import { ImageBackground } from "react-native"
import {styles} from './styles'

export function Slide1(){
    const slide = require('../../assets/cupcakefundo.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            
        </ImageBackground>
    )
}