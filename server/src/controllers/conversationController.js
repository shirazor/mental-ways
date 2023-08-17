import Conversetion from '../models/Conversation.js';
import Step from '../models/Step.js';

export const getPopulatedConversation = async (id) => {
    const convo = await Conversetion.findById(id).lean();

    const steps = await Step.find().sort({ index: -1 }).lean();
    const populatedSteps = [];
    const tempSteps = steps.map((step, index) => {
        if (index !== 0) {
            const answers = step.answers.map(answer => {
                
                const nextStep = populatedSteps.find(step => {
                     return step._id.toString() === answer.nextStep.toString() 
                    })

                return { ...answer, nextStep }
            })

            populatedSteps.push({ ...step, answers })
            return { ...step, answers }

        } else {
            populatedSteps.push(step)
            return step
        }
    })

    return {...convo, initialStep: tempSteps[tempSteps.length - 1]};
}