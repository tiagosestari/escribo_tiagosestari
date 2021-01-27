# Escribo
#### Tiago Sestari

### Problema: Passado um número 'n', retornar o somatório dos números abaixo dele que são divisíveis por 3 ou 5.

### Solução: O programa primeiro verifica se o número é divisível por 3 ou 5 e o salva em um vetor. Depois disso, soma os valores do vetor e retorna esse resultado.


### Arquivos:
- Index.html: Página de html com forms para testar o algorítmo com mais facilidade
- solucao.js: Arquivo em javascript contendo o algorítmo da solução
- package.json: Pacotes instalados e organização do npm.

Obs: Como haviam poucos arquivos não há nenhuma orgnanização específica das pastas.

### Como testar?
#### Depois de clonar o repositório localmente (git clone https://github.com/tiagosestari/escribo_tiagosestari.git),  há 3 formas de testar o programa:
- Método 1: abrir o arquivo index.html, preencher o campo e apertar o botão. O resultado retorna na própria página.
- Método 2: No diretório principal dos arquivos, usar o terminal com o comando node solucao.js. Há test cases implementados com n variando de 0 a 20 (0 < n < 20) que serão impressos no console.
- Método 3: Primeiro garanta que o pacote run-func esteja instalado. Se não estiver use o comando 'npm i -g run-func' para fazer a instalação global. Agora com o comando 'npm run somatorio n' (substitua n pelo número que quer testar), além dos valores de test case do método 2, será impresso no console o teste para o valor 'n'.
