import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

export function Status() {

  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState( [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])
  

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()


    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  return(
    <main className="status">
      <Header title="Tweet" />

          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt nulla amet, quisquam quam explicabo, ullam delectus pariatur commodi repudiandae id voluptatum aperiam voluptates iusto. Quae temporibus consequuntur aliquam ea."/>

          <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/PedroPauloBrCalazans.png" alt="Pedro Paulo" />
                <textarea 
                  name=""
                  id="tweet" 
                  placeholder="tweet sua resposta" 
                  value={newAnswer}
                  onChange={(event) => {
                    setNewAnswer(event.target.value);
                  }}
                />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
            </button>
          </form>

          { answers.map(answer => {
              return <Tweet key={answer} content={answer} />
          })}
    </main>
  );
}