const popup_div = document.getElementById('popup-div');
const popup_login = document.getElementById('popup-login');
const popup_reg = document.getElementById('popup-reg');
const popup_new_doc = document.getElementById('popup-new-doc');

// POPUP

function openPopupWindow(popup_id) {
    popup_div.style.display = 'grid';
    popup_div.style.pointerEvents = 'all';
    popup_id.style.display = 'grid';
}

function closePopupWindow(popup_id) {
    popup_div.style.display = 'none';
    popup_div.style.pointerEvents = 'none';
    popup_id.style.display = 'none';
}

document.getElementById('btn-open-login').addEventListener('click', () => {
    openPopupWindow(popup_login);
});

document.getElementById('btn-close-login').addEventListener('click', () => {
    closePopupWindow(popup_login);
});

document.getElementById('btn-open-reg').addEventListener('click', () => {
    openPopupWindow(popup_reg);
});

document.getElementById('btn-close-reg').addEventListener('click', () => {
    closePopupWindow(popup_reg);
});

document.getElementById('btn-open-new-doc').addEventListener('click', () => {
    openPopupWindow(popup_new_doc);
});

document.getElementById('btn-close-new-doc').addEventListener('click', () => {
    closePopupWindow(popup_new_doc);
});

// FIND

// DOC ACTIONS

document.getElementById('btn-delete').addEventListener('click', () => {
    document.querySelector('input[name="radio-doc"]:checked').parentNode.parentNode.remove();
});

document.getElementById('btn-edit').addEventListener('click', () => {
    const doc_name = document.getElementById('doc-name');
    const doc_author = document.getElementById('doc-author');
    const doc_date = document.getElementById('doc-date');
    const doc_state = document.getElementById('doc-state');
    const doc_description = document.getElementById('doc-description');
    const doc_edit = document.querySelector('input[name="radio-doc"]:checked').parentNode.parentNode;

    openPopupWindow(popup_new_doc);

    doc_name.value = doc_edit.querySelector('.doc-name').innerText;
    doc_author.value = doc_edit.querySelector('.doc-author').innerText;
    // doc_date.value = doc_edit.querySelector('.doc-date').innerText;
    // doc_state.value = doc_edit.querySelector('.doc-state').innerText;
    doc_description.value = doc_edit.querySelector('.doc-description').innerText;
    // console.log('console');
    // console.log(doc_description);
    // console.log(doc_edit.querySelector('.doc-description'));
    // console.log(doc_edit.querySelector('.doc-description').innerText);
    
});
