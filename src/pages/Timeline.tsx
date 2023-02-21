import { FormEvent, useState } from 'react';
import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

import './Timeline.css';

export function Timeline() {

  const [tweets, setTweets] = useState([ 
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])
  const [newTweet, setNewTweet] = useState('');

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets]); // adicionando o item no inicio.
    //setTweets([...tweets, newTweet]) adicionando o item no fim.
    setNewTweet('');
  }

  return (
    <main className="timeline">
      <Header title="Home" />
          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroPauloBrCalazans.png" alt="Pedro Paulo" />
                <textarea 
                  name="" 
                  id="tweet"
                  placeholder="O que está acontecendo?"
                  value={newTweet}
                  onChange={(event) => {
                    setNewTweet(event.target.value);
                  }}  
                  
                />
            </label>

            <button type="submit">
              Tweet
            </button>
          </form>

          <Separator />

          { tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
          })}
    </main>
  );
}

//event.preventDefault evitar comportamentos padrao dentro do js.

/**
 * Fluxo de renderização: 
 * 
 * 1. Toda vez que alteramos o estado de um componente, Todo componente é recalculado, todo código que está aqui dentro é executado novamente.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
*/

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente.
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff).
 * 3. Aplicar as operações JS para alterar somente o necessario no HTML.
*/