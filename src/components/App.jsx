// import { Audio } from 'react-loader-spinner'

// import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

// const KEY = '34310450-164638d0ced594f3db31885e7';
// const URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
   textSerch:'',
  //  id: '',
  //  webformatURL: '', //посилання на маленьке зображення для списку карток
  //  largeImageURL: '', //посилання на велике зображення для модального вікна
  //  page: 1,
 }
  componentDidMount() {
   
    //  this.setState({image:'rambo'})
    //  axios.get(URL, {params:{key:KEY, q:this.state.image, page:1, per_page:12}}).then(response => {
    //   console.log(response.data.hits)
    // }).catch(error=>{  console.log('error: ', error);})
  
  }
  hendleSerchSubmit=(imageSerch)=>{
    this.setState({textSerch:imageSerch})
  }
  render() {
console.log('imageSerch: ', this.state.textSerch);
       return (
         <div>
            <ToastContainer/>
           <Searchbar onSubmit={this.hendleSerchSubmit} />
           <ImageGallery position="top-center" autoClose={2000} />
          
    </div>
  );
  }
};
