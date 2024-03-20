import './App.css';
import Banner from './components/Banner';
import CardSection from './components/Card';
import FooterSection from './components/Footer';
import FormSection from './components/Form';
import HighlightsSection from './components/Highlights';

function App() {
  return (
    <div>
      <Banner />
      <CardSection />
      <HighlightsSection />
      <FormSection />
      <FooterSection />
    </div>
  );
}

export default App;
