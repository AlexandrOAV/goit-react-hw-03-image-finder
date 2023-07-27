import css from './ImageGalleryItem.module.css'
export const ImageGalleryItem = () => {
    return (
<li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem_image}
                src="https://cdn.pixabay.com/photo/2023/07/20/11/00/pie-8139063_1280.jpg"
                alt="foto" />
</li>
    )
}