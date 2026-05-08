import { useState } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { PatientsPage } from './components/patients/PatientsPage';
import { PatientDetail } from './components/patients/PatientDetail';
import { ChatPage } from './components/chat/ChatPage';
import { COLORS } from './constants/colors';
import './styles/global.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [botOnline] = useState(true);
  
  const titles = {
    dashboard: "Dashboard",
    patients: "Pacientes",
    chat: "Conversas"
  };
  
  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }
  
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setCurrentPage("patientDetail");
  };
  
  const handleBack = () => {
    setSelectedPatient(null);
    setCurrentPage("patients");
  };
  
  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "patients":
        return !selectedPatient && <PatientsPage onSelect={handleSelectPatient} />;
      case "patientDetail":
        return selectedPatient && <PatientDetail patient={selectedPatient} onBack={handleBack} />;
      case "chat":
        return <ChatPage />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: COLORS.bg,
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: COLORS.text,
      overflow: "hidden"
    }}>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar
          active={currentPage === "patientDetail" ? "patients" : currentPage}
          onNav={(page) => {
            setCurrentPage(page);
            setSelectedPatient(null);
          }}
          botOnline={botOnline}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Header
            title={selectedPatient ? selectedPatient.name : titles[currentPage]}
            sub={selectedPatient ? "Detalhe do paciente" : undefined}
            onLogout={() => setIsAuthenticated(false)}
          />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;