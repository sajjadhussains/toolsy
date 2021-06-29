
import './App.scss';
import Construction from './components/Construction/Construction';
import Contact from './components/Contact/Contact';
import ContactInfo from './components/ContactInfo/ContactInfo';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Equipment from './components/Equipment/Equipment';
import Header from './components/Header/Header';
import HeaderMain from './components/HeaderMain/HeaderMain';
import ServiceInfo from './components/ServiceInfo/ServiceInfo';

function App() {
  return (
    <div className="">
      <Header></Header>
      <HeaderMain></HeaderMain>
      <Equipment></Equipment>
      <ServiceInfo></ServiceInfo>
      <Construction></Construction>
     <Contact></Contact>
     <ContactInfo></ContactInfo>
     <DownloadApp></DownloadApp>
    </div>
  );
}

export default App;
