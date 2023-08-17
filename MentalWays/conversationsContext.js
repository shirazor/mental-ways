import { createContext, useContext, useState } from 'react'

const NewConversationContext = createContext();

export const NewConversationsDataProvider = ({ children }) => {
    const [conversions, setConversations] = useState([]);

    return <NewConversationContext.Provider value={{conversions, setConversations }}>
        {children}
    </NewConversationContext.Provider>
}

export default useConverstionsData = () => useContext(NewConversationContext)