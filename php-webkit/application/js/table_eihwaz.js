function table_eihwaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Eihwaz'</th></thead><tbody><tr><td>");
	html += ("Жизнеспособность и жизнестойкость, способность создавать условия для развития, для дальнейшей деятельности, идти вперед, оптимизм");
	html += ("<br>");
	if ((zzruna['zzeihwaz'] == 8) || (zzruna['zzeihwaz1'] == 8) || (zzruna['zzeihwaz2'] == 8) || (zzruna['zzeihwaz3'] == 8) || (zzruna['zzeihwaz4'] == 8) || (zzruna['zzeihwaz5'] == 8) || (zzruna['zzeihwaz6'] == 8) || (zzruna['zzeihwaz7'] == 8) || (zzruna['zzeihwaz8'] == 8) || (zzruna['zzeihwaz9'] == 8) || (zzruna['zzeihwaz10'] == 8) || (zzruna['zzeihwaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Eihwaz'" + "</b><br>");
	}
	sum_eihwaz = Math.round((zzruna['zzeihwaz'] + zzruna['zzeihwaz2'] + zzruna['zzeihwaz4'] + zzruna['zzeihwaz6'] + zzruna['zzeihwaz8'] + zzruna['zzeihwaz10']) / 6);
	sum_eihwaz1 = Math.round((zzruna['zzeihwaz1'] + zzruna['zzeihwaz3'] + zzruna['zzeihwaz5'] + zzruna['zzeihwaz7'] + zzruna['zzeihwaz9'] + zzruna['zzeihwaz11']) / 6);
	html += ("<b>" + "Потенциал 'Eihwaz':  " + sum_eihwaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Eihwaz':  " + sum_eihwaz + "</b>");
	eihwaz_z11 = zzruna['zzeihwaz'] - zzruna['zzeihwaz1'];
	eihwaz_z12 = zzruna['zzeihwaz1'] - zzruna['zzeihwaz'];
	eihwaz_z21 = zzruna['zzeihwaz4'] - zzruna['zzeihwaz5'];
	eihwaz_z22 = zzruna['zzeihwaz5'] - zzruna['zzeihwaz4'];
	eihwaz_z31 = zzruna['zzeihwaz8'] - zzruna['zzeihwaz9'];
	eihwaz_z32 = zzruna['zzeihwaz9'] - zzruna['zzeihwaz8'];
	if ((eihwaz_z11 > 0) && (eihwaz_z21 > 0) && (eihwaz_z31 > 0)) {
		eihwaz_zzz1 = 1;
		eihwaz_zz1 = eihwaz_z11 + eihwaz_z21 + eihwaz_z31;
		if (eihwaz_z11 > eihwaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Eihwaz': + " + eihwaz_zz1 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Eihwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Eihwaz': + " + eihwaz_zz1 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Eihwaz' + " + "</b>");
			}
		}
	}
	if ((eihwaz_z12 > 0) && (eihwaz_z22 > 0) && (eihwaz_z32 > 0)) {
		eihwaz_zzz2 = 1;
		eihwaz_zz2 = eihwaz_z12 + eihwaz_z22 + eihwaz_z32;
		if (eihwaz_z12 > eihwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Eihwaz': - " + eihwaz_zz2 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Eihwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Eihwaz': - " + eihwaz_zz2 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Eihwaz' - " + "</b>");
			}
		}
	}
	eihwaz_z15 = zzruna['zzeihwaz'] - zzruna['zzeihwaz2'];
	eihwaz_z16 = zzruna['zzeihwaz2'] - zzruna['zzeihwaz'];
	eihwaz_z25 = zzruna['zzeihwaz4'] - zzruna['zzeihwaz6'];
	eihwaz_z26 = zzruna['zzeihwaz6'] - zzruna['zzeihwaz4'];
	eihwaz_z35 = zzruna['zzeihwaz8'] - zzruna['zzeihwaz10'];
	eihwaz_z36 = zzruna['zzeihwaz10'] - zzruna['zzeihwaz8'];
	if ((eihwaz_z15 > 0) && (eihwaz_z25 > 0) && (eihwaz_z35 > 0)) {
		eihwaz_zzz5 = 1;
		eihwaz_zz5 = eihwaz_z15 + eihwaz_z25 + eihwaz_z35;
		if (eihwaz_z15 > eihwaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Eihwaz': + " + eihwaz_zz5 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Eihwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Eihwaz' + " + eihwaz_zz5 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Eihwaz' + " + "</b>");
			}
		}
	}
	if ((eihwaz_z16 > 0) && (eihwaz_z26 > 0) && (eihwaz_z36 > 0)) {
		eihwaz_zzz6 = 1;
		eihwaz_zz6 = eihwaz_z16 + eihwaz_z26 + eihwaz_z36;
		if (eihwaz_z16 > eihwaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Eihwaz': - " + eihwaz_zz6 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Eihwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Eihwaz' - " + eihwaz_zz6 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Eihwaz' - " + "</b>");
			}
		}
	}
	eihwaz_z17 = zzruna['zzeihwaz1'] - zzruna['zzeihwaz3'];
	eihwaz_z18 = zzruna['zzeihwaz3'] - zzruna['zzeihwaz1'];
	eihwaz_z27 = zzruna['zzeihwaz5'] - zzruna['zzeihwaz7'];
	eihwaz_z28 = zzruna['zzeihwaz7'] - zzruna['zzeihwaz5'];
	eihwaz_z37 = zzruna['zzeihwaz9'] - zzruna['zzeihwaz11'];
	eihwaz_z38 = zzruna['zzeihwaz11'] - zzruna['zzeihwaz9'];
	if ((eihwaz_z17 > 0) && (eihwaz_z27 > 0) && (eihwaz_z37 > 0)) {
		eihwaz_zzz7 = 1;
		eihwaz_zz7 = eihwaz_z17 + eihwaz_z27 + eihwaz_z37;
		if (eihwaz_z17 > eihwaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Eihwaz' + " + eihwaz_zz7 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Eihwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Eihwaz' + " + eihwaz_zz7 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Eihwaz' + " + "</b>");
			}
		}
	}
	if ((eihwaz_z18 > 0) && (eihwaz_z28 > 0) && (eihwaz_z38 > 0)) {
		eihwaz_zzz8 = 1;
		eihwaz_zz8 = eihwaz_z18 + eihwaz_z28 + eihwaz_z38;
		if (eihwaz_z18 > eihwaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Eihwaz' - " + eihwaz_zz8 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Eihwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Eihwaz' - " + eihwaz_zz8 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Eihwaz' - " + "</b>");
			}
		}
	}
	eihwaz_z13 = zzruna['zzeihwaz2'] - zzruna['zzeihwaz3'];
	eihwaz_z14 = zzruna['zzeihwaz3'] - zzruna['zzeihwaz2'];
	eihwaz_z23 = zzruna['zzeihwaz6'] - zzruna['zzeihwaz7'];
	eihwaz_z24 = zzruna['zzeihwaz7'] - zzruna['zzeihwaz6'];
	eihwaz_z33 = zzruna['zzeihwaz10'] - zzruna['zzeihwaz11'];
	eihwaz_z34 = zzruna['zzeihwaz11'] - zzruna['zzeihwaz10'];
	if ((eihwaz_z13 > 0) && (eihwaz_z23 > 0) && (eihwaz_z33 > 0)) {
		eihwaz_zzz3 = 1;
		eihwaz_zz3 = eihwaz_z13 + eihwaz_z23 + eihwaz_z33;
		if (eihwaz_z13 >= eihwaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Eihwaz' + " + eihwaz_zz3 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Eihwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Eihwaz' + " + eihwaz_zz3 + "</b>");
			if ((sum_eihwaz > sum_eihwaz1) & (eihwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Eihwaz' + " + "</b>");
			}
		}
	}
	if ((eihwaz_z14 > 0) && (eihwaz_z24 > 0) && (eihwaz_z34 > 0)) {
		eihwaz_zzz4 = 1;
		eihwaz_zz4 = eihwaz_z14 + eihwaz_z24 + eihwaz_z34;
		if (eihwaz_z12 >= eihwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Eihwaz' - " + eihwaz_zz4 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Eihwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Eihwaz' - " + eihwaz_zz4 + "</b>");
			if ((sum_eihwaz < sum_eihwaz1) & (eihwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Eihwaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Eihwaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}