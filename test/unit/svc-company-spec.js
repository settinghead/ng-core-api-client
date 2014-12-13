/* jshint expr:true */
"use strict";

describe("Services: Company Core API Service", function() {

  beforeEach(module("risevision.core.company"));
  beforeEach(module(function ($provide) {
    //stub services
    $provide.service("$q", function() {return Q;});

    $provide.factory("coreAPILoader", ["$q", function($q) {
      return function () {
        var deffered = $q.defer();
        var gapi = {
          company: {
            updateAddress: function () {
              return {
                execute: function (callback) {
                  setTimeout(function () {
                    callback(window.rvFixtures.companiesResp.items[0]);
                  }, 0);
                }
              };
            },
            list: function (obj) {
              return {
                execute: function (callback) {
                  var resp = {result: true, items: window.rvFixtures.companiesResp.items};
                  if(obj.cursor) {
                    resp.items = resp.items.splice(obj.cursor);
                  }
                  if(obj.count) {
                    //simulate starvation
                    resp.items = resp.items.slice(0, obj.count <= 7 ? obj.count : 7);
                  }
                  setTimeout(function () {
                    callback(resp);
                  }, 0);
                }
              };
            }
          }
        };
        deffered.resolve(gapi);
        return deffered.promise;
      };
    }]);
    $provide.value("CORE_URL", "");
  }));

  it("should exist", function(done) {
    inject(function (companyService) {
      expect(companyService).to.be.ok;
      done();
    });
  });

  describe("getCompanies", function () {
    it("should load subcompanies", function (done) {
      inject(function (companyService) {
        companyService.getCompanies(2, "john smith", "", 20, null).then(function (result) {
          expect(result.items.length).to.equal(7);
          done();
        }, function (err) {throw err; });
      });
    });
  });

  describe("getCompany", function() {
    xit("should get company", function (done) {
      //jshint unused:false
      inject(function (companyService) {
        throw "Write this";
      });
    });
  });

    describe("deleteCompany", function() {
    xit("should delete company", function (done) {
      //jshint unused:false
      inject(function (companyService) {
        throw "Write this";
      });
    });
  });

  xdescribe("updateAddress", function() {
    it("should update address", function (done) {
      inject(function (companyService) {
        companyService.updateAddress(rvFixtures.companiesResp.items[0], false).then(function (result) {
          expect(result).to.deep.equal(rvFixtures.companiesResp.items[0]);
          done();
        }, function (err) {throw err; });
      });
    });
  });

  describe("validateAddressSimple", function() {
    it("should find errors with an empty address", function (done) {
      inject(function (companyService) {
        var errors = companyService.validateAddressSimple(
          window.rvFixtures.emptyCompanyAddress);
        expect(errors).to.include("Missing Address (Line 1)");
        expect(errors).to.include("Missing City");
        expect(errors).to.include("Missing Country");
        expect(errors).to.include("Missing State / Province");
        expect(errors).to.include("Missing Zip / Postal Code");
        done();
      });
    });
    it("should NOT find errors with a valid address", function (done) {
      inject(function (companyService) {
        var errors = companyService.validateAddressSimple(window.rvFixtures.validCompanyAddress);
        expect(errors.length).to.equal(0);
        done();
      });
    });
  });

});
