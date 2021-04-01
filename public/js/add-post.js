  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_name = document.querySelector('#post-title').value;
    const post_body = document.querySelector('#post-content').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_name, post_body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
// ======================================
//   const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#project-name').value.trim();
//     const needed_funding = document.querySelector('#project-funding').value.trim();
//     const description = document.querySelector('#project-desc').value.trim();
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };