console.clear();

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handelLikeButtonClick);

const existingPost = document.querySelector(".post");

function handelLikeButtonClick(event) {
  const buttonElement = event.target;
  console.log(event);
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
const pTag = document.createElement("p");

pTag.textContent = "Dies ist ein neuer Social-Media-Beitrag."; // Text zum pTag-Element hinzufügen
newPost.appendChild(pTag); // pTag-Element an newPost anhängen

body.insertBefore(newPost, existingPost);
