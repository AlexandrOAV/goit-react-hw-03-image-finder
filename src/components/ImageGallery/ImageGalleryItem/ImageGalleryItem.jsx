import css from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({srcImage, altImage}) => {
    return (
<li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image}
                src={srcImage}
                alt={altImage}/>
</li> )
}