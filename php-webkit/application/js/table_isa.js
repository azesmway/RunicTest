function table_isa() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Isa'</th></thead><tbody><tr><td>");
	html += ("Способность к медитации, к всесторонней проверке перед решающим шагом, способность остановиться в нужный момент, отношение к отдыху, в некоторых случаях пассивность");
	html += ("<br>");
	if ((zzruna['zzisa'] == 8) || (zzruna['zzisa1'] == 8) || (zzruna['zzisa2'] == 8) || (zzruna['zzisa3'] == 8) || (zzruna['zzisa4'] == 8) || (zzruna['zzisa5'] == 8) || (zzruna['zzisa6'] == 8) || (zzruna['zzisa7'] == 8) || (zzruna['zzisa8'] == 8) || (zzruna['zzisa9'] == 8) || (zzruna['zzisa10'] == 8) || (zzruna['zzisa11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Isa'" + "</b><br>");
	}
	sum_isa = Math.round((zzruna['zzisa'] + zzruna['zzisa2'] + zzruna['zzisa4'] + zzruna['zzisa6'] + zzruna['zzisa8'] + zzruna['zzisa10']) / 6);
	sum_isa1 = Math.round((zzruna['zzisa1'] + zzruna['zzisa3'] + zzruna['zzisa5'] + zzruna['zzisa7'] + zzruna['zzisa9'] + zzruna['zzisa11']) / 6);
	html += ("<b>" + "Потенциал 'Isa':  " + sum_isa1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Isa':  " + sum_isa + "</b>");
	isa_z11 = zzruna['zzisa'] - zzruna['zzisa1'];
	isa_z12 = zzruna['zzisa1'] - zzruna['zzisa'];
	isa_z21 = zzruna['zzisa4'] - zzruna['zzisa5'];
	isa_z22 = zzruna['zzisa5'] - zzruna['zzisa4'];
	isa_z31 = zzruna['zzisa8'] - zzruna['zzisa9'];
	isa_z32 = zzruna['zzisa9'] - zzruna['zzisa8'];
	if ((isa_z11 > 0) && (isa_z21 > 0) && (isa_z31 > 0)) {
		isa_zzz1 = 1;
		isa_zz1 = isa_z11 + isa_z21 + isa_z31;
		if (isa_z11 > isa_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Isa': + " + isa_zz1 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Isa' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Isa': + " + isa_zz1 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Isa' + " + "</b>");
			}
		}
	}
	if ((isa_z12 > 0) && (isa_z22 > 0) && (isa_z32 > 0)) {
		isa_zzz2 = 1;
		isa_zz2 = isa_z12 + isa_z22 + isa_z32;
		if (isa_z12 > isa_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Isa': - " + isa_zz2 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Isa' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Isa': - " + isa_zz2 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Isa' - " + "</b>");
			}
		}
	}
	isa_z15 = zzruna['zzisa'] - zzruna['zzisa2'];
	isa_z16 = zzruna['zzisa2'] - zzruna['zzisa'];
	isa_z25 = zzruna['zzisa4'] - zzruna['zzisa6'];
	isa_z26 = zzruna['zzisa6'] - zzruna['zzisa4'];
	isa_z35 = zzruna['zzisa8'] - zzruna['zzisa10'];
	isa_z36 = zzruna['zzisa10'] - zzruna['zzisa8'];
	if ((isa_z15 > 0) && (isa_z25 > 0) && (isa_z35 > 0)) {
		isa_zzz5 = 1;
		isa_zz5 = isa_z15 + isa_z25 + isa_z35;
		if (isa_z15 > isa_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Isa': + " + isa_zz5 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Isa' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Isa' + " + isa_zz5 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Isa' + " + "</b>");
			}
		}
	}
	if ((isa_z16 > 0) && (isa_z26 > 0) && (isa_z36 > 0)) {
		isa_zzz6 = 1;
		isa_zz6 = isa_z16 + isa_z26 + isa_z36;
		if (isa_z16 > isa_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Isa': - " + isa_zz6 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Isa' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Isa' - " + isa_zz6 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Isa' - " + "</b>");
			}
		}
	}
	isa_z17 = zzruna['zzisa1'] - zzruna['zzisa3'];
	isa_z18 = zzruna['zzisa3'] - zzruna['zzisa1'];
	isa_z27 = zzruna['zzisa5'] - zzruna['zzisa7'];
	isa_z28 = zzruna['zzisa7'] - zzruna['zzisa5'];
	isa_z37 = zzruna['zzisa9'] - zzruna['zzisa11'];
	isa_z38 = zzruna['zzisa11'] - zzruna['zzisa9'];
	if ((isa_z17 > 0) && (isa_z27 > 0) && (isa_z37 > 0)) {
		isa_zzz7 = 1;
		isa_zz7 = isa_z17 + isa_z27 + isa_z37;
		if (isa_z17 > isa_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Isa' + " + isa_zz7 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Isa' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Isa' + " + isa_zz7 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Isa' + " + "</b>");
			}
		}
	}
	if ((isa_z18 > 0) && (isa_z28 > 0) && (isa_z38 > 0)) {
		isa_zzz8 = 1;
		isa_zz8 = isa_z18 + isa_z28 + isa_z38;
		if (isa_z18 > isa_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Isa' - " + isa_zz8 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Isa' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Isa' - " + isa_zz8 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Isa' - " + "</b>");
			}
		}
	}
	isa_z13 = zzruna['zzisa2'] - zzruna['zzisa3'];
	isa_z14 = zzruna['zzisa3'] - zzruna['zzisa2'];
	isa_z23 = zzruna['zzisa6'] - zzruna['zzisa7'];
	isa_z24 = zzruna['zzisa7'] - zzruna['zzisa6'];
	isa_z33 = zzruna['zzisa10'] - zzruna['zzisa11'];
	isa_z34 = zzruna['zzisa11'] - zzruna['zzisa10'];
	if ((isa_z13 > 0) && (isa_z23 > 0) && (isa_z33 > 0)) {
		isa_zzz3 = 1;
		isa_zz3 = isa_z13 + isa_z23 + isa_z33;
		if (isa_z13 >= isa_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Isa' + " + isa_zz3 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Isa' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Isa' + " + isa_zz3 + "</b>");
			if ((sum_isa > sum_isa1) & (isa_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Isa' + " + "</b>");
			}
		}
	}
	if ((isa_z14 > 0) && (isa_z24 > 0) && (isa_z34 > 0)) {
		isa_zzz4 = 1;
		isa_zz4 = isa_z14 + isa_z24 + isa_z34;
		if (isa_z12 >= isa_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Isa' - " + isa_zz4 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Isa' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Isa' - " + isa_zz4 + "</b>");
			if ((sum_isa < sum_isa1) & (isa_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Isa' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Isa' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}