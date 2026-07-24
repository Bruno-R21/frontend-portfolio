# TaskFlow

Projeto base da Unidade Curricular **Desenvolvimento Web** — Programador Front-End (SENAI).

App de tarefas em React + Vite que consome a API pública JSONPlaceholder.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (algo como http://localhost:5173).

## O que já está pronto

- **GET** — a lista de tarefas é carregada da API quando a página abre (`App.jsx`, `useEffect`).
- Formulário controlado (`TarefaForm.jsx`) e cards de tarefa (`TarefaCard.jsx`).

## O que falta implementar (é o desafio)

No arquivo `src/App.jsx`, complete as três funções marcadas com `TODO`:

- `handleCriar`  → **POST** (adicionar tarefa)
- `handleAtualizar` → **PUT** (editar tarefa)
- `handleExcluir` → **DELETE** (remover tarefa)
