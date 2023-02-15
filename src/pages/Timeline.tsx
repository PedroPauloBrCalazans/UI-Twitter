import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

import './Timeline.css';

const tweets = [ 
  'Meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroPauloBrCalazans.png" alt="Pedro Paulo" />
                <textarea name="" id="tweet" placeholder="O que está acontecendo?" />
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