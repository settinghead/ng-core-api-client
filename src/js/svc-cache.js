(function (angular){

  "use strict";

  angular.module("risevision.core.cache", [])

    .value("rvStorage", sessionStorage)

    .factory("userInfoCache", ["$cacheFactory", function ($cacheFactory) {
      return $cacheFactory("user-info-cache");
    }]);

})(angular);
