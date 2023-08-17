const stepFive = {
    _id: 5,
    question: "באפשרותך לפנות לרופא מומחה,\nלמציאת רופא צור קשר עם קופת החולים",
    answers: []
}

const stepFour = {
    _id: 4,
    question: "אנא פנו למוקד רפואה דחופה",
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