import styled from 'styled-components';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Details from './components/Details/Details';
import Feedback from './components/Feedback/Feedback';
import Partners from './components/Partners/Partners';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';

const Container = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <Services />
      <Details />
      <Feedback />
      <Partners />
      <Clients />
      <Footer />
    </Container>
  );
}

export default App;
