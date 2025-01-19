// TODO: Create a variable that selects the form element
const formEl = document.querySelector('blogForm');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    // const date = document.querySelector('#date').value;
    const author = document.querySelector('#username').value.trim();

    if (!title || !content || !author) {
        alert('Please fill in all fields');
        return;
    }

    const blog = {
        title: title,
        content: content,
        // date: date,
        author: author,
    };
    const existingBlogPosts = JSON.parse(localStorage.getItem('#blogForm')) || [];
    existingBlogPosts.push(blog);
    localStorage.setItem('#blogForm', JSON.stringify(existingBlogPosts));
    redirectPage("blog.html");
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.getElementById("Submit").addEventListener('click', handleFormSubmit);

