import { useState ,useRef} from 'react'
import html2canvas from 'html2canvas'
import IntroComponent from './components/IntroComponent'
import './App.css'
import CertificateForm from './components/CertificateForm'
import CertificatePreview from './components/CertificatePreview';
import TemplateSelector from './components/TemplateSelector';
import Footer from './components/Footer';


function App() {
  
  const [selectedTemplate, setSelectedTemplate] = useState('1');
  const [formData, setFormData] = useState({
    name: '',
    date:'',
    signature:'',
    description:'',
  });

  const certificateRef = useRef();

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      const canvas = await html2canvas(certificateRef.current);
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };
  return (
    <div>
      <IntroComponent/>
      <div>
        <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    maxWidth: '100%',
    width: '100%',
    boxSizing: 'border-box',}}>
            <h1>Select a Certificate Template</h1>
            <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
            <CertificateForm formData={formData} setFormData={setFormData} />
        </div>
      <br></br>
        <div
            style={{
              background: 'linear-gradient(90deg, #A7AEDB, #FC466B)',
              color: 'white',
              padding: '10px 0',
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}>
            Preview
          </div>
          
      <CertificatePreview ref={certificateRef} selectedTemplate={selectedTemplate} formData={formData} />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={downloadCertificate}
          style={{
            padding: "12px 24px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Download as PNG
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default App
