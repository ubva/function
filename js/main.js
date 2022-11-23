let inp = document.querySelector('.main-inp')
let btn = document.querySelector('.btn')
let itemVar1 = document.querySelector('.item-var1')
let itemVar2 = document.querySelector('.item-var2')
let itemVar3 = document.querySelector('.item-var3')
let itemVar4 = document.querySelector('.item-var4')


btn.addEventListener('click' , function(){
    let inpValue = inp.value.split('km')[0]
  
    function varBtn (p){
        return p
    }
   itemVar1.textContent = (inpValue / varBtn(3.6))

   function varBtn (b){
    return b
    }
    itemVar2.textContent = (inpValue / varBtn(20.1))

    function varBtn (c){
        return c
    }
    itemVar3.textContent = (inpValue / varBtn(70))

    function varBtn (p){
        return p
    }
    itemVar4.textContent = (inpValue / varBtn(800))
    }
    )


