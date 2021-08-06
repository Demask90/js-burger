// il prezzo base del burger è di 50€

// aggiungendo ingredienti e cliccando su "calcolate" il prezzo del panino aumenta

// inserendo un coupon si applica uno sconto del 20% (creare array con coupon validi)



btn_calculate_burger.addEventListener('click',

    function() {

        const price_burger_standard = 50;
        let add_cheese = 0; 
        let add_egg = 0;
        let add_mustard = 0;
        let add_tomato = 0;
        let add_lettuce = 0;
        let add_ketchup = 0;
        let Arr_coupon_VALID = ['123ABC', '345DFG', '678HIL', '912MAB']

        if(document.getElementById('cheese').checked){
            add_cheese = 4;
        }
        if(document.getElementById('egg').checked){
            add_egg = 6;
        }
        if(document.getElementById('mustard').checked){
            add_mustard = 5
        }
        if(document.getElementById('tomato').checked){
            add_tomato = 4;
        }
        if(document.getElementById('lettuce').checked){
            add_lettuce = 2;
        }
        if(document.getElementById('ketchup').checked){
            add_ketchup = 5;
        }

        console.log(add_lettuce);

        let price_burger = price_burger_standard + add_cheese + add_egg + add_mustard + add_tomato + add_lettuce + add_ketchup;
        console.log(price_burger);
        document.getElementById('price_burger').innerHTML = "$ " + price_burger;

    }
)