// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('#cards');
const backEl = document.getElementById('back');
// TODO: Create a function that builds an element and appends it to the DOM
function buildEl(type, content) {
    const newElement = document.createElement(type);
    tag.textContent = text;
    parent.appendChild(tag);
    return tag;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoPosts()  {
            alert("no posts to display");
        };
function addEventListener (){
    const button = document.getElementById('button');
    clickEvent();
    innerHTML.addEventListener('click', ()=>{
    this.next();
    })
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('#blogForm'))
    if (blogPosts) {
        blogPosts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.classList.add('blogPosts');
            postEl.innerHTML = `
                <div class="card1">
                <h2>Card 1</h2>
                <h3>
                ${post.title}</h3>
                <p>${post.content}</p>
                <small>By ${post.author}</small>
                </div>
                
            `;
            mainEl.appendChild(postEl);
        // localStorage.setItem('blogPosts', JSON.stringify(blog));
        });
    }
    else {
        handleNoPosts()};
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', () => {
    history.back();
    redirectPage('index.html');  
    });

// TODO: Call the `renderBlogList` function
renderBlogList();

