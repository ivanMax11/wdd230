const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    const item = input.value;
    if (input.value == "") {
        alert("There is no input");
        return false;
      }
    else{
        const listElements = document.createElement('li');
        listElements.innerHTML = item;
        list.appendChild(listElements);

        const delButton = document.createElement('button');
        listElements.appendChild(delButton);
        delButton.textContent = 'X';
        delButton.addEventListener('click', () => {
            list.removeChild(listElements);
        });
    }
    input.focus(); 
    input.value = '';
});