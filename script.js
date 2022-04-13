const boxes1 = document.querySelectorAll('#domanda1 div');
const boxes2 = document.querySelectorAll('#domanda2 div');
const boxes3 = document.querySelectorAll('#domanda3 div'); 
let nome_scelta1='';
let nome_scelta2='';
let nome_scelta3='';

for(const box of boxes1)
{
    box.addEventListener('click', selectRisposta);
}
function selectRisposta(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.add('select');
    scelta.querySelector('.checkbox').src='images/checked.png';
    scelta.id = '1';  //assegno a scelta l'id #1 per identificare quello che ho cliccato

    nome_scelta1 = scelta.dataset.choiceId;
    console.log(nome_scelta1);
        
    //faccio un ciclo for e seleziono tutti i div, aggiungo la classe notSelect e al div che ha id=1 rimuovo la classe notSelect
    for(const bo of boxes1)
    {
        bo.classList.add('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.remove('notSelect');
            }
        
            if(bo.id === '0') 
            {
                bo.classList.remove('select');
                bo.querySelector('.checkbox').src='images/unchecked.png';
            }
            
    } 
    scelta.id = '0';

    console.log(scelta.id);
    event.currentTarget.addEventListener('click', deselectRisposta);
    event.currentTarget.removeEventListener('click', selectRisposta);
}

function deselectRisposta(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.remove('select');
    scelta.querySelector('.checkbox').src='images/unchecked.png';
    scelta.id = '';

    nome_scelta1 = '';
    console.log(nome_scelta1);

    for(const bo of boxes1)
    {
        bo.classList.remove('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.add('notSelect');
            }
    }
    event.currentTarget.addEventListener('click', selectRisposta);
    event.currentTarget.removeEventListener('click', deselectRisposta);
}




for(const box of boxes2)
{
    box.addEventListener('click', selectRisposta2);
}
function selectRisposta2(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.add('select');
    scelta.querySelector('.checkbox').src='images/checked.png';
    scelta.id = '1';  //assegno a scelta l'id #1 per identificare quello che ho cliccato

    nome_scelta2 = scelta.dataset.choiceId;
    console.log(nome_scelta2);
        
    //faccio un ciclo for e seleziono tutti i div, aggiungo la classe notSelect e sl div che ha id=1 rimuovo la classe notSelect
    for(const bo of boxes2)
    {
        
        bo.classList.add('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.remove('notSelect');
            }
        
            if(bo.id === '0')
            {
                bo.classList.remove('select');
                bo.querySelector('.checkbox').src='images/unchecked.png';
            }
            
    } 
    scelta.id = '0';

    console.log(scelta.id);
    event.currentTarget.addEventListener('click', deselectRisposta2);
    event.currentTarget.removeEventListener('click', selectRisposta2);
}

function deselectRisposta2(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.remove('select');
    scelta.querySelector('.checkbox').src='images/unchecked.png';
    scelta.id = '';

    nome_scelta2 = '';
    console.log(nome_scelta2);

    for(const bo of boxes2)
    {
        bo.classList.remove('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.add('notSelect');
            }
    }
    event.currentTarget.addEventListener('click', selectRisposta2);
    event.currentTarget.removeEventListener('click', deselectRisposta2);
}




for(const box of boxes3)
{
    box.addEventListener('click', selectRisposta3);
}
function selectRisposta3(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.add('select');
    scelta.querySelector('.checkbox').src='images/checked.png';
    scelta.id = '1';  //assegno a scelta l'id #1 per identificare quello che ho cliccato

    nome_scelta3 = scelta.dataset.choiceId;
    console.log(nome_scelta3);
        
    //faccio un ciclo for e seleziono tutti i div, aggiungo la classe notSelect e sl div che ha id=1 rimuovo la classe notSelect
    for(const bo of boxes3)
    {

        bo.classList.add('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.remove('notSelect');
            }
        
            if(bo.id === '0')
            {
                bo.classList.remove('select');
                bo.querySelector('.checkbox').src='images/unchecked.png';
            }
            
    } 
    scelta.id = '0';

    console.log(scelta.id);

    //dopo la scelta sulla domanda3 visualizzo la risposta

    const div = document.querySelector('#risultati');
    
    div.classList.remove('hidden');

    const h1 = document.createElement('h1');
    h1.textContent = '';  // modifico il contenuto di h1
    div.appendChild(h1); // metto h1 dentro il div che abbiamo creato 

    const p = document.createElement('p');
    p.textContent = '';
    div.appendChild(p);

    //risultato

    if(nome_scelta1 === nome_scelta2 && nome_scelta1 === nome_scelta3)
    {
        document.querySelector('#risultati h1').textContent = RESULTS_MAP[nome_scelta1].title;
        document.querySelector('#risultati p').textContent = RESULTS_MAP[nome_scelta1].contents;
    }
    else if(nome_scelta2 === nome_scelta3)
    {
        document.querySelector('#risultati h1').textContent = RESULTS_MAP[nome_scelta2].title;
        document.querySelector('#risultati p').textContent = RESULTS_MAP[nome_scelta2].contents;
    }
    else if(nome_scelta1 === nome_scelta2)
    {
        document.querySelector('#risultati h1').textContent = RESULTS_MAP[nome_scelta1].title;
        document.querySelector('#risultati p').textContent = RESULTS_MAP[nome_scelta1].contents;
    }
    else if(nome_scelta1 === nome_scelta3)
    {
        document.querySelector('#risultati h1').textContent = RESULTS_MAP[nome_scelta3].title;
        document.querySelector('#risultati p').textContent = RESULTS_MAP[nome_scelta3].contents;
    }
    else if(nome_scelta1 !== nome_scelta2 && nome_scelta1 !== nome_scelta3 && nome_scelta2 !== nome_scelta3)
    {
        document.querySelector('#risultati h1').textContent = RESULTS_MAP[nome_scelta1].title;
        document.querySelector('#risultati p').textContent = RESULTS_MAP[nome_scelta1].contents;
    }


    event.currentTarget.addEventListener('click', deselectRisposta3);
    event.currentTarget.removeEventListener('click', selectRisposta3);
}

function deselectRisposta3(event)
{
    const scelta = event.currentTarget; 

    scelta.classList.remove('select');
    scelta.querySelector('.checkbox').src='images/unchecked.png';
    scelta.id = '';

    nome_scelta3 = '';
    console.log(nome_scelta1);

    for(const bo of boxes3)
    {
        bo.classList.remove('notSelect');
            if(scelta.id === '1')
            {
                scelta.classList.add('notSelect');
            }
    }
    event.currentTarget.addEventListener('click', selectRisposta3);
    event.currentTarget.removeEventListener('click', deselectRisposta3);
}





/* ------------------ SCRIPT RICOMINCIA QUIZ ------------------ */

const boxes = document.querySelectorAll('section div');
const bottone = document.querySelector('button'); 
bottone.addEventListener('click', reset);

function reset(event)
{
    for(const bo of boxes)
    {
        bo.classList.remove('notSelect');
        bo.querySelector('.checkbox').src='images/unchecked.png';
        bo.classList.remove('select');
        bo.id = '';
        document.querySelector('#risultati h1').textContent = '';
        document.querySelector('#risultati p').textContent = '';
    }
   
}