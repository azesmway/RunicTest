function table_sowilo() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Sowilo'</th></thead><tbody><tr><td>");
	html += ("Стремление к успеху, способность достичь успеха, нацеленность на успех, мотивация жизнедеятельности");
	html += ("<br>");
	if ((zzruna['zzsowilo'] == 8) || (zzruna['zzsowilo1'] == 8) || (zzruna['zzsowilo2'] == 8) || (zzruna['zzsowilo3'] == 8) || (zzruna['zzsowilo4'] == 8) || (zzruna['zzsowilo5'] == 8) || (zzruna['zzsowilo6'] == 8) || (zzruna['zzsowilo7'] == 8) || (zzruna['zzsowilo8'] == 8) || (zzruna['zzsowilo9'] == 8) || (zzruna['zzsowilo10'] == 8) || (zzruna['zzsowilo11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Sowilo'" + "</b><br>");
	}
	sum_sowilo = Math.round((zzruna['zzsowilo'] + zzruna['zzsowilo2'] + zzruna['zzsowilo4'] + zzruna['zzsowilo6'] + zzruna['zzsowilo8'] + zzruna['zzsowilo10']) / 6);
	sum_sowilo1 = Math.round((zzruna['zzsowilo1'] + zzruna['zzsowilo3'] + zzruna['zzsowilo5'] + zzruna['zzsowilo7'] + zzruna['zzsowilo9'] + zzruna['zzsowilo11']) / 6);
	html += ("<b>" + "Потенциал 'Sowilo':  " + sum_sowilo1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Sowilo':  " + sum_sowilo + "</b>");
	sowilo_z11 = zzruna['zzsowilo'] - zzruna['zzsowilo1'];
	sowilo_z12 = zzruna['zzsowilo1'] - zzruna['zzsowilo'];
	sowilo_z21 = zzruna['zzsowilo4'] - zzruna['zzsowilo5'];
	sowilo_z22 = zzruna['zzsowilo5'] - zzruna['zzsowilo4'];
	sowilo_z31 = zzruna['zzsowilo8'] - zzruna['zzsowilo9'];
	sowilo_z32 = zzruna['zzsowilo9'] - zzruna['zzsowilo8'];
	if ((sowilo_z11 > 0) && (sowilo_z21 > 0) && (sowilo_z31 > 0)) {
		sowilo_zzz1 = 1;
		sowilo_zz1 = sowilo_z11 + sowilo_z21 + sowilo_z31;
		if (sowilo_z11 > sowilo_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Sowilo': + " + sowilo_zz1 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Sowilo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Sowilo': + " + sowilo_zz1 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Sowilo' + " + "</b>");
			}
		}
	}
	if ((sowilo_z12 > 0) && (sowilo_z22 > 0) && (sowilo_z32 > 0)) {
		sowilo_zzz2 = 1;
		sowilo_zz2 = sowilo_z12 + sowilo_z22 + sowilo_z32;
		if (sowilo_z12 > sowilo_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Sowilo': - " + sowilo_zz2 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Sowilo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Sowilo': - " + sowilo_zz2 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Sowilo' - " + "</b>");
			}
		}
	}
	sowilo_z15 = zzruna['zzsowilo'] - zzruna['zzsowilo2'];
	sowilo_z16 = zzruna['zzsowilo2'] - zzruna['zzsowilo'];
	sowilo_z25 = zzruna['zzsowilo4'] - zzruna['zzsowilo6'];
	sowilo_z26 = zzruna['zzsowilo6'] - zzruna['zzsowilo4'];
	sowilo_z35 = zzruna['zzsowilo8'] - zzruna['zzsowilo10'];
	sowilo_z36 = zzruna['zzsowilo10'] - zzruna['zzsowilo8'];
	if ((sowilo_z15 > 0) && (sowilo_z25 > 0) && (sowilo_z35 > 0)) {
		sowilo_zzz5 = 1;
		sowilo_zz5 = sowilo_z15 + sowilo_z25 + sowilo_z35;
		if (sowilo_z15 > sowilo_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Sowilo': + " + sowilo_zz5 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Sowilo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Sowilo' + " + sowilo_zz5 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Sowilo' + " + "</b>");
			}
		}
	}
	if ((sowilo_z16 > 0) && (sowilo_z26 > 0) && (sowilo_z36 > 0)) {
		sowilo_zzz6 = 1;
		sowilo_zz6 = sowilo_z16 + sowilo_z26 + sowilo_z36;
		if (sowilo_z16 > sowilo_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Sowilo': - " + sowilo_zz6 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Sowilo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Sowilo' - " + sowilo_zz6 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Sowilo' - " + "</b>");
			}
		}
	}
	sowilo_z17 = zzruna['zzsowilo1'] - zzruna['zzsowilo3'];
	sowilo_z18 = zzruna['zzsowilo3'] - zzruna['zzsowilo1'];
	sowilo_z27 = zzruna['zzsowilo5'] - zzruna['zzsowilo7'];
	sowilo_z28 = zzruna['zzsowilo7'] - zzruna['zzsowilo5'];
	sowilo_z37 = zzruna['zzsowilo9'] - zzruna['zzsowilo11'];
	sowilo_z38 = zzruna['zzsowilo11'] - zzruna['zzsowilo9'];
	if ((sowilo_z17 > 0) && (sowilo_z27 > 0) && (sowilo_z37 > 0)) {
		sowilo_zzz7 = 1;
		sowilo_zz7 = sowilo_z17 + sowilo_z27 + sowilo_z37;
		if (sowilo_z17 > sowilo_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Sowilo' + " + sowilo_zz7 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Sowilo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Sowilo' + " + sowilo_zz7 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Sowilo' + " + "</b>");
			}
		}
	}
	if ((sowilo_z18 > 0) && (sowilo_z28 > 0) && (sowilo_z38 > 0)) {
		sowilo_zzz8 = 1;
		sowilo_zz8 = sowilo_z18 + sowilo_z28 + sowilo_z38;
		if (sowilo_z18 > sowilo_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Sowilo' - " + sowilo_zz8 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Sowilo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Sowilo' - " + sowilo_zz8 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Sowilo' - " + "</b>");
			}
		}
	}
	sowilo_z13 = zzruna['zzsowilo2'] - zzruna['zzsowilo3'];
	sowilo_z14 = zzruna['zzsowilo3'] - zzruna['zzsowilo2'];
	sowilo_z23 = zzruna['zzsowilo6'] - zzruna['zzsowilo7'];
	sowilo_z24 = zzruna['zzsowilo7'] - zzruna['zzsowilo6'];
	sowilo_z33 = zzruna['zzsowilo10'] - zzruna['zzsowilo11'];
	sowilo_z34 = zzruna['zzsowilo11'] - zzruna['zzsowilo10'];
	if ((sowilo_z13 > 0) && (sowilo_z23 > 0) && (sowilo_z33 > 0)) {
		sowilo_zzz3 = 1;
		sowilo_zz3 = sowilo_z13 + sowilo_z23 + sowilo_z33;
		if (sowilo_z13 >= sowilo_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Sowilo' + " + sowilo_zz3 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Sowilo' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Sowilo' + " + sowilo_zz3 + "</b>");
			if ((sum_sowilo > sum_sowilo1) & (sowilo_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Sowilo' + " + "</b>");
			}
		}
	}
	if ((sowilo_z14 > 0) && (sowilo_z24 > 0) && (sowilo_z34 > 0)) {
		sowilo_zzz4 = 1;
		sowilo_zz4 = sowilo_z14 + sowilo_z24 + sowilo_z34;
		if (sowilo_z12 >= sowilo_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Sowilo' - " + sowilo_zz4 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Sowilo' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Sowilo' - " + sowilo_zz4 + "</b>");
			if ((sum_sowilo < sum_sowilo1) & (sowilo_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Sowilo' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Sowilo' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}