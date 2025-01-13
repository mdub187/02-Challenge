// TODO: Create a variable that selects the form element
const form = document.querySelector('#contactForm');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const date = document.querySelector('#date').value;
    const author = document.querySelector('#author').value;

    if (!title || !content || !date || !author) {
        alert('Please fill in all fields');
        return;
    }

    const blog = {
        title: title,
        content: content,
        date: date,
        author: author
    };

    localStorage.setItem('blog', JSON.stringify(blog));
    redirectPage();
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);

// Function to redirect to the blog page
function redirectPage() {
    window.location.href = 'blog.html';
}