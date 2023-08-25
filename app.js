const inputField = document.querySelector(".input-value");
const addButton = document.querySelector(".add-btn");
const listItems = document.querySelector(".list-items");

function addClass(element, className) {
    element.classList.add(`${className}`);
}
function removeClass(element, className) {
    element.classList.remove(`${className}`);
}
function toggleClass(element, className) {
    element.classList.toggle(`${className}`);
}

/* Enter key on input field */

inputField.addEventListener('keydown', (event) => {
    event.key === 'Enter' ? addButton.click() : '';
})

addButton.addEventListener("click", () => {
    let task = inputField.value;
    let div = document.createElement("div")
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement('button');
    // let doneBtn = document.createElement('button');


    addClass(div, 'task')
    // div.classList.add("task");
    div.appendChild(li);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    editBtn.textContent = 'Edit';
    addClass(editBtn, 'edit-btn');
    // editBtn.classList.add('edit-btn');

    deleteBtn.textContent = "Delete";
    addClass(deleteBtn, 'delete-btn');
    // deleteBtn.classList.add('delete-btn');

    li.textContent = task;

    if (task !== '') {
        listItems.appendChild(div);
    }
    inputField.value = '';

    /* Line-through on text */

    li.addEventListener("click", () => {
        if (!li.hasAttribute("contenteditable")) {

            // li.classList.toggle('line-through');
            toggleClass(li, 'line-through');
        }


    })

    /* Edit Button */

    editBtn.addEventListener("click", (e) => {


        let content = e.target.previousSibling;


        if (content.hasAttribute("contenteditable")) {
            content.removeAttribute("contenteditable");
            editBtn.textContent = 'Edit';

            removeClass(editBtn, "done-btn");
            addClass(editBtn, "edit-btn");

            // editBtn.classList.remove('done-btn');
            // editBtn.classList.add('edit-btn');

        } else {
            content.setAttribute("contenteditable", "");
            content.focus();
            editBtn.textContent = 'Done';

            addClass(editBtn, "done-btn");

            // editBtn.classList.add('done-btn');
            /* Enter key on li element after editing */
            content.addEventListener('keydown', (event) => {
                event.key === 'Enter' ? editBtn.click() : "";
            })

        }

    })

    /* Delete Button */

    deleteBtn.addEventListener("click", () => {
        div.remove()
    })
})

