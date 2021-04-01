async function editFormHandler(event) {
    event.preventDefault();
  
    const post_name = document.querySelector('#post-title').value;
    const post_body = document.querySelector('#post-body').value;
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

  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
