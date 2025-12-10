import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoricoRelatorioService {
  private apiUrl = 'http://localhost:8081/relatorios/listar';
  private downloadUrl = 'http://localhost:8081/relatorios/download';

  constructor(private http: HttpClient) {}

  /**
   * Retorna uma lista de strings contendo nomes de PDFs
   * Exemplo: ["relatorio_1763672381663.pdf"]
   */
  getPdfList(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  /** Download do único PDF existente */
  downloadPdf(): void {
    window.open(this.downloadUrl, '_blank');
  }
}
