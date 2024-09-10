// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const submit = document.querySelector('#submit');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function getData() {
    let usernameTxt = document.querySelector('#username').value;
    let titleTxt = document.querySelector('#title').value;
    let contentTxt = document.querySelector('#content').value;
    const errorTxt = document.querySelector('#error');

    errorTxt.textContent = '';
    errorTxt.style.display = 'none';

    if (!formEl || usernameTxt === '' || titleTxt === '' || contentTxt === '') {
        errorTxt.textContent = 'Please complete the form.';
        errorTxt.style.display = 'block';
        return;
    }else {
        storeLocalStorage({
            username: usernameTxt,
            title: titleTxt,
            content: contentTxt
        });
        redirectPage('blog.html');
    }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    getData();
});