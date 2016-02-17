function table_fehu() {

	var html = '';

	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Fehu'</th></thead><tbody><tr><td>");

	html += ("Способность к новым начинаниям, к внесению изменений в свою жизнь, деловые качества, оперирование деньгами и собственностью");
	html += ("<br>");
	if ((zzruna['zzfehu'] == 8) || (zzruna['zzfehu1'] == 8) || (zzruna['zzfehu2'] == 8) || (zzruna['zzfehu3'] == 8) || (zzruna['zzfehu4'] == 8) || (zzruna['zzfehu5'] == 8) || (zzruna['zzfehu6'] == 8) || (zzruna['zzfehu7'] == 8) || (zzruna['zzfehu8'] == 8) || (zzruna['zzfehu9'] == 8) || (zzruna['zzfehu10'] == 8) || (zzruna['zzfehu11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Fehu'" + "</b><br>");
	}
	sum_fehu = Math.round((zzruna['zzfehu'] + zzruna['zzfehu2'] + zzruna['zzfehu4'] + zzruna['zzfehu6'] + zzruna['zzfehu8'] + zzruna['zzfehu10']) / 6);
	sum_fehu1 = Math.round((zzruna['zzfehu1'] + zzruna['zzfehu3'] + zzruna['zzfehu5'] + zzruna['zzfehu7'] + zzruna['zzfehu9'] + zzruna['zzfehu11']) / 6);
	html += ("<b>" + "Потенциал 'Fehu':  " + sum_fehu1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Fehu':  " + sum_fehu + "</b>");
	fehu_z11 = zzruna['zzfehu'] - zzruna['zzfehu1'];
	fehu_z12 = zzruna['zzfehu1'] - zzruna['zzfehu'];
	fehu_z21 = zzruna['zzfehu4'] - zzruna['zzfehu5'];
	fehu_z22 = zzruna['zzfehu5'] - zzruna['zzfehu4'];
	fehu_z31 = zzruna['zzfehu8'] - zzruna['zzfehu9'];
	fehu_z32 = zzruna['zzfehu9'] - zzruna['zzfehu8'];
	if ((fehu_z11 > 0) && (fehu_z21 > 0) && (fehu_z31 > 0)) {
		fehu_zzz1 = 1;
		fehu_zz1 = fehu_z11 + fehu_z21 + fehu_z31;
		if (fehu_z11 > fehu_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Fehu': + " + fehu_zz1 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Fehu' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Fehu': + " + fehu_zz1 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Fehu' + " + "</b>");
			}
		}
	}
	if ((fehu_z12 > 0) && (fehu_z22 > 0) && (fehu_z32 > 0)) {
		fehu_zzz2 = 1;
		fehu_zz2 = fehu_z12 + fehu_z22 + fehu_z32;
		if (fehu_z12 > fehu_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Fehu': - " + fehu_zz2 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Fehu' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Fehu': - " + fehu_zz2 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Fehu' - " + "</b>");
			}
		}
	}
	fehu_z15 = zzruna['zzfehu'] - zzruna['zzfehu2'];
	fehu_z16 = zzruna['zzfehu2'] - zzruna['zzfehu'];
	fehu_z25 = zzruna['zzfehu4'] - zzruna['zzfehu6'];
	fehu_z26 = zzruna['zzfehu6'] - zzruna['zzfehu4'];
	fehu_z35 = zzruna['zzfehu8'] - zzruna['zzfehu10'];
	fehu_z36 = zzruna['zzfehu10'] - zzruna['zzfehu8'];
	if ((fehu_z15 > 0) && (fehu_z25 > 0) && (fehu_z35 > 0)) {
		fehu_zzz5 = 1;
		fehu_zz5 = fehu_z15 + fehu_z25 + fehu_z35;
		if (fehu_z15 > fehu_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Fehu': + " + fehu_zz5 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Fehu' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Fehu' + " + fehu_zz5 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Fehu' + " + "</b>");
			}
		}
	}
	if ((fehu_z16 > 0) && (fehu_z26 > 0) && (fehu_z36 > 0)) {
		fehu_zzz6 = 1;
		fehu_zz6 = fehu_z16 + fehu_z26 + fehu_z36;
		if (fehu_z16 > fehu_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Fehu': - " + fehu_zz6 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Fehu' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Fehu' - " + fehu_zz6 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Fehu' - " + "</b>");
			}
		}
	}
	fehu_z17 = zzruna['zzfehu1'] - zzruna['zzfehu3'];
	fehu_z18 = zzruna['zzfehu3'] - zzruna['zzfehu1'];
	fehu_z27 = zzruna['zzfehu5'] - zzruna['zzfehu7'];
	fehu_z28 = zzruna['zzfehu7'] - zzruna['zzfehu5'];
	fehu_z37 = zzruna['zzfehu9'] - zzruna['zzfehu11'];
	fehu_z38 = zzruna['zzfehu11'] - zzruna['zzfehu9'];
	if ((fehu_z17 > 0) && (fehu_z27 > 0) && (fehu_z37 > 0)) {
		fehu_zzz7 = 1;
		fehu_zz7 = fehu_z17 + fehu_z27 + fehu_z37;
		if (fehu_z17 > fehu_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Fehu' + " + fehu_zz7 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Fehu' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Fehu' + " + fehu_zz7 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Fehu' + " + "</b>");
			}
		}
	}
	if ((fehu_z18 > 0) && (fehu_z28 > 0) && (fehu_z38 > 0)) {
		fehu_zzz8 = 1;
		fehu_zz8 = fehu_z18 + fehu_z28 + fehu_z38;
		if (fehu_z18 > fehu_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Fehu' - " + fehu_zz8 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Fehu' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Fehu' - " + fehu_zz8 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Fehu' - " + "</b>");
			}
		}
	}
	fehu_z13 = zzruna['zzfehu2'] - zzruna['zzfehu3'];
	fehu_z14 = zzruna['zzfehu3'] - zzruna['zzfehu2'];
	fehu_z23 = zzruna['zzfehu6'] - zzruna['zzfehu7'];
	fehu_z24 = zzruna['zzfehu7'] - zzruna['zzfehu6'];
	fehu_z33 = zzruna['zzfehu10'] - zzruna['zzfehu11'];
	fehu_z34 = zzruna['zzfehu11'] - zzruna['zzfehu10'];
	if ((fehu_z13 > 0) && (fehu_z23 > 0) && (fehu_z33 > 0)) {
		fehu_zzz3 = 1;
		fehu_zz3 = fehu_z13 + fehu_z23 + fehu_z33;
		if (fehu_z13 >= fehu_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Fehu' + " + fehu_zz3 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Fehu' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Fehu' + " + fehu_zz3 + "</b>");
			if ((sum_fehu > sum_fehu1) & (fehu_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Fehu' + " + "</b>");
			}
		}
	}
	if ((fehu_z14 > 0) && (fehu_z24 > 0) && (fehu_z34 > 0)) {
		fehu_zzz4 = 1;
		fehu_zz4 = fehu_z14 + fehu_z24 + fehu_z34;
		if (fehu_z12 >= fehu_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Fehu' - " + fehu_zz4 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Fehu' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Fehu' - " + fehu_zz4 + "</b>");
			if ((sum_fehu < sum_fehu1) & (fehu_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Fehu' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Fehu' закончена" + "</b>");
	html += ("</td></tr></table>");	

	return html;
}