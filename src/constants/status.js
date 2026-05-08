import { COLORS } from './colors';

export const STATUS_MAP = {
  "novo": { 
    label: "Novo paciente", 
    bg: COLORS.badge.novo, 
    color: COLORS.badge.novoText 
  },
  "aguardando": { 
    label: "Aguardando", 
    bg: COLORS.badge.aguardando, 
    color: COLORS.badge.aguardandoText 
  },
  "em_atendimento": { 
    label: "Em atendimento", 
    bg: COLORS.badge.emAtendimento, 
    color: COLORS.badge.emAtendimentoText 
  },
  "agendado": { 
    label: "Consulta agendada", 
    bg: COLORS.badge.agendado, 
    color: COLORS.badge.agendadoText 
  },
  "finalizado": { 
    label: "Finalizado", 
    bg: COLORS.badge.finalizado, 
    color: COLORS.badge.finalizadoText 
  },
};