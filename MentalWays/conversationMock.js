const stepFour = {
    _id: 4,
    question: "thanks for answering",
    answers: [
        {
            value: "back to begining",
            nextStep: stepOne
        },
        {
            value: "finish",
            nextStep: null
        }
    ]
  }
  
  const stepThree = {
    _id: 3,
    question: "or harush lives in",
    answers: [
        {
            value: "raanana",
            nextStep: stepFour
        },
        {
            value: "eilat",
            nextStep: stepFour
        },
        {
            value: "back to first question",
            nextStep: stepOne
        }
    ]
  }

  const steptwo = {
    _id: 2,
    question: "amit favorite food is",
    answers: [
        {
            value: "hamburger",
            nextStep: stepFour
        },
        {
            value: "pizza",
            nextStep: stepFour
        },
        {
            value: "back to first question",
            nextStep: stepOne
        }
    ]
  }

  const stepOne = {
    _id: 1,
    question: "ask next questio about:",
    answers: [
        {
            value: "amit michles",
            nextStep: steptwo
        },
        {
            value: "or harush",
            nextStep: stepThree
        }
    ]
  }

 export const conversationMock = {
    _id: 1,
    title: 'hello',
    initialStep: stepOne
  };