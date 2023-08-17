import NewConversion from "./NewConversation";
import {NewConversationProvider} from './newConversationContext'

const CreateConversion = () => {
    return (
        <NewConversationProvider>
            <NewConversion />
        </NewConversationProvider>
    );
};

export default CreateConversion;