(function () {
	'use strict';

	var dotsSide = [[209,330],[227,297],[242,330],[239,318],[245,315],[476,261],[545,258],[524,261],[500,252],[542,261],[584,273],[590,267],[608,282],[572,258],[527,258],[635,270],[632,270],[596,264],[566,279],[632,282],[614,258],[659,285],[650,279],[641,255],[689,252],[689,297],[713,282],[701,261],[662,264],[662,282],[695,297],[716,285],[719,279],[689,276],[722,270],[761,318],[734,255],[767,306],[752,279],[758,303],[770,306],[746,282],[791,312],[722,303],[803,279],[809,264],[773,273],[773,291],[812,300],[857,282],[824,312],[824,288],[872,279],[830,306],[887,282],[908,297],[842,261],[836,315],[860,291],[893,282],[884,324],[899,282],[947,246],[896,294],[872,261],[923,270],[965,258],[938,294],[905,312],[965,315],[836,327],[857,258],[878,297],[878,300],[836,309],[869,294],[953,264],[950,306],[908,282],[941,306],[902,276],[947,273],[899,255],[935,288],[974,288],[986,276],[965,300],[1013,294],[1001,318],[998,264],[1001,288],[1019,291],[1034,270],[1034,291],[1058,279],[1067,270],[1055,303],[1058,276],[1094,300],[1109,291],[1109,291],[1097,291],[1067,279],[1049,270],[1028,252],[1070,258],[1097,273],[1091,279],[1299,138],[1269,168],[1284,126],[1290,102],[1287,162],[1254,189],[1245,189],[1317,189],[1320,192],[1290,189],[1287,195],[1263,141],[1260,159],[1260,168]];


	var dotsTop = [[1007,990],[1056,951],[1059,1012],[1031,1006],[1028,963],[1056,1030],[1031,1036],[1107,1039],[1068,993],[1092,1060],[1086,1012],[1116,1051],[1056,1021],[1001,999],[1080,1018],[1080,954],[1131,1057],[1086,1027],[1071,990],[1113,1030],[1074,1051],[1119,1069],[1131,1042],[1083,957],[1116,1030],[1065,972],[1098,984],[1089,993],[1047,927],[686,1381],[683,1414],[713,1390],[683,1414],[704,1357],[713,1411],[644,1384],[698,1393],[707,1333],[695,1393],[686,1405],[728,1405],[734,1411],[767,1468],[671,1390],[683,1366],[671,1369],[716,1393],[704,1372],[764,1435],[743,1393],[707,1423],[767,1462],[728,1438],[704,1417],[725,1357],[704,1372],[719,1372],[686,1348],[656,1390],[662,1342],[653,1339],[692,1348],[653,1390],[668,1327],[680,1360],[668,1372],[1086,975],[1031,954],[1031,960],[1010,957],[1019,948],[989,969],[1019,933],[1007,921],[1031,945],[1031,945],[614,1306],[533,1333],[665,1399],[650,1444],[680,1411],[668,1438],[704,1450],[683,1414],[686,1468],[716,1447],[749,1330],[725,1417],[770,1405],[758,1393],[749,1408],[764,1384],[785,1402],[776,1384],[1092,1012],[1140,984],[1080,957],[1122,1003],[1104,984],[1083,984],[1083,948],[1104,1009],[1122,960],[1131,1030],[1098,942],[1080,1060],[1019,1036],[1050,1084],[1025,1087],[1053,1060],[1050,1078],[1028,1039],[1037,1021],[1037,1021],[1290,762],[1344,756],[1356,774],[1347,771],[1308,744],[1317,798],[1320,816],[1314,846],[1293,744],[1302,840],[1338,696],[1323,756],[1359,735],[1419,648],[1401,696],[1404,738],[1419,657],[1368,756],[1389,675],[1389,663],[1389,660],[1380,720],[1467,585],[1377,621],[1407,666],[1428,564],[1413,639],[1440,669],[1431,660],[1434,621],[1434,669],[1455,600],[1449,642],[1458,645],[1479,621],[1479,543],[1413,639],[1386,681],[1428,594],[1332,774],[1362,681],[1362,807],[1368,699],[1458,606],[1329,825],[1311,858],[1284,864],[1278,810],[1341,795],[1314,753],[1320,774],[1332,744],[1377,705],[1383,582],[1365,654],[1368,678],[1314,756],[1428,657],[1392,750],[1458,588],[1323,807],[1311,762],[1341,639],[1302,726],[1299,765],[1347,744],[371,1654],[410,1624],[431,1627],[383,1648],[473,1660],[347,1669],[347,1669],[431,1675],[464,1672],[449,1651],[434,1624],[434,1666],[428,1666],[428,1666],[428,1666],[428,1666],[431,1654],[419,1648],[443,1645],[392,1672],[584,1588],[494,1675],[569,1624],[518,1606],[542,1603],[464,1639],[479,1675],[506,1648],[479,1675],[479,1675],[446,1633],[569,1627],[500,1630],[515,1645],[524,1648],[581,1552],[506,1618],[554,1612],[491,1645],[584,1636],[521,1603],[524,1597],[332,1747],[344,1717],[284,1708],[290,1633],[266,1735],[227,1786],[218,1720],[221,1675],[239,1684],[275,1696],[233,1786],[200,1759],[251,1792],[302,1780],[245,1810],[353,1756],[275,1825],[335,1741],[293,1780],[404,1621],[290,1711],[353,1615],[293,1723],[359,1627],[302,1663],[269,1726],[389,1558],[353,1687],[377,1645],[371,1567],[308,1672],[317,1633],[353,1546],[305,1630],[431,1615],[407,1567],[434,1612],[428,1597],[431,1570],[455,1627],[455,1588],[434,1519],[446,1573],[437,1483],[365,1582],[371,1549],[482,1606],[464,1495],[485,1612],[518,1570],[500,1549],[476,1537],[491,1519],[410,1573],[359,1558],[323,1627],[290,1639],[284,1642],[257,1681],[317,1579],[341,1552],[323,1597],[293,1648],[317,1606],[227,1732],[245,1774],[335,1696],[299,1759],[434,1648],[365,1750],[428,1708],[434,1705],[356,1708],[455,1552],[389,1519],[416,1507],[392,1531],[380,1531],[416,1549],[434,1603],[434,1603],[1296,675],[1242,714],[1191,705],[1260,678],[1203,759],[1212,705],[1176,747],[1239,783],[1230,780],[1248,714],[1242,759],[1251,756],[1254,732],[1251,717],[1278,651],[1272,660],[1290,639],[1344,582],[1260,681],[1395,537],[1308,711],[1320,618],[1290,636],[1239,672],[1293,627],[1215,702],[1296,609],[1290,723],[1317,666],[1272,792],[1278,702],[1404,558],[1434,558],[1359,606],[1422,582],[1278,699],[1197,759],[1227,819],[1248,885],[1272,855],[1278,837],[1293,849],[1314,840],[1302,876],[1311,846],[989,1318],[1001,1366],[995,1315],[959,1354],[953,1315],[953,1288],[1050,1369],[950,1228],[1101,1399],[1010,1237],[1019,1333],[1053,1333],[1010,1291],[1062,1318],[953,1249],[1095,1456],[971,1258],[1059,1426],[947,1243],[1044,1381],[1013,1261],[1022,1336],[1041,1324],[923,1279],[1025,1348],[917,1282],[1092,1342],[926,1273],[917,1201],[1037,1357],[1004,1261],[896,1279],[1083,1351],[947,1240],[1028,1273],[1053,1303],[1596,1708],[1593,1735],[1617,1666],[1638,1732],[1605,1726],[1704,1630],[1626,1702],[1596,1747],[1662,1669],[1650,1708],[1584,1714],[1638,1651],[1623,1675],[1575,1711],[1668,1648],[1569,1750],[1587,1705],[1665,1705],[1569,1753],[1539,1729],[1539,1729],[1539,1729],[980,1099],[980,1099]];

	var $field = $('#dots');
	function show(dot) {
		$('<div class="dot"></div>').css({
			left: dot[0],
			top: dot[1]
		}).appendTo($field);
	}
	function showDots() {
		var dots = dotsSide.concat(dotsTop);
		(function tick() {
			var index = Math.round(Math.random() * (dots.length - 1));
			show(dots.splice(index, 1)[0]);
			if (dots.length) {
				setTimeout(tick, Math.random() * 10);
			}
		}()); 
	}

	window.slides_actions = {};

	var bomber_enter_timer;
	slides_actions.bomber_enter = function ($prev, $next, callback) {
		$('#future-slide').addClass('fx');
		$('.dot').remove();
		$('#bomber-side-animation').lazylinepainter('paint');
		if (bomber_enter_timer) {
			clearTimeout(bomber_enter_timer);
		}
		bomber_enter_timer = setTimeout(showDots, 4000);
		callback();
	};
	slides_actions.bomber_leave = function ($prev, $next, callback) {
		$('#future-slide').removeClass('fx');
		$('#bomber-side-animation').lazylinepainter('erase');
		if (bomber_enter_timer) {
			clearTimeout(bomber_enter_timer);
			bomber_enter_timer = null;
		}
		callback();
	};
	slides_actions.video_enter = function ($prev, $next, callback) {
		$('#video').html('<video src="video.mov" autoplay="true" loop="true"></video>');
		callback();
	};
	slides_actions.video_leave = function ($prev, $next, callback) {
		$('#video').html('');
		callback();
	};

}());
