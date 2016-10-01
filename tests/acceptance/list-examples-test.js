import { test } from 'qunit';
import moduleForAcceptance from 'super-examples/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-examples');

test('should redirect to examples route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/examples', 'should redirect automatically');
  });
});

test('should list available examples.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.examples').length, 3, 'should see 3 examples');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should show details for a specific example', function (assert) {
  visit('/examples');
  click('a:contains("LiftGateMe")');
  andThen(function() {
    assert.equal(currentURL(), '/examples/liftgateme', "should navigate to show route");
    assert.equal(find('.show-listing h2').text(), "LiftGateMe", 'should list example title');
  });
});
