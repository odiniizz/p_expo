import { ImageBackground, View, Text, Image } from "react-native"
import {styles} from './styles'
import {stylesg} from '../../styles/globalstyles'
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide4({ setPageI }: IPagina){
    const slide = require('../../assets/biscoitofundo.png')
    const cozinhando = require('../../assets/cozinhando.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            <View style={stylesg.quadro}>
            <Text style={stylesg.texto}>Coloque a mão na massa conosco e se divirta neste processo!</Text>
            </View>
            <View style={stylesg.icone}>
                <Image source={cozinhando}></Image>
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