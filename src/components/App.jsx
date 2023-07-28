import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import {getImage} from 'recuest/recuestApi';

import { Button } from './Button/Button';
import { Loader } from './Searchbar/Loader/Loader';



export class App extends Component {
state = {
  textSerch: '',
  hits:[],
  page: 1,
  isLoading: false, 
  totalHits:0,
  }
  
  componentDidUpdate(_, prevState) {
    const { textSerch, page } = this.state;
    if (prevState.textSerch !== this.state.textSerch|| prevState.page !== page) {
    this.addData(textSerch, page)
    }
  }  
      
  
  addData = async (textSearch, page) => {
    try {
    this.setState({isLoading:true})
    const newData = await getImage(textSearch, page);
      this.setState(prevState => (
        { hits: page === 1 ? newData.hits : [...prevState.hits, ...newData.hits],
         totalHits: newData.totalHits }));
    } catch (error) {
       toast.error(`API NOT FAUND: ${error.message}`)
    } finally { this.setState({isLoading:false})}
   
  } 

  hendleSerchSubmit = (imageSerch) => {
    console.log('imageSerch', imageSerch)
    console.log('this.state.textSerch: ', this.state.textSerch);
    if (this.state.textSerch !== imageSerch) {
      this.setState({textSerch:imageSerch, page:1})
    }
    
  }

  clickInLoadMore = () => {
    this.setState(prevState =>({page: prevState.page + 1}))
  }
  
 
  render() {
    // console.log(this.state.hits)
    const { hits, textSerch, isLoading } = this.state;
       return (
         <div>
          <ToastContainer position="top-center" autoClose={2000}/>
           <Searchbar onSubmit={this.hendleSerchSubmit} />
           {isLoading&&<Loader/>}
           <ImageGallery hits={hits} alt={`image ${textSerch}`} />
           {hits.length>0 && <Button totalHits={this.state.totalHits} onClick={ this.clickInLoadMore} />}
         </div>
        
  );
  }
};
