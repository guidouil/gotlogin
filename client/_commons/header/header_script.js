Template.header.onCreated(function(){
});

Template.header.onRendered(function () {
  setTimeout(function () {
    $('#signOut').popup();
  }, 800);
});

Template.header.helpers({

});

Template.header.events({
  'click #sidebarButton': function () {
    if (! $('.left.sidebar').hasClass('visible')) {
      $('.ui.labeled.icon.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
    }
  },
  'click #goRoot': function () {
    Router.go('/');
  },
  'click [data-action=signIn]': function () {
    Router.go('/sign-in');
  },
  'click [data-action=signOut]': function () {
    Meteor.logout();
    Meteor._reload.reload();
    Router.go('/');
  },
  'click [data-action=profile]': function () {
    Router.go('profile');
  }
});
