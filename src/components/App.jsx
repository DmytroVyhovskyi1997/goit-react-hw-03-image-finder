import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './Api/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import React from 'react';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    currentSearch: '',
    isShowModal: false,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const inputValue = e.target.elements.inputSearch.value.trim();
    if (inputValue === '') {
      return;
    }
    if (!inputValue) {
      return alert('Please, fill search field');
    }
    try {
      const response = await fetchImages(inputValue, 1);
      this.setState({
        page: 1,
        images: response,
        isLoading: false,
        currentSearch: inputValue.value,
      });
    } catch (error) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };

btnReadMore = async(e)=>{
  this.state.page ++;
  const inputValue = e.target.elements.inputSearch.value.trim();

 try {
      const response = await fetchImages(inputValue, 1);
      this.setState({
        page: 1,
        images: response,
        isLoading: false,
        currentSearch: inputValue.value,
      });
    } catch (error) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
}
handleImageClick = e => {
  this.setState({
    modalOpen: true,
    modalAlt: e.target.alt,
    modalImg: e.target.name,
  });
};

  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery
        handleImageClick={this.handleImageClick}
          images={this.state.images}
        />
        {/* <Button/> */}
      </div>
    );
  }
}
