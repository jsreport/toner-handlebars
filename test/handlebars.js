var should = require("should");
var handlebars = require("../lib/handlebars");

describe('handlebars', function(){

    it('should render html', function () {
        var html = handlebars("Hey", null, null);
        html.should.be.eql("Hey");
    });

    it('should be able to use helpers', function () {
        var html = handlebars("{{{a}}}", { a: function() { return "Hey"; } }, null);
        html.should.be.eql("Hey");
    });

    it('should be able to use data', function () {
        var html = handlebars("{{{a}}}", null, { a: "Hey" });
        html.should.be.eql("Hey");
    });

    it('should throw when syntax error', function () {
        should(function () {
            handlebars("{{#if}}", null, {});
        }).throw();
    });

    it('should work with jsreport syntax', function () {
        var html = handlebars("{#image {{b}}}", null, { b : "foo"});
        html.should.be.eql("{#image foo}");
    });
});