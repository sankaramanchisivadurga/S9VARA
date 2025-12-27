// Job list
const jobs = [
  "Library Assistant",
  "Lab Helper",
  "Teaching Assistant",
  "Campus IT Support",
  "Event Coordinator"
];

const jobList = document.getElementById('jobList');
jobs.forEach(job => {
  const li = document.createElement('li');
  li.textContent = job;
  li.classList.add('list-group-item');
  jobList.appendChild(li);
});

// Job Application
document.getElementById('jobForm').addEventListener('submit', function(e){
  e.preventDefault();
  const title = document.getElementById('jobTitle').value.trim();
  const name = document.getElementById('studentName').value.trim();
  const msg = document.getElementById('applyMsg');

  if(title === '' || name === ''){
    msg.textContent = "⚠️ Please fill out both fields.";
    msg.classList.add('text-danger');
    msg.classList.remove('text-success');
  } else {
    msg.textContent = ✅ ${name}, your application for '${title}' has been submitted successfully!;
    msg.classList.add('text-success');
    msg.classList.remove('text-danger');
    document.getElementById('jobForm').reset();
  }
});

// Feedback Form
document.getElementById('feedbackForm').addEventListener('submit', function(e){
  e.preventDefault();
  const feedback = document.getElementById('feedback').value.trim();
  const list = document.getElementById('feedbackList');

  if(feedback === ''){
    alert("Please enter feedback before submitting.");
    return;
  }

  const div = document.createElement('div');
  div.classList.add('alert', 'alert-info', 'mt-2');
  div.textContent = feedback;
  list.appendChild(div);
  document.getElementById('feedbackForm').reset();
});