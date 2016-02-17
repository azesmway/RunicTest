function table_nauthiz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Nauthiz'</th></thead><tbody><tr><td>");

	html += ("Способность к рутинной работе, к нахождению в условиях жестких рамок и ограничений, усидчивость и способность потребовать вышесказанное от окружающих, способность навязать свое мнение, убедить окружающих в жесткой форме");
	html += ("<br>");
	if ((zzruna['zznauthiz'] == 8) || (zzruna['zznauthiz1'] == 8) || (zzruna['zznauthiz2'] == 8) || (zzruna['zznauthiz3'] == 8) || (zzruna['zznauthiz4'] == 8) || (zzruna['zznauthiz5'] == 8) || (zzruna['zznauthiz6'] == 8) || (zzruna['zznauthiz7'] == 8) || (zzruna['zznauthiz8'] == 8) || (zzruna['zznauthiz9'] == 8) || (zzruna['zznauthiz10'] == 8) || (zzruna['zznauthiz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Nauthiz'" + "</b><br>");
	}
	sum_nauthiz = Math.round((zzruna['zznauthiz'] + zzruna['zznauthiz2'] + zzruna['zznauthiz4'] + zzruna['zznauthiz6'] + zzruna['zznauthiz8'] + zzruna['zznauthiz10']) / 6);
	sum_nauthiz1 = Math.round((zzruna['zznauthiz1'] + zzruna['zznauthiz3'] + zzruna['zznauthiz5'] + zzruna['zznauthiz7'] + zzruna['zznauthiz9'] + zzruna['zznauthiz11']) / 6);
	html += ("<b>" + "Потенциал 'Nauthiz':  " + sum_nauthiz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Nauthiz':  " + sum_nauthiz + "</b>");
	nauthiz_z11 = zzruna['zznauthiz'] - zzruna['zznauthiz1'];
	nauthiz_z12 = zzruna['zznauthiz1'] - zzruna['zznauthiz'];
	nauthiz_z21 = zzruna['zznauthiz4'] - zzruna['zznauthiz5'];
	nauthiz_z22 = zzruna['zznauthiz5'] - zzruna['zznauthiz4'];
	nauthiz_z31 = zzruna['zznauthiz8'] - zzruna['zznauthiz9'];
	nauthiz_z32 = zzruna['zznauthiz9'] - zzruna['zznauthiz8'];
	if ((nauthiz_z11 > 0) && (nauthiz_z21 > 0) && (nauthiz_z31 > 0)) {
		nauthiz_zzz1 = 1;
		nauthiz_zz1 = nauthiz_z11 + nauthiz_z21 + nauthiz_z31;
		if (nauthiz_z11 > nauthiz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Nauthiz': + " + nauthiz_zz1 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Nauthiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Nauthiz': + " + nauthiz_zz1 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Nauthiz' + " + "</b>");
			}
		}
	}
	if ((nauthiz_z12 > 0) && (nauthiz_z22 > 0) && (nauthiz_z32 > 0)) {
		nauthiz_zzz2 = 1;
		nauthiz_zz2 = nauthiz_z12 + nauthiz_z22 + nauthiz_z32;
		if (nauthiz_z12 > nauthiz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Nauthiz': - " + nauthiz_zz2 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Nauthiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Nauthiz': - " + nauthiz_zz2 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Nauthiz' - " + "</b>");
			}
		}
	}
	nauthiz_z15 = zzruna['zznauthiz'] - zzruna['zznauthiz2'];
	nauthiz_z16 = zzruna['zznauthiz2'] - zzruna['zznauthiz'];
	nauthiz_z25 = zzruna['zznauthiz4'] - zzruna['zznauthiz6'];
	nauthiz_z26 = zzruna['zznauthiz6'] - zzruna['zznauthiz4'];
	nauthiz_z35 = zzruna['zznauthiz8'] - zzruna['zznauthiz10'];
	nauthiz_z36 = zzruna['zznauthiz10'] - zzruna['zznauthiz8'];
	if ((nauthiz_z15 > 0) && (nauthiz_z25 > 0) && (nauthiz_z35 > 0)) {
		nauthiz_zzz5 = 1;
		nauthiz_zz5 = nauthiz_z15 + nauthiz_z25 + nauthiz_z35;
		if (nauthiz_z15 > nauthiz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Nauthiz': + " + nauthiz_zz5 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Nauthiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Nauthiz' + " + nauthiz_zz5 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Nauthiz' + " + "</b>");
			}
		}
	}
	if ((nauthiz_z16 > 0) && (nauthiz_z26 > 0) && (nauthiz_z36 > 0)) {
		nauthiz_zzz6 = 1;
		nauthiz_zz6 = nauthiz_z16 + nauthiz_z26 + nauthiz_z36;
		if (nauthiz_z16 > nauthiz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Nauthiz': - " + nauthiz_zz6 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Nauthiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Nauthiz' - " + nauthiz_zz6 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Nauthiz' - " + "</b>");
			}
		}
	}
	nauthiz_z17 = zzruna['zznauthiz1'] - zzruna['zznauthiz3'];
	nauthiz_z18 = zzruna['zznauthiz3'] - zzruna['zznauthiz1'];
	nauthiz_z27 = zzruna['zznauthiz5'] - zzruna['zznauthiz7'];
	nauthiz_z28 = zzruna['zznauthiz7'] - zzruna['zznauthiz5'];
	nauthiz_z37 = zzruna['zznauthiz9'] - zzruna['zznauthiz11'];
	nauthiz_z38 = zzruna['zznauthiz11'] - zzruna['zznauthiz9'];
	if ((nauthiz_z17 > 0) && (nauthiz_z27 > 0) && (nauthiz_z37 > 0)) {
		nauthiz_zzz7 = 1;
		nauthiz_zz7 = nauthiz_z17 + nauthiz_z27 + nauthiz_z37;
		if (nauthiz_z17 > nauthiz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Nauthiz' + " + nauthiz_zz7 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Nauthiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Nauthiz' + " + nauthiz_zz7 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Nauthiz' + " + "</b>");
			}
		}
	}
	if ((nauthiz_z18 > 0) && (nauthiz_z28 > 0) && (nauthiz_z38 > 0)) {
		nauthiz_zzz8 = 1;
		nauthiz_zz8 = nauthiz_z18 + nauthiz_z28 + nauthiz_z38;
		if (nauthiz_z18 > nauthiz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Nauthiz' - " + nauthiz_zz8 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Nauthiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Nauthiz' - " + nauthiz_zz8 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Nauthiz' - " + "</b>");
			}
		}
	}
	nauthiz_z13 = zzruna['zznauthiz2'] - zzruna['zznauthiz3'];
	nauthiz_z14 = zzruna['zznauthiz3'] - zzruna['zznauthiz2'];
	nauthiz_z23 = zzruna['zznauthiz6'] - zzruna['zznauthiz7'];
	nauthiz_z24 = zzruna['zznauthiz7'] - zzruna['zznauthiz6'];
	nauthiz_z33 = zzruna['zznauthiz10'] - zzruna['zznauthiz11'];
	nauthiz_z34 = zzruna['zznauthiz11'] - zzruna['zznauthiz10'];
	if ((nauthiz_z13 > 0) && (nauthiz_z23 > 0) && (nauthiz_z33 > 0)) {
		nauthiz_zzz3 = 1;
		nauthiz_zz3 = nauthiz_z13 + nauthiz_z23 + nauthiz_z33;
		if (nauthiz_z13 >= nauthiz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Nauthiz' + " + nauthiz_zz3 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Nauthiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Nauthiz' + " + nauthiz_zz3 + "</b>");
			if ((sum_nauthiz > sum_nauthiz1) & (nauthiz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Nauthiz' + " + "</b>");
			}
		}
	}
	if ((nauthiz_z14 > 0) && (nauthiz_z24 > 0) && (nauthiz_z34 > 0)) {
		nauthiz_zzz4 = 1;
		nauthiz_zz4 = nauthiz_z14 + nauthiz_z24 + nauthiz_z34;
		if (nauthiz_z12 >= nauthiz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Nauthiz' - " + nauthiz_zz4 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Nauthiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Nauthiz' - " + nauthiz_zz4 + "</b>");
			if ((sum_nauthiz < sum_nauthiz1) & (nauthiz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Nauthiz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Nauthiz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}