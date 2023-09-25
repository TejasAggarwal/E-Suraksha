document.addEventListener("DOMContentLoaded", function () {
    const faqCards = document.querySelectorAll(".faqcard");
  
    faqCards.forEach((faqcard) => {
      const question = faqcard.querySelector(".question");
      const answer = faqcard.querySelector(".answer");
  
      question.addEventListener("click", function () {
        faqcard.classList.toggle("open");
      });
    });
  });
  
