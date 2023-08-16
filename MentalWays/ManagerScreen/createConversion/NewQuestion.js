import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Text, Card, FAB } from '@rneui/themed';
import EditAnswer from './components/editAnswer';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewQuestion = ({ step, index, setSteps }) => {
    const [answers, setAnswers] = useState([...step.answers]);
    console.log(answers)

    return (
        <Card containerStyle={styles.Card}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{width: 17}}></View>
                <Card.Title>{`שאלה ${index + 1}`}</Card.Title>
                <Icon name="times" size={23} color="red"
                    onPress={() => setSteps(prevSteps => {
                        const copiedSteps = [...prevSteps];
                        copiedSteps.splice(index, 1);

                        return copiedSteps;
                    })} />
            </View>
            <Input
                placeholder='השאלה'
                onChange={({ nativeEvent }) => setInitalStep({ ...initalStep, question: nativeEvent.text })}
                value={step.question || ''}
            />
            <Text>תשובות אפשריות</Text>
            <ScrollView style={{ maxHeight: 400 }}>
                {answers.map((answer, index) => <EditAnswer
                    key={index}
                    answerInfo={answer}
                    setAnswers={setAnswers}
                    answerIndex={index} />)}
                <View style={styles.AddAnswer}>
                    <FAB
                        onPress={() => setAnswers(prevAnswers => {
                            const updatedAnswers = [...prevAnswers];
                            updatedAnswers.push({});

                            return updatedAnswers;
                        })}
                        style={{ alignSelf: 'flex-start' }}
                        size='small'
                        icon={{ name: 'add', color: 'white' }}
                        color='#6b9080' />
                    <Text>הוספת תשובה</Text>
                </View>
            </ScrollView>
        </Card>
    );
}

const styles = StyleSheet.create({
    Card: {
        width: '90%',
        justifyContent: 'start',
        borderRadius: 15,
    },
    AddAnswer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
});

export default NewQuestion;