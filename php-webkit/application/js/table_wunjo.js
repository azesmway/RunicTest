function table_wunjo() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Wunjo'</th></thead><tbody><tr><td>");
	html +=("Способность радоваться жизни, в первую очередь результатами и достижениями труда, и делиться этой радостью с окружающими");
	html +=("<br>");
	if ((zzruna['zzwunjo'] == 8) || (zzruna['zzwunjo1'] == 8) || (zzruna['zzwunjo2'] == 8) || (zzruna['zzwunjo3'] == 8) || (zzruna['zzwunjo4'] == 8) || (zzruna['zzwunjo5'] == 8) || (zzruna['zzwunjo6'] == 8) || (zzruna['zzwunjo7'] == 8) || (zzruna['zzwunjo8'] == 8) || (zzruna['zzwunjo9'] == 8) || (zzruna['zzwunjo10'] == 8) || (zzruna['zzwunjo11'] == 8)) {
		html +=("<b>" + "Не выбрана руна 'Wunjo'" + "</b><br>");
	}
	sum_wunjo = Math.round((zzruna['zzwunjo'] + zzruna['zzwunjo2'] + zzruna['zzwunjo4'] + zzruna['zzwunjo6'] + zzruna['zzwunjo8'] + zzruna['zzwunjo10']) / 6);
	sum_wunjo1 = Math.round((zzruna['zzwunjo1'] + zzruna['zzwunjo3'] + zzruna['zzwunjo5'] + zzruna['zzwunjo7'] + zzruna['zzwunjo9'] + zzruna['zzwunjo11']) / 6);
	html +=("<b>" + "Потенциал 'Wunjo':  " + sum_wunjo1 + "</b>");
	html +=("<br>");
	html +=("<b>" + "Явленное 'Wunjo':  " + sum_wunjo + "</b>");
	wunjo_z11 = zzruna['zzwunjo'] - zzruna['zzwunjo1'];
	wunjo_z12 = zzruna['zzwunjo1'] - zzruna['zzwunjo'];
	wunjo_z21 = zzruna['zzwunjo4'] - zzruna['zzwunjo5'];
	wunjo_z22 = zzruna['zzwunjo5'] - zzruna['zzwunjo4'];
	wunjo_z31 = zzruna['zzwunjo8'] - zzruna['zzwunjo9'];
	wunjo_z32 = zzruna['zzwunjo9'] - zzruna['zzwunjo8'];
	if ((wunjo_z11 > 0) && (wunjo_z21 > 0) && (wunjo_z31 > 0)) {
		wunjo_zzz1 = 1;
		wunjo_zz1 = wunjo_z11 + wunjo_z21 + wunjo_z31;
		if (wunjo_z11 > wunjo_z21) {
			html +=("<br>");
			html +=("<b>" + "Ментальная активность 'Wunjo': + " + wunjo_zz1 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz1 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Ауральная сущность 'Wunjo' + " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Астральная активность 'Wunjo': + " + wunjo_zz1 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz1 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Влияние прошлой жизни 'Wunjo' + " + "</b>");
			}
		}
	}
	if ((wunjo_z12 > 0) && (wunjo_z22 > 0) && (wunjo_z32 > 0)) {
		wunjo_zzz2 = 1;
		wunjo_zz2 = wunjo_z12 + wunjo_z22 + wunjo_z32;
		if (wunjo_z12 > wunjo_z22) {
			html +=("<br>");
			html +=("<b>" + "Ментальная активность 'Wunjo': - " + wunjo_zz2 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz2 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Ауральная сущность 'Wunjo' - " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Астральная активность 'Wunjo': - " + wunjo_zz2 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz2 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Влияние прошлой жизни 'Wunjo' - " + "</b>");
			}
		}
	}
	wunjo_z15 = zzruna['zzwunjo'] - zzruna['zzwunjo2'];
	wunjo_z16 = zzruna['zzwunjo2'] - zzruna['zzwunjo'];
	wunjo_z25 = zzruna['zzwunjo4'] - zzruna['zzwunjo6'];
	wunjo_z26 = zzruna['zzwunjo6'] - zzruna['zzwunjo4'];
	wunjo_z35 = zzruna['zzwunjo8'] - zzruna['zzwunjo10'];
	wunjo_z36 = zzruna['zzwunjo10'] - zzruna['zzwunjo8'];
	if ((wunjo_z15 > 0) && (wunjo_z25 > 0) && (wunjo_z35 > 0)) {
		wunjo_zzz5 = 1;
		wunjo_zz5 = wunjo_z15 + wunjo_z25 + wunjo_z35;
		if (wunjo_z15 > wunjo_z25) {
			html +=("<br>");
			html +=("<b>" + "Активность сознания 'Wunjo': + " + wunjo_zz5 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz5 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Программа 'Wunjo' + " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Наведенная активность сознания 'Wunjo' + " + wunjo_zz5 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz5 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Наведенная программа 'Wunjo' + " + "</b>");
			}
		}
	}
	if ((wunjo_z16 > 0) && (wunjo_z26 > 0) && (wunjo_z36 > 0)) {
		wunjo_zzz6 = 1;
		wunjo_zz6 = wunjo_z16 + wunjo_z26 + wunjo_z36;
		if (wunjo_z16 > wunjo_z26) {
			html +=("<br>");
			html +=("<b>" + "Активность сознания 'Wunjo': - " + wunjo_zz6 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz6 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Программа 'Wunjo' - " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Наведенная активность сознания 'Wunjo' - " + wunjo_zz6 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz6 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Наведенная программа 'Wunjo' - " + "</b>");
			}
		}
	}
	wunjo_z17 = zzruna['zzwunjo1'] - zzruna['zzwunjo3'];
	wunjo_z18 = zzruna['zzwunjo3'] - zzruna['zzwunjo1'];
	wunjo_z27 = zzruna['zzwunjo5'] - zzruna['zzwunjo7'];
	wunjo_z28 = zzruna['zzwunjo7'] - zzruna['zzwunjo5'];
	wunjo_z37 = zzruna['zzwunjo9'] - zzruna['zzwunjo11'];
	wunjo_z38 = zzruna['zzwunjo11'] - zzruna['zzwunjo9'];
	if ((wunjo_z17 > 0) && (wunjo_z27 > 0) && (wunjo_z37 > 0)) {
		wunjo_zzz7 = 1;
		wunjo_zz7 = wunjo_z17 + wunjo_z27 + wunjo_z37;
		if (wunjo_z17 > wunjo_z27) {
			html +=("<br>");
			html +=("<b>" + "Энергетическая активность 'Wunjo' + " + wunjo_zz7 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz7 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Эфирная сущность 'Wunjo' + " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Навязанная энергетическая активность 'Wunjo' + " + wunjo_zz7 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz7 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Навязанная эфирная сущность (морок) 'Wunjo' + " + "</b>");
			}
		}
	}
	if ((wunjo_z18 > 0) && (wunjo_z28 > 0) && (wunjo_z38 > 0)) {
		wunjo_zzz8 = 1;
		wunjo_zz8 = wunjo_z18 + wunjo_z28 + wunjo_z38;
		if (wunjo_z18 > wunjo_z28) {
			html +=("<br>");
			html +=("<b>" + "Энергетическая активность 'Wunjo' - " + wunjo_zz8 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz8 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Эфирная сущность 'Wunjo' - " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Навязанная энергетическая активность 'Wunjo' - " + wunjo_zz8 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz8 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Навязанная эфирная сущность (морок) 'Wunjo' - " + "</b>");
			}
		}
	}
	wunjo_z13 = zzruna['zzwunjo2'] - zzruna['zzwunjo3'];
	wunjo_z14 = zzruna['zzwunjo3'] - zzruna['zzwunjo2'];
	wunjo_z23 = zzruna['zzwunjo6'] - zzruna['zzwunjo7'];
	wunjo_z24 = zzruna['zzwunjo7'] - zzruna['zzwunjo6'];
	wunjo_z33 = zzruna['zzwunjo10'] - zzruna['zzwunjo11'];
	wunjo_z34 = zzruna['zzwunjo11'] - zzruna['zzwunjo10'];
	if ((wunjo_z13 > 0) && (wunjo_z23 > 0) && (wunjo_z33 > 0)) {
		wunjo_zzz3 = 1;
		wunjo_zz3 = wunjo_z13 + wunjo_z23 + wunjo_z33;
		if (wunjo_z13 >= wunjo_z23) {
			html +=("<br>");
			html +=("<b>" + "Подсознательная активность 'Wunjo' + " + wunjo_zz3 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz3 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Wunjo' + " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Физическая активность 'Wunjo' + " + wunjo_zz3 + "</b>");
			if ((sum_wunjo > sum_wunjo1) & (wunjo_zz3 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Органическая программа (органическая инграмма) 'Wunjo' + " + "</b>");
			}
		}
	}
	if ((wunjo_z14 > 0) && (wunjo_z24 > 0) && (wunjo_z34 > 0)) {
		wunjo_zzz4 = 1;
		wunjo_zz4 = wunjo_z14 + wunjo_z24 + wunjo_z34;
		if (wunjo_z12 >= wunjo_z22) {
			html +=("<br>");
			html +=("<b>" + "Подсознательная активность 'Wunjo' - " + wunjo_zz4 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz4 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Wunjo' - " + "</b>");
			}
		} else {
			html +=("<br>");
			html +=("<b>" + "Физическая активность 'Wunjo' - " + wunjo_zz4 + "</b>");
			if ((sum_wunjo < sum_wunjo1) & (wunjo_zz4 >= 6)) {
				html +=("<br>");
				html +=("<b>" + "Органическая программа (органическая инграмма) 'Wunjo' - " + "</b>");
			}
		}
	}
	html +=("<br>");
	html +=("<b>" + "Диагностика по руне 'Wunjo' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}