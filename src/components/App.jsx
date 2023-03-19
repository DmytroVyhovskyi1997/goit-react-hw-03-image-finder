import React from 'react';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './Api/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';

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

    try {
      const response = await fetchImages(inputValue, 1);
      if (!inputValue) {
        return alert('error');
      }
      this.setState({
        page: 1,
        images: response,
        isLoading: false,
        currentSearch: inputValue.value,
      });
    } catch (error) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };

  btnReadMore = async () => {
    try {
      const responseImg = await fetchImages(this.state.page++);
      this.setState({
        images: [...this.state.images, ...responseImg],
        page: this.state.page++,
      });
    } catch (error) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };

  showModal = e => {
    this.setState({
      modalOpen: true,
      alt: e.target.alt,
      img: e.target.name,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      img: '',
      alt: '',
    });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlekeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlekeyDown);
  }

  handlekeyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { images, img, alt, isLoading, modalOpen } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Searchbar handleSubmit={this.handleSubmit} />
            <ImageGallery handleImageClick={this.showModal} images={images} />
            {images.length > 0 ? (
              <Button btnReadMore={this.btnReadMore} />
            ) : null}
          </React.Fragment>
        )}
        {modalOpen ? (
          <Modal src={img} alt={alt} closeModal={this.closeModal} />
        ) : null}
      </div>
    );
  }
}
