import { ImageBackground, View, Text, Image } from "react-native"
import {styles} from './styles'
import {stylesg} from '../../styles/globalstyles'
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide3({ setPageI }: IPagina){
    const slide = require('../../assets/cupcakefundo.png')
    const chapeu = require('../../assets/chapeu.png')
    return (
        <ImageBackground style={stylesg.container} source ={slide}>
            <View style={stylesg.quadro}>
                <Text style={stylesg.texto}>Aprenda a fazer receitas fáceis e rápidas com os ingredientes que você tiver, até as mais elaboradas!</Text>
            </View>
            <View style={stylesg.icone}>
                <Image source={chapeu}></Image>
            </View>
            <View style={stylesg.button}>
                <View style={stylesg.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
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