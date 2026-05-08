export const PATIENTS = [
  {
    id: 1,
    name: "Ana Beatriz Souza",
    email: "ana.beatriz@email.com",
    phone: "(71) 99872-3341",
    avatar: "AB",
    status: "em_atendimento",
    lastInteraction: "há 5 min",
    createdAt: "12/03/2025",
    doctor: "Dr. Carlos Lima",
    nextAppt: "15/05/2026",
    address: "Rua das Flores, 142, Salvador",
    dob: "14/08/1990",
    cpf: "012.345.678-90",
    plan: "Unimed",
    obs: "Paciente com histórico de hipertensão."
  },
  {
    id: 2,
    name: "Roberto Mendes",
    email: "roberto.m@gmail.com",
    phone: "(73) 98761-2209",
    avatar: "RM",
    status: "aguardando",
    lastInteraction: "há 18 min",
    createdAt: "05/01/2025",
    doctor: "Dra. Fernanda Paz",
    nextAppt: "22/05/2026",
    address: "Av. Brasil, 890, Jequié",
    dob: "03/02/1985",
    cpf: "987.654.321-00",
    plan: "Bradesco Saúde",
    obs: "Aguardando resultado de exames."
  },
  // ... (restante dos pacientes)
];

export const HISTORY = [
  [
    { from: "bot", text: "Olá! Bem-vindo à Clínica Saúde+. Como posso ajudar você hoje?", time: "09:02" },
    { from: "user", text: "Oi! Preciso marcar uma consulta com cardiologista.", time: "09:03" },
    // ... (restante do histórico)
  ],
  // ... (mais históricos)
];

export const SPARKDATA = [18, 25, 22, 30, 28, 35, 40, 32, 45, 42, 50, 48];
export const WEEKDATA = [
  { day: "Seg", msgs: 62 },
  { day: "Ter", msgs: 85 },
  { day: "Qua", msgs: 71 },
  { day: "Qui", msgs: 94 },
  { day: "Sex", msgs: 88 },
  { day: "Sáb", msgs: 45 },
  { day: "Dom", msgs: 23 }
];