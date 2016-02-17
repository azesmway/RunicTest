function table_gebo() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Gebo'</th></thead><tbody><tr><td>");
	html += ("Способность к диалогу, партнерские качества, способность любить, отношения в коллективе, в общественной группе");
	html += ("<br>");
	if ((zzruna['zzgebo'] == 8) || (zzruna['zzgebo1'] == 8) || (zzruna['zzgebo2'] == 8) || (zzruna['zzgebo3'] == 8) || (zzruna['zzgebo4'] == 8) || (zzruna['zzgebo5'] == 8) || (zzruna['zzgebo6'] == 8) || (zzruna['zzgebo7'] == 8) || (zzruna['zzgebo8'] == 8) || (zzruna['zzgebo9'] == 8) || (zzruna['zzgebo10'] == 8) || (zzruna['zzgebo11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Gebo'" + "</b><br>");
	}
	sum_gebo = Math.round((zzruna['zzgebo'] + zzruna['zzgebo2'] + zzruna['zzgebo4'] + zzruna['zzgebo6'] + zzruna['zzgebo8'] + zzruna['zzgebo10']) / 6);
	sum_gebo1 = Math.round((zzruna['zzgebo1'] + zzruna['zzgebo3'] + zzruna['zzgebo5'] + zzruna['zzgebo7'] + zzruna['zzgebo9'] + zzruna['zzgebo11']) / 6);
	html += ("<b>" + "Потенциал 'Gebo':  " + sum_gebo1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Gebo':  " + sum_gebo + "</b>");
	gebo_z11 = zzruna['zzgebo'] - zzruna['zzgebo1'];
	gebo_z12 = zzruna['zzgebo1'] - zzruna['zzgebo'];
	gebo_z21 = zzruna['zzgebo4'] - zzruna['zzgebo5'];
	gebo_z22 = zzruna['zzgebo5'] - zzruna['zzgebo4'];
	gebo_z31 = zzruna['zzgebo8'] - zzruna['zzgebo9'];
	gebo_z32 = zzruna['zzgebo9'] - zzruna['zzgebo8'];
	if ((gebo_z11 > 0) && (gebo_z21 > 0) && (gebo_z31 > 0)) {
		gebo_zzz1 = 1;
		gebo_zz1 = gebo_z11 + gebo_z21 + gebo_z31;
		if (gebo_z11 > gebo_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Gebo': + " + gebo_zz1 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Gebo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Gebo': + " + gebo_zz1 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Gebo' + " + "</b>");
			}
		}
	}
	if ((gebo_z12 > 0) && (gebo_z22 > 0) && (gebo_z32 > 0)) {
		gebo_zzz2 = 1;
		gebo_zz2 = gebo_z12 + gebo_z22 + gebo_z32;
		if (gebo_z12 > gebo_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Gebo': - " + gebo_zz2 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Gebo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Gebo': - " + gebo_zz2 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Gebo' - " + "</b>");
			}
		}
	}
	gebo_z15 = zzruna['zzgebo'] - zzruna['zzgebo2'];
	gebo_z16 = zzruna['zzgebo2'] - zzruna['zzgebo'];
	gebo_z25 = zzruna['zzgebo4'] - zzruna['zzgebo6'];
	gebo_z26 = zzruna['zzgebo6'] - zzruna['zzgebo4'];
	gebo_z35 = zzruna['zzgebo8'] - zzruna['zzgebo10'];
	gebo_z36 = zzruna['zzgebo10'] - zzruna['zzgebo8'];
	if ((gebo_z15 > 0) && (gebo_z25 > 0) && (gebo_z35 > 0)) {
		gebo_zzz5 = 1;
		gebo_zz5 = gebo_z15 + gebo_z25 + gebo_z35;
		if (gebo_z15 > gebo_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Gebo': + " + gebo_zz5 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Gebo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Gebo' + " + gebo_zz5 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Gebo' + " + "</b>");
			}
		}
	}
	if ((gebo_z16 > 0) && (gebo_z26 > 0) && (gebo_z36 > 0)) {
		gebo_zzz6 = 1;
		gebo_zz6 = gebo_z16 + gebo_z26 + gebo_z36;
		if (gebo_z16 > gebo_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Gebo': - " + gebo_zz6 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Gebo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Gebo' - " + gebo_zz6 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Gebo' - " + "</b>");
			}
		}
	}
	gebo_z17 = zzruna['zzgebo1'] - zzruna['zzgebo3'];
	gebo_z18 = zzruna['zzgebo3'] - zzruna['zzgebo1'];
	gebo_z27 = zzruna['zzgebo5'] - zzruna['zzgebo7'];
	gebo_z28 = zzruna['zzgebo7'] - zzruna['zzgebo5'];
	gebo_z37 = zzruna['zzgebo9'] - zzruna['zzgebo11'];
	gebo_z38 = zzruna['zzgebo11'] - zzruna['zzgebo9'];
	if ((gebo_z17 > 0) && (gebo_z27 > 0) && (gebo_z37 > 0)) {
		gebo_zzz7 = 1;
		gebo_zz7 = gebo_z17 + gebo_z27 + gebo_z37;
		if (gebo_z17 > gebo_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Gebo' + " + gebo_zz7 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Gebo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Gebo' + " + gebo_zz7 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Gebo' + " + "</b>");
			}
		}
	}
	if ((gebo_z18 > 0) && (gebo_z28 > 0) && (gebo_z38 > 0)) {
		gebo_zzz8 = 1;
		gebo_zz8 = gebo_z18 + gebo_z28 + gebo_z38;
		if (gebo_z18 > gebo_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Gebo' - " + gebo_zz8 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Gebo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Gebo' - " + gebo_zz8 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Gebo' - " + "</b>");
			}
		}
	}
	gebo_z13 = zzruna['zzgebo2'] - zzruna['zzgebo3'];
	gebo_z14 = zzruna['zzgebo3'] - zzruna['zzgebo2'];
	gebo_z23 = zzruna['zzgebo6'] - zzruna['zzgebo7'];
	gebo_z24 = zzruna['zzgebo7'] - zzruna['zzgebo6'];
	gebo_z33 = zzruna['zzgebo10'] - zzruna['zzgebo11'];
	gebo_z34 = zzruna['zzgebo11'] - zzruna['zzgebo10'];
	if ((gebo_z13 > 0) && (gebo_z23 > 0) && (gebo_z33 > 0)) {
		gebo_zzz3 = 1;
		gebo_zz3 = gebo_z13 + gebo_z23 + gebo_z33;
		if (gebo_z13 >= gebo_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Gebo' + " + gebo_zz3 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Gebo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Gebo' + " + gebo_zz3 + "</b>");
			if ((sum_gebo > sum_gebo1) & (gebo_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Gebo' + " + "</b>");
			}
		}
	}
	if ((gebo_z14 > 0) && (gebo_z24 > 0) && (gebo_z34 > 0)) {
		gebo_zzz4 = 1;
		gebo_zz4 = gebo_z14 + gebo_z24 + gebo_z34;
		if (gebo_z12 >= gebo_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Gebo' - " + gebo_zz4 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Gebo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Gebo' - " + gebo_zz4 + "</b>");
			if ((sum_gebo < sum_gebo1) & (gebo_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Gebo' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Gebo' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}