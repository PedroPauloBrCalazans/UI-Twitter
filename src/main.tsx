import React from 'react';
import ReactDOM from 'react-dom/client';

import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separator';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

        <div className="content">
          <main className="timeline">
            <Header title="Home"/>

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

            <Tweet />
            <Tweet />
          </main>
        </div>
    </div>
  </React.StrictMode>
)