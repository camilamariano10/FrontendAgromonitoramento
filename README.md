# AgroMonitoramento - Front-end

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

O **AgroMonitoramento** é uma aplicação web desenvolvida para auxiliar produtores rurais no monitoramento de saúde de suas plantações (foco em soja) utilizando Inteligência Artificial. O sistema permite o gerenciamento de fazendas, visualização de diagnósticos de doenças e relatórios detalhados.
---
### 👩🏽‍💻👨🏽‍💻Autores:
[![Camila](https://img.shields.io/badge/👩‍💻_Camila%20Mariano-Frontend%20Developer-104137?style=for-the-badge&logo=github&logoColor=white)](https://github.com/camilamariano10)  
[![Leonardo](https://img.shields.io/badge/👨‍💻_Leonardo%20Rodrigues-Backend%20Developer-2A2F23?style=for-the-badge&logo=github&logoColor=white)](https://github.com/odranoel-dev)

---
## 🚀 Funcionalidades

### 🔐 Autenticação e Segurança
- **Login Inteligente:** Redirecionamento automático para dashboards distintos baseados no tipo de usuário (Pessoa Física ou Jurídica).
- **Guarda de Rotas (AuthGuard):** Proteção de rotas administrativas e de dashboard contra acesso não autorizado.

### 📊 Dashboards Personalizados
- **Dashboard Pessoa Jurídica (PJ):**
  - Gerenciamento de múltiplas fazendas via dropdown no cabeçalho.
  - Cards informativos (Total de Análises, Última Análise, Plano Atual).
  - Gráfico de rosca (Doughnut Chart) interativo exibindo a distribuição de doenças detectadas.
  - Atalhos para ações rápidas e dicas do dia.
- **Dashboard Pessoa Física (PF):**
  - Visualização simplificada focada na propriedade única do produtor.

### 🚜 Gestão de Fazendas
- **CRUD de Fazendas:** Adicionar, Editar e Excluir fazendas diretamente pelo cabeçalho.
- **Máscaras de Input:** Formatação automática para campos de CEP, Telefone e Área (hectares) utilizando `ngx-mask`.
- **Atualização em Tempo Real:** A interface reage instantaneamente às mudanças de estado (ex: trocar de fazenda atualiza os dados do gráfico).

---

## 🛠️ Tecnologias Utilizadas

* **Angular (v18+):** Estrutura moderna utilizando componentes `Standalone`, `Signals` e `Lazy Loading` para rotas.
* **Bootstrap 5 & Ng-Bootstrap:** Para layout responsivo, modais e componentes de UI (Dropdowns).
* **Chart.js:** Para visualização de dados e gráficos estatísticos.
* **Ngx-Mask:** Para formatação de inputs de formulário.
* **RxJS:** Para gerenciamento de estado reativo e manipulação de dados assíncronos.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **Angular CLI** instalados em sua máquina.

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/FrontendAgromonitoramento.git
   ```
2. Entre na pasta do projeto:
   ```
   cd FrontendAgromonitoramento
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Execute o servidor de desenvolvimento:
   ```
   ng serve --open
   ```

A aplicação estará disponível em http://localhost:4200/.

## 🧪 Como Testar (Simulação de Login)

Como o Back-end ainda não está conectado em produção, o sistema utiliza um **Mock Service** para simular a autenticação e os dados.

Para testar os diferentes perfis, utilize a seguinte lógica no campo de **E-mail** na tela de login (a senha pode ser qualquer uma):

| Tipo de Usuário | E-mail para Teste | Resultado Esperado |
| :--- | :--- | :--- |
| **Pessoa Jurídica** | Digite qualquer e-mail contendo a palavra **"empresa"** (ex: `contato@empresa.com`) | Redireciona para o Dashboard PJ com gestão de múltiplas fazendas. |
| **Pessoa Física** | Digite qualquer outro e-mail (ex: `joao@gmail.com`) | Redireciona para o Dashboard Individual. |

---

## 📂 Estrutura do Projeto

O projeto segue as melhores práticas de arquitetura do Angular:

- **`src/app/core`**: Serviços globais (`AuthService`, `FarmService`), Guardas de Rota e componentes estruturais (Header, Footer).
- **`src/app/pages`**: Módulos de páginas carregados via Lazy Loading (`Login`, `Dashboard`, `Cadastro`).
- **`src/app/shared`**: Componentes reutilizáveis (`FarmHeader`) e diretivas.

---

## 🔜 Próximos Passos

- [ ] Integração completa com a API Java/Spring Boot.
- [ ] Implementação da página de upload de imagens para análise de IA.
- [ ] Geração de relatórios em PDF.

