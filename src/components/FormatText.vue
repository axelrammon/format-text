<template>
  <main id="content">
    <div id="botoes">
      <button @click="negrito()" v-bind:style="{backgroundColor: negritoAtivo}">B</button>
      <button @click="italico()" v-bind:style="{backgroundColor: italicoAtivo}">I</button>
      <button @click="sublinhado()" v-bind:style="{backgroundColor: sublinhadoAtivo}">S</button>
      <button @click="primeiraMaiuscula()" v-bind:style="{backgroundColor: primeiraMaiusAativo}">Aa</button>
      <button @click="maiuscula()" v-bind:style="{backgroundColor: maiusculaAtivo}">AA</button>
      <button @click="minuscula()" v-bind:style="{backgroundColor: minusculaAtivo}">aa</button>
      <button @click="darkSelector()" v-bind:style="{backgroundColor: darkBgAtivo}">Dark</button>
    </div>
    <div id="forms">
      <div>
        <textarea
          name="text"
          id="text"
          cols="70"
          rows="30"
          minlength="1"
          maxlength="700"
          v-model="text"
          v-bind:style="{backgroundColor: darkBg, color: darkColor}"
        ></textarea>
      </div>
      <div>
        <div
          id="textEditar"
          v-bind:style="
            {
              backgroundColor: darkBg,
              color: darkColor,
              fontWeight: pesoFonte,
              fontStyle: italicoFonte,
              textDecoration: sublinhadoFonte,
              textTransform: transformFonte,
            }"
        >{{ text }}</div>
      </div>
    </div>
  </main>

  <footer>
    <p>Criado por Axel Rammon</p>
  </footer> 
</template>

<script>

export default {
  data() {
    return {
      text: '',
      textEditar: '',

      // BACKGROUND ATIVO
      negritoAtivo: '',
      italicoAtivo: '',
      sublinhadoAtivo: '',
      primeiraMaiusAativo: '',
      maiusculaAtivo: '',
      minusculaAtivo: '',
      darkBgAtivo: '',
      
      // CONFIGURAÇÕES 
      pesoFonte: '',
      italicoFonte: '',
      sublinhadoFonte: '',
      transformFonte: '',
      darkColor: '#161b22',
      darkBg: '#ecf0f1',
    }
  },

  methods: {
    
    negrito: function() {
      if (this.pesoFonte === '') {
        this.pesoFonte = 'bold'
        this.negritoAtivo = '#3b6ea3'
      } else {
        this.pesoFonte = ''
        this.negritoAtivo = ''
      }
    },
    
    italico: function() {
      if (this.italicoFonte === '') {
        this.italicoFonte = 'italic'
        this.italicoAtivo = '#3b6ea3'
      } else {
        this.italicoFonte = ''
        this.italicoAtivo = ''
      }
    },

    sublinhado: function() {
      if (this.sublinhadoFonte === '') {
        this.sublinhadoFonte = 'underline'
        this.sublinhadoAtivo = '#3b6ea3'
      } else {
        this.sublinhadoFonte = ''
        this.sublinhadoAtivo = ''
      }
    },

    primeiraMaiuscula: function() {
      if (this.transformFonte === '' || this.transformFonte === 'uppercase' || this.transformFonte === 'lowercase') {
        this.transformFonte = 'capitalize'
        this.primeiraMaiusAativo = '#3b6ea3'
        this.maiusculaAtivo = ''
        this.minusculaAtivo = ''
      } else {
        this.transformFonte = ''
        this.primeiraMaiusAativo = ''
      }
    },

    maiuscula: function() {
      if (this.transformFonte === '' || this.transformFonte === 'capitalize' || this.transformFonte === 'lowercase') {
        this.transformFonte = 'uppercase'
        this.maiusculaAtivo = '#3b6ea3'
        this.primeiraMaiusAativo = ''
        this.minusculaAtivo = ''
      } else {
        this.transformFonte = ''
        this.maiusculaAtivo = ''
      }
    },

    minuscula: function() {
      if (this.transformFonte === '' || this.transformFonte === 'uppercase' || this.transformFonte === 'capitalize') {
        this.transformFonte = 'lowercase'
        this.minusculaAtivo = '#3b6ea3'
        this.primeiraMaiusAativo = ''
        this.maiusculaAtivo = ''
      } else {
        this.transformFonte = ''
        this.minusculaAtivo = ''
      }
    },

    darkSelector: function() {
      if (this.darkBg === '') {
        this.darkColor = '#161b22'
        this.darkBg = '#ecf0f1'
        this.darkBgAtivo = '#3b6ea3'
      } else  {
        this.darkColor = '#ecf0f1'
        this.darkBg = '#161b22'
        this.darkBgAtivo = ''
      }
    }
    
  }
}

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

  textarea {
    resize: none;
    border: 2px solid #c0c0c0;
    border-radius: 7px;
    background-color: #ecf0f1;
    color: #161b22;
    /* outline: none; */
  }

  #botoes {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  #botoes button {
    padding: 10px;
    width: 50px;
    margin: 15px;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    font: normal 600 14px 'Ubuntu';
    background-color: #31475E;
    color: #ecf0f1;
    transition: .5s;
  }

  #botoes button:hover {
    background-color: #3b6ea3;
    transition: .5s;
  }

  #forms {
    display: flex;
    flex-wrap: wrap;
  }

  #forms div {
    margin: 10px auto;
  }

  #textEditar {
    display: flex;
    flex: wrap;
    width: 500px;
    height: 430px;
    max-width: 500px;
    background-color: #ecf0f1;
    color: #161b22;
    border-radius: 7px;
    padding: 3px;
    word-break: break-word;
  }

  footer {
    /* padding: 20px; */
    height: 64px;
    text-align: center;
    font: normal 600 22px 'Ubuntu';
    color: #ecf0f1;
  }


</style>