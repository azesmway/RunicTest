function table_tiwaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Tiwaz'</th></thead><tbody><tr><td>");
	html += ("Мужество, способность к обороне и к контратаке, стойкость на жизненном пути, сила воина");
	html += ("<br>");
	if ((zzruna['zztiwaz'] == 8) || (zzruna['zztiwaz1'] == 8) || (zzruna['zztiwaz2'] == 8) || (zzruna['zztiwaz3'] == 8) || (zzruna['zztiwaz4'] == 8) || (zzruna['zztiwaz5'] == 8) || (zzruna['zztiwaz6'] == 8) || (zzruna['zztiwaz7'] == 8) || (zzruna['zztiwaz8'] == 8) || (zzruna['zztiwaz9'] == 8) || (zzruna['zztiwaz10'] == 8) || (zzruna['zztiwaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Tiwaz'" + "</b><br>");
	}
	sum_tiwaz = Math.round((zzruna['zztiwaz'] + zzruna['zztiwaz2'] + zzruna['zztiwaz4'] + zzruna['zztiwaz6'] + zzruna['zztiwaz8'] + zzruna['zztiwaz10']) / 6);
	sum_tiwaz1 = Math.round((zzruna['zztiwaz1'] + zzruna['zztiwaz3'] + zzruna['zztiwaz5'] + zzruna['zztiwaz7'] + zzruna['zztiwaz9'] + zzruna['zztiwaz11']) / 6);
	html += ("<b>" + "Потенциал 'Tiwaz':  " + sum_tiwaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Tiwaz':  " + sum_tiwaz + "</b>");
	tiwaz_z11 = zzruna['zztiwaz'] - zzruna['zztiwaz1'];
	tiwaz_z12 = zzruna['zztiwaz1'] - zzruna['zztiwaz'];
	tiwaz_z21 = zzruna['zztiwaz4'] - zzruna['zztiwaz5'];
	tiwaz_z22 = zzruna['zztiwaz5'] - zzruna['zztiwaz4'];
	tiwaz_z31 = zzruna['zztiwaz8'] - zzruna['zztiwaz9'];
	tiwaz_z32 = zzruna['zztiwaz9'] - zzruna['zztiwaz8'];
	if ((tiwaz_z11 > 0) && (tiwaz_z21 > 0) && (tiwaz_z31 > 0)) {
		tiwaz_zzz1 = 1;
		tiwaz_zz1 = tiwaz_z11 + tiwaz_z21 + tiwaz_z31;
		if (tiwaz_z11 > tiwaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Tiwaz': + " + tiwaz_zz1 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Tiwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Tiwaz': + " + tiwaz_zz1 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Tiwaz' + " + "</b>");
			}
		}
	}
	if ((tiwaz_z12 > 0) && (tiwaz_z22 > 0) && (tiwaz_z32 > 0)) {
		tiwaz_zzz2 = 1;
		tiwaz_zz2 = tiwaz_z12 + tiwaz_z22 + tiwaz_z32;
		if (tiwaz_z12 > tiwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Tiwaz': - " + tiwaz_zz2 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Tiwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Tiwaz': - " + tiwaz_zz2 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Tiwaz' - " + "</b>");
			}
		}
	}
	tiwaz_z15 = zzruna['zztiwaz'] - zzruna['zztiwaz2'];
	tiwaz_z16 = zzruna['zztiwaz2'] - zzruna['zztiwaz'];
	tiwaz_z25 = zzruna['zztiwaz4'] - zzruna['zztiwaz6'];
	tiwaz_z26 = zzruna['zztiwaz6'] - zzruna['zztiwaz4'];
	tiwaz_z35 = zzruna['zztiwaz8'] - zzruna['zztiwaz10'];
	tiwaz_z36 = zzruna['zztiwaz10'] - zzruna['zztiwaz8'];
	if ((tiwaz_z15 > 0) && (tiwaz_z25 > 0) && (tiwaz_z35 > 0)) {
		tiwaz_zzz5 = 1;
		tiwaz_zz5 = tiwaz_z15 + tiwaz_z25 + tiwaz_z35;
		if (tiwaz_z15 > tiwaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Tiwaz': + " + tiwaz_zz5 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Tiwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Tiwaz' + " + tiwaz_zz5 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Tiwaz' + " + "</b>");
			}
		}
	}
	if ((tiwaz_z16 > 0) && (tiwaz_z26 > 0) && (tiwaz_z36 > 0)) {
		tiwaz_zzz6 = 1;
		tiwaz_zz6 = tiwaz_z16 + tiwaz_z26 + tiwaz_z36;
		if (tiwaz_z16 > tiwaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Tiwaz': - " + tiwaz_zz6 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Tiwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Tiwaz' - " + tiwaz_zz6 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Tiwaz' - " + "</b>");
			}
		}
	}
	tiwaz_z17 = zzruna['zztiwaz1'] - zzruna['zztiwaz3'];
	tiwaz_z18 = zzruna['zztiwaz3'] - zzruna['zztiwaz1'];
	tiwaz_z27 = zzruna['zztiwaz5'] - zzruna['zztiwaz7'];
	tiwaz_z28 = zzruna['zztiwaz7'] - zzruna['zztiwaz5'];
	tiwaz_z37 = zzruna['zztiwaz9'] - zzruna['zztiwaz11'];
	tiwaz_z38 = zzruna['zztiwaz11'] - zzruna['zztiwaz9'];
	if ((tiwaz_z17 > 0) && (tiwaz_z27 > 0) && (tiwaz_z37 > 0)) {
		tiwaz_zzz7 = 1;
		tiwaz_zz7 = tiwaz_z17 + tiwaz_z27 + tiwaz_z37;
		if (tiwaz_z17 > tiwaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Tiwaz' + " + tiwaz_zz7 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Tiwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Tiwaz' + " + tiwaz_zz7 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Tiwaz' + " + "</b>");
			}
		}
	}
	if ((tiwaz_z18 > 0) && (tiwaz_z28 > 0) && (tiwaz_z38 > 0)) {
		tiwaz_zzz8 = 1;
		tiwaz_zz8 = tiwaz_z18 + tiwaz_z28 + tiwaz_z38;
		if (tiwaz_z18 > tiwaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Tiwaz' - " + tiwaz_zz8 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Tiwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Tiwaz' - " + tiwaz_zz8 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Tiwaz' - " + "</b>");
			}
		}
	}
	tiwaz_z13 = zzruna['zztiwaz2'] - zzruna['zztiwaz3'];
	tiwaz_z14 = zzruna['zztiwaz3'] - zzruna['zztiwaz2'];
	tiwaz_z23 = zzruna['zztiwaz6'] - zzruna['zztiwaz7'];
	tiwaz_z24 = zzruna['zztiwaz7'] - zzruna['zztiwaz6'];
	tiwaz_z33 = zzruna['zztiwaz10'] - zzruna['zztiwaz11'];
	tiwaz_z34 = zzruna['zztiwaz11'] - zzruna['zztiwaz10'];
	if ((tiwaz_z13 > 0) && (tiwaz_z23 > 0) && (tiwaz_z33 > 0)) {
		tiwaz_zzz3 = 1;
		tiwaz_zz3 = tiwaz_z13 + tiwaz_z23 + tiwaz_z33;
		if (tiwaz_z13 >= tiwaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Tiwaz' + " + tiwaz_zz3 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Tiwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Tiwaz' + " + tiwaz_zz3 + "</b>");
			if ((sum_tiwaz > sum_tiwaz1) & (tiwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Tiwaz' + " + "</b>");
			}
		}
	}
	if ((tiwaz_z14 > 0) && (tiwaz_z24 > 0) && (tiwaz_z34 > 0)) {
		tiwaz_zzz4 = 1;
		tiwaz_zz4 = tiwaz_z14 + tiwaz_z24 + tiwaz_z34;
		if (tiwaz_z12 >= tiwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Tiwaz' - " + tiwaz_zz4 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Tiwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Tiwaz' - " + tiwaz_zz4 + "</b>");
			if ((sum_tiwaz < sum_tiwaz1) & (tiwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Tiwaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Tiwaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}