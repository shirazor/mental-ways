const stepEight = {
    _id: 8,
    question: "אנא תארו את חומרת התסמינים",
    answers: []
}

const stepSeven = {
    _id: 7,
    question: "אנא פנו למבוגר להמשך טיפול",
    answers: []
}

const stepSix = {
    _id: 6,
    question: "האם יש מבוגר בקרבת מקום?",
    answers: [
        {
            value: "כן",
            nextStep: stepSeven
        },
        {
            value: "לא",
            nextStep: stepEight
        }
    ]
}

const stepFive = {
    _id: 5,
    question: "מהו טווח הגילאים?",
    answers: [
        {
            value: "פחות מ-18",
            nextStep: stepSix
        },
        {
            value: "18 ומעלה",
            nextStep: stepEight
        }
    ]
}

const stepFour = {
    _id: 4,
    question: "אנא התקשרו למדא ולמשטרה במיידי",
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