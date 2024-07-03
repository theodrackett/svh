import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGoBack = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    setLoading(true);
    navigate(-1);
    setLoading(false);
  };

  return { goBack, loading };
};

export default useGoBack;
