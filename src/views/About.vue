<template>
  <div class="login">
    <h1>Essa é minha página de Login!</h1>
    <label>E-mail:</label><input v-model="email" class="input-email" /> <br>
    <label>Senha:</label><input v-model="senha" class="input-password" type="password"/><br><br>
    <button @click="cliqueLogin">Clique em mim</button>
    <h1 v-if="logado">Você está logado</h1>
    <h1 v-else>Login inválido!</h1>
  </div>
</template>
<script>
export default {
  data: function(){
    return{
      email:'',
      senha: '',
      logado: false
    }
  },
  methods: {
    cliqueLogin: function()
    {
      if(this.email==='neto@email.com' && this.senha==='minhaSenha')
        this.logado=true;
      else
        this.logado=false;
    }
  }
}
</script>
