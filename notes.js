const notesArr = JSON.parse(localStorage.getItem('Notes')) || [];

const render = () => {
    const note = document.getElementById('note');
    const notesTemplate = notesArr.map(n => `<li class="note_section__container"><h1>${n}</h1></li>`);
    note.innerHTML = notesTemplate.join('');
    //Buscamos los elementos div que se encuentren dentro de id:note
    const element = document.querySelectorAll('#note li');
    element.forEach((element, i) => {
        element.addEventListener('click', () => {
            element.parentNode.removeChild(element);
            notesArr.splice(i, 1);
            noteRestore(notesArr);
            render();
        })
    }) 
}

const noteRestore = (notesArr) => {
    const noteStrings = JSON.stringify(notesArr);
    localStorage.setItem('Notes', noteStrings);
}

const user = document.getElementById('user');

const userRegister = () => {
    let register = confirm("Hola, es necesario tu registro.");
    if(register){
        let user = prompt("Ingresa tu nombre!", "");
        if(user){
            alert(`Bienvenido/a ${user}. Que disfrutes tu anotador`);
            localStorage.setItem('User', user);
        }
    }
}
if(!localStorage.getItem('User')){
    userRegister();
}else{
    userName = localStorage.getItem('User');
    user.innerHTML = `Welcome ${userName}`;
}

window.onload = () => {
    render();
    const form = document.getElementById('formsend');
    form.onsubmit = (e) => {
        e.preventDefault();
        const text = document.getElementById('text');
        const textText = text.value;
        text.value = '';
        notesArr.push(textText);
        noteRestore(notesArr);
        render();
    }
}





