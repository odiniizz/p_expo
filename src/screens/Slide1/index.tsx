import { Text, Image, View, ImageBackground } from "react-native"
import {styles} from './styles'
import {stylesg} from '../../styles/globalstyles'
import { ButtonSlide } from "../../components/ButtonSlide";
import { IPagina } from "../../../App";

export function Slide1({ setPageI }: IPagina){
    const slide = require('../../assets/pedemocafundo.png')
    const fome = require('../../assets/fome.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            
            <View style={stylesg.quadro}>
                <Text style={stylesg.texto}>Bateu aquela vontade de comer um docinho, né?</Text>
            </View>

            <View style={stylesg.icone}>
                <Image source={fome}></Image>
            </View>

            <View style={stylesg.button}>
                <View style={stylesg.buttonSpace}>
                    <ButtonSlide style ={styles.sozinho} onPressI={() => setPageI(1)} />
                </View> 
                <View style={stylesg.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View> 
                <View style={stylesg.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} />
                </View> 
                <View style={stylesg.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View> 
            </View>

        </ImageBackground>
    )
}