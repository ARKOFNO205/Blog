const username = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const addEmployeesBtn = document.querySelector('#add-employees-btn');

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const LastBlog = {
      username: student.value,
      grade: grade.value,
      comment: comment.value.trim(),
    };
  
    localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
    renderMessage();
  });
  
  function renderMessage() {
    const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
    if (lastGrade !== null) {
      document.querySelector('.message').textContent =
        lastGrade.student + ` received a/an ${lastGrade.grade}`;
    }
  }
  
