import React from 'react';
import { Component } from 'react';
import {Searchbar} from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
// import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
// import {Loader} from './Loader/Loader'
import {Button} from './Button/Button'
import { Modal } from './Modal/Modal'
import {FetchImages} from './Api/FetchImages'





export class  App extends Component  {
state = {
 images: [],
    isLoading: false,
    currentSearch: '',
    page: 1,
}

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ isLoading: true });
    const inputForSearch = e.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = await FetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: inputForSearch.value,
      page: 1,
    });
  
  }

  render(){
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery/>
        {/* <ImageGalleryItem/>
        <Loader/> */}
        <Button/>
        <Modal/>
      </div>
    );
  }

};
