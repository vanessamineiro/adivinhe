import styles from './app.module.css'

import { Input } from './components/Input'
import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Button } from './components/Button'
import { Letter } from './components/Letter'
import { LettersUsed } from './components/LetttersUsed'

export default function App() {

  function handleRestartGame() {
    console.log('Reiniciar o jogo')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?'/>
          <Button tittle="Confirmar" />
        </div>

        <LettersUsed />
      </main>

    </div>
  );
}