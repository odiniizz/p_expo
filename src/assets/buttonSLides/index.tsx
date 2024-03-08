import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"

interface IButton extends TouchableOpacityProps {
    onPressI: () => void;
}
    
export function ButtonSlide({ onPressI }: IButton) {
    return (
        <TouchableOpacity style={styles.ball} onPress={onPressI} />
    )
}