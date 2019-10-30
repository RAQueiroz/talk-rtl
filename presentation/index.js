import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
// const images = {
//   goodWork: require('../assets/good-work.gif')
// };
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Testing Library
          </Heading>
          <Text margin="10px 0 0" textColor="primary" bold>
            uma introdução 📖
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="tertiary">
            Rodrigo Queiroz
          </Heading>
          <Text textColor="primary">
            dev react @ sei de cor
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary" fit>
            Sobre o que é esta apresentação ?
          </Heading>
          <List textColor="primary">
            <ListItem bulletStyle="star">
              escrever testes melhores
            </ListItem>
            <ListItem bulletStyle="star">
              conhecer uma lib que favorece boas práticas
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary" fit>
            Sobre o que <span style={{ color: 'tomato' }}>não</span> é esta apresentação ?
          </Heading>
          <List textColor="primary">
            <ListItem bulletStyle="cross">diminuir outras libs</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <BlockQuote>
            <Quote textSize="52">
              Quanto mais um teste se aproxima da maneira que o usuário utiliza o software mais confiança ele nos dá.
            </Quote>
            <Cite margin="10px 0 0 30px">Kent C Dodds</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary" fit>
            Quem são os usuários da nossa aplicação ? 
          </Heading>
          <br />
          <Appear>
            <div>
              <Text textColor="primary">🧑   👨🏻‍💻</Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Como eles interagem com a nossa aplicação ?
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Existe algum outro usuário ?
          </Heading>
          <br />
          <Text textColor="primary">👽</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Quando testamos detalhes de implementação nós adicionamos um novo usuário a nossa aplicação
          </Heading>
          {/* Pq adicionar um usuário é inútil ? */}
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Efeitos de um teste que depende de detalhes de implementação
          </Heading>
          <br />
          <br />
          <Text textColor="primary">
            <strong style={{ color: '#50C878' }}>Falso negativo:</strong> Meus testes estão passando mas a aplicação quebrou
          </Text>
          <br />
          <br />
          <Text textColor="primary">
            <strong style={{ color: 'tomato' }}>Falso positivo:</strong> Minha aplicação está funcionando mas meus testes não estão passando
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Mas afinal o que é um detalhe de implementação ?
          </Heading>
          <br />
          <Text textColor="primary">
            Detalhes de implementação são coisas que os usuários do nosso código não vão utilizar e na maioria das vezes nem sabem que existe.
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="primary">
          🤔 exemplo 🤔
          </Heading>
        </Slide>
        {/* <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide> */}
      </Deck>
    )
  }
}
