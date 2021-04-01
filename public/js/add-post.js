  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_name = document.querySelector('#post-name').value;
    const post_body = document.querySelector('#post-body').value;
  
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
