document.getElementById('blog-btn').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('toggle-btn').classList.add('hidden');
    window.location = 'blog.html'
})
