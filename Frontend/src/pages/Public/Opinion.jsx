import React, { useState } from 'react';
import axios from 'axios';
import './opinion.css'

const OpinionForm = () => {
  const [wantToAddOpinion, setWantToAddOpinion] = useState(false);
  const [opinion, setOpinion] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/opinions/opinion', {
        wantToAddOpinion,
        opinion,
      });

      console.log(response.data);
      // Handle success or show a message to the user
    } catch (error) {
      console.error('Error submitting opinion:', error.message);
      // Handle error or show a message to the user
    }
  };

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="center-box" >
      <div>
        <h3>Write your opinion:</h3>
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          rows="4"
          cols="50"
        />
      </div>

      <button
        className={`submit-btn ${isButtonClicked ? "clicked" : ""}`}
        onClick={handleSubmit}
      >
        <h6 style={{ margin: "0", color: "#fff" }}>
          {isButtonClicked ? "Answers Submitted" : "Submit Answers"}
        </h6>
      </button>

      {isButtonClicked && (
        <div style={{ marginTop: "10px", color: "#00bf63" }}>
          Answers submitted successfully!
        </div>
      )}
    </div>
  );
};

export default OpinionForm;