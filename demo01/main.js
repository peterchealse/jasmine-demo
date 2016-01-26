
var React=require('react');
var ReactDOM = require('react-dom');
var TestUtils=require('react-addons-test-utils');

var Component=require('./com.react');
//测试props功能
describe("test helloworld props",function(){
	it("check props",function(){
		var helloworld=TestUtils.renderIntoDocument(<Component text='1你爱吃橘子'></Component>)
		var text=ReactDOM.findDOMNode(helloworld).textContent;
		expect(text).toContain('爱吃橘子');
	})
})
