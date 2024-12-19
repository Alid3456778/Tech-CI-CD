document.getElementById('userform').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if(!name || age<18){
        alert('Plese enter the Correct Input');
        return;
    }
    document.getElementById('output').textContent= `Name = ${name} Age = ${age} `;
});