// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.addEventListener('DOMContentLoaded', function(){
    
    var numeriCpu = []; 
    var numeriUtente = [];
    var rightNums = [];
    var userNum = 0;
    var cpuNum = 0; 

    function getRandomNum (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    while (numeriCpu.length < 5) {
        cpuNum = getRandomNum(1,100);
        if (!numeriCpu.includes(cpuNum))
        numeriCpu.push(cpuNum);
    }
    alert ('Ricorda ' + numeriCpu);
    
    setTimeout( function() {

        while (numeriUtente.length < numeriCpu.length){
            userNum = parseInt(prompt('Ti ricordi i numeri?'));
            
            if(!numeriUtente.includes(userNum)) {
                numeriUtente.push(userNum);
            } else {
                alert('Numero già inserito');
            }
        }

        for ( var i = 0; i < numeriUtente.length; i++) {
            if (numeriCpu.includes(numeriUtente[i])) {
            rightNums.push(numeriUtente[i])   
            }
        }

        if (rightNums.length > 0) {
            document.getElementById('result').innerHTML = 'Hai ricordato ' + rightNums.length + ' numeri su ' + numeriCpu.length;
        } else {
            document.getElementById('result').innerHTML = 'non hai ricordato nessun numero';
        }


    },30000) 
})

















































