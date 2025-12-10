# AgroMonitoramento - Front-end

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

O **AgroMonitoramento** é uma aplicação web desenvolvida para auxiliar produtores rurais no monitoramento de saúde de suas plantações (foco em soja) utilizando Inteligência Artificial. O sistema permite o gerenciamento de fazendas, visualização de diagnósticos de doenças e relatórios detalhados.
---
## 📂 File View
```
├── 📁 .angular
├── 📁 .github
│   └── 📝 copilot-instructions.md
├── 📁 public
│   ├── 📁 assets
│   │   ├── 🖼️ farmer_AI2.png
│   │   ├── 🖼️ logo-agrom.svg
│   │   ├── 🖼️ logo.png
│   │   └── 🖼️ soybean_field.jpeg
│   └── 📄 favicon.ico
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 core
│   │   │   ├── 📁 footer
│   │   │   │   ├── 🎨 footer.css
│   │   │   │   ├── 🌐 footer.html
│   │   │   │   ├── 📄 footer.spec.ts
│   │   │   │   └── 📄 footer.ts
│   │   │   ├── 📁 header
│   │   │   │   ├── 🎨 header.css
│   │   │   │   ├── 🌐 header.html
│   │   │   │   ├── 📄 header.spec.ts
│   │   │   │   └── 📄 header.ts
│   │   │   ├── 📄 auth.guard.ts
│   │   │   ├── 📄 auth.spec.ts
│   │   │   └── 📄 auth.ts
│   │   ├── 📁 pages
│   │   │   ├── 📁 cadastro-pf
│   │   │   │   ├── 📄 cadastro-pf-module.ts
│   │   │   │   ├── 📄 cadastro-pf-routing-module.ts
│   │   │   │   ├── 🎨 cadastro-pf.css
│   │   │   │   ├── 🌐 cadastro-pf.html
│   │   │   │   ├── 📄 cadastro-pf.spec.ts
│   │   │   │   ├── 📄 cadastro-pf.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 cadastro-pj
│   │   │   │   ├── 📄 cadastro-pj-module.ts
│   │   │   │   ├── 📄 cadastro-pj-routing-module.ts
│   │   │   │   ├── 🎨 cadastro-pj.css
│   │   │   │   ├── 🌐 cadastro-pj.html
│   │   │   │   ├── 📄 cadastro-pj.spec.ts
│   │   │   │   ├── 📄 cadastro-pj.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 contato
│   │   │   │   ├── 📄 contato-module.ts
│   │   │   │   ├── 📄 contato-routing-module.ts
│   │   │   │   ├── 🎨 contato.css
│   │   │   │   ├── 🌐 contato.html
│   │   │   │   ├── 📄 contato.spec.ts
│   │   │   │   └── 📄 contato.ts
│   │   │   ├── 📁 dashboard-individual
│   │   │   │   ├── 📄 dashboard-individual-module.ts
│   │   │   │   ├── 📄 dashboard-individual-routing-module.ts
│   │   │   │   ├── 🎨 dashboard-individual.css
│   │   │   │   ├── 🌐 dashboard-individual.html
│   │   │   │   ├── 📄 dashboard-individual.spec.ts
│   │   │   │   ├── 📄 dashboard-individual.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 dashboard-pj
│   │   │   │   ├── 📄 dashboard-pj-module.ts
│   │   │   │   ├── 📄 dashboard-pj-routing-module.ts
│   │   │   │   ├── 🎨 dashboard-pj.css
│   │   │   │   ├── 🌐 dashboard-pj.html
│   │   │   │   ├── 📄 dashboard-pj.spec.ts
│   │   │   │   ├── 📄 dashboard-pj.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 gerenciar-telefones
│   │   │   │   ├── 📄 gerenciar-telefones-module.ts
│   │   │   │   ├── 📄 gerenciar-telefones-routing-module.ts
│   │   │   │   ├── 🎨 gerenciar-telefones.css
│   │   │   │   ├── 🌐 gerenciar-telefones.html
│   │   │   │   ├── 📄 gerenciar-telefones.spec.ts
│   │   │   │   ├── 📄 gerenciar-telefones.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 historico-relatorio
│   │   │   │   ├── 📄 historico-relatorio-module.ts
│   │   │   │   ├── 📄 historico-relatorio-routing-module.ts
│   │   │   │   ├── 🎨 historico-relatorio.css
│   │   │   │   ├── 🌐 historico-relatorio.html
│   │   │   │   ├── 📄 historico-relatorio.spec.ts
│   │   │   │   └── 📄 historico-relatorio.ts
│   │   │   ├── 📁 home
│   │   │   │   ├── 📄 home-module.ts
│   │   │   │   ├── 📄 home-routing-module.ts
│   │   │   │   ├── 🎨 home.css
│   │   │   │   ├── 🌐 home.html
│   │   │   │   ├── 📄 home.spec.ts
│   │   │   │   └── 📄 home.ts
│   │   │   ├── 📁 login
│   │   │   │   ├── 🎨 login.css
│   │   │   │   ├── 🌐 login.html
│   │   │   │   ├── 📄 login.spec.ts
│   │   │   │   ├── 📄 login.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 planos
│   │   │   │   ├── 📄 planos-module.ts
│   │   │   │   ├── 📄 planos-routing-module.ts
│   │   │   │   ├── 🎨 planos.css
│   │   │   │   ├── 🌐 planos.html
│   │   │   │   ├── 📄 planos.spec.ts
│   │   │   │   └── 📄 planos.ts
│   │   │   └── 📁 sobre
│   │   │       ├── 📄 sobre-module.ts
│   │   │       ├── 📄 sobre-routing-module.ts
│   │   │       ├── 🎨 sobre.css
│   │   │       ├── 🌐 sobre.html
│   │   │       ├── 📄 sobre.spec.ts
│   │   │       └── 📄 sobre.ts
│   │   ├── 📁 shared
│   │   │   ├── 📁 adicionar-fazenda
│   │   │   │   ├── 🎨 adicionar-fazenda.css
│   │   │   │   ├── 🌐 adicionar-fazenda.html
│   │   │   │   ├── 📄 adicionar-fazenda.spec.ts
│   │   │   │   ├── 📄 adicionar-fazenda.ts
│   │   │   │   ├── 📄 service.spec.ts
│   │   │   │   └── 📄 service.ts
│   │   │   ├── 📁 farm-header
│   │   │   │   ├── 🎨 farm-header.css
│   │   │   │   ├── 🌐 farm-header.html
│   │   │   │   ├── 📄 farm-header.spec.ts
│   │   │   │   └── 📄 farm-header.ts
│   │   │   ├── 📄 models.ts
│   │   │   ├── 📄 service.spec.ts
│   │   │   ├── 📄 service.ts
│   │   │   └── 📄 shared-module.ts
│   │   ├── 📄 app-module.ts
│   │   ├── 📄 app-routing-module.ts
│   │   ├── 🎨 app.css
│   │   ├── 🌐 app.html
│   │   ├── 📄 app.spec.ts
│   │   └── 📄 app.ts
│   ├── 🎨 custom-theme.scss
│   ├── 🌐 index.html
│   ├── 📄 main.ts
│   └── 🎨 styles.css
├── ⚙️ .editorconfig
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ angular.json
├── 📄 limpar-cache.bat
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
└── ⚙️ tsconfig.spec.json
```

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

