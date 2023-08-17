import { StyleSheet, View } from 'react-native';
import { Input, Text, FAB } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/FontAwesome';
import useConversation from '../../newConversationContext';


// const steps = [
//     { key: '1', value: 'שאלה 1', _id: '1' },
//     { key: '2', value: 'שאלה 2', _id: '2' },
//     { key: '3', value: 'שאלה 3', _id: '3' },
// ]

const EditAnswer = ({ answerInfo, answerIndex, setAnswers, currentStep }) => {
    
    const [answer, setAnswer] = useState(answerInfo);
    const [selectedValue, setSelectedValue] = useState('');
    const {editAnswer, steps} = useConversation();

    // useEffect(() => {
    //     if (answer && answer.nextStep && answer.value) {
    //         setAnswers((answers) => {
    //             const copiedAnswers = [...answers]
    //             copiedAnswers[answerIndex] = answer
    //             return copiedAnswers
    //         });
    //     }
    // }, [answer])

    const onChange = (ch) ={

    }

    return (
        <View style={styles.container}>
            <View style={styles.AnswerHeader}>
                <View style={styles.rowContainer} >
                    <View style={styles.Answer} >
                        <Text style={{ color: 'white' }}>{answerIndex + 1}</Text>
                    </View>
                    <Input
                        placeholder='התשובה'
                        containerStyle={{ width: 160 }}
                        onChange={({ nativeEvent }) => {
                            setAnswer({ ...answer, value: nativeEvent.text })
                            editAnswer(currentStep.index, answer)
                            }}
                        value={answer.value || ''}
                    />
                </View>
                <Icon name="times" size={23} color="red"
                    onPress={() => setAnswers(prevAnswers => {
                        const copiedAnswers = [...prevAnswers];
                        copiedAnswers.splice(answerIndex, 1);

                        return copiedAnswers;
                    })} />
            </View>
            <SelectList
                boxStyles={{ width: 200, marginTop: 0, alignSelf: 'center' }}
                dropdownStyles={{ width: 200, alignSelf: 'center' }}
                search={false}
                setSelected={(val) => {
                    editAnswer(currentStep.index, { ...answer, nextStep: val - 1 }, answerIndex)
                    setAnswer({ ...answer, nextStep: val - 1 })
                    
                }}
                data={steps.map((step, index) =>index + 1)}
                save="value"
                maxHeight={100}
                placeholder='לאן התשובה תפנה?'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        padding: 10,
        borderColor: '#6b9080',
        borderWidth: 1,
        borderRadius: 20
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    SelectList: {
        backgroundColor: 'red'
    },
    AnswerHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Answer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#6b9080',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
});

export default EditAnswer;