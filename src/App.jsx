import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
import GlobalStyle from './globalStyles';
import Timer from './components/Timer.jsx';
import Gallery from './components/Gallery.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const StyledGallery = styled(Gallery)`
  max-width: 1200px;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

const TimerWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimer = styled(Timer)`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 2rem;
  color: #58a6ff;
`;

const App = () => {
  const startDate = '2022-06-02T00:00:00';

  return (
    <>
      <GlobalStyle />
      <Container>
        <TimerWrapper>
          <StyledTimer startDate={startDate} />
        </TimerWrapper>
        <StyledGallery />
      </Container>
    </>
  );
};

export default App;

