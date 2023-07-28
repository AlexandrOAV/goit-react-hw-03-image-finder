import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid'

export const ImageGallery = ( {hits, alt}) => {
    
    return (
       hits && <ul className={css.ImageGallery}>
            {hits.map(image => 
                <ImageGalleryItem
                    key={nanoid(10)}
                    srcImage={image.webformatURL}
                    altImage={alt} />   
           )}     
</ul>
    )
}