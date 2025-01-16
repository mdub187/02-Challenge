// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backEl = document.getElementById('back');
// TODO: Create a function that builds an element and appends it to the DOM
function buildEl(tag, content) {
    const newElement = document.createElement(tag);
    newElement.textContent = content;
    mainEl.appendChild(newElement);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoPosts()  {
    const message = document.getElementById('p');
    button.addEventListener('click', (event) => {
            alert("no posts to display");
        })};
function addEventListener (){
    const button = document.getElementById('button');
    clickEvent();
    innerHTML.addEventListener('click', ()=>{
    this.next();
    })
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = readLocalStorage('blogData');
    if (blogPosts.length === 0) {
        noPosts();
    } else {
        blogPosts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.classList.add('blog-post');
            postEl.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.title}</p>
                <small>By ${post.username}</small>
            `;
            mainEl.appendChild(postEl);
        localStorage.setItem('blog-post', JSON.stringify(blog));
        });
    }    
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', () => {
    history.back();
    redirectPage('index.html');  
    });

// TODO: Call the `renderBlogList` function
renderBlogList();

