const HomePage = require('./home_page/home_page');
const Explore = require('./explore/explore');
const BasePage = require('./base_page/base_page');
const Subscriptions = require('./subscriptions/subscriptions');
const History = require('./history/history');
const WatchLater = require('./watchLater/watchLater');
const LikedVideos = require('./likedVideos/likedVideos');

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case 'Home':
                return new HomePage();
            case 'Explore':
                return new Explore();
            case 'Subscriptions':
                return new Subscriptions();
            case 'History':
                return new History();
            case 'WatchLater':
                return new WatchLater();
            case 'LikedVideos':
                return new LikedVideos();
            default:
                return new BasePage();        
        }
    }
}

module.exports = PageFactory;