import React, { useState } from 'react';
import Layout from '../components/Layout';

const perguntasFAQ = [
  {
    pergunta: 'O que é uma criptomoeda?',
    resposta: 'Uma criptomoeda é uma moeda digital que usa criptografia para garantir transações seguras, sem precisar de bancos ou governos. Funciona numa tecnologia chamada blockchain, que é como um livro-razão público onde todas as transações são registadas e verificadas por computadores em todo o mundo. Por exemplo, o Bitcoin permite enviar dinheiro diretamente a outra pessoa, sem intermediários, desde que ambos tenham carteiras digitais.'
  },
  {
    pergunta: 'O que é uma blockchain?',
    resposta: 'Uma blockchain é como um livro digital público que regista todas as transações de uma criptomoeda. É segura porque é gerida por muitos computadores em todo o mundo, sem um único controlador. Quando envias Bitcoin, a transação é gravada na blockchain para que todos saibam que é válida, tornando as criptomoedas transparentes e difíceis de falsificar.'
  },
  {
    pergunta: 'Como funciona a blockchain?',
    resposta: 'A blockchain organiza as transações em "blocos" que são ligados em cadeia. Cada bloco contém várias transações, e antes de ser adicionado à cadeia, é validado por utilizadores da rede chamados mineradores, que resolvem problemas matemáticos complexos. Uma vez validado, o bloco é ligado ao anterior, e a informação torna-se permanente e visível para todos.'
  },
  {
    pergunta: 'O que é mineração de criptomoedas?',
    resposta: 'Mineração é o processo de validar transações na blockchain resolvendo problemas matemáticos com computadores poderosos. Os mineradores que validam um bloco recebem uma recompensa em criptomoedas, como novos Bitcoins. Isso também ajuda a criar novas moedas, mas algumas, como o Bitcoin, têm um limite – só haverá 21 milhões de Bitcoins no total.'
  },
  {
    pergunta: 'O que é uma carteira digital?',
    resposta: 'Uma carteira digital é um software ou dispositivo físico onde guardas as tuas criptomoedas. É como uma conta bancária digital, mas em vez de euros, guarda moedas como Bitcoin ou Ethereum. Tem duas chaves: uma pública (para receber moedas) e uma privada (a tua "senha" para enviar moedas). Nunca partilhes a tua chave privada!'
  },
  {
    pergunta: 'Quais são as criptomoedas mais populares?',
    resposta: 'As mais populares incluem: Bitcoin (BTC): A primeira e mais conhecida, vista como uma reserva de valor. Ethereum (ETH): Permite criar contratos inteligentes e aplicações descentralizadas. Tether (USDT): Uma stablecoin que mantém o valor próximo de 1 dólar. Binance Coin (BNB): Usada na exchange Binance para pagar taxas. Solana (SOL): Conhecida por transações rápidas e baratas.'
  },
  {
    pergunta: 'O que é uma stablecoin?',
    resposta: 'Uma stablecoin é uma criptomoeda cujo valor está ligado a algo estável, como o dólar ou o ouro. Por exemplo, o Tether (USDT) tenta manter o valor de 1 USDT = 1 dólar, para evitar a volatilidade comum em criptomoedas como o Bitcoin. É útil para transações ou para guardar valor sem grandes oscilações.'
  },
  {
    pergunta: 'As criptomoedas são legais?',
    resposta: 'Sim, em Portugal e na maioria dos países, como os EUA, as criptomoedas são legais, mas as regras variam. Em Portugal, não são moeda legal, mas podes usá-las para investir ou pagar bens, se o vendedor aceitar. Países como a China têm restrições mais duras. Deves declarar ganhos com criptomoedas para efeitos fiscais – em Portugal, os lucros podem ser tributados como mais-valias.'
  },
  {
    pergunta: 'Como posso comprar criptomoedas?',
    resposta: 'Podes comprar criptomoedas em plataformas chamadas exchanges, como a Binance ou Coinbase. Cria uma conta, verifica a tua identidade, deposita dinheiro (como euros), e compra moedas como Bitcoin ou Ethereum. Guarda as tuas moedas numa carteira digital para maior segurança. Atenção às taxas, que podem variar entre 0,50€ e mais de 100€ por transação, dependendo da rede.'
  },
  {
    pergunta: 'O que é uma exchange?',
    resposta: 'Uma exchange é uma plataforma onde podes comprar, vender ou trocar criptomoedas. Há dois tipos principais: CEX (Exchange Centralizada): Como a Binance, gerida por uma empresa, com suporte ao cliente e fácil de usar. DEX (Exchange Descentralizada): Como a Uniswap, onde as transações são feitas diretamente entre utilizadores, sem intermediários, mas exige mais conhecimento técnico.'
  },
  {
    pergunta: 'É seguro investir em criptomoedas?',
    resposta: 'Investir em criptomoedas pode ser arriscado porque os preços são muito voláteis – podem subir ou descer rapidamente. Por exemplo, o Bitcoin caiu de $70.000 para $35.000 em 2021-2022. Não há garantias legais como em contas bancárias, e há riscos de fraudes ou hacks. Usa plataformas confiáveis, guarda as tuas moedas numa carteira segura, e nunca invistas mais do que podes perder.'
  },
  {
    pergunta: 'Como protejo as minhas criptomoedas de fraudes?',
    resposta: 'Nunca partilhes as tuas chaves privadas (as "senhas" da tua carteira digital), usa apenas exchanges conhecidas e verifica a reputação de quem te oferece investimentos. Cuidado com promessas de lucros garantidos – se parece bom demais, provavelmente é uma fraude. Muitos golpistas pedem que envies criptomoedas com promessas de retornos altos e depois desaparecem.'
  },
  {
    pergunta: 'O que são chaves públicas e privadas?',
    resposta: 'A chave pública é como o teu "número de conta" – podes partilhá-la para receber criptomoedas. A chave privada é a tua "senha" – usas para enviar moedas ou aceder à tua carteira. Se perderes a chave privada, perdes o acesso às tuas moedas, e se alguém a roubar, pode roubar tudo. Guarda-a num lugar seguro, como um dispositivo físico (ex.: USB).'
  },
  {
    pergunta: 'Posso perder as minhas criptomoedas se esquecer a minha chave privada?',
    resposta: 'Sim, se perderes a tua chave privada, não há como recuperar o acesso à tua carteira digital – nem bancos nem plataformas podem ajudar-te, porque as criptomoedas são descentralizadas. Por isso, guarda a tua chave privada num lugar seguro, como um cofre ou um dispositivo físico, e faz uma cópia de segurança.'
  },
  {
    pergunta: 'O que é um ataque de hackers em criptomoedas?',
    resposta: 'Um ataque de hackers pode acontecer se alguém roubar a tua chave privada, aceder à tua conta numa exchange, ou explorar falhas na blockchain. Por exemplo, em 2014, a exchange Mt. Gox foi hackeada, e 850.000 Bitcoins foram roubados. Usa autenticação em dois fatores (2FA), carteiras offline (cold wallets), e evita clicar em links suspeitos para te protegeres.'
  },
  {
    pergunta: 'Posso usar criptomoedas para comprar coisas do dia a dia?',
    resposta: 'Sim, mas não é muito comum. Algumas lojas aceitam Bitcoin ou outras criptomoedas, mas não é amplamente aceite como os euros. Apenas uma pequena fração dos utilizadores usa criptomoedas para compras diárias, segundo pesquisas. Além disso, os preços voláteis podem complicar o uso – um café pode custar mais ou menos de um dia para o outro.'
  },
  {
    pergunta: 'Como posso usar criptomoedas para transferências internacionais?',
    resposta: 'As criptomoedas são ótimas para transferências internacionais porque são rápidas e baratas, sem bancos como intermediários. Por exemplo, podes enviar Bitcoin para outro país em minutos, pagando taxas muito mais baixas do que numa transferência bancária tradicional, que pode custar 20-50€ e demorar dias.'
  },
  {
    pergunta: 'O que é um ETF de criptomoedas?',
    resposta: 'Um ETF (Exchange Traded Fund) de criptomoedas é um fundo negociado em bolsa que investe em criptomoedas, como o Bitcoin ou Ethereum. Em 2025, os ETFs de Bitcoin e Ethereum nos EUA já atraíram bilhões de dólares, segundo a InfoMoney. Podes investir num ETF para ter exposição a criptomoedas sem gerir uma carteira digital, mas ainda enfrentas a volatilidade do mercado.'
  },
  {
    pergunta: 'Quanto dinheiro preciso para começar a investir em criptomoedas?',
    resposta: 'Podes começar com pouco – até 10 ou 20 euros! Muitas exchanges permitem comprar frações de uma moeda, como 0,001 Bitcoin. Mas começa com um valor que possas perder, porque os preços são voláteis. Não precisas de ser rico para investir, mas investe com responsabilidade.'
  },
  {
    pergunta: 'Os meus investimentos em criptomoedas estão a ir mal. Devo preocupar-me?',
    resposta: 'É normal que as criptomoedas tenham altos e baixos – são muito voláteis! Em 2023, 38% dos utilizadores nos EUA disseram que os seus investimentos em cripto tiveram pior desempenho do que esperavam, segundo a Pew Research Center. Não entres em pânico. Avalia se podes esperar até o mercado melhorar (os preços podem recuperar a longo prazo) e nunca invistas mais do que podes perder. Se estás preocupado, fala com um consultor financeiro.'
  },
  {
    pergunta: 'O que é volatilidade no mercado de criptomoedas?',
    resposta: 'Volatilidade significa que os preços das criptomoedas mudam muito e rapidamente. Por exemplo, o Bitcoin pode subir 20% num dia e cair 15% no dia seguinte. Isso acontece porque o mercado é movido por oferta e procura, notícias (como regulamentações) e sentimentos dos investidores. É arriscado, mas também pode ser uma oportunidade se souberes gerir.'
  },
  {
    pergunta: 'O que é uma altcoin?',
    resposta: 'Uma altcoin é qualquer criptomoeda que não seja o Bitcoin. Exemplos incluem Ethereum, Solana, Cardano e Ripple. Algumas altcoins, como o Ethereum, têm funcionalidades avançadas (ex.: contratos inteligentes), mas muitas são mais especulativas e arriscadas do que o Bitcoin.'
  },
  {
    pergunta: 'O que são shitcoins?',
    resposta: 'Shitcoins são criptomoedas sem valor real ou propósito, criadas para especulação ou fraudes. Segundo a InfoMoney, em 2024, mais de 5 milhões de novas moedas foram criadas na plataforma Pump.Fun, muitas delas shitcoins. Cuidado com projetos que prometem lucros rápidos sem fundamentos sólidos – pesquisa sempre antes de investir.'
  },
  {
    pergunta: 'O que é uma pré-venda de criptomoedas?',
    resposta: 'Uma pré-venda é quando um novo projeto de criptomoeda vende os seus tokens antes do lançamento oficial, normalmente a preços mais baixos. Por exemplo, o CriptoFácil menciona a pré-venda do token $BEST, que arrecadou US$ 162 mil em 24 horas. É arriscado, porque muitos projetos falham ou são fraudes, mas pode ser lucrativo se o projeto for legítimo.'
  },
  {
    pergunta: 'O que é um token e como é diferente de uma moeda?',
    resposta: 'Uma moeda (como o Bitcoin) tem a sua própria blockchain e é usada principalmente como dinheiro digital. Um token é criado numa blockchain existente (ex.: tokens na Ethereum) e pode ter várias funções, como representar ativos, dar acesso a serviços ou recompensas. Por exemplo, o token $BEST da Best Wallet dá benefícios em cassinos parceiros.'
  },
  {
    pergunta: 'O que são contratos inteligentes?',
    resposta: 'Contratos inteligentes são programas na blockchain que executam ações automaticamente quando certas condições são cumpridas. Por exemplo, na Ethereum, podes criar um contrato que envia dinheiro a alguém só depois de confirmada uma entrega. São usados em finanças descentralizadas (DeFi) e outras aplicações.'
  },
  {
    pergunta: 'O que é DeFi?',
    resposta: 'DeFi (Finanças Descentralizadas) é um sistema que usa a blockchain para oferecer serviços financeiros sem bancos, como empréstimos, trocas ou poupanças. Por exemplo, na Aave, podes emprestar ou pedir criptomoedas emprestadas diretamente, sem intermediários, como mencionado pela Exame.'
  },
  {
    pergunta: 'O que é staking?',
    resposta: 'Staking é guardar criptomoedas numa carteira para ajudar a validar transações numa blockchain (em redes que usam Proof of Stake, como a Ethereum). Em troca, recebes recompensas, como juros. É uma forma de ganhar renda passiva, mas há riscos – se a rede falhar ou o preço cair, podes perder dinheiro.'
  },
  {
    pergunta: 'O que é uma cold wallet?',
    resposta: 'Uma cold wallet é uma carteira digital offline, como um dispositivo USB (ex.: Ledger ou Trezor), usada para guardar criptomoedas com segurança. Como não está ligada à internet, é menos vulnerável a hacks. É ideal para guardar grandes quantias a longo prazo.'
  },
  {
    pergunta: 'O que é uma hot wallet?',
    resposta: 'Uma hot wallet é uma carteira digital online, como uma aplicação (ex.: MetaMask) ou uma conta numa exchange. É prática para transações diárias, mas mais vulnerável a hacks porque está conectada à internet. Usa-a para pequenas quantias e ativa a autenticação em dois fatores (2FA).'
  },
  {
    pergunta: 'O que significa HODL?',
    resposta: 'HODL é um termo criado por engano num fórum em 2013, que significa "Hold On for Dear Life" (aguenta firme). Significa guardar as tuas criptomoedas a longo prazo, mesmo durante quedas de preço, acreditando que o valor vai subir no futuro. É uma estratégia comum entre investidores de Bitcoin.'
  },
  {
    pergunta: 'O que é uma altseason?',
    resposta: 'Uma altseason é um período em que as altcoins (criptomoedas além do Bitcoin) sobem muito de preço, geralmente depois de o Bitcoin atingir um pico. Segundo o Cointelegraph, isso acontece quando a dominância do Bitcoin cai e os investidores procuram altcoins para ganhos mais altos.'
  },
  {
    pergunta: 'Como sei se uma criptomoeda é confiável?',
    resposta: 'Pesquisa o projeto por trás da criptomoeda: verifica a equipa, o roadmap, a tecnologia e a comunidade. Projetos confiáveis têm: Capitalização de mercado alta (ex.: Bitcoin, Ethereum). Liquidez em várias exchanges. Transparência (sem promessas exageradas). Cuidado com shitcoins ou projetos que parecem fraudes, como os que desaparecem após o lançamento, segundo o Mercado Bitcoin.'
  },
  {
    pergunta: 'O que é uma ICO?',
    resposta: 'Uma ICO (Initial Coin Offering) é uma angariação de fundos onde um projeto vende tokens antes do lançamento. É como uma pré-venda, mas muito arriscada – muitas ICOs são fraudes. Pesquisa bem antes de investir e evita promessas de lucros garantidos.'
  },
  {
    pergunta: 'As criptomoedas são anónimas?',
    resposta: 'Não completamente. As transações na blockchain são públicas e rastreáveis (podes ver quem enviou e recebeu), mas os utilizadores são identificados por endereços, não nomes. Algumas criptomoedas, como a Monero, oferecem mais privacidade, mas a maioria não é totalmente anónima.'
  },
  {
    pergunta: 'Posso ganhar dinheiro rápido com criptomoedas?',
    resposta: 'É possível, mas arriscado. Muitos acreditam que podem ficar ricos rápido, como com o Bitcoin, que subiu de cêntimos para milhares de dólares. Mas os preços são voláteis – podes ganhar muito ou perder tudo. O InfoMoney sugere pensar a médio ou longo prazo, investindo aos poucos para diluir os riscos.'
  },
  {
    pergunta: 'O que é a dominância do Bitcoin?',
    resposta: 'A dominância do Bitcoin é a percentagem do mercado total de criptomoedas que o Bitcoin representa. Se o mercado vale $3,5 biliões e o Bitcoin $2 biliões, a dominância é cerca de 57%. Quando a dominância cai, as altcoins tendem a subir, segundo o Cointelegraph.'
  },
  {
    pergunta: 'O que é um halving do Bitcoin?',
    resposta: 'O halving do Bitcoin acontece a cada 4 anos, reduzindo pela metade a recompensa dos mineradores. Isso diminui a criação de novos Bitcoins, aumentando a escassez. Historicamente, após cada halving (ex.: 2024), o preço do Bitcoin sobe nos 12-18 meses seguintes, como mencionado pelo Melhor Investimento.'
  },
  {
    pergunta: 'Como as regulamentações afetam as criptomoedas?',
    resposta: 'As regulamentações podem aumentar ou diminuir os preços. Por exemplo, a aprovação de ETFs de Bitcoin nos EUA em 2024 atraiu $100 biliões, segundo o Melhor Investimento. Mas restrições, como na China, podem causar quedas. Em 2025, a UE implementou o MiCA, trazendo mais segurança jurídica, o que é positivo, conforme a Mitrade.'
  },
  {
    pergunta: 'O que são ETFs de criptomoedas e são seguros?',
    resposta: 'ETFs de criptomoedas são fundos negociados em bolsa que investem em moedas como Bitcoin ou Ethereum. São menos arriscados do que gerir uma carteira digital, mas ainda enfrentas a volatilidade do mercado. Em 2025, ETFs de Ethereum e Solana atraíram $30 biliões, segundo a Exame.'
  },
  {
    pergunta: 'Posso investir em criptomoedas com pouco dinheiro?',
    resposta: 'Sim! Podes começar com 10 ou 20 euros. Muitas exchanges permitem comprar frações de moedas, como 0,001 Bitcoin. É uma boa forma de aprender sem arriscar muito, mas lembra-te de investir apenas o que podes perder.'
  },
  {
    pergunta: 'O que é uma memecoin?',
    resposta: 'Uma memecoin é uma criptomoeda baseada em memes ou piadas, como Dogecoin ou PEPE. São muito especulativas e voláteis, mas podem ter ganhos altos durante "hype", como apontado pelo Cointelegraph. Cuidado – muitas são fraudes ou perdem valor rapidamente.'
  },
  {
    pergunta: 'O que é uma tokenização?',
    resposta: 'Tokenização é transformar ativos reais (como imóveis ou ouro) em tokens na blockchain, permitindo negociar frações desses ativos. Por exemplo, a Ondo Finance tokeniza ativos reais, trazendo mais liquidez, segundo a Exame. É uma tendência crescente para 2025.'
  },
  {
    pergunta: 'O que é Web3?',
    resposta: 'Web3 é a próxima geração da internet, baseada na blockchain, que dá mais controlo aos utilizadores sobre os seus dados e transações, sem intermediários. Inclui aplicações como DeFi, NFTs e redes sociais descentralizadas. É um conceito em evolução, como mencionado pela Exame.'
  },
  {
    pergunta: 'O que são NFTs e têm a ver com criptomoedas?',
    resposta: 'NFTs (Non-Fungible Tokens) são tokens únicos na blockchain, usados para representar itens digitais, como arte ou colecionáveis. São comprados com criptomoedas, como Ethereum, mas não são moedas – são mais como certificados digitais de propriedade.'
  },
  {
    pergunta: 'Como as criptomoedas afetam o meio ambiente?',
    resposta: 'A mineração de criptomoedas, como a do Bitcoin, consome muita energia por causa dos computadores poderosos necessários. Estima-se que a rede Bitcoin use mais energia do que alguns países pequenos. No entanto, projetos como a Ethereum (após 2022) usam menos energia com o Proof of Stake.'
  },
  {
    pergunta: 'Posso ganhar renda passiva com criptomoedas?',
    resposta: 'Sim! Podes ganhar renda passiva com: Staking: Guardar moedas para validar transações (ex.: Ethereum). Lending: Emprestar criptomoedas em plataformas DeFi, como a Aave, para receber juros. Liquidity Pools: Fornecer moedas para trocas em DEXs, como a Uniswap, e ganhar taxas. Mas há riscos – pesquisa bem antes de começar.'
  },
  {
    pergunta: 'O que é um bear market e um bull market?',
    resposta: 'Bear Market: Um mercado em queda, onde os preços caem (ex.: Bitcoin caiu 50% em 2021-2022). Bull Market: Um mercado em alta, onde os preços sobem (ex.: Bitcoin subiu 180% em 2024, segundo a Exame). Ambos são normais em criptomoedas, por causa da volatilidade.'
  },
  {
    pergunta: 'Como sei quando comprar ou vender criptomoedas?',
    resposta: 'Não há uma fórmula mágica, mas podes: Usar análise técnica (gráficos de preços, indicadores como RSI). Seguir notícias (ex.: regulamentações ou ETFs podem afetar preços). Definir metas de lucro (ex.: vender 30% do lucro a 5x, como sugerido pelo Cointelegraph). Pensa a longo prazo e evita decisões emocionais.'
  },
  {
    pergunta: 'O que devo fazer se for vítima de uma fraude com criptomoedas?',
    resposta: 'Se fores vítima de uma fraude: Para imediatamente de enviar dinheiro ou partilhar informações. Denuncia à polícia ou às autoridades locais (em Portugal, à Polícia Judiciária). Contacta a exchange, se aplicável, para reportar o problema. Partilha a tua experiência em fóruns para alertar outros (ex.: no X). Infelizmente, recuperar o dinheiro é difícil, porque as transações na blockchain são irreversíveis.'
  }
];

export default function FAQ() {
  const [search, setSearch] = useState('');
  const perguntasFiltradas = perguntasFAQ.filter(
    (item) =>
      item.pergunta.toLowerCase().includes(search.toLowerCase()) ||
      item.resposta.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">FAQ - Perguntas Frequentes</h1>
        <input
          type="text"
          placeholder="Pesquisar pergunta ou resposta..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
        />
        <div className="bg-[#18162A] bg-opacity-90 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Introdução ao FAQ</h2>
          <p className="mb-6">Oi, eu sou a Kyra! 🐶 Se estás a começar no mundo das criptomoedas, é normal teres mil e uma dúvidas. Aqui compilei um leque enorme de perguntas que os iniciantes mais fazem, com respostas simples para te ajudar a aprender, a sentir-te seguro e a dar os primeiros passos com confiança. Vamos explorar juntos?</p>
          <div className="space-y-6">
            {perguntasFiltradas.length === 0 ? (
              <p className="text-white text-center">Nenhuma pergunta encontrada.</p>
            ) : (
              perguntasFiltradas.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg mb-1">{idx + 1}. {item.pergunta}</h3>
                  <p>{item.resposta}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 
