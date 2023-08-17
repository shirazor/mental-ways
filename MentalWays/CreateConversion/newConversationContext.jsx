import { createContext, useContext, useState } from 'react'
import axios from 'axios';

const newConversationContext = createContext();

export const NewConversationProvider = ({ children }) => {
    const [conversion, setConversion] = useState({});
    const [steps, setSteps] = useState([]);

    const createConversation = () => {
        const finalConversation = conversion;

        const sortedSteps = steps.sort((a, b) => b.id - a.id);
        const populatedArray = [];
        sortedSteps.forEach(step => {
            const answers = step.answers?.map(x => ({
                ...x,
                nextStep: populatedArray.find(step => step.id === x?.nextStep)
            }))

            populatedArray.push({ ...step, answers });
        })

        finalConversation.initialStep = populatedArray.find(x => x.id === 0);

        return finalConversation;
    }

    const editStep = step => {
        setSteps(prev => {
            const temp = [...prev]
            if (temp[step.index]) {
                temp[step.index] = step;
            } else {
                temp.push(step);
            }
            return temp;
        });
    }

    const removeStep = stepIndex => {
        setSteps(prevSteps => {
            const copiedSteps = [...prevSteps];
            copiedSteps.splice(stepIndex, 1);

            return copiedSteps;
        })
    }

    const editQuestion = (step, newQuestion) => {
        editStep({ ...step, question: newQuestion });
    }

    const editAnswer = (stepId, answer, index) => {
        console.log(answer)
        console.log(index)
        setSteps(prev => {
            const temp = [...prev]
            if (!temp[stepId].answers) {
                temp[stepId].answers = [answer]
            }
            else {
                if (index !== -1) {
                    temp[stepId].answers[index] = answer;
                }
                else {
                    temp[stepId].answers.push(answer);
                }
            }
            return temp;
        })
    }

    const setTitle = title => {
        setConversion({ ...conversion, title })
    }

    const setInitalStep = initialStep => {
        setConversion({ ...conversion, initialStep })
    }


    return <newConversationContext.Provider value={{createConversation, editStep, editAnswer, setTitle, setInitalStep, editQuestion, steps, conversion, removeStep }}>
        {children}
    </newConversationContext.Provider>
}

export default useConverstion = () => useContext(newConversationContext)