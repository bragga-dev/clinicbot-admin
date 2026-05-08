import { COLORS } from '../../constants/colors';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

export function PatientDetail({ patient, onBack }) {
  const personalFields = [
    ["Nome completo", patient.name],
    ["E-mail", patient.email],
    ["Telefone", patient.phone],
    ["Data de nascimento", patient.dob],
    ["CPF", patient.cpf],
    ["Endereço", patient.address],
    ["Convênio", patient.plan],
  ];
  
  const clinicalFields = [
    ["Médico responsável", patient.doctor],
    ["Próxima consulta", patient.nextAppt],
    ["Observações", patient.obs || "—"]
  ];
  
  const history = [
    { date: "12/03/2025", desc: "Consulta de rotina — Dr. Carlos Lima" },
    { date: "05/01/2025", desc: "Retorno cardiologista" },
    { date: "20/11/2024", desc: "Exames laboratoriais" }
  ];
  
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <button
        onClick={onBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "transparent",
          border: "none",
          color: COLORS.textMuted,
          cursor: "pointer",
          fontSize: 13,
          padding: 0,
          width: "fit-content"
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg> Voltar
      </button>
      
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
        <Avatar initials={patient.avatar} size={56} />
        <div style={{ flex: 1 }}>
          <h2 style={{ color: COLORS.text, fontSize: 18, fontWeight: 600 }}>{patient.name}</h2>
          <p style={{ color: COLORS.textMuted, fontSize: 13 }}>{patient.email}</p>
        </div>
        <Badge status={patient.status} />
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
          <p style={{ color: COLORS.textMuted, fontSize: 11, fontWeight: 500, marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Dados pessoais
          </p>
          {personalFields.map(([label, value]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <span style={{ fontSize: 12, color: COLORS.textMuted }}>{label}</span>
              <span style={{ fontSize: 12, color: COLORS.text, textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
        </div>
        
        <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
          <p style={{ color: COLORS.textMuted, fontSize: 11, fontWeight: 500, marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>
            Dados clínicos
          </p>
          {clinicalFields.map(([label, value]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <span style={{ fontSize: 12, color: COLORS.textMuted }}>{label}</span>
              <span style={{ fontSize: 12, color: COLORS.text, textAlign: "right", maxWidth: "60%" }}>{value}</span>
            </div>
          ))}
          
          <div style={{ marginTop: 16 }}>
            <p style={{ fontSize: 11, color: COLORS.textMuted, fontWeight: 500, marginBottom: 8 }}>
              Histórico de atendimentos
            </p>
            {history.map((h, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "6px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                <span style={{ fontSize: 11, color: COLORS.textMuted, whiteSpace: "nowrap" }}>{h.date}</span>
                <span style={{ fontSize: 11, color: COLORS.text }}>{h.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}