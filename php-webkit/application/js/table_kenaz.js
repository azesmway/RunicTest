function table_kenaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Kenaz'</th></thead><tbody><tr><td>");
	html += ("Восприятие информации, способности и таланты, способность овладевать знаниями, усваивать опыт, делиться знаниями и опытом, энтузиазм, способность выявления истинности");
	html += ("<br>");
	if ((zzruna['zzkenaz'] == 8) || (zzruna['zzkenaz1'] == 8) || (zzruna['zzkenaz2'] == 8) || (zzruna['zzkenaz3'] == 8) || (zzruna['zzkenaz4'] == 8) || (zzruna['zzkenaz5'] == 8) || (zzruna['zzkenaz6'] == 8) || (zzruna['zzkenaz7'] == 8) || (zzruna['zzkenaz8'] == 8) || (zzruna['zzkenaz9'] == 8) || (zzruna['zzkenaz10'] == 8) || (zzruna['zzkenaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Kenaz'" + "</b><br>");
	}
	sum_kenaz = Math.round((zzruna['zzkenaz'] + zzruna['zzkenaz2'] + zzruna['zzkenaz4'] + zzruna['zzkenaz6'] + zzruna['zzkenaz8'] + zzruna['zzkenaz10']) / 6);
	sum_kenaz1 = Math.round((zzruna['zzkenaz1'] + zzruna['zzkenaz3'] + zzruna['zzkenaz5'] + zzruna['zzkenaz7'] + zzruna['zzkenaz9'] + zzruna['zzkenaz11']) / 6);
	html += ("<b>" + "Потенциал 'Kenaz':  " + sum_kenaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Kenaz':  " + sum_kenaz + "</b>");
	kenaz_z11 = zzruna['zzkenaz'] - zzruna['zzkenaz1'];
	kenaz_z12 = zzruna['zzkenaz1'] - zzruna['zzkenaz'];
	kenaz_z21 = zzruna['zzkenaz4'] - zzruna['zzkenaz5'];
	kenaz_z22 = zzruna['zzkenaz5'] - zzruna['zzkenaz4'];
	kenaz_z31 = zzruna['zzkenaz8'] - zzruna['zzkenaz9'];
	kenaz_z32 = zzruna['zzkenaz9'] - zzruna['zzkenaz8'];
	if ((kenaz_z11 > 0) && (kenaz_z21 > 0) && (kenaz_z31 > 0)) {
		kenaz_zzz1 = 1;
		kenaz_zz1 = kenaz_z11 + kenaz_z21 + kenaz_z31;
		if (kenaz_z11 > kenaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Kenaz': + " + kenaz_zz1 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Kenaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Kenaz': + " + kenaz_zz1 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Kenaz' + " + "</b>");
			}
		}
	}
	if ((kenaz_z12 > 0) && (kenaz_z22 > 0) && (kenaz_z32 > 0)) {
		kenaz_zzz2 = 1;
		kenaz_zz2 = kenaz_z12 + kenaz_z22 + kenaz_z32;
		if (kenaz_z12 > kenaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Kenaz': - " + kenaz_zz2 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Kenaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Kenaz': - " + kenaz_zz2 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Kenaz' - " + "</b>");
			}
		}
	}
	kenaz_z15 = zzruna['zzkenaz'] - zzruna['zzkenaz2'];
	kenaz_z16 = zzruna['zzkenaz2'] - zzruna['zzkenaz'];
	kenaz_z25 = zzruna['zzkenaz4'] - zzruna['zzkenaz6'];
	kenaz_z26 = zzruna['zzkenaz6'] - zzruna['zzkenaz4'];
	kenaz_z35 = zzruna['zzkenaz8'] - zzruna['zzkenaz10'];
	kenaz_z36 = zzruna['zzkenaz10'] - zzruna['zzkenaz8'];
	if ((kenaz_z15 > 0) && (kenaz_z25 > 0) && (kenaz_z35 > 0)) {
		kenaz_zzz5 = 1;
		kenaz_zz5 = kenaz_z15 + kenaz_z25 + kenaz_z35;
		if (kenaz_z15 > kenaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Kenaz': + " + kenaz_zz5 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Kenaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Kenaz' + " + kenaz_zz5 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Kenaz' + " + "</b>");
			}
		}
	}
	if ((kenaz_z16 > 0) && (kenaz_z26 > 0) && (kenaz_z36 > 0)) {
		kenaz_zzz6 = 1;
		kenaz_zz6 = kenaz_z16 + kenaz_z26 + kenaz_z36;
		if (kenaz_z16 > kenaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Kenaz': - " + kenaz_zz6 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Kenaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Kenaz' - " + kenaz_zz6 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Kenaz' - " + "</b>");
			}
		}
	}
	kenaz_z17 = zzruna['zzkenaz1'] - zzruna['zzkenaz3'];
	kenaz_z18 = zzruna['zzkenaz3'] - zzruna['zzkenaz1'];
	kenaz_z27 = zzruna['zzkenaz5'] - zzruna['zzkenaz7'];
	kenaz_z28 = zzruna['zzkenaz7'] - zzruna['zzkenaz5'];
	kenaz_z37 = zzruna['zzkenaz9'] - zzruna['zzkenaz11'];
	kenaz_z38 = zzruna['zzkenaz11'] - zzruna['zzkenaz9'];
	if ((kenaz_z17 > 0) && (kenaz_z27 > 0) && (kenaz_z37 > 0)) {
		kenaz_zzz7 = 1;
		kenaz_zz7 = kenaz_z17 + kenaz_z27 + kenaz_z37;
		if (kenaz_z17 > kenaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Kenaz' + " + kenaz_zz7 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Kenaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Kenaz' + " + kenaz_zz7 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Kenaz' + " + "</b>");
			}
		}
	}
	if ((kenaz_z18 > 0) && (kenaz_z28 > 0) && (kenaz_z38 > 0)) {
		kenaz_zzz8 = 1;
		kenaz_zz8 = kenaz_z18 + kenaz_z28 + kenaz_z38;
		if (kenaz_z18 > kenaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Kenaz' - " + kenaz_zz8 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Kenaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Kenaz' - " + kenaz_zz8 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Kenaz' - " + "</b>");
			}
		}
	}
	kenaz_z13 = zzruna['zzkenaz2'] - zzruna['zzkenaz3'];
	kenaz_z14 = zzruna['zzkenaz3'] - zzruna['zzkenaz2'];
	kenaz_z23 = zzruna['zzkenaz6'] - zzruna['zzkenaz7'];
	kenaz_z24 = zzruna['zzkenaz7'] - zzruna['zzkenaz6'];
	kenaz_z33 = zzruna['zzkenaz10'] - zzruna['zzkenaz11'];
	kenaz_z34 = zzruna['zzkenaz11'] - zzruna['zzkenaz10'];
	if ((kenaz_z13 > 0) && (kenaz_z23 > 0) && (kenaz_z33 > 0)) {
		kenaz_zzz3 = 1;
		kenaz_zz3 = kenaz_z13 + kenaz_z23 + kenaz_z33;
		if (kenaz_z13 >= kenaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Kenaz' + " + kenaz_zz3 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Kenaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Kenaz' + " + kenaz_zz3 + "</b>");
			if ((sum_kenaz > sum_kenaz1) & (kenaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Kenaz' + " + "</b>");
			}
		}
	}
	if ((kenaz_z14 > 0) && (kenaz_z24 > 0) && (kenaz_z34 > 0)) {
		kenaz_zzz4 = 1;
		kenaz_zz4 = kenaz_z14 + kenaz_z24 + kenaz_z34;
		if (kenaz_z12 >= kenaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Kenaz' - " + kenaz_zz4 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Kenaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Kenaz' - " + kenaz_zz4 + "</b>");
			if ((sum_kenaz < sum_kenaz1) & (kenaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Kenaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Kenaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}