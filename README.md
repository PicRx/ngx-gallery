# ng2-gallery

### Usage

```html
<sks-gallery [galleryModel]="gallery">
    <sks-thumbnail *ngFor="let image of gallery" [thumbnail]="image.url">
    </sks-thumbnail>
    <sks-error-toast></sks-error-toast>
    <sks-lightbox></sks-lightbox>
</sks-gallery>
```

```typescript
constructor(private http: Http) {
}
ngOnInit() {
    this.gallery = GalleryBuilder.build({
        page: {
            startFrom: 1
        },
        batchActions: [ // this is optional, if you want to multiple selection and batch action
            remove: {
                template: `<i class="icon-remove"></i>`,
                action: (selectedImages) => {
                    let requestOptions = new RequestOption({headers:{'Content-Type': 'application/json;utf-8'}});
                    let body = JSON.stringify(selectedImages);
                    return http.put(this.url + '/remove', body, requestOptions);
                }
            }
        ],
        actions: { // this is optional when you provide an single action for a single selection.
            remove: {
                action: (image, list) => {
                    let index = list.indexOf(image);
                    if (index !== -1) {
                        list.splice(index, 1);
                    }
                    return true;
                }
            }
        },
        getLargePreview: (index, list) => {
            // return an url or observable
            return list[index].url;
        }
    });
    this.gallery.source
        .flattenMap((params) => {
            return this.http.get(this.url + '?page=' + params.page);
        })
        .map(res => res.json.data);
}
```