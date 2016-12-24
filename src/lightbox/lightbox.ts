import {Component, Host} from '@angular/core';
import {Gallery} from '../gallery';
import {GalleryModel} from '../models';

@Component({
    moduleId: module.id,
    selector: 'sks-lightbox',
    templateUrl: 'lightbox.html'
})
export class LightBox {

    galleryModel: GalleryModel;

    constructor(@Host() galleryComponent: Gallery) {
        this.galleryModel = galleryComponent.galleryModel;
    }

    showPreview() {

    }
}