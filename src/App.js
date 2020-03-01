import React, { useState } from 'react';

import { Botoes, Edicao, Resultado } from './styles';
import './style.css';

function App(){
  
  const [ texto, setTexto ] = useState('');

  const [ variableBold, setVariableBold ] = useState('none');
  const [ variableUnderline, setVariableUnderline ] = useState('none');
  const [ variableItalic, setVariableItalic ] = useState('none'); 
  const [ variableFont, setVariableFont ] = useState('arial'); 
  const [ nameFont, setNameFont ] = useState('Cursive'); 


  const [ variableClicado1, setVariableClicado1 ] = useState('transparent');
  const [ variableClicado2, setVariableClicado2 ] = useState('transparent');
  const [ variableClicado3, setVariableClicado3 ] = useState('transparent');
  
  function negrito() {
  
    if (variableBold === 'none') {
      setVariableClicado1('#192a56');
      setVariableBold('bold');
    } else if (variableBold === 'bold') {
      setVariableClicado1('transparent');
      setVariableBold('none');
    }
  
  }

  function sublinhado() {
    
    if (variableUnderline === 'none') {
      setVariableClicado2('#192a56');
      setVariableUnderline('underline');
    } else if (variableUnderline === 'underline') {
      setVariableClicado2('transparent');
      setVariableUnderline('none');
    }
  
  }

  function italico() {

    if (variableItalic === 'none') {
      setVariableClicado3('#192a56');
      setVariableItalic('italic');
    } else if (variableItalic === 'italic') {
      setVariableClicado3('transparent');
      setVariableItalic('none');
    }

  }

  function deixarPrimeiraMaius() {
    let primeiraLetra = texto.charAt(0);
    let primeiraLetraMaius = primeiraLetra.toUpperCase();
    setTexto(texto.replace(primeiraLetra, primeiraLetraMaius));
  }

  function fontCursive() {

    if (variableFont === 'arial') {
      setVariableFont('cursive');
      setNameFont('Arial');
    } else if (variableFont === 'cursive') {
      setVariableFont('arial');
      setNameFont('Cursive');
    }

  }

  return(
      <div className="container">
          <Botoes 
            backgroundBotoes1={variableClicado1}
            backgroundBotoes2={variableClicado2}
            backgroundBotoes3={variableClicado3}
          >
            <header>
              <button onClick={negrito} className="btn1">
                <strong>B</strong>
              </button>

              <button onClick={sublinhado} className="btn2">
                <u>S</u>
              </button>

              <button onClick={italico} className="btn3">
                <i>I</i>
              </button>

              <button onClick={e => setTexto(texto.toUpperCase())} className="btn4">
                AA
              </button>

              <button onClick={e => setTexto(texto.toLowerCase())} className="btn5">
                aa
              </button>

              <button onClick={deixarPrimeiraMaius} className="btn6">
                Aa
              </button>

              <button onClick={fontCursive} className="btn7">
                {nameFont}
              </button>


            </header>
          </Botoes>

          <Edicao>
            <main>
              <textarea
                placeholder="Digite ou copie um texto aqui...(no máximo 1000 caracteres)"
                onChange={e => setTexto(e.target.value)}
                maxLength={1000}
              >
              </textarea>
            </main>
          </Edicao>

          <Resultado 
            fontWeight={variableBold} 
            textDecoration={variableUnderline} 
            fontStyle={variableItalic}
            fontFamily={variableFont}
          >
            
            <aside>
              <div>
                <p className="p_resultado">{texto}</p>
              </div>
            </aside>
          
          </Resultado>

          <footer>
            <p>
              Developed with &#10084; by
              <a href="https://github.com/axelrammon" 
                target="_blank" rel="noopener noreferrer"> Axel Rammon</a>
            </p>
          </footer>
      </div>
  );
}

export default App;