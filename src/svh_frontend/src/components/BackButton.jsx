import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className='back-button' onClick={goBack}>
      Go Back
    </button>
  );
}

export default BackButton;
