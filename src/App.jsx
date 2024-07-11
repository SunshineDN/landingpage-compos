import styled from 'styled-components';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Details from './components/Details/Details';
import Feedback from './components/Feedback/Feedback';
import Partners from './components/Partners/Partners';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
`;


function App() {
  useEffect(() => {
    // Adiciona um ouvinte de evento para o carregamento completo da página
    const handleLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
