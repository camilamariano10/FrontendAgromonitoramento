export type SeverityLevel = 'healthy' | 'low' | 'moderate' | 'high';
export type AnalysisStatus = 'Concluída' | 'Em Andamento' | 'Falhou';

/**
 * Interface que define a estrutura de um item de análise
 */
export interface AnalysisItem {
  id: string;
  fileName: string;
  initials: string; // As letras no ícone (ex: 'FA', 'OK')
  iconClass: string; // Classe CSS para a cor do ícone (ex: 'initials-fa')
  date: string;
  plot: string; // "Talhão"
  confidence: number;
  diagnosis: string;
  severity: string; // O texto da tag (ex: 'Moderada')
  severityLevel: SeverityLevel; // O tipo para o estilo CSS (ex: 'moderate')
  status: AnalysisStatus;
}
