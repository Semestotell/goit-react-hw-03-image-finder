import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
    webformatURL,
    largeImageURL,
    tags,
    onClick,
    }) => (
    <GalleryItem
        onClick={() => {
        onClick(largeImageURL);
        }}
    >
        <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
    );

    ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};