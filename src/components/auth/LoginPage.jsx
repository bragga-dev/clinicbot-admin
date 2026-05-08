import { useState } from 'react';
import { COLORS } from '../../constants/colors';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("admin@clinica.com");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);
  
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => onLogin(), 1200);
  };
  
  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui,sans-serif" }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}} @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}} * {box-sizing:border-box;margin:0;padding:0;}`}</style>
      <div style={{ animation: "fadeIn .5s ease", width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", alignItems: "center", gap: 32, padding: "0 24px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 48,
            height: 48,
            background: COLORS.blueDim,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            border: `1px solid ${COLORS.blue}33`
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.blue} strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h1 style={{ color: COLORS.text, fontSize: 22, fontWeight: 600 }}>ClinicBot Admin</h1>
          <p style={{ color: COLORS.textMuted, fontSize: 13, marginTop: 6 }}>Acesse o painel de gestão</p>
        </div>
        
        <div style={{ width: "100%", background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, color: COLORS.textMuted, fontWeight: 500 }}>E-mail</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ background: "#161616", border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "10px 14px", color: COLORS.text, fontSize: 14, outline: "none", width: "100%" }}
              onFocus={e => e.target.style.borderColor = COLORS.blue}
              onBlur={e => e.target.style.borderColor = COLORS.border}
            />
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, color: COLORS.textMuted, fontWeight: 500 }}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ background: "#161616", border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "10px 14px", color: COLORS.text, fontSize: 14, outline: "none", width: "100%" }}
              onFocus={e => e.target.style.borderColor = COLORS.blue}
              onBlur={e => e.target.style.borderColor = COLORS.border}
            />
          </div>
          
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              background: loading ? "#1e2a5e" : COLORS.blue,
              border: "none",
              borderRadius: 8,
              padding: "11px",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background .2s",
              marginTop: 4
            }}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
          
          <p style={{ textAlign: "center", fontSize: 12, color: COLORS.blue, cursor: "pointer" }}>
            Esqueci minha senha
          </p>
        </div>
        
        <p style={{ fontSize: 11, color: COLORS.textFaint, textAlign: "center" }}>
          © 2026 ClinicBot · Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}