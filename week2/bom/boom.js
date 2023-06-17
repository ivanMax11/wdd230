const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', addChapter);

function addChapter() {
    const chapter = input.value;

    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';
        
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        li.classList.add('list-item');
        list.appendChild(li);
        input.value = '';
        input.focus();
    }
}




      
