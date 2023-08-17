import NewConversion from "./NewConversation";
import {NewConversationProvider} from './newConversationContext'

const CreateConversion = () => {
        id: 1, question: '', answers: [
            { value: '', nextStep: {} },
            { value: '', nextStep: {} }]

    return (
        <NewConversationProvider>
            <NewConversion />
        </NewConversationProvider>
    );
};

export default CreateConversion;