const username = document.getElementById('student-names');
const title = document.getElementById('titles');
const comment = document.getElementById('msg');
const addEmployeesBtn = document.querySelector('#add-employees-btn');

function saveLastBlog() {
    // Save related form data as an object
    const Blog = {
      username: username.value,
      title: title.value,
      comment: comment.value.trim(),
    };

    localStorage.setItem('Blog', JSON.stringify(Blog));b 

    function renderLastBlog() {
        // Use JSON.parse() to convert text to JavaScript object
        const lastGrade = JSON.parse(localStorage.getItem('Blog'));
        // Check if data is returned, if not exit out of the function
        if (lastGrade !== null) {
          document.getElementById('saved-username').innerHTML = lastBlog.student;
          document.getElementById('saved-title').innerHTML = lastBlog.title;
          document.getElementById('saved-comment').innerHTML = lastBlog.comment;
        }
      }
      
}

