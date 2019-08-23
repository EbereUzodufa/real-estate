// import { type } from "os";

console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

class Property{
    constructor(name, images, desc, characterristics, community, price, neighborhood, mapLocation, features, offerType){
        this.name = name;
        this.images = images;
        this.desc = desc;
        this.characterristics = characterristics;
        this.community = community;
        this.price = price;
        this.neighborhood = neighborhood;
        this.mapLocation = mapLocation;
        this.features = features;
        this.offerType = offerType;
    }
}

class Community{
    constructor(communityName, state, communityDesc){
        this.communityName = communityName;
        this.state = state;
        this.communityDesc = communityDesc;
    }
}

class Blog{
    constructor(title, excerpt, image, date, content){
        this.title = title;
        this.excerpt = excerpt;
        this.image = image;
        this.date = date;
        this.content = content;
    }
}

class socialMedia{
    constructor(name, link){
        this.name = name;
        this.link = link;
    }
}

class Office{
    constructor(officeName, address, emails, phoneNumbers, workHours){
        this.officeName = officeName;
        this.address = address;
        this.emails = emails;
        this.phoneNumbers = phoneNumbers;
        this.workHours = workHours;
    }
}

class Testimony{
    constructor(personName, personTitle, personImg, personTestimony){
        this.personName = personName;
        this.personTitle = personTitle;
        this.personImg = personImg;
        this.personTestimony = personTestimony;
    }
}

// (function(){
//     //Using this IIFE to tell site whether use stored JSON
//     localStorage.setItem('registeredLastUpdate', 'false');
// })();

const registeredLastUpdate = 1566487012044;

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
        if (!localStorage.realEstate || localStorage.registeredLastUpdate !== registeredLastUpdate.toString()) {
            //Initial function
            this.fetchData(model.properties, './data/properties.json');
            this.fetchData(model.blogPosts, './data/blog-posts.json');
            this.fetchData(model.socialMedia, './data/socialMediaLinks.json');
            this.fetchData(model.communities, './data/communities.json');
            this.fetchData(model.testimonies, './data/testimonies.json');
            this.fetchData(model.contacts, './data/contacts.json');

            // using setTimeout to ensure we store after fetch
            setTimeout(() => {
                controller.addModelToLocal();
            }, 5000);
        } else{
            controller.convertLocalToModel();
            // console.log('localStorage', localStorage);
        }
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

    populateModel: function(){
        this.fetchData(model.properties, './data/properties.json');
        this.fetchData(model.blogPosts, './data/blog-posts.json');
        this.fetchData(model.socialMedia, './data/socialMediaLinks.json');
        this.fetchData(model.communities, './data/communities.json');
        this.fetchData(model.testimonies, './data/testimonies.json');
        this.fetchData(model.contacts, './data/contacts.json');
        // this.fetchData(model.about, './data/about.json');
    },

    addModelToLocal: function(){
        const obj = JSON.stringify(model);
        localStorage.setItem('realEstate', obj);
        localStorage.setItem('registeredLastUpdate', registeredLastUpdate.toString());
        console.log('Moved in', localStorage);
    },

    convertLocalToModel: function(){
        //This function is only called when we have the same data, so all we need to do is get the stored data and render.
        if(localStorage.realEstate){
            const modelObj = JSON.parse(localStorage.getItem('realEstate'));
            // console.log('modelObj', modelObj);
            for (const key in model) {
                model[key] = modelObj[key];
            }
            // model = modelObj;
            // console.log('Model', model);
        } else{
            //Not in storage
            console.log('%cError' + '%c Not Found in Local Storage', "background-color: red; color: white", "color: red");
        }
    },

    getAllProperties: function(){
        //Return all properties
        return model.properties;
    },

    getThisProperty: function(propId){
        //Get us thsi exact property
        return model.properties.find(p=>p.id === propId);
    },

    getFeaturedProperties: function(){
        //Return an arrray of all featured properties
        return model.properties.filter(p=>p.isFeatured === true);
    },
    
    getOnSliderProperties: function(){
        //Return an arrray of all featured properties
        return model.properties.filter(p=>p.isOnSlider === true);
    },

    getAllCommunities: function(){
        //Return all communities
        return model.communities;
    },

    getThisCommunity: function(theCommunityName){
        //Get us thsi exact property
        return model.communities.find(c=>c.communityName === theCommunityName);
    },

    getAllBlogPost: function(){
        //Return all blog post in descending order
        return model.blogPosts.sort((a,b)=>
            new Date(b.publishDate) - new Date(a.publishDate)
          );
    },

    getthisBlogPost: function(blogPostId){
        //Get us this exact blog post
        return model.blogPosts.find(b=>b.id === blogPostId);
    },

    getAllSocialMedia: function(){
        //Return all social media accounts
        return model.socialMedia;
    },

    getWhatsApp: function(){
        //Get us whatsApp account
        return model.socialMedia.find(s=>s.name.toLowerCase() === "whatsapp");
    }
}

controller.init();