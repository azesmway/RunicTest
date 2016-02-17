function table_perthro() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Perthro'</th></thead><tbody><tr><td>");
	html += ("Возможность и способность к возрождению, к полному преобразованию, зарождению нового, сексуальная сфера, дети");
	html += ("<br>");
	if ((zzruna['zzperthro'] == 8) || (zzruna['zzperthro1'] == 8) || (zzruna['zzperthro2'] == 8) || (zzruna['zzperthro3'] == 8) || (zzruna['zzperthro4'] == 8) || (zzruna['zzperthro5'] == 8) || (zzruna['zzperthro6'] == 8) || (zzruna['zzperthro7'] == 8) || (zzruna['zzperthro8'] == 8) || (zzruna['zzperthro9'] == 8) || (zzruna['zzperthro10'] == 8) || (zzruna['zzperthro11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Perthro'" + "</b><br>");
	}
	sum_perthro = Math.round((zzruna['zzperthro'] + zzruna['zzperthro2'] + zzruna['zzperthro4'] + zzruna['zzperthro6'] + zzruna['zzperthro8'] + zzruna['zzperthro10']) / 6);
	sum_perthro1 = Math.round((zzruna['zzperthro1'] + zzruna['zzperthro3'] + zzruna['zzperthro5'] + zzruna['zzperthro7'] + zzruna['zzperthro9'] + zzruna['zzperthro11']) / 6);
	html += ("<b>" + "Потенциал 'Perthro':  " + sum_perthro1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Perthro':  " + sum_perthro + "</b>");
	perthro_z11 = zzruna['zzperthro'] - zzruna['zzperthro1'];
	perthro_z12 = zzruna['zzperthro1'] - zzruna['zzperthro'];
	perthro_z21 = zzruna['zzperthro4'] - zzruna['zzperthro5'];
	perthro_z22 = zzruna['zzperthro5'] - zzruna['zzperthro4'];
	perthro_z31 = zzruna['zzperthro8'] - zzruna['zzperthro9'];
	perthro_z32 = zzruna['zzperthro9'] - zzruna['zzperthro8'];
	if ((perthro_z11 > 0) && (perthro_z21 > 0) && (perthro_z31 > 0)) {
		perthro_zzz1 = 1;
		perthro_zz1 = perthro_z11 + perthro_z21 + perthro_z31;
		if (perthro_z11 > perthro_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Perthro': + " + perthro_zz1 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Perthro' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Perthro': + " + perthro_zz1 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Perthro' + " + "</b>");
			}
		}
	}
	if ((perthro_z12 > 0) && (perthro_z22 > 0) && (perthro_z32 > 0)) {
		perthro_zzz2 = 1;
		perthro_zz2 = perthro_z12 + perthro_z22 + perthro_z32;
		if (perthro_z12 > perthro_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Perthro': - " + perthro_zz2 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Perthro' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Perthro': - " + perthro_zz2 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Perthro' - " + "</b>");
			}
		}
	}
	perthro_z15 = zzruna['zzperthro'] - zzruna['zzperthro2'];
	perthro_z16 = zzruna['zzperthro2'] - zzruna['zzperthro'];
	perthro_z25 = zzruna['zzperthro4'] - zzruna['zzperthro6'];
	perthro_z26 = zzruna['zzperthro6'] - zzruna['zzperthro4'];
	perthro_z35 = zzruna['zzperthro8'] - zzruna['zzperthro10'];
	perthro_z36 = zzruna['zzperthro10'] - zzruna['zzperthro8'];
	if ((perthro_z15 > 0) && (perthro_z25 > 0) && (perthro_z35 > 0)) {
		perthro_zzz5 = 1;
		perthro_zz5 = perthro_z15 + perthro_z25 + perthro_z35;
		if (perthro_z15 > perthro_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Perthro': + " + perthro_zz5 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Perthro' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Perthro' + " + perthro_zz5 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Perthro' + " + "</b>");
			}
		}
	}
	if ((perthro_z16 > 0) && (perthro_z26 > 0) && (perthro_z36 > 0)) {
		perthro_zzz6 = 1;
		perthro_zz6 = perthro_z16 + perthro_z26 + perthro_z36;
		if (perthro_z16 > perthro_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Perthro': - " + perthro_zz6 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Perthro' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Perthro' - " + perthro_zz6 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Perthro' - " + "</b>");
			}
		}
	}
	perthro_z17 = zzruna['zzperthro1'] - zzruna['zzperthro3'];
	perthro_z18 = zzruna['zzperthro3'] - zzruna['zzperthro1'];
	perthro_z27 = zzruna['zzperthro5'] - zzruna['zzperthro7'];
	perthro_z28 = zzruna['zzperthro7'] - zzruna['zzperthro5'];
	perthro_z37 = zzruna['zzperthro9'] - zzruna['zzperthro11'];
	perthro_z38 = zzruna['zzperthro11'] - zzruna['zzperthro9'];
	if ((perthro_z17 > 0) && (perthro_z27 > 0) && (perthro_z37 > 0)) {
		perthro_zzz7 = 1;
		perthro_zz7 = perthro_z17 + perthro_z27 + perthro_z37;
		if (perthro_z17 > perthro_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Perthro' + " + perthro_zz7 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Perthro' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Perthro' + " + perthro_zz7 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Perthro' + " + "</b>");
			}
		}
	}
	if ((perthro_z18 > 0) && (perthro_z28 > 0) && (perthro_z38 > 0)) {
		perthro_zzz8 = 1;
		perthro_zz8 = perthro_z18 + perthro_z28 + perthro_z38;
		if (perthro_z18 > perthro_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Perthro' - " + perthro_zz8 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Perthro' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Perthro' - " + perthro_zz8 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Perthro' - " + "</b>");
			}
		}
	}
	perthro_z13 = zzruna['zzperthro2'] - zzruna['zzperthro3'];
	perthro_z14 = zzruna['zzperthro3'] - zzruna['zzperthro2'];
	perthro_z23 = zzruna['zzperthro6'] - zzruna['zzperthro7'];
	perthro_z24 = zzruna['zzperthro7'] - zzruna['zzperthro6'];
	perthro_z33 = zzruna['zzperthro10'] - zzruna['zzperthro11'];
	perthro_z34 = zzruna['zzperthro11'] - zzruna['zzperthro10'];
	if ((perthro_z13 > 0) && (perthro_z23 > 0) && (perthro_z33 > 0)) {
		perthro_zzz3 = 1;
		perthro_zz3 = perthro_z13 + perthro_z23 + perthro_z33;
		if (perthro_z13 >= perthro_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Perthro' + " + perthro_zz3 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Perthro' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Perthro' + " + perthro_zz3 + "</b>");
			if ((sum_perthro > sum_perthro1) & (perthro_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Perthro' + " + "</b>");
			}
		}
	}
	if ((perthro_z14 > 0) && (perthro_z24 > 0) && (perthro_z34 > 0)) {
		perthro_zzz4 = 1;
		perthro_zz4 = perthro_z14 + perthro_z24 + perthro_z34;
		if (perthro_z12 >= perthro_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Perthro' - " + perthro_zz4 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Perthro' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Perthro' - " + perthro_zz4 + "</b>");
			if ((sum_perthro < sum_perthro1) & (perthro_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Perthro' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Perthro' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}