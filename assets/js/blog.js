// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backBtn = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM

function appendElement(username, title, content){
    let newArticle = document.createElement('article');
    mainEl.appendChild(newArticle);

    let newH2 = document.createElement('h2');
    newArticle.appendChild(newH2);
    newH2.textContent = title;

    let newBlockquote = document.createElement('blockquote');
    newArticle.appendChild(newBlockquote);
    newBlockquote.textContent = content;

    let newP = document.createElement('p');
    newArticle.appendChild(newP);
    newP.textContent = `Posted By: ${username}`;
};

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    const errorTxt = document.querySelector('#error');
    errorTxt.textContent = 'No Blog posts yet...';
    errorTxt.style.display = 'block';
    return;
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    let parsedData = readLocalStorage();
    if (parsedData.length === 0) {
        noPosts();
    } else {
       let i = 0;
       while (i < parsedData.length) {
        let post = parsedData[i];
        appendElement(post.username, post.title, post.content);
        i++;
        }
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function(){
    redirectPage('index.html');
});