import {Component, Host} from '@angular/core';
import {Gallery} from '../gallery';
import {GalleryModel} from '../models';

@Component({
    moduleId: module.id,
    selector: 'sks-thumbnail',
    templateUrl: 'thumbnail.html'
})
export class Thumbnail {

    galleryModel: GalleryModel;

    constructor(
        @Host() galleryComponent: Gallery
    ) {
        this.galleryModel = galleryComponent.galleryModel;
    }
}