# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#Como baixar ou Clonar o projeto
 Para Baixar ou clonar o projeto, é preciso que o usuário entre no git bash e dentro dele, entrar numa pasta onde deseja colocar o projeto e inserir a função git clone. Após isso é só adicionar o link criado pelo GitHub quando você criou o repositório ao git bash. 

#Funcionalidades e objetivo do projeto
Este projeto, é um Gerenciador de tarefas feito com React vite, com objetivo de gerenciar uma lista de tarefas. O usuário pode adicionar ou remover uma tarefa, e também pode ordenar uma lista de tarefas em ordem alfabética caso queira . Outra funcionalidade é o que estado das tarefas pode ser armazenado, fazendo com que os dados continuem salvos mesmo após a página ser recarregada.
 Além dessas 4 funcionalidades o codigo tem algumas melhorias extras, como uma mensagem de impedimento pro usuario que tentar adicionar uma tarefa estando com a caixa de texto vazia.
e também caso o usuario tente clicar no botão 'ordenar tarefas' mas não houver nenhuma tarefa, irá aparecer uma mensagem de erro para o usuario, pedindo para ele adicionar uma tarefa antes.