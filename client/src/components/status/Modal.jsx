import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [message, setMessage] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showComponent && <Alerts message={message} color="success" />}
    </div>
  );
};