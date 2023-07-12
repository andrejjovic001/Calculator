'use strict'

let display = document.querySelector('.display');
display.innerText = '0'


const buttons = document.querySelectorAll('.button');
let a, b, mat_operacija, izabrana_mat_operacija = false;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {

        switch (e.target.innerText){
            case 'C':
                display.innerText = '0';
                break;
            
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;

            case '+':
                a = display.innerText;
                mat_operacija = '+';
                display.innerText = ' ';
                izabrana_mat_operacija = true;
                break;

            case '-':
                a = display.innerText;
                mat_operacija = '-';
                display.innerText = ' ';
                izabrana_mat_operacija = true;
                break;   

            case '*':
                a = display.innerText;
                mat_operacija = '*';
                display.innerText = ' ';
                izabrana_mat_operacija = true;
                break;

            case '/':
                a = display.innerText;
                mat_operacija = '/';
                display.innerText = ' ';
                izabrana_mat_operacija = true;
                break;
                
            case '%':
                a = display.innerText;
                mat_operacija = '%';
                display.innerText = ' ';
                izabrana_mat_operacija = true;
                break

            case '+/-':
                display.innerText = -display.innerText;
                break;

            case '.':
                if (display.innerText.includes('.')) return;
                    
                display.innerText += e.target.innerText; 
                break    

            case '=':
                if (izabrana_mat_operacija === true){
                    if (mat_operacija === '+'){
                        b = display.innerText;
                        display.innerText = (+a) + (+b)
                    }
                    if (mat_operacija === '-'){
                        b = display.innerText;
                        display.innerText = (+a) - (+b)
                    }
                    if (mat_operacija === '*'){
                        b = display.innerText;
                        display.innerText = (+a) * (+b)
                    }
                    if (mat_operacija === '/'){
                        b = display.innerText;
                        display.innerText = (+a) / (+b)
                    }
                    if (mat_operacija === '%'){
                        b = display.innerText;
                        display.innerText = (+a) % (+b)
                    } 
                } 
                izabrana_mat_operacija = false;        
                break;


            default:
                if (display.innerText !== '0'){
                    display.innerText += e.target.innerText
                }
                else{
                    display.innerText = e.target.innerText;
                }
        }
      
    })
})



