import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReviewHeader from './ReviewHeader'
import ProductSnippet from './ProductSnippet'
import AskRating from './AskRating'
import ReviewTitle from './ReviewTitle'
import LoggedInHeader from '../HomeScreen/LoggedInHeader'
// import './App.css';

const ReviewMain = () => {
  return (
    <>
    <LoggedInHeader/>
    <ProductSnippet/>
    <AskRating/>
    <ReviewTitle/>
    </>
  );
}

export default ReviewMain
