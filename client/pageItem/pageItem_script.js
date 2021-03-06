Template.pageItem.helpers({
  favorite: function () {
    if (! Meteor.userId() || ! _.contains( this.favorites, Meteor.userId())) {
      return 'empty';
    }
  }
});

Template.pageItem.events({
  'click .pageHandle': function () {
    Router.go('page', {pageId: this._id, name: this.name.replace(/\s+/g, '-').toLowerCase()});
  },
  'click .favoritePage': function () {
    if (Meteor.userId()) {
      Meteor.call('favoritePage', this._id);
    }
  }
});

Template.pageItem.onRendered(function ( ){
});
