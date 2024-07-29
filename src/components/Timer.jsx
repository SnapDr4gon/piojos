import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerSegment = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  font-size: 1.5rem;
  color: #58a6ff;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = ({ startDate }) => {
  const calculateTimeDifference = () => {
    const now = new Date();
    const start = new Date(startDate);
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  };

  const [time, setTime] = useState(calculateTimeDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContainer>
      <TimerSegment>{time.years}y</TimerSegment>
      <TimerSegment>{time.months}m</TimerSegment>
      <TimerSegment>{time.days}d</TimerSegment>
    </TimerContainer>
  );
};

export default Timer;
