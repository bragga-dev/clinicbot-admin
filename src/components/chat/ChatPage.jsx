import { useState, useRef, useEffect } from 'react';
import { COLORS } from '../../constants/colors';
import { PATIENTS, HISTORY } from '../../constants/data';
import { Avatar } from '../common/Avatar';

export function ChatPage() {
  const [activeId, setActiveId] = useState(0);
  const [humanMode, setHumanMode] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(PATIENTS.map((_, i) => HISTORY[i] || []));
  const bottomRef = useRef(null);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeId, messages]);
  
  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    const updated = [...messages];
    updated[activeId] = [...(updated[activeId] || []), { from: "admin", text: input.trim(), time }];
    setMessages(updated);
    setInput("");
  };
  
  const currentMessages = messages[activeId] || [];
  const currentPatient = PATIENTS[activeId];
  
  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
      <div style={{ width: 240, borderRight: `1px solid ${COLORS.border}`, overflowY: "auto", flexShrink: 0 }}>
        {PATIENTS.map((p, i) => (
          <div
            key={p.id}
            onClick={() => setActiveId(i)}
            style={{
              padding: "12px 14px",
              cursor: "pointer",
              borderBottom: `1px solid ${COLORS.border}`,
              background: activeId === i ? COLORS.blueDim : "transparent",
              transition: "background .15s"
            }}
            onMouseEnter={e => { if (activeId !== i) e.currentTarget.style.background = COLORS.bgCardHover; }}
            onMouseLeave={e => { if (activeId !== i) e.currentTarget.style.background = "transparent"; }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar initials={p.avatar} size={30} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, color: COLORS.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: 10, color: COLORS.textMuted }}>{p.lastInteraction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "12px 20px", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials={currentPatient.avatar} size={32} />
            <div>
              <p style={{ fontSize: 13, color: COLORS.text, fontWeight: 500 }}>{currentPatient.name}</p>
              <p style={{ fontSize: 11, color: COLORS.textMuted }}>{currentPatient.phone}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 11,
              padding: "4px 12px",
              borderRadius: 20,
              background: humanMode ? COLORS.purpleDim : COLORS.greenDim,
              color: humanMode ? COLORS.purpleText : COLORS.greenText,
              fontWeight: 500
            }}>
              {humanMode ? "Humano ativo" : "Bot ativo"}
            </span>
            <button
              onClick={() => setHumanMode(v => !v)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                border: `1px solid ${COLORS.border}`,
                background: "transparent",
                color: COLORS.textMuted,
                fontSize: 12,
                cursor: "pointer"
              }}
            >
              {humanMode ? "Devolver ao bot" : "Assumir atendimento"}
            </button>
          </div>
        </div>
        
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
          {currentMessages.map((msg, i) => {
            const isUser = msg.from === "user";
            const isAdmin = msg.from === "admin";
            const isBot = msg.from === "bot";
            
            return (
              <div key={i} style={{ display: "flex", flexDirection: isUser ? "row" : "row-reverse", gap: 8, alignItems: "flex-end" }}>
                {isUser && <Avatar initials={currentPatient.avatar} size={26} />}
                <div style={{ maxWidth: "65%" }}>
                  {isBot && <p style={{ fontSize: 10, color: COLORS.textMuted, marginBottom: 3, textAlign: "right" }}>Bot</p>}
                  {isAdmin && <p style={{ fontSize: 10, color: COLORS.purpleText, marginBottom: 3, textAlign: "right" }}>Admin</p>}
                  <div style={{
                    background: isUser ? "#1a1a1a" : isAdmin ? COLORS.purpleDim : COLORS.blueDim,
                    border: `1px solid ${isUser ? COLORS.border : isAdmin ? COLORS.purple + "44" : COLORS.blue + "44"}`,
                    borderRadius: isUser ? "12px 12px 12px 0" : "12px 12px 0 12px",
                    padding: "8px 14px"
                  }}>
                    <p style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.5 }}>{msg.text}</p>
                  </div>
                  <p style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 3, textAlign: isUser ? "left" : "right" }}>
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
        
        <div style={{ padding: "12px 20px", borderTop: `1px solid ${COLORS.border}`, display: "flex", gap: 10, flexShrink: 0 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            placeholder={humanMode ? "Digite uma resposta..." : "Assumir atendimento para responder"}
            disabled={!humanMode}
            style={{
              flex: 1,
              background: "#161616",
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: "10px 14px",
              color: COLORS.text,
              fontSize: 13,
              outline: "none",
              opacity: humanMode ? 1 : 0.5
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!humanMode || !input.trim()}
            style={{
              background: COLORS.blue,
              border: "none",
              borderRadius: 8,
              padding: "10px 18px",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              cursor: humanMode && input.trim() ? "pointer" : "not-allowed",
              opacity: humanMode && input.trim() ? 1 : 0.5
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}