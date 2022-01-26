var passwordinput = document.getElementById('senha')
var img = document.getElementById('mostrar-img')
img.classList = "movimentaçao-do-olho"

function mostrar(){

    var inputtypeispasssword = passwordinput.type == "password"

    if(inputtypeispasssword){
        showpassword()
    }else{
        hidepassword()
    }   
}


function  showpassword(){

    passwordinput.setAttribute("type", "text")
    img.src = "imagens/olho (1).png"

}

function   hidepassword(){
    passwordinput.setAttribute("type", "password")
    img.src = "imagens/olho.png"
}




/*Loading var l = document.querySelector(".loading")
        setInterval(function(){
            var l = document.querySelector(".loading").style.display = 'none'
        
            
        }, 10000)*/
function logar(){
    var gmail = document.getElementById('gmail')
    var senha = document.getElementById('senha')
    var rg = document.getElementById('respostadogmail')
    var rs = document.getElementById('respstadasenha')

    var g = gmail.value
    var s = senha.value

    if(g === ''){
        alert('[ERRO] Verifique as suas respostas')
        gmail.style.borderBottom = "2px solid red"

        rg.style.display = 'block'
        rg.innerHTML = "[ERRO] Verifique as suas respostas"
        rg.classList = "rg"
    }
    else{
        gmail.style.borderBottom = "2px solid green"
        rg.style.display = 'none'
        gmail.style.color = 'green'
    }



         if(s === ''){
            alert('[ERRO] Verifique as suas respostas')
            senha.style.borderBottom = "2px solid red"
           

            rs.style.display = 'block'
            rs.innerHTML = "[ERRO] Verifique as suas respostas"
            rs.classList = "rg"
        }
   else{
    senha.style.color = 'green'
    rs.style.display = 'none'
        var l = document.querySelector(".loading")

       
        senha.style.borderBottom = "2px solid green"

        if(l.style.display === 'none'){
            l.style.display = 'block'

            setInterval(function(){
                var l = document.querySelector(".loading").style.display = 'none'
                
                
                }, 10000)
        
                setTimeout (function(){
                    var l = document.querySelector(".logou").style.display = 'block'
                }, 10000)
        
                setTimeout(function(){
                    var l = document.querySelector(".logou").style.display = 'none'
                    location.reload()
                },20000)
         
         }else{
            l.style.display = 'none'
         }

       
        }
            
         
        }
    

     

      

   


 




/*Verificação*/


