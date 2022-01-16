async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="postTitle"]').value;
    const content = document.querySelector('input[name="postContent"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
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
  
  document.querySelector('#editBtn').addEventListener('click', editFormHandler);