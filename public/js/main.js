var React    = require('react'),
    mainView = require('views/mainView'),
    App      = React.createFactory(mainView);

module.exports = React.render(new App(), document.getElementsByTagName('body')[0]);
