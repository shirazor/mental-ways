import { StyleSheet, View } from 'react-native';
import { Text, FAB } from '@rneui/themed';
import { useState } from 'react';
import NewQuestion from './NewQuestion';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateConversion = () => {
    const [conversion, setConversion] = useState();
    const [initalStep, setInitalStep] = useState();
    const [steps, setSteps] = useState([{
        id: 1, question: '', answers: [
            { value: '', nextStep: {} },
            { value: '', nextStep: {} }]
    }]);

    const saveIntialStep = () => {
        setConversion({ ...conversion, initalStep })
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <View style={{ width: 17 }}></View>
                <Text h2>שם השיחה</Text>
                <Icon name="save" size={20} color="#6b9080" />
            </View>

            <ScrollView>
                {steps.map((step, index) => <NewQuestion
                    key={index}
                    setSteps={setSteps}
                    step={step}
                    index={index} />)}
            </ScrollView>
            <FAB
                onPress={() => setSteps(prevSteps => {
                    const updatedSteps = [...prevSteps];
                    updatedSteps.push({ id: prevSteps.length, question: '', answers: [{}] });

                    return updatedSteps;
                })}
                size='small'
                title='הוספת שאלה'
                icon={{ name: 'add', color: 'white' }}
                color='#6b9080'
                style={{ marginBottom: 15, marginTop: 5 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(238,230,223)',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingRight: 10,
        paddingLeft: 10
    }
});

export default CreateConversion;