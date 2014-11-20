/**
 * Created by rodrigopavezi on 10/20/14.
 */
"use strict";
describe("Module: risevision.common.apis", function() {


    beforeEach(module("risevision.common.apis"));

    beforeEach(module(function ($provide) {
        //stub services
        $provide.service("$q", function() {return Q;});

        $provide.value("discoveryAPILoader", function() {
            var deffered = Q.defer();
            var gapi = {
                apis: {
                    list: function() {
                        return {
                            execute: function(callback) {
                                setTimeout(function() {
                                    callback(window.rvFixtures.apis);
                                }, 0);
                            }
                        };
                    },
                    getRest: function() {
                        return {
                            execute: function(callback) {
                                setTimeout(function() {
                                    callback(window.rvFixtures.api);
                                }, 0);
                            }
                        };
                    }
                }
            };
            deffered.resolve(gapi);
            return deffered.promise;
        });
    }));

    it("listApis should exist", function(done) {
        inject(function (listApis) {
            expect(listApis).be.defined;
            done();
        });
    });

    it("Should list all risevision apis", function(done) {
        inject(function(listApis){
            try {
                var name = "";
                var preferred = "";
                listApis(name, preferred).then(function (result) {
                    expect(result).to.deep.equal(rvFixtures.apis.items);
                    done();
                }, function (error) {
                    throw error
                });
            } catch (x) {
                done(x);
            }
        });
    });

    it("getRest should exist", function(done) {
        inject(function (getRest) {
            expect(getRest).be.defined;
            done();
        });
    });

    it("Should retrieve the description of a particular version of an api.", function(done) {
        inject(function(getRest){
            var api = "core"
            var version = "v0"
            getRest(api,version).then(function(result){
                expect(result).to.deep.equal(rvFixtures.api);
                done();
            }, function(error) {throw error});
        });
    });

});