let likeCount = 0;


const likeButton = document.getElementById('likeButton');
const unlikeButton = document.getElementById('unlikeButton');
const likeCountElement = document.getElementById('likeCount');


likeButton.addEventListener('click', function() {
    likeCount++; 
    likeCountElement.textContent = `Curtidas: ${likeCount}`; 

   
    likeButton.style.display = 'none';
    unlikeButton.style.display = 'inline-block';
});


unlikeButton.addEventListener('click', function() {
    likeCount--; 
    likeCountElement.textContent = `Curtidas: ${likeCount}`;

    likeButton.style.display = 'inline-block';
    unlikeButton.style.display = 'none';
});
