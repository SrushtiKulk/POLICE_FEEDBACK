// import React, { useState } from "react";
// import { QuizData } from "./feedbackdata";
// import "./feedback.css";

// function FeedBack() {
//     const [buttonColor, setButtonColor] = useState("#00bf63");
//     const [selectedOptions, setSelectedOptions] = useState(
//         Array(QuizData.length).fill("") // Initialize with empty strings
//     );

//     const handleOptionClick = (questionIndex, optionIndex) => {
//         console.log("Option clicked:", questionIndex, optionIndex);
//         const newSelectedOptions = [...selectedOptions];
//         newSelectedOptions[questionIndex] =
//             QuizData[questionIndex].options[optionIndex];
//         setSelectedOptions(newSelectedOptions);
//     };
//     const [isButtonClicked, setIsButtonClicked] = useState(false);
//     const submitAnswers = async () => {
//         console.log("Submit button clicked");
//         try {
//             const response = await fetch("http://localhost:3000/api/storeAnswers", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     answers: selectedOptions.map((selectedOption, questionIndex) => ({
//                         questionIndex,
//                         selectedOption,
//                     })),
//                 }),
//             });

//             if (response.ok) {
//                 console.log("Answers submitted successfully");
//             } else {
//                 console.error("Failed to submit answers");
//             }
//         } catch (error) {
//             console.error("Error submitting answers:", error);
//         }

//         // console.log("Button color changed");
//         // setButtonColor("#ff6347");
//         console.log("Button color changed");
//         setIsButtonClicked(true);
//     };

//     return (
//         <div>
//             <p className="heading-text">FEEDBACK FORM</p>

//             {QuizData.map((question, questionIndex) => (
//                 <div key={questionIndex} className="container">
//                     <div className="question">
//                         <span id="question-number">{questionIndex + 1}</span>
//                         <span id="question-txt">{question.question}</span>
//                     </div>

//                     <div className="option-container">
//                         {question.options.map((option, optionIndex) => (
//                             <button
//                                 key={optionIndex}
//                                 className={`option-btn ${selectedOptions[questionIndex] === option ? "checked" : ""
//                                     }`}
//                                 onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             ))}

//             <button
//                 className={`submit-btn ${isButtonClicked ? "clicked" : ""}`}
//                 onClick={submitAnswers}
//             >
//                 <h3 style={{ margin: "0", color: "#fff" }}>
//                     {isButtonClicked ? "Answers Submitted" : "Submit Answers"}
//                 </h3>
//             </button>

//             {isButtonClicked && (
//                 <div style={{ marginTop: "10px", color: "#00bf63" }}>
//                     Answers submitted successfully!
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FeedBack;

import React, { useState } from "react";
import { QuizData } from "./feedbackdata";
import "./feedback.css";
import { feedbackAPI } from 'pages/APIRoutes';

function FeedBack() {
    const [buttonColor, setButtonColor] = useState("#00bf63");
    const [selectedOptions, setSelectedOptions] = useState(
        Array(QuizData.length).fill("") // Initialize with empty strings
    );

    const handleOptionClick = (questionIndex, optionIndex) => {
        console.log("Option clicked:", questionIndex, optionIndex);
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] =
            QuizData[questionIndex].options[optionIndex];
        setSelectedOptions(newSelectedOptions);
    };

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const submitAnswers = async () => {
        // Check if any question is unanswered
        if (selectedOptions.includes("")) {
            alert("Please answer all questions before submitting.");
            return;
        }

        try {
            // const response = await fetch("http://localhost:8080/api/storeAnswers", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         answers: selectedOptions.map((selectedOption, questionIndex) => ({
            //             questionIndex,
            //             selectedOption,
            //         })),
            //     }),
            // });

            const response = await fetch("http://localhost:8080/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    answers: selectedOptions.map((selectedOption, questionIndex) => ({
                        questionIndex,
                        selectedOption,
                    })),
                }),
            });


            if (response.ok) {
                console.log("Answers submitted successfully");
            } else {
                console.error("Failed to submit answers");
            }
        } catch (error) {
            console.error("Error submitting answers:", error);
        }

        setIsButtonClicked(true);
    };

    return (
        <div>
            <p className="heading-text">FEEDBACK FORM</p>

            {QuizData.map((question, questionIndex) => (
                <div key={questionIndex} className="container">
                    <div className="question">
                        <span id="question-number">{questionIndex + 1}</span>
                        <span id="question-txt">{question.question}</span>
                    </div>

                    <div className="option-container">
                        {question.options.map((option, optionIndex) => (
                            <button
                                key={optionIndex}
                                className={`option-btn ${selectedOptions[questionIndex] === option ? "checked" : ""
                                    }`}
                                onClick={() => handleOptionClick(questionIndex, optionIndex)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <button
                className={`submit-btn ${isButtonClicked ? "clicked" : ""}`}
                onClick={submitAnswers}
            >
                <h3 style={{ margin: "0", color: "#fff" }}>
                    {isButtonClicked ? "Answers Submitted" : "Submit Answers"}
                </h3>
            </button>

            {isButtonClicked && (
                <div style={{ marginTop: "10px", color: "#00bf63" }}>
                    Answers submitted successfully!
                </div>
            )}
        </div>
    );
}

export default FeedBack;
