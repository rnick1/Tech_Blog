async function newFormHandler(event) {
    event.preventDefault();
  
    const post_name = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post_name,
        post_body
      }),
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
  
  async function editFormHandler(event) {
    event.preventDefault();
  
    const post_name = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-content"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_name,
            post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  async function deleteFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    
  }
  
  // document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  // document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
