import {Component, ContentChildren, ComponentRef, QueryList, Input} from '@angular/core';
import {Thumbnail} from './thumbnail/thumbnail';
import {GalleryModel} from './models';

@Component({
    moduleId: module.id,
    selector: 'sks-gallery',
    templateUrl: 'gallery.html'
})
export class Gallery {
    @ContentChildren(Thumbnail) thumbnails: QueryList<Thumbnail>;
    @Input() galleryModel: GalleryModel;
}