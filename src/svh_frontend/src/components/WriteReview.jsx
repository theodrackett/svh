import Header from "./Header";
import Footer from "./Footer";

function WriteReview() {

  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      console.log(`Rating: ${index + 1} stars`);
      updateRating(index + 1);
    });
  });

  function updateRating(rating) {
    stars.forEach((star, index) => {
      star.computedStyleMap.color = index < rating ? '#FFC100' : 'gray';
    })
  }

    return (
        <div>
            <Header />
            <h2>Write review to be implemented</h2>
            <Footer />
        </div>
    )
}

export default WriteReview;