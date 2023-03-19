import React from 'react';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './Api/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    currentSearch: '',
    isShowModal: false,
    modalOpen: false,
    img: '',
    alt: '',
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

  btnReadMore = async () => {
    try {
      const response = await fetchImages(this.state.page++);
      this.setState({
        images: [...this.state.images, ...response],
        page: this.state.page++,
      });
    } catch (error) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };

  showModal = (e) => {
		this.setState({ 
      modalOpen: true,
      alt: e.target.alt,
      img: e.target.name,  })
	}

  closeModal = () => {
		this.setState({
       modalOpen: false,
       img: '',
       alt: '',
       })
	}

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >

         {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
             <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery
          handleImageClick={this.showModal}
          images={this.state.images}
        />
        {this.state.images.length > 0 ? (
              <Button btnReadMore={this.btnReadMore} />
            ) : null}
          </React.Fragment>
        )}
            {this.state.modalOpen ? (
            <Modal
            src={this.state.img}
            alt={this.state.alt}
            closeModal={this.closeModal}/>
            ) : null}
      </div>
    );
  }
}
