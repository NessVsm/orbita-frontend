<b> INFORMAÇOES GERAIS</b><br />
Esta aplicação relaciona-se diretamente com a criada no Desafio de Back-end para a exibição de informações a respeito dos painéis solares e alteração de dados de usuários do sistema.<br />

<b> RODANDO O PROJETO </b><br />
Para rodar o projeto, após a clonagem do repositório, deve-se ir até a raiz (orbita-frontend) e executar o comando <b>npm install</b>, responsável pela instalação de todas as dependências necessárias para a conexão com o banco de dados e requisições à API><br />
Após as instalções serem finalizadas, o mesmo comando deverá ser executado agora na pasta /client, onde, então, serão instaladas as dependências necessárias ao front-end.<br />
Para rodar o projeto, da mesma forma, deve-se encaminhar às mesmas pastas (raiz e /client) e executar o comando <b> npm start. A porta para o servidor vem setada como http://localhost:51581/ e, caso deseje alterá-la, as alterações devem ser feitas também no código, de forma que todos as requisições fucionem de maneira fluída.<br /><br />

<b> NAVEGAÇÃO<b><br />
A aplicação consiste em 3 páginas:<br />
<ul>
  <li><b>Cadastro</b>: O usuário deve, primeiramente, realizar um cadastro para poder acessar os dados do sistema. Caso todos os dados estejam corretos, após o cadastro, este é redirecionado para a página de login, onde deve informar novamente a senha e o e-mail.</li><br />
  <li><b>Login</b>:  O usuário informa sua senha e e-mail para, então ser redirecionado para a tela de dashboard. </li><br />
  <li><b>Dashboard</b>: Exibe informações correspondentes ao estado do usuário</li><br /><br />
  </ul><br />


  <b> DASHBOARD </b><br />
<b> GRÁFICO </b><br />
O gráfico exibe informações a respeito da capacidade instalada de acordo com os 5 últimos anos, em ordem cronológica. O ano de consulta é setado diretamente no código, pois não existem dados de anos recentes.<br />

<b>WIDGETS</b><br />
<ol>
  <li><b> Número de instalações feitas</b><br />
O cálculo para número de instalações considera <b>todas</b> as instalações realizadas no estado, em todos os anos. E exibe exibe o valor total do custo destas instalações e não a quantidade.<br />
  </li>
  <li><b>2. Instalação de maior custo</b><br />
  O cálculo realizado considera todos os anos e todos os meses em que foram realizadas instalações de painéis no estado do usuário<br /></li>
  <li><b> 3 Meses do ano com maior instalações</b><br />
O cálculo realizado considera todos os meses de um ano em específico.<br />
  </li>
</ol>
<br/>

<b>INFORMAÇÕES ÚTEIS </b><br />
- O sistema contempla a visualização em dispositivos móveis.
- Foram implementados avisos no envio do fomulário, como preenchimento de campos obrigatórios e não correspondência de e-mail x senha.<br />

<b>REGRAS</b><br />
<ul>
  <li>Não é possível cadastrar um usuário que possua o e-mail previamente cadastrado</li>
  <li> O usuário precisa ser, primeiramente, autenticado antes de realizar requisições</li>
 </ul>

<b> LIMITAÇOES</b><br />
<ul>
<li>O sistema considera que os usuários logados necessariamente pertencerão à um estado onde existam instalações. O tratamento de não existirem dados a serem exibidos, não foi realizado.  </li>
<li>
No JSON passado, não foram encontrados valores para o ano de 2019. Dessa forma, apesar do sistema exibir a data de hoje como sendo base para a consulta, a real consulta ao banco foi realizada baseada em um ano aleatório. </li>
<li>
O cálculo do número de instalações também foi prejudicado pois muitos registros possuíam o valor incorreto de -99999 como preço total do painel solar.</li>
</ul>

<b>MELHORIAS<b><br />
<ul>
  <li>Implementar uso de Redux</li>
  <li> Testar a componentização </li>
  </ul>

