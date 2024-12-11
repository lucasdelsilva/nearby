import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { StyleSheet, View, Text } from "react-native"

function IndexScreen() {
    return (
        <>
            <View style={styles.container}>

                <Welcome />
                <Steps />
            </View>
        </>
    )
};

export default IndexScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        gap: 40
    }
});
