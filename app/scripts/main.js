import { type } from "os";

console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

class Property{
    constructor({name, images, desc, characterristics, community, price, neighborhood, mapLocation, features, isFeatured, offerType, isOnSlider}){
        this.name = name;
        this.images = images;
        this.desc = desc;
        this.characterristics = characterristics;
        this.community = community;
        this.price = price;
        this.neighborhood = neighborhood;
        this.mapLocation = mapLocation;
        this.features = features;
        this.isFeatured = isFeatured;
        this.offerType = offerType;
        this.isOnSlider = isOnSlider;
    }
}