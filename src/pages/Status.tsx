import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status() {

  return(
    <main className="status">
      <Header title="Tweet" />
          <form className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroPauloBrCalazans.png" alt="Pedro Paulo" />
                <textarea name="" id="tweet" placeholder="tweet sua resposta" />
            </label>

            <button type="submit">
              Answer
            </button>
          </form>

          <Separator />

          { answers.map(answer => {
              return <Tweet key={answer} content={answer} />
          })}
    </main>
  );
}