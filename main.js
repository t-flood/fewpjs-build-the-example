// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const likeBtns = document.getElementsByClassName("like-glyph");
  const modal = document.getElementById("modal");

  for (const likeBtn of likeBtns) {
    likeBtn.addEventListener("click", (e) => {
      mimicServerCall()
        .then(() => {
          if (likeBtn.innerHTML == EMPTY_HEART) {
            likeBtn.innerHTML = FULL_HEART;
            likeBtn.className = "activated-heart";
          } else {
            likeBtn.innerHTML = EMPTY_HEART;
            likeBtn.className = "like-glyph";
          }
        })
        .catch((error) => {
          modal.hidden = false;
          const modalMessage = document.querySelector("#modal-message");
          modalMessage.innerHTML = error;
          setTimeout(() => {
            modal.hidden = true;
          }, 5000);
        });
    });
  }
});
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
