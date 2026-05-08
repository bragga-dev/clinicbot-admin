import { useState } from 'react';
import { COLORS } from '../../constants/colors';
import { STATUS_MAP } from '../../constants/status';
import { PATIENTS } from '../../constants/data';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

export function PatientsPage({ onSelect }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  
  const filtered = PATIENTS.filter(p => {
    const query = search.toLowerCase();
    const match = p.name.toLowerCase().includes(query) || 
                  p.email.toLowerCase().includes(query) || 
                  p.phone.includes(query);
    const statusFilter = filter === "todos" || p.status === filter;
    return match && statusFilter;
  });
  
  const pages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const statuses = ["todos", "novo", "aguardando", "em_atendimento", "agendado", "finalizado"];
  
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
          <svg style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: COLORS.textMuted }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            placeholder="Buscar paciente..."
            style={{
              width: "100%",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: "9px 14px 9px 36px",
              color: COLORS.text,
              fontSize: 13,
              outline: "none"
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => { setFilter(s); setPage(1); }}
              style={{
                padding: "7px 14px",
                borderRadius: 8,
                border: `1px solid ${filter === s ? COLORS.blue : COLORS.border}`,
                background: filter === s ? COLORS.blueDim : "transparent",
                color: filter === s ? COLORS.blueText : COLORS.textMuted,
                fontSize: 12,
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}
            >
              {s === "todos" ? "Todos" : STATUS_MAP[s]?.label}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              {["Paciente", "Telefone", "Última interação", "Cadastro", "Status", ""].map((h, i) => (
                <th key={i} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, color: COLORS.textMuted, fontWeight: 500 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map(p => (
              <tr
                key={p.id}
                onClick={() => onSelect(p)}
                style={{ borderBottom: `1px solid ${COLORS.border}`, cursor: "pointer", transition: "background .15s" }}
                onMouseEnter={e => e.currentTarget.style.background = COLORS.bgCardHover}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={{ padding: "12px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar initials={p.avatar} size={32} />
                    <div>
                      <p style={{ fontSize: 13, color: COLORS.text }}>{p.name}</p>
                      <p style={{ fontSize: 11, color: COLORS.textMuted }}>{p.email}</p>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "12px 16px", fontSize: 12, color: COLORS.textMuted }}>{p.phone}</td>
                <td style={{ padding: "12px 16px", fontSize: 12, color: COLORS.textMuted }}>{p.lastInteraction}</td>
                <td style={{ padding: "12px 16px", fontSize: 12, color: COLORS.textMuted }}>{p.createdAt}</td>
                <td style={{ padding: "12px 16px" }}><Badge status={p.status} /></td>
                <td style={{ padding: "12px 16px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filtered.length === 0 && (
          <div style={{ padding: 32, textAlign: "center", color: COLORS.textMuted, fontSize: 13 }}>
            Nenhum paciente encontrado.
          </div>
        )}
        
        {pages > 1 && (
          <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${COLORS.border}` }}>
            <span style={{ fontSize: 12, color: COLORS.textMuted }}>{filtered.length} resultados</span>
            <div style={{ display: "flex", gap: 6 }}>
              {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    border: `1px solid ${page === p ? COLORS.blue : COLORS.border}`,
                    background: page === p ? COLORS.blueDim : "transparent",
                    color: page === p ? COLORS.blueText : COLORS.textMuted,
                    fontSize: 12,
                    cursor: "pointer"
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}