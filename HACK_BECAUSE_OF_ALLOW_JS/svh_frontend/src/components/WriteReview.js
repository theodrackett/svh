import Header from "./Header";
import Footer from "./Footer";
import Button from './Button';
import useGoBack from '../hooks/useGoBack';
function WriteReview() {
    const { goBack, loading } = useGoBack();
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
        });
    }
    return (<div>
            <Header />
            <h2>Write review to be implemented</h2>
            <div className='dos-element-container'>
              <Button onClick={goBack} loading={loading}>Go Back</Button>
              <Button type='submit'>Save changes</Button>
            </div>
            <Footer />
        </div>);
}
export default WriteReview;
