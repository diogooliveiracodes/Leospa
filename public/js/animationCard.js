// Rotina que fica escutando os eventos de hover sob o Card 01 da Section "Experienced Team"
document.getElementById('socialCardMain1').onmouseover = function(){
    document.getElementById('socialCardBody1').classList.add('card-body-experienced-hovered');
    setTimeout(function(){
        document.getElementById('socialCardP1').classList.remove('diplaynonesocial');
    }, 300)
}
document.getElementById('socialCardMain1').onmouseleave = function(){
        setTimeout(function(){
        document.getElementById('socialCardP1').classList.add('diplaynonesocial');
        document.getElementById('socialCardBody1').classList.remove('card-body-experienced-hovered');
        }, 300)
}

// Rotina que fica escutando os eventos de hover sob o Card 02 da Section "Experienced Team"
document.getElementById('socialCardMain2').onmouseover = function(){
    document.getElementById('socialCardBody2').classList.add('card-body-experienced-hovered');
    setTimeout(function(){
        document.getElementById('socialCardP2').classList.remove('diplaynonesocial');
    }, 300)
}
document.getElementById('socialCardMain2').onmouseleave = function(){
        setTimeout(function(){
        document.getElementById('socialCardP2').classList.add('diplaynonesocial');
        document.getElementById('socialCardBody2').classList.remove('card-body-experienced-hovered');
        }, 300)
}

// Rotina que fica escutando os eventos de hover sob o Card 03 da Section "Experienced Team"
document.getElementById('socialCardMain3').onmouseover = function(){
    document.getElementById('socialCardBody3').classList.add('card-body-experienced-hovered');
    setTimeout(function(){
        document.getElementById('socialCardP3').classList.remove('diplaynonesocial');
    }, 300)
}
document.getElementById('socialCardMain3').onmouseleave = function(){
        setTimeout(function(){
        document.getElementById('socialCardP3').classList.add('diplaynonesocial');
        document.getElementById('socialCardBody3').classList.remove('card-body-experienced-hovered');
        }, 300)
}

