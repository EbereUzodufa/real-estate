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

// (function(){
//     //Using this IIFE to tell site whether use stored JSON
//     localStorage.setItem('registeredLastUpdate', 'false');
// })();

const model = {
    properties: [],
    blogPosts: [],
    contacts: [],
    socialMedia: [],
    communities: [],
    about: [],
    testimonies: []
}

//I'm opting for *Controller* over Octopus
const controller = {
    //I will like to do this Once!!!
    //Dear Angular, I love but this PC can run you. The Processor is weak and I have been on this project more than I should ):
    init: function(){
        //Initial function
        this.fetchData(model.properties, './data/properties.json');
        this.fetchData(model.blogPosts, './data/blog-posts.json');
        this.fetchData(model.socialMedia, './data/socialMediaLinks.json');
        // this.fetchData(model.contacts, './data/properties.json');
        // this.fetchData(model.communities, './data/communities.json');
    },

    fetchData: function(arrayEl, file){    
        function status(response) {
            //if Promise is Resolsved
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
          } else {
              // else - Promise fails/rejected
            return Promise.reject(new Error(response.statusText))
          }
        }
    
        function json(response) {
          return response.json()
        }
    
        //Fetch to get file using chained Promise
        fetch(file)
          .then(status) 
          .then(json)
          .then(function(data) {
              //add the values of the data from the JSON file
              const [values] = Object.values(data);
              values.map(value => {
                  arrayEl.push(value);
              })
            console.log('Request succeeded with JSON response', data);
          }).catch(function(error) {
            console.log('Request failed', error);
            });
            
            return;
    },
}

// controller.init();