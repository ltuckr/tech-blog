const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while deleting the post');
    }
  }
};

// Add event listener to delete button
document.querySelector('.post-list').addEventListener('click', delButtonHandler);
