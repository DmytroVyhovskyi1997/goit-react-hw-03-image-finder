import React from 'react';
import {Searchbar} from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
import {Loader} from './Loader/Loader'
import {Button} from './Button/Button'
import { Modal } from './Modal/Modal'
import { Api } from './Api/fetchImages'



export const App = () => {
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
      <Searchbar/>
      <ImageGallery/>
      <ImageGalleryItem/>
      <Loader/>
      <Button/>
      <Modal/>
      <Api/>
    </div>
  );
};
