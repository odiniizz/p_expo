import { ImageBackground, View, Text, Image } from "react-native"
import { styles } from './styles'
import { globalstyles } from '../../styles/globalstyles'
import { Unitario } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide3({ setPageI }: IPagina){
    const slide = require('../../assets/cupcakefundo.png')
    const chapeu = require('../../assets/chapeu.png')
    return (
        <ImageBackground style={globalstyles.container} source ={slide}>
            <View style={globalstyles.quadro}>
                <Text style={globalstyles.texto}>Aprenda a fazer receitas fáceis e rápidas com os ingredientes que você tiver, até as mais elaboradas!</Text>
            </View>
            <View style={globalstyles.icone}>
                <Image source={chapeu}></Image>
            </View>
            <View style={globalstyles.button}>
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <Unitario onPressI={() => setPageI(3)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View> 
            </View>
        </ImageBackground>
    )
}