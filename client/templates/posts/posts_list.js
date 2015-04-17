var postsData = [
    {
        title: 'Introduce Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://metero.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    },
    {
        title: '공주대학교',
        url: 'http://www.kongju.ac.kr'
    }
];
Template.postsList.helpers({
    posts: postsData
});

