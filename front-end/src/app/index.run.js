(function() {
  'use strict';

  angular
    .module('wordaboutbeer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
