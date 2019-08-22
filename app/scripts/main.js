// import { type } from "os";

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

class Community{
    constructor({communityName, state, communityDesc}){
        this.communityName = communityName;
        this.state = state;
        this.communityDesc = communityDesc;
    }
}

class Blog{
    constructor({title, excerpt, image, date, content}){
        this.title = title;
        this.excerpt = excerpt;
        this.image = image;
        this.date = date;
        this.content = content;
    }
}

class socialMedia{
    constructor({name, value}){
        this.name = name;
        this.value = value;
    }
}

class Office{
    constructor({officeName, address, emails, phoneNumbers, workHours}){
        this.officeName = officeName;
        this.address = address;
        this.emails = emails;
        this.phoneNumbers = phoneNumbers;
        this.workHours = workHours;
    }
}

(function(){
    //Using this IIFE to tell site whether use stored JSON
    localStorage.setItem('updated', 'false');
})();

const model = {
    properties: [],
    blogPosts: [],
    contacts: [],
    socialMedia: [],
    communities: [],
    offices: []
}