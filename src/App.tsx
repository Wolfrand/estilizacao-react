import './App.css'
import { BotaoExterno } from './components/BotaoExterno'
import { BotaoModule } from './components/BotaoModule'
import { BotaoStyled } from './components/BotaoStyled'

function App() {

  return (
    <>
      <section>
        <p>
          Botão estilizado por arquivo CSS externo
        </p>

        <BotaoExterno />
      </section>

      <section>
        <p>
          Botão estilizado por arquivo CSS module
        </p>

        <BotaoModule />
      </section>

      <section>
        <p>
          Botão estilizado por Styled-components
        </p>

        <BotaoStyled />
      </section>
    </>
  )
}

export default App