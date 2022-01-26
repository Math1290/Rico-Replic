
var btn = document.getElementById("btn")

btn.addEventListener('click', function(est){

    est.preventDefault();

    var name = document.getElementById('name')
    var value = name.value
    var container = document.getElementById('container')
    var erro = document.getElementById('erro')
    
    
 
    if(value == ''){
        alert('ERRO')
        btn.style.borderBottom = "2px solid red"
        btn.style.color = "red"

        name.style.borderBottom = "2px solid red"
        erro.innerHTML = "[ERRO] Responda a caixa de texto"
        erro.style.display = 'block'
        erro.classList = "erro"
        container.style.display = 'none'
        
    }
    else{
        container.innerHTML =  "Seja Bem-Vindo " + value
        container.classList = "container"   
        container.style.display = 'block'
        erro.style.display = 'none'

        btn.style.borderBottom = "2px solid green"
        btn.style.color = "green"

        name.style.borderBottom = "2px solid green"
        

        
        

    }
})



var enviar = document.getElementById('enviar')

enviar.addEventListener("click", function(e){

    e.preventDefault()

  var inp = document.getElementById('email1')
  var inp2 = document.getElementById('email2')
  var n = document.getElementById('numero')
  var s = document.getElementById('senha')
  var erro = document.getElementById('erro1')
  var erro2 = document.getElementById('erro2')
  var erro3 = document.getElementById('erro3')
  var erro4 = document.getElementById('erro4')

  var i = inp.value
  var i2 = inp2.value
  var se = s.value
  var nu = n.value

  if(i === ""){
    inp.style.borderBottom = "1px solid red"
  }
  else{
    inp.style.borderBottom = "1px solid green"
    inp.style.color = "green"
   
  }

  if(i2 === ""){
    inp2.style.borderBottom = "1px solid red"

  }
  else{
    inp2.style.borderBottom = "1px solid green"
   
    inp2.style.color = "green"
  }

  if(se === ""){
    s.style.borderBottom = "1px solid red"
    
  }
  else{
    s.style.borderBottom = "1px solid green"
    s.style.color = 'green'
  
    setInterval(function(){
      location.reload()
    }, 5000)
  }

  if(nu === ""){
    n.style.borderBottom = "1px solid red"
  }
  else{
    n.style.borderBottom = "1px solid green"
    n.style.color = "green"
    

   
  }





 
})

