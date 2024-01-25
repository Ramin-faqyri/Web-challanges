console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createElement() {
  const newArticle = document.createElement("article");
  const newPostContent = document.createElement("p");
  const newArticleFooder = document.createElement("footer");
  const newUsername = document.createElement("span");
  const newButton = document.createElement("button");

  newArticle.classList.add("post");
  newPostContent.classList.add("post__content");
  newArticleFooder.classList.add("post__footer");
  newUsername.classList.add("post__username");
  newButton.classList.add("post__button");

  newButton.setAttribute("data-js", "like-button");

  newPostContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  newUsername.textContent = "@username";
  newButton.textContent = "♥ Like";

  document.body.append(newArticle);
  newArticle.append(newPostContent);
  newArticle.append(newArticleFooder);
  newArticleFooder.append(newUsername);
  newArticleFooder.append(newButton);

  newButton.addEventListener("click", handleLikeButtonClick);
}

createElement();

/*
function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}


const likeButton = document.querySelectorAll('[data-js="like-button"]');

likeButton.forEach((card) => {
  card.addEventListener("click", handleLikeButtonClick);
});
*/
/*
<article class="post">
<p class="post__content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</p>
<footer class="post__footer">
  <span class="post__username">@username</span>
  <button type="button" class="post__button" data-js="like-button">
    ♥ Like
  </button>
</footer>
</article>
*/
