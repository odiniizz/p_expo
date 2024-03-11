import { ImageBackground, View, Text, Image } from "react-native"
import {styles} from './styles'
import {stylesg} from '../../styles/globalstyles'
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide2({ setPageI }: IPagina){
    const slide = require('../../assets/brigadeirofundo.png')
    const brigadeiro = require('../../assets/brigadeiro.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            <View style={stylesg.quadro}>
                <Text style={stylesg.texto}>Não se preocupe, nosso app irá te ajudar a acabar com essa vontade de uma forma muito rápida!</Text>
            </View>
            <View style={stylesg.icone}>
                <Image source={brigadeiro}></Image>
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