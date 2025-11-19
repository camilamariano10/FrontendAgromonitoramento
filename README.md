# FrontendAgro

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## File Tree: frontendAgromonitoramento

**Generated:** 11/17/2025, 10:58:49 PM

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
│   │   │   │   └── 📄 dashboard-individual.ts
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
│   │   │   ├── 📁 farm-header
│   │   │   │   ├── 🎨 farm-header.css
│   │   │   │   ├── 🌐 farm-header.html
│   │   │   │   ├── 📄 farm-header.spec.ts
│   │   │   │   └── 📄 farm-header.ts
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

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
