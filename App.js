import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Importando TouchableOpacity
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ProfileScreen from './src/screens/Profile';
import PersonScreen from './src/screens/Person'; 
import DetailsScreen from './src/screens/Details';

const catalagos = [
  {
      "titulo": "Uma Parede entre Nós",
      "ano": 2024,
      "sinopse": "Valentina é uma jovem pianista recomeçando a vida. David, seu vizinho, é um inventor que odeia barulho. E uma parede fina está prestes a unir os dois.",
      "avaliacao": 3.5,
      "imagem": require('./src/assets/imgs_filmes/uma_parede_entre_nos.webp'),
      "genero": ['romance','comedia'],
      "tipo": 'filme'
  },
  {
    "titulo": "Jumanji: Bem-vindo à Selva",
    "ano": 2017,
    "sinopse": "Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.",
    "avaliacao": 4.2,
    "imagem": require('./src/assets/imgs_filmes/jumanji_bem_vindo_a_selva.jpg'),
    "genero": ['aventura','comedia'],
    "tipo": 'filme'
  },
  {
    "titulo": "Resgate 2",
    "ano": 2023,
    "sinopse": "Tyler Rake, um mercenário aposentado, é recrutado para uma nova missão de resgate perigosa. Desta vez, ele se vê enfrentando um poderoso sindicato do crime internacional enquanto luta para salvar um grupo de reféns em uma cidade sitiada.",
    "avaliacao": 4.0,
    "imagem": require('./src/assets/imgs_filmes/resgate_2.webp'),
    "genero": ['ação','thriller'],
    "tipo": 'filme'
  },
  {
    "titulo": "Nada de Novo no Front",
    "ano": 2022,
    "sinopse": "O adolescente Paul é convocado para atuar na linha de frente da Primeira Guerra Mundial. O jovem começa seu serviço militar de forma idealista e entusiasmada, mas logo é confrontado pela dura realidade do combate.",
    "avaliacao": 4.6,
    "imagem": require('./src/assets/imgs_filmes/nada_de_novo_front.jpg'),
    "genero": ['guerra','ação'],
    "tipo": 'filme'
  },
  {
    "titulo": "Velozes e Furiosos 7",
    "ano": 2015,
    "sinopse": "Um agente do governo oferece ajuda para cuidar de Shaw em troca de Dom e o grupo resgatar um hacker sequestrado. Dessa vez, não se trata apenas de velocidade: a corrida é pela sobrevivência.",
    "avaliacao": 4.5,
    "imagem": require('./src/assets/imgs_filmes/velozes_e_furiosos.png'),
    "genero": ['ação','thriller'],
    "tipo": 'filme'
  },
  {
    "titulo": "Troco em Dobro",
    "ano": 2020,
    "sinopse": "Spenser, um ex-policial e ex-presidiário, e o aspirante a lutador Hawk se unem para investigar uma conspiração ligada à morte de dois oficiais de Boston.",
    "avaliacao": 3.4,
    "imagem": require('./src/assets/imgs_filmes/troco_em_dobro.png'),
    "genero": ['ação','crime'],
    "tipo": 'filme'
  },
  {
    "titulo": "Homem aranha",
    "ano": 2002,
    "sinopse": "Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde.",
    "avaliacao": 4.4,
    "imagem": require('./src/assets/imgs_filmes/spider_man.png'),
    "genero": ['ação','ficção cientifica'],
    "tipo": 'filme'
  },
  {
    "titulo": "Homem aranha 2",
    "ano": 2004,
    "sinopse": "O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva.",
    "avaliacao": 4.5,
    "imagem": require('./src/assets/imgs_filmes/spider_man2.png'),
    "genero": ['ação','ficção cientifica'],
    "tipo": 'filme'
  },
  {
    "titulo": "Homem aranha 3",
    "ano": 2007,
    "sinopse": "O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter - apesar de aumentar seus poderes, ela revela e amplia o lado obscuro de sua personalidade. Com isso, os vilões Venom e Homem-Areia tentam destruir o herói.",
    "avaliacao": 4.1,
    "imagem": require('./src/assets/imgs_filmes/spider_man3.png'),
    "genero": ['ação','ficção cientifica'],
    "tipo": 'filme'
  },
  {
    "titulo": "Amor esquecido",
    "ano": 2023,
    "sinopse": "Um homem sem memória tenta recomeçar sua vida em uma pequena aldeia. Lá, ele ganha notoriedade ao cuidar dos doentes e feridos de forma natural, o que levanta pistas sobre quem ele realmente é.",
    "avaliacao": 4.4,
    "imagem": require('./src/assets/imgs_filmes/amor_esquecido.png'),
    "genero": ['romance','drama'],
    "tipo": 'filme'
  },
  {
    "titulo": "Carta para Deus",
    "ano": 2010,
    "sinopse": "Um menino de apenas oito anos de idade tem câncer e escreve suas orações em cartas para seu amigo Deus. Buscando um sentido para a vida, um carteiro encontra as orações do garoto e resolve ajudá-lo a mudar o destino de todos ao seu redor.",
    "avaliacao": 4.2,
    "imagem": require('./src/assets/imgs_filmes/carta_para_DEUS.png'),
    "genero": ['infatil','thriller'],
    "tipo": 'filme'
  },
  {
    "titulo": "Como Eu Era Antes de Você",
    "ano": 2016,
    "sinopse": "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
    "avaliacao": 4.3,
    "imagem": require('./src/assets/imgs_filmes/como_eu_era_antes_de_voce.png'),
    "genero": ['romance','drama'],
    "tipo": 'filme'
  },
  {
    "titulo": "Em Meus Sonhos",
    "ano": 2014,
    "sinopse": "Depois de se encontrarem apenas em seus sonhos, um homem e uma mulher têm sete dias para transformar suas visões românticas em realidade.",
    "avaliacao": 4.3,
    "imagem": require('./src/assets/imgs_filmes/em_meus_sonhos.png'),
    "genero": ['romance','drama'],
    "tipo": 'filme'
  },
  {
    "titulo": "Roubando Mussolini",
    "ano": 2022,
    "sinopse": "No final da Segunda Guerra, combatentes da resistência planejam um roubo impossível: o tesouro de Mussolini que está no quartel-general dos fascistas em Milão.",
    "avaliacao": 3.5,
    "imagem": require('./src/assets/imgs_filmes/roubando_mussolini.png'),
    "genero": ['ação','comedia'],
    "tipo": 'filme'
  },
  {
    "titulo": "Todos Menos Você",
    "ano": 2023,
    "sinopse": "Bea e Ben têm um primeiro encontro incrível, mas a atração inicial logo se torna ódio mútuo. Um casamento na Austrália força a aproximação dos dois, que decidem fingir um relacionamento para enganar a família e os amigos.",
    "avaliacao": 4.2,
    "imagem": require('./src/assets/imgs_filmes/todo_mundo_menos_voce.png'),
    "genero": ['romance','comedia'],
    "tipo": 'filme'
  },
  {
    "titulo": "Top gun",
    "ano": 1986,
    "sinopse": "Top Gun é uma franquia multimídia de drama de ação americana baseada no artigo Top Guns de 1983, de Ehud Yonay, que foi adaptado para o filme homônimo de 1986, escrito por Jim Cash e Jack Epps Jr.",
    "avaliacao": 4.2,
    "imagem": require('./src/assets/imgs_filmes/topgun.png'),
    "genero": ['romance','ação', 'aventura', 'drama'],
    "tipo": 'filme'
  },
  {
    "titulo": "John Wick – De Volta ao Jogo",
    "ano": 2014,
    "sinopse": "John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança.",
    "avaliacao": 4.7,
    "imagem": require('./src/assets/imgs_filmes/John_wick.png'),
    "genero": ['ação','thriller'],
    "tipo": 'filme'
  },
  {
    "titulo": "A caminho da fé",
    "ano": 2018,
    "sinopse": "Uma crise de fé leva o pastor Carlton Pearson a trilhar um novo caminho espiritual que coloca em risco tudo que lhe é mais sagrado.",
    "avaliacao": 3.5,
    "imagem": require('./src/assets/imgs_filmes/a_caminho.png'),
    "genero": ['drama'],
    "tipo": 'filme'
  },



  {
    "titulo": "The chosen",
    "ano": 2017,
    "sinopse": "A vida de Jesus Cristo sob a perspectiva daqueles que o conheceram e conviveram com Ele.",
    "avaliacao": 5.0,
    "imagem": require('./src/assets/imgs_filmes/the_chosen.png'),
    "genero": ['Drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "Better Call Saul",
    "ano": 2015,
    "sinopse": "Jimmy McGill, também como conhecido como Saul Goodman, tenta ser um homem honesto e construir uma carreira de respeito. Mas há um lado seu que só quer aplicar golpes e se tornar um advogado picareta.",
    "avaliacao": 4.5,
    "imagem": require('./src/assets/imgs_filmes/better_call_saul.png'),
    "genero": ['drogas','drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "Breaking Bad - A Química do Mal",
    "ano": 2008,
    "sinopse": "O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.",
    "avaliacao": 4.5,
    "imagem": require('./src/assets/imgs_filmes/breaking_bad.png'),
    "genero": ['drogas','drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "Suits - Homens de Terno",
    "ano": 2011,
    "sinopse": "O grande advogado corporativo de Manhattan, Harvey Specter, e sua equipe, Donna Paulsen, Louis Litt e Alex Williams, são lançados em uma disputa pelo poder quando um novo sócio se junta à empresa. Com seus dois melhores associados desaparecidos e Jessica de volta a Chicago, Specter e a equipe tentam se adaptar a uma nova normal sem eles. A equipe enfrenta traições, relacionamentos ardentes e segredos que acabam sendo revelados. Velhas e novas rivalidades vêm à luz entre os membros da equipe, à medida que aprendem a lidar com o novo membro.",
    "avaliacao": 4.8,
    "imagem": require('./src/assets/imgs_filmes/suits.png'),
    "genero": ['drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "Knightfall",
    "ano": 2017,
    "sinopse": "O colapso dos Cavaleiros Templários após o cerco de Acre, onde perderam tanto a Terra Santa como o Santo Graal.",
    "avaliacao": 3.5,
    "imagem": require('./src/assets/imgs_filmes/templarios.png'),
    "genero": ['historia'],
    "tipo": 'serie'
  },
  {
    "titulo": "The Umbrella Academy",
    "ano": 2019,
    "sinopse": "Irmãos com poderes extraordinários se reúnem depois de passar muito tempo afastados e descobrem surpreendentes segredos de família. A família enfrenta viagens no tempo, assassinos e o fim do mundo.",
    "avaliacao": 4.3,
    "imagem": require('./src/assets/imgs_filmes/umbrella.png'),
    "genero": ['drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "The Walking Dead",
    "ano": 2010,
    "sinopse": "Baseado na história em quadrinhos escrita por Robert Kirkman, este drama potente e visceral retrata a vida nos Estados Unidos pós-apocalíptico. Um grupo de sobreviventes, liderado pelo policial Rick Grimes, segue viajando em busca de uma nova moradia segura e distante dos mortos-vivos. A pressão para permanecerem vivos e lutarem pela sobrevivência faz com que muitos do grupo sejam submetidos às mais profundas formas de crueldade humana. Rick acaba descobrindo que o tão assustador desespero pela subsistência pode ser ainda mais fatal do que os próprios mortos-vivos que os rodeiam.",
    "avaliacao": 4.8,
    "imagem": require('./src/assets/imgs_filmes/thewalkingdead.png'),
    "genero": ['drama'],
    "tipo": 'serie'
  },
  {
    "titulo": "Peaky Blinders",
    "ano": 2013,
    "sinopse": "Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.",
    "avaliacao": 4.9,
    "imagem": require('./src/assets/imgs_filmes/peaky.png'),
    "genero": ['drama'],
    "tipo": 'serie'
  },
];


const Tab = createBottomTabNavigator();

export default function App() {
  const [personSelected, setPersonSelected] = useState(null);

  if (!personSelected) {
    return (
      <NavigationContainer>
        <PersonScreen onSelect={setPersonSelected} />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle:{ backgroundColor:'black', borderBottomWidth: 0 },
          headerTintColor: 'red',
          headerTitle: 'NETFLIX',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            padding:5
          },
        }}
      >
        {/* Tela de Inicio */} 
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          initialParams={{ catalogo: catalagos }} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="home" size={size} color={focused ? 'red' : 'white'} />
            ),
            tabBarLabelStyle: {
              color: 'white'
            }
          }}
        />

        {/* Tela de pesquisa */}
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          initialParams={{ catalogo: catalagos }} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="search-sharp" size={size} color={focused ? 'red' : 'white'} />
            ),
            tabBarLabelStyle: {
              color: 'white'
            }
          }}
        />

        {/* Tela de detalhes (escondida da barra de navegação) */}
        <Tab.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ tabBarButton: () => null }} // Para ocultar da barra de navegação
        />

        {/* Tela de Perfil */} 
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          initialParams={{ pessoaEscolhida: personSelected }}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="person" size={size} color={focused ? 'red' : 'white'} />
            ),
            tabBarLabelStyle: {
              color: 'white'
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => { setPersonSelected(null); navigation.navigate('Home'); }}>
                <Ionicons name="arrow-back" size={24} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}