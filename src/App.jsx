import Button from 'Components/Button/Button';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import Loader from 'Components/Loader/Loader';
import Modal from 'Components/Modal/Modal';
import SearchBar from 'Components/SearchBar/SearchBar';
import { getData } from 'Services/api';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    images: [],
    currentPage: '',
    currentImageId: '',
    tags: '',
    page: '',
    per_page: 12,
    currentImage: '',
    q: '',
    isOpen: false,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, q, per_page } = this.state;
    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ loading: true });
      try {
        const { hits, totalHits } = await getData({ q, page, per_page });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits,
        }));
        if (!totalHits)
          throw new Error('Nothing found. Please, try another query');
        toast.success(
          `Shown ${
            per_page * page <= totalHits ? per_page * page : totalHits
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
    console.log(this.state.images);
  };

  handleModal = (id, img, tags) => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      currentImage: img,
      currentImageId: id,
      tags,
    }));
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isOpen, currentImage, loading, tags, totalHits } =
      this.state;
    return (
      <div>
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
