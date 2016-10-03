import Ember from 'ember';

let websites = [{
  id: 'hapyak',
  title: 'HapYak',
  website: '//www.HapYak.com',
  websiteName: 'HapYak.com',
  date: 'October 2014 - Current',
  image: '//corp.hapyak.com/img/hy-nav-logo.png',
  description: "HapYak makes interactive video possible at scale, by adding an HTML overlay on top of videos.  My work has included extending our product to streamline client on-boarding, building micro-services to integrate our product with 3rd party services, helping create our first vertical product offering, and much more.",
  languages: 'JavaScript, Python',
  frameworks: 'Ember, Flask, Node'
}, {
  id: 'liftgateme',
  title: 'LiftGateMe',
  website: '//www.LiftGateMe.com',
  websiteName: 'LiftGateMe.com',
  date: 'July 2009 - December 2015',
  image: '/assets/img/liftgateme.png',
  description: 'Creating this started as a challenge to myself during freshman year of college.  LiftGateMe ultimately inspired my career as a developer and entrepreneur.  With an average monthly revenue of over $30,000 LiftGateMe serves customers across America utilizing automated processes.',
  languages: 'PHP, JavaScript',
  frameworks: 'Pinnacle Cart e-commerce engine'
}, {
  id: 'kwickfind',
  title: 'KwickFind',
  website: '//www.KwickFind.com',
  websiteName: 'KwickFind.com',
  date: '2016 Side Project',
  image: '/assets/img/kwickfind.png',
  description: 'KwickFind is an ongoing side project which is striving to assist mom-and-pop rental companies better market the availability of their products as well as provide online reservations for items.',
  languages: 'Ruby, JavaScript',
  frameworks: 'Ruby On Rails'
}, {
  id: 'eagleliftgate',
  title: 'EagleLiftGate',
  website: '//www.EagleLiftGate.com',
  websiteName: 'EagelLiftGate.com',
  date: 'September 2016 Project',
  image: '/assets/img/eagleliftgate.png',
  description: 'EagleLiftGate is a lead-wall site which allows customers with Eagle Liftgates, one of America\'s largest pickup liftgate brands, to submit information for quotes on new parts and liftgates.',
  languages: 'JavaScript',
  frameworks: 'Node, Express'
}];

export default Ember.Route.extend({
  model() {
    return websites;
  }
});
