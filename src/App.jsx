import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getData } from 'helper/api';
import { PER_PAGE } from 'utils/constants';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    modal: {
      currentImage: '',
      isOpen: false,
      tags: '',
    },
    images: [],
    page: 1,
    q: '',
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;
    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ loading: true });
      try {
        const { hits, totalHits } = await getData({ q, page });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits,
        }));
        if (!totalHits)
          throw new Error('Nothing found. Please, try another query');
        toast.success(
          `Shown ${
            PER_PAGE * page <= totalHits ? PER_PAGE * page : totalHits
          } images from ${totalHits}`,
          {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: 'colored',
          }
        );
      } catch (error) {
        toast.error(error.massage);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  setQuery = q => {
    this.setState({ q, page: 1, images: [] });
  };

  handleModal = (img, tags) => {
    this.setState(prevState => ({
      modal: {
        isOpen: !prevState.isOpen,
        currentImage: img,
        tags,
      },
    }));
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const {
      images,
      modal: { isOpen, currentImage, tags },
      loading,
      totalHits,
    } = this.state;

    return (
      <div className="app">
        <SearchBar setQuery={this.setQuery} />
        {images.length ? (
          <>
            {loading && !images.length && <Loader />}
            <ImageGallery
              imagesToView={images}
              modalStatus={isOpen}
              handleModal={this.handleModal}
            />
            {images.length < totalHits && (
              <Button type="button" onClick={this.handleLoadMore}>
                {loading ? 'Loading...' : 'Load more'}
              </Button>
            )}
          </>
        ) : null}

        {isOpen && (
          <Modal onCloseModal={this.handleModal}>
            <img src={currentImage} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
