$(function() {
	let actrl = new ActiveCtrl();
	actrl.init();	
})
function ActiveCtrl() {
	this.data = {
		1: {
			type: "常青树（多倍2.0版）",
			kids: [
				{mode: "趸交", ratio: 0.12},
				{mode: "3年交", ratio: 0.36},
				{mode: "5年交", ratio: 0.6},
				{mode: "10年交", ratio: 1.2},
				{mode: "15年交", ratio: 1.2},
				{mode: "20年交", ratio: 1.44}
			]
		},
		2: {
			type: "常青树（2015）附加爱加保（2015）",
			kids: [
				{mode: "5年交", ratio: 0.6},
				{mode: "10年交", ratio: 1.2},
				{mode: "15年交", ratio: 1.2},
				{mode: "20年交", ratio: 1.44}
			]
		},
		3: {
			type: "常青树（全能版）",
			kids: [
				{mode: "趸交", ratio: 0.12},
				{mode: "3年交", ratio: 0.36},
				{mode: "5年交", ratio: 0.6},
				{mode: "10年交", ratio: 1.2},
				{mode: "20年交", ratio: 1.44}
			]
		},
		4: {
			type: "福临门（赢家版）",
			kids: [
				{mode: "趸交", ratio: 0.1},
				{mode: "3年交", ratio: 0.3},
				{mode: "5年交", ratio: 0.5},
				{mode: "10年交", ratio: 1},
				{mode: "20年交", ratio: 1.2}
			]
		},
	}
}

ActiveCtrl.prototype = {
	init: function() {
		this.renderYears(1);
		this.addEvent();
	},
	renderYears: function(val) {
		let html = ``, data = this.data[val].kids;
		for(let i in data) {
			html += `<option value="${data[i].mode}">${data[i].mode}</option>`;
		}
		$("#years").html(html);
	},
	addEvent: function() {
		let _this = this;
		$("#type").on("change", function() {
			let val = $(this).val()
			_this.renderYears(val);
		})
	}
}