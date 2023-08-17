import { StyleSheet, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Text, FAB } from '@rneui/themed';
import { useState } from 'react';
import NewQuestion from './NewQuestion';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import useConversation from './newConversationContext'
import useConverstionsData from '../conversationsContext';

const NewConversion = () => {
    const {setConversations} = useConverstionsData()
    const { editStep, steps, setTitle, createConversation, conversion } = useConversation();

    const onSave = async () => {
        const finalConversation = createConversation();

        setConversations(prev => 
            [...prev, finalConversation]
        )

        // await axios.post("https://mental-ways-git-mental-ways.apps.cluster-lmzsk.lmzsk.sandbox209.opentlc.com/conversation", finalConversation);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={{ width: 300,
                 }}>
                <Input
                    style={{width:'20%',
                    fontSize: 27,
                    textAlign: 'center'}}
                    placeholder='שם השיחה'
                    onChange={event => setTitle(event.nativeEvent.text)} 
                    value={conversion?.title}></Input></View>
                {/* <Button > */}
                <TouchableOpacity onPress={async () => {
                    await onSave()
                }}>
                     <Icon name="save" size={30} color="#6b9080" />
                </TouchableOpacity>
                
                {/* </Button> */}
            </View>

            <ScrollView>
                {steps.map((step, index) => <NewQuestion
                    key={index}
                    setSteps={editStep}
                    step={{ ...step, index }}
                    index={index} />)}
            </ScrollView>
            <FAB
                onPress={() => editStep({ id: steps.length, question: '', answers: [{}] })}
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

export default NewConversion;