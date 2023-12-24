const blogPosts = [
    {
      title: 'Mi primer post',
      image: 'https://media.gettyimages.com/id/985845/es/foto/nathan-burke-of-the-saints-runs-through-the-banner-with-daughter-ruby-to-celebrate-his-300th-afl.jpg?s=2048x2048&w=gi&k=20&c=WR7uh_x8fK6SJhm3lgfg9_qwGH8hGbNTNUeajYvwaDc=',
      content: 'Contenido del primer post...'
    },
    {
      title: 'Segundo post',
      image: 'https://media.gettyimages.com/id/97469936/es/foto/nascar-drive4copd-300-danica-patrick-pit-stop-during-race-at-daytona-international-speedway.jpg?s=2048x2048&w=gi&k=20&c=FEvwdecLfyW6JLokH1L0fUlcc7gD1S_RC9plCu54xBI=',
      content: 'Contenido del segundo post...'
    },
    // Puedes agregar más objetos para más posts...
  ];
  
  const blogPostsContainer = document.getElementById('blogPosts');
  
  function renderBlogPosts() {
    blogPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const postImage = document.createElement('img');
      postImage.src = post.image;
      postImage.alt = post.title;
  
      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;
  
      const postContent = document.createElement('p');
      postContent.textContent = post.content;
  
      postDiv.appendChild(postImage);
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postContent);
  
      blogPostsContainer.appendChild(postDiv);
    });
  }
  
  renderBlogPosts();
  