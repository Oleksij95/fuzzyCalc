
	function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y - 16,
        left: x + 20
    }).appendTo('body').fadeIn();
};


	function summC() {
	var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('AddCh1');
	var checkbox2=document.getElementById('AddCh2');
	var checkbox3=document.getElementById('AddCh3');
	
				if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}else {
			if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}

	var sumaA = a + a2;
	var sumaAl = b + b2;
	var sumaB = c + c2;
		document.getElementById('vivod_ch1').innerHTML = 'C = < ' + sumaA + ', ' + sumaAl + ', ' + sumaB + ' >' ;		
		
		var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2+a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+sumaA, 0],   [sumaA, 0],   [sumaAl, 1],   [sumaB, 0], [sumaB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c +3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + sumaA, 0],   [a, 0],   [b, 1],   [c, 0], [c + sumaB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5 + sumaA + a, 0],   [sumaA, 0],   [sumaAl, 1],   [sumaB, 0], [sumaB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-7 + a2 + sumaA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + sumaB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-7 + sumaA + a2, 0],   [sumaA, 0],   [sumaAl, 1],   [sumaB, 0], [sumaB + c2 + 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-10 + a + a2 + sumaA, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + sumaB + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-10 + a + a2 + sumaA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + c2 + sumaB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10 + a + a2 + sumaA, 0],   [sumaA, 0],   [sumaAl, 1],   [sumaB, 0], [c + c2 + sumaB + 3, 0],],
		color: '#B22222'
},]		
}
	

	$.plot($('#summD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;


redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};

var previousPoint = null;

$('#summD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
	};
		
		
function vidC() {
	var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('VidCh1');
	var checkbox2=document.getElementById('VidCh2');
	var checkbox3=document.getElementById('VidCh3');
	var d;
				
				
				
				if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}else {

		if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		var VidA = a - c2;
		var VidAl = b - b2;
		var VidB = c - a2;
		document.getElementById('Vidvivod_ch1').innerHTML = 'C = < ' + VidA + ', ' + VidAl + ', ' + VidB + ' >' ;
		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2+a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
			
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+VidA, 0],   [VidA, 0],   [VidAl, 1],   [VidB, 0], [VidB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + VidA, 0],   [a, 0],   [b, 1],   [c, 0], [c + VidB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5 + VidA + a, 0],   [VidA, 0],   [VidAl, 1],   [VidB, 0], [VidB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5 + a2 + VidA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + VidB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + VidA + a2, 0],   [VidA, 0],   [VidAl, 1],   [VidB, 0], [VidB + c2+ 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-8 + a + a2 + VidA, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + VidB + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8 + a + a2 + VidA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + c2 + VidB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-8 + a + a2 + VidA, 0],   [VidA, 0],   [VidAl, 1],   [VidB, 0], [c + c2 + VidB + 3, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#VidD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;
redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};

var previousPoint = null;

$('#VidD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};

function mnoC(){
	var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('MnoCh1');
	var checkbox2=document.getElementById('MnoCh2');
	var checkbox3=document.getElementById('MnoCh3');
				if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}else {
		
	if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
	var MnoA, MnoAl, MnoB;
		
	
	MnoA = a * a2;
	MnoAl = b * b2;
	MnoB = c * c2;
	document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + MnoA + ', ' + MnoAl + ', ' + MnoB + ' >' ;
	
	
	var hide = [];
		var all_data = [];


		if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2 + a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
			
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2 + MnoA, 0],   [MnoA, 0],   [MnoAl, 1],   [MnoB, 0], [MnoB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + MnoA, 0],   [a, 0],   [b, 1],   [c, 0], [c + MnoB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5 + MnoA + a, 0],   [MnoA, 0],   [MnoAl, 1],   [MnoB, 0], [MnoB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5 + a2 + MnoA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + MnoB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + MnoA + a2, 0],   [MnoA, 0],   [MnoAl, 1],   [MnoB, 0], [MnoB + c2 + 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-10 + MnoA + a2 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + MnoB + c2 + 3, 0], ], 
	color: '#556B2F'
},
			
{ label: "μB(x)",
	data: [ [-10 + MnoA + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + MnoB + c2 +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10 + MnoA + a2 + a, 0],   [MnoA, 0],   [MnoAl, 1],   [MnoB, 0], [c + MnoB + c2 + 3, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#MnoC'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 10
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};


var previousPoint = null;

$('#MnoC').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};

function dilC() {
	var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('DilCh1');
	var checkbox2=document.getElementById('DilCh2');
	var checkbox3=document.getElementById('DilCh3');
				
						if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}

if (a2===0) {
	alert('Ділення на 0!');
	checkbox.checked=false;
	checkbox2.checked=false;
	checkbox3.checked=false;
}
	else {
		
		if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
		var dilA = a / a2;
		var dilAl = ((a * c2 + a2 * b)/Math.pow(a2,2)); 
		var dilB = ((a * b2 + a2 + c)/Math.pow(a2,2)); 
		
		document.getElementById('Dilvivod_ch1').innerHTML = 'C = < ' + dilA.toFixed(3) + ', ' + dilAl.toFixed(3) + ', ' + dilB.toFixed(3) + ' >' ;
		

		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2 + a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
			
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2 + dilA, 0],   [dilA, 0],   [dilAl, 1],   [dilB, 0], [dilB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + dilA, 0],   [a, 0],   [b, 1],   [c, 0], [c + dilB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-2 + dilA + a, 0],   [dilA, 0],   [dilAl, 1],   [dilB, 0], [dilB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5 + a2 + dilA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + dilB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + dilA + a2, 0],   [dilA, 0],   [dilAl, 1],   [dilB, 0], [dilB + c2 + 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-8 + a + a2 + dilA, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + dilB + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8 + a + a2 + dilA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + c2 + dilB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-8 + a + a2 + dilA, 0],   [dilA, 0],   [dilAl, 1],   [dilB, 0], [c + c2 + dilB + 3, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#dilD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};


var previousPoint = null;

$('#dilD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};


function OBRC() {
var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('ObrCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('ObrCh3');
				if (b < 0 || c < 0 ){
		alert('Невірно введено число');
	}else {
		
			if (a > b || b > c){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
		var ObrA = 1 / c;
		var ObrAl = 1 / b;
		var ObrB = 1 / a; 
		
		document.getElementById('Obervivod_ch1').innerHTML = 'C = < ' + ObrA.toFixed(3) + ', ' + ObrAl.toFixed(3) + ', ' + ObrB.toFixed(3) + ' >' ;
		


	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2 + ObrA, 0],   [ObrA, 0],   [ObrAl, 1],   [ObrB, 0], [ObrB + 3, 0],],
		color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-8 + a + ObrA, 0],   [a, 0],   [b, 1],   [c, 0], [c + ObrB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-8 + ObrA + a, 0],   [ObrA, 0],   [ObrAl, 1],   [ObrB, 0], [ObrB + c + 3, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#Obern'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 1
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#Obern').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};


function RmaxF() {
var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('RmxCh1');
	var checkbox2=document.getElementById('RmxCh2');
	var checkbox3=document.getElementById('RmxCh3');
			
				if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
		var RmaxA = Math.max(a, a2);
		var RmaxAl = RmaxA - Math.max(a - b,a2 - b2); 
		var RmaxB = Math.max(a + c, a2 + c2) - RmaxA; //уточнить за формулу
		
		document.getElementById('rmax_ch1').innerHTML = 'C = < ' + RmaxA + ', ' + RmaxAl + ', ' + RmaxB + ' >' ;	
			
	var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2+a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}

		if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
			
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmaxA, 0],   [RmaxA, 0],   [RmaxAl, 1],   [RmaxB, 0], [RmaxB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c +3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + RmaxA, 0],   [a, 0],   [b, 1],   [c, 0], [c + RmaxB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5+RmaxA + a, 0],   [RmaxA, 0],   [RmaxAl, 1],   [RmaxB, 0], [RmaxB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data =[ { label: "μB(x)",
	data: [ [-5 + a2 + RmaxA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + RmaxB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+RmaxA + a2, 0],   [RmaxA, 0],   [RmaxAl, 1],   [RmaxB, 0], [RmaxB + c2 + 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-10 + RmaxA + a2 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + RmaxB + c2 + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-10 + RmaxA + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + RmaxB + c2 + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10 + RmaxA + a2 + a, 0],   [RmaxA, 0],   [RmaxAl, 1],   [RmaxB, 0], [c + RmaxB + c2 + 3, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#MaxD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#MaxD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};

function RminF() {
var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('RmiCh1');
	var checkbox2=document.getElementById('RmiCh2');
	var checkbox3=document.getElementById('RmiCh3');
		
	if (a < 0 || a2 < 0 || c < 0 || c2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c) || (a2 > b2 || b2 > c2)){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
		var RmiA = Math.min(a, a2);
		var RmiAl = RmiA - Math.min(a - b, a2 - b2);
		var RmiB = Math.min(a + c, a2 + c2) - RmiA; //уточнить за формулу
		
		document.getElementById('rmin_ch1').innerHTML = 'C = < ' + RmiA + ', ' + RmiAl + ', ' + RmiB + ' >' ;
		
		
	var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2+a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}

		if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 +3, 0], ], 
	color: '#9400D3'
},]		
}
			
		
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmiA, 0],   [RmiA, 0],   [RmiAl, 1],   [RmiB, 0], [RmiB + 3, 0],],
		color: '#B22222'
},]
			
}


		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-2 + a + a2, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5 + a2 + a, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + c +3, 0], ], 
	color: '#9400D3'
},]			
}

if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a + RmiA, 0],   [a, 0],   [b, 1],   [c, 0], [c + RmiB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5 + RmiA + a, 0],   [RmiA, 0],   [RmiAl, 1],   [RmiB, 0], [RmiB + c + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5 + a2 + RmiA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c2 + RmiB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + RmiA + a2, 0],   [RmiA, 0],   [RmiAl, 1],   [RmiB, 0], [RmiB + c2 + 3, 0],],
		color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-8 + a + a2 + RmiA, 0],   [a, 0],   [b, 1],   [c, 0], [c + c2 + RmiB + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8 + a + a2 + RmiA, 0],   [a2, 0],   [b2, 1],   [c2, 0], [c + c2 + RmiB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-8 + a + a2 + RmiA, 0],   [RmiA, 0],   [RmiAl, 1],   [RmiB, 0], [c + c2 + RmiB + 3, 0],],
		color: '#B22222'
},]		
}

$.plot($('#MinD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};
var previousPoint = null;

$('#MinD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};

function protF() {
var a = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				c2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('PrtCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('PrtCh3');
			if (b < 0 || c < 0 ){
		alert('Невірно введено число');
	}else {
		
		if (a > b || b > c){
			alert('Неправильний порядок введення. Вимога: a <= b <= c');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
		var proA = -a;
		var proAl = -b;
		var proB = -c;
		
		document.getElementById('protvivod_ch1').innerHTML = 'C = < ' + proA + ', ' + proAl + ', ' + proB + ' >' ;
		

	var hide = [];
		var all_data = [];


if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-5 + a, 0],   [a, 0],   [b, 1],   [c, 0], [c + 3, 0], ], 
	color: '#556B2F'
},]
			
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-5 + proA, 0],   [proA, 0],   [proAl, 1],   [proB, 0], [proB + 5, 0],],
		color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)", 
	data: [ [-8 + a + proA, 0],   [a, 0],   [b, 1],   [c, 0], [c + proB + 5, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-8 + proA + a, 0],   [proA, 0],   [proAl, 1],   [proB, 0], [proB + c + 5, 0],],
		color: '#B22222'
},]		
}

	$.plot($('#Protil'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;
redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#Protil').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};


function operation(){
	var checkbox1 = document.getElementById('UnOber');
	var checkbox2 = document.getElementById('UnProt');
	var checkbox3 = document.getElementById('BinarOper');
	var UnOp = document.getElementById('UnarOper');

	$('#add').css({
		'display':'none',
	});
	$('#vid').css({
		'display':'none',
	});
	$('#mnoch').css({
		'display':'none',
	});
	$('#dil').css({
		'display':'none',
	});
	$('#rmax').css({
		'display':'none',
	});
	$('#rmin').css({
		'display':'none',
	});

		if(UnOp.checked){
			
				if(checkbox1.checked){
				$('#ober').css({
						'display':'inline-block',
					});
			}

			if(!checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if (checkbox2.checked){
				$('#prot').css({
						'display':'inline-block',
					});
			}
			
			if(!checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
		}

	else {
			
				if(checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if(!checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if (checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
			
			if(!checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
		}
	
};

function operationB(){
	var checkbox1 = document.getElementById('BinAdd');
	var checkbox2 = document.getElementById('BinVid');
	var checkbox3 = document.getElementById('BinMno');
	var checkbox4 = document.getElementById('BinDil');
	var checkbox5 = document.getElementById('BinMax');
	var checkbox6 = document.getElementById('BinMin');

	var checkbox7 = document.getElementById('UnOber');
	var checkbox8 = document.getElementById('UnProt');

	$('#ober').css({
		'display':'none',
	});
	$('#prot').css({
		'display':'none',
	});

	if(checkbox1.checked){
		$('#add').css({
			'display':'inline-block',
		});
	}
	if(!checkbox1.checked){
		$('#add').css({
			'display':'none',
		});
	}

	if(checkbox2.checked){
		$('#vid').css({
			'display':'inline-block',
		});
	}
	if(!checkbox2.checked){
		$('#vid').css({
			'display':'none',
		});
	}

	if(checkbox3.checked){
		$('#mnoch').css({
			'display':'inline-block',
		});
	}
	if(!checkbox3.checked){
		$('#mnoch').css({
			'display':'none',
		});
	}

	if(checkbox4.checked){
		$('#dil').css({
			'display':'inline-block',
		});
	}
	if(!checkbox4.checked){
		$('#dil').css({
			'display':'none',
		});
	}
	if(checkbox5.checked){
		$('#rmax').css({
			'display':'inline-block',
		});
	}
	if(!checkbox5.checked){
		$('#rmax').css({
			'display':'none',
		});
	}
	if(checkbox6.checked){
		$('#rmin').css({
			'display':'inline-block',
		});
	}
	if(!checkbox6.checked){
		$('#rmin').css({
			'display':'none',
		});
	}
};




function SOperations(){
	var checkbox1 = document.getElementById('UnarOper');
	var checkbox2 = document.getElementById('BinarOper');
	var checkbox3 = document.getElementById('OllOper');

	var checkbox7 = document.getElementById('UnOber');
	var checkbox8 = document.getElementById('UnProt');

	var checkbox9 = document.getElementById('BinAdd');
	var checkbox10 = document.getElementById('BinVid');
	var checkbox11 = document.getElementById('BinMno');
	var checkbox12 = document.getElementById('BinDil');
	var checkbox13 = document.getElementById('BinMax');
	var checkbox14 = document.getElementById('BinMin');

	if (checkbox1.checked){
		checkbox9.checked = false;
		checkbox10.checked = false;
		checkbox11.checked = false;
		checkbox12.checked = false;
		checkbox13.checked = false;
		checkbox14.checked = false;

		$('#ср2_1').css({
			'display':'none',
		});
		$('#ср2_2').css({
			'display':'none',
		})
		$('#ср2_3').css({
			'display':'none',
		})
		$('#sSelect').css({
			'display':'none',
		})
		
		$('.BinOp').css({
			'display':'none',
		})

		$('#ср1_1').css({
			'display':'inline-block',
		});
		$('#ср1_2').css({
			'display':'inline-block',
		})
		$('#ср1_3').css({
			'display':'inline-block',
		})
		
		$('#SelectOber').css({
			'display':'inline-block',
		})
		$('#SelectProt').css({
			'display':'inline-block',
		})
		
		$('#UnOber').css({
			'display':'inline-block',
		})
		$('#UnProt').css({
			'display':'inline-block',
		})

		$('.unnrOp').css({
			'display':'inline-block',
		})

		$('#add').css({
		'display':'none',
		});
		$('#vid').css({
			'display':'none',
		});
		$('#mnoch').css({
			'display':'none',
		});
		$('#dil').css({
			'display':'none',
		});
		$('#rmax').css({
			'display':'none',
		});
		$('#rmin').css({
			'display':'none',
		});

	}

	if (checkbox2.checked){
		checkbox9.checked = false;
		checkbox10.checked = false;
		checkbox11.checked = false;
		checkbox12.checked = false;
		checkbox13.checked = false;
		checkbox14.checked = false;
		checkbox7.checked = false;
		checkbox8.checked = false;

		
		$('#ср2_1').css({
			'display':'inline-block',
		});
		$('#ср2_2').css({
			'display':'inline-block',
		})
		$('#ср2_3').css({
			'display':'inline-block',
		})
		$('#sSelect').css({
			'display':'inline-block',
		})

		$('#SelectOber').css({
			'display':'none',
		})
		$('#SelectProt').css({
			'display':'none',
		})

		$('.UnarOppr1').css({
			'display':'none',
		})
		$('.BinOp').css({
			'display':'inline-block',
		})

		$('#BinAdd').css({
			'display':'inline-block',
		})
		$('#BinVid').css({
			'display':'inline-block',
		})
		$('#BinMno').css({
			'display':'inline-block',
		})
		$('#BinDil').css({
			'display':'inline-block',
		})
		$('#BinMax').css({
			'display':'inline-block',
		})
		$('#BinMin').css({
			'display':'inline-block',
		})

		$('#ober').css({
		'display':'none',
		});
		$('#prot').css({
			'display':'none',
		});

	}

	if (checkbox3.checked){
		
		checkbox7.checked = false;
		checkbox8.checked = false;

		$('#ср1_1').css({
			'display':'inline-block',
		});
		$('#ср1_2').css({
			'display':'inline-block',
		})
		$('#ср1_3').css({
			'display':'inline-block',
		})
		$('#ср2_1').css({
			'display':'inline-block',
		});
		$('#ср2_2').css({
			'display':'inline-block',
		})
		$('#ср2_3').css({
			'display':'inline-block',
		})
		$('#sSelect').css({
			'display':'inline-block',
		})
		
		$('.unnrOp').css({
			'display':'none',
		})
		$('.BinOp').css({
			'display':'none',
		})
	$('#add').css({
		'display':'inline-block',
	});
	$('#vid').css({
		'display':'inline-block',
	});
	$('#mnoch').css({
		'display':'inline-block',
	});
	$('#dil').css({
		'display':'inline-block',
	});
	$('#rmax').css({
		'display':'inline-block',
	});
	$('#rmin').css({
		'display':'inline-block',
	});
	$('#ober').css({
		'display':'inline-block',
	});
	$('#prot').css({
		'display':'inline-block',
	});
	}

};
