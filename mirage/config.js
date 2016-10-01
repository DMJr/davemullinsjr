export default function() {
  this.namespace = '/api';

  this.get('/examples', function() {
    return {
      data: [{
        type: 'examples',
        id: 'hapyak',
        attributes: {
          title: 'Hapyak Interactive Video',
          date: 'October 2014 - Current',
          image: '',
          description: "HapYak is an interactive video company based on Mozilla's interactive library, Popcorn.js.",
          languages: 'JavaScript, Python',
          frameworks: 'Ember, Flask, Node'
        }
      }, {
        type: 'examples',
        id: 'liftgateme',
        attributes: {
          title: 'LiftGateMe',
          date: 'July 2009 - December 2015',
          image: '',
          description: 'What started as a challenge to myself during my freshman year of college, LiftGateMe ultimately inspired my career as a developer and entreprenuer.  With an average monthly revenue of over $30,000 LiftGateMe serves customers accross America utilizing automated processes.',
          languages: 'PHP, JavaScript'
        }
      }, {
        type: 'examples',
        id: 'kwickfind',
        attributes: {
          title: 'KwickFind',
          date: '2016',
          image: '',
          description: 'KwickFind is a lips orem. ... FIX THIS',
          languages: 'FIX THIS'
        }
      }]
    };
  });
}
