import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Do you want to add your own opinion?</h2>
      <label>
        <input
          type="radio"
          value="yes"
          checked={wantToAddOpinion}
          onChange={() => setWantToAddOpinion(true)}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={!wantToAddOpinion}
          onChange={() => setWantToAddOpinion(false)}
        />
        No
      </label>

      {wantToAddOpinion && (
        <div>
          <h3>Write your opinion:</h3>
          <textarea
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            rows="4"
            cols="50"
          />
        </div>
      )}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OpinionForm;