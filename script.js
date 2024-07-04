const popup_div = document.getElementById('popup-div');
const popup_login = document.getElementById('popup-login');
const popup_reg = document.getElementById('popup-reg');
const popup_new_doc = document.getElementById('popup-new-doc');

const btn_open_login = document.getElementById('btn-open-login');
const btn_close_login = document.getElementById('btn-close-login');
const btn_open_reg = document.getElementById('btn-open-reg');
const btn_close_reg = document.getElementById('btn-close-reg');
const btn_open_new_doc = document.getElementById('btn-open-new-doc');
const btn_close_new_doc = document.getElementById('btn-close-new-doc');

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

btn_open_login.addEventListener('click', () => {
    openPopupWindow(popup_login);
});

btn_close_login.addEventListener('click', () => {
    closePopupWindow(popup_login);
});

btn_open_reg.addEventListener('click', () => {
    openPopupWindow(popup_reg);
});

btn_close_reg.addEventListener('click', () => {
    closePopupWindow(popup_reg);
});

btn_open_new_doc.addEventListener('click', () => {
    openPopupWindow(popup_new_doc);
});

btn_close_new_doc.addEventListener('click', () => {
    closePopupWindow(popup_new_doc);
});