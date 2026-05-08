import { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { PATIENTS, WEEKDATA } from '../../constants/data';
import { MetricCard } from './MetricCard';
import { BarChart } from '../charts/BarChart';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { Skeleton } from '../common/Skeleton';

export function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 800);
  }, []);
  
  const metrics = [
    { label: "Total de pacientes", value: "1.284", trend: 3.2, spark: true },
    { label: "Atendimentos hoje", value: "47", trend: 12.5 },
    { label: "Mensagens hoje", value: "312", trend: -4.1, spark: true },
    { label: "Taxa de resposta", value: "98.7%", sub: "avg" },
    { label: "Tempo médio", value: "3m 12s" },
    { label: "Agendamentos", value: "18", trend: 8.3 },
  ];
  
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {metrics.map((m, i) => (
          loaded ? <MetricCard key={i} {...m} /> : <Skeleton key={i} h={88} r={12} />
        ))}
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
          <p style={{ color: COLORS.textMuted, fontSize: 12, fontWeight: 500, marginBottom: 12 }}>
            Mensagens por dia (semana atual)
          </p>
          {loaded ? <BarChart data={WEEKDATA} /> : <Skeleton h={80} />}
        </div>
        
        <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
          <p style={{ color: COLORS.textMuted, fontSize: 12, fontWeight: 500, marginBottom: 12 }}>
            Últimas conversas
          </p>
          {loaded ? (
            PATIENTS.slice(0, 4).map(p => (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                <Avatar initials={p.avatar} size={28} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, color: COLORS.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: 11, color: COLORS.textMuted }}>{p.lastInteraction}</p>
                </div>
                <Badge status={p.status} />
              </div>
            ))
          ) : (
            [0, 1, 2, 3].map(i => <Skeleton key={i} h={40} r={8} style={{ marginBottom: 8 }} />)
          )}
        </div>
      </div>
      
      <div style={{ background: COLORS.bgCard, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 20 }}>
        <p style={{ color: COLORS.textMuted, fontSize: 12, fontWeight: 500, marginBottom: 14 }}>
          Pacientes ativos recentes
        </p>
        {loaded ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PATIENTS.filter(p => p.status !== "finalizado").map(p => (
              <div key={p.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", alignItems: "center", gap: 8, padding: "10px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar initials={p.avatar} size={32} />
                  <div>
                    <p style={{ fontSize: 13, color: COLORS.text }}>{p.name}</p>
                    <p style={{ fontSize: 11, color: COLORS.textMuted }}>{p.phone}</p>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: COLORS.textMuted }}>{p.doctor}</p>
                <Badge status={p.status} />
              </div>
            ))}
          </div>
        ) : (
          <Skeleton h={120} />
        )}
      </div>
    </div>
  );
}