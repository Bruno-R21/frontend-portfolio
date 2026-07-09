📘 Guia Completo de HTML

«Objetivo: Este arquivo reúne as principais anotações sobre HTML, servindo como material de consulta durante os estudos.»

---

📑 Índice

1. O que é HTML
2. Estrutura básica
3. Tags principais
4. Títulos
5. Parágrafos
6. Formatação de texto
7. Listas
8. Links
9. Imagens
10. Tabelas
11. Formulários
12. Elementos semânticos
13. Áudio e Vídeo
14. Comentários
15. Boas práticas
16. Atalhos do VS Code
17. Exercícios realizados
18. Dúvidas
19. Resumo

---

1. O que é HTML

HTML (HyperText Markup Language) é a linguagem de marcação utilizada para criar páginas da Web.

Ele define a estrutura do conteúdo, enquanto o CSS estiliza a página e o JavaScript adiciona interatividade.

---

2. Estrutura Básica

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>

<body>

</body>

</html>

Explicação

- "<!DOCTYPE html>" → informa que o documento utiliza HTML5.
- "<html>" → elemento raiz.
- "<head>" → configurações da página.
- "<body>" → conteúdo visível.

---

3. Tags principais

Tag| Função
html| Início da página
head| Configurações
body| Conteúdo
title| Título da aba
meta| Metadados
link| CSS
script| JavaScript

---

4. Títulos

<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Título</h3>
<h4>Título</h4>
<h5>Título</h5>
<h6>Título</h6>

O "<h1>" deve ser utilizado apenas uma vez por página.

---

5. Parágrafos

<p>Parágrafo.</p>

<br>

<hr>

---

6. Formatação de texto

<strong>Negrito semântico</strong>

<b>Negrito</b>

<em>Ênfase</em>

<i>Itálico</i>

<mark>Texto destacado</mark>

<small>Texto pequeno</small>

<del>Texto removido</del>

<ins>Texto inserido</ins>

<sub>Subscrito</sub>

<sup>Sobrescrito</sup>

---

7. Listas

Lista não ordenada

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

Lista ordenada

<ol>
    <li>Primeiro</li>
    <li>Segundo</li>
</ol>

Lista de descrição

<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação.</dd>
</dl>

---

8. Links

<a href="https://google.com">Google</a>

<a href="pagina.html">Página interna</a>

<a href="arquivo.pdf" download>Download</a>

---

9. Imagens

<img
    src="imagem.jpg"
    alt="Descrição da imagem"
    width="300">

Atributos importantes:

- src
- alt
- width
- height

---

10. Tabelas

<table>

<tr>
    <th>Nome</th>
    <th>Idade</th>
</tr>

<tr>
    <td>Bruno</td>
    <td>30</td>
</tr>

</table>

Tags:

- table
- tr
- th
- td
- thead
- tbody
- tfoot

---

11. Formulários

Principais elementos:

- form
- input
- textarea
- button
- select
- option
- label

Exemplo:

<form>

<input type="text">

<input type="email">

<button>Enviar</button>

</form>

---

12. Elementos Semânticos

- header
- nav
- main
- section
- article
- aside
- footer

Esses elementos deixam o HTML mais organizado e melhoram SEO e acessibilidade.

---

13. Áudio e Vídeo

<audio controls>

<source src="audio.mp3">

</audio>

<video controls width="500">

<source src="video.mp4">

</video>

---

14. Comentários

<!-- Comentário -->

Comentários não aparecem para o usuário.

---

15. Boas práticas

- Utilize indentação.
- Escreva nomes de arquivos em letras minúsculas.
- Organize o projeto em pastas.
- Utilize HTML semântico.
- Sempre utilize o atributo alt nas imagens.
- Evite código repetido.
- Faça commits frequentes.

---

16. Atalhos do VS Code

Atalho| Função
Alt + Z| Quebra de linha
Ctrl + /| Comentar
Ctrl + S| Salvar
Ctrl + Shift + P| Paleta de comandos
F2| Renomear símbolo
Alt + Shift + F| Formatar documento

---

17. Exercícios realizados

- [ ] Estrutura HTML
- [ ] Títulos
- [ ] Parágrafos
- [ ] Listas
- [ ] Links
- [ ] Imagens
- [ ] Tabelas
- [ ] Formulários

---

18. Dúvidas

Utilize esta seção para anotar dúvidas encontradas durante os estudos.

---

19. Resumo

HTML é responsável pela estrutura de uma página Web.

CSS é responsável pela aparência.

JavaScript é responsável pela interatividade.

---

📌 Última atualização: //__