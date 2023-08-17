const stepFive = {
    _id: 4,
    question: "אז הכל טוב",
    answers: []
}

const stepFour = {
    _id: 4,
    question: "אנא פנו למוקד רפואה",
    answers: []
}

const stepThree = {
    _id: 3,
    question: "האם האדם נמצא בסכנה מיידית?",
    answers: [
        {
            value: "כן",
            nextStep: stepFour
        },
        {
            value: "לא",
            nextStep: stepFive
        }
    ]
}

const steptwo = {
    _id: 2,
    question: "האם מדובר במקרה חירום?",
    answers: [
        {
            value: "כן",
            nextStep: stepFour
        },
        {
            value: "לא",
            nextStep: stepFive
        }
    ]
}

const stepOne = {
    _id: 1,
    question: "היי,\nאיך אוכל לעזור?",
    answers: [
        {
            value: "אני לא מרגיש טוב",
            nextStep: steptwo
        },
        {
            value: "עזרה עבור אדם קרוב",
            nextStep: stepThree
        }
    ]
}

export const conversationMock = {
    _id: 1,
    title: 'hello',
    initialStep: stepOne
};