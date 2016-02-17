function table_dagaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Dagaz'</th></thead><tbody><tr><td>");
	html += ("Способность доводить дела и процессы до конца, способность выхода на следующий цикл, а иногда и на следующий круг развития ");
	html += ("<br>");
	if ((zzruna['zzdagaz'] == 8) || (zzruna['zzdagaz1'] == 8) || (zzruna['zzdagaz2'] == 8) || (zzruna['zzdagaz3'] == 8) || (zzruna['zzdagaz4'] == 8) || (zzruna['zzdagaz5'] == 8) || (zzruna['zzdagaz6'] == 8) || (zzruna['zzdagaz7'] == 8) || (zzruna['zzdagaz8'] == 8) || (zzruna['zzdagaz9'] == 8) || (zzruna['zzdagaz10'] == 8) || (zzruna['zzdagaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Dagaz'" + "</b><br>");
	}
	sum_dagaz = Math.round((zzruna['zzdagaz'] + zzruna['zzdagaz2'] + zzruna['zzdagaz4'] + zzruna['zzdagaz6'] + zzruna['zzdagaz8'] + zzruna['zzdagaz10']) / 6);
	sum_dagaz1 = Math.round((zzruna['zzdagaz1'] + zzruna['zzdagaz3'] + zzruna['zzdagaz5'] + zzruna['zzdagaz7'] + zzruna['zzdagaz9'] + zzruna['zzdagaz11']) / 6);
	html += ("<b>" + "Потенциал 'Dagaz':  " + sum_dagaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Dagaz':  " + sum_dagaz + "</b>");
	dagaz_z11 = zzruna['zzdagaz'] - zzruna['zzdagaz1'];
	dagaz_z12 = zzruna['zzdagaz1'] - zzruna['zzdagaz'];
	dagaz_z21 = zzruna['zzdagaz4'] - zzruna['zzdagaz5'];
	dagaz_z22 = zzruna['zzdagaz5'] - zzruna['zzdagaz4'];
	dagaz_z31 = zzruna['zzdagaz8'] - zzruna['zzdagaz9'];
	dagaz_z32 = zzruna['zzdagaz9'] - zzruna['zzdagaz8'];
	if ((dagaz_z11 > 0) && (dagaz_z21 > 0) && (dagaz_z31 > 0)) {
		dagaz_zzz1 = 1;
		dagaz_zz1 = dagaz_z11 + dagaz_z21 + dagaz_z31;
		if (dagaz_z11 > dagaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Dagaz': + " + dagaz_zz1 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Dagaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Dagaz': + " + dagaz_zz1 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Dagaz' + " + "</b>");
			}
		}
	}
	if ((dagaz_z12 > 0) && (dagaz_z22 > 0) && (dagaz_z32 > 0)) {
		dagaz_zzz2 = 1;
		dagaz_zz2 = dagaz_z12 + dagaz_z22 + dagaz_z32;
		if (dagaz_z12 > dagaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Dagaz': - " + dagaz_zz2 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Dagaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Dagaz': - " + dagaz_zz2 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Dagaz' - " + "</b>");
			}
		}
	}
	dagaz_z15 = zzruna['zzdagaz'] - zzruna['zzdagaz2'];
	dagaz_z16 = zzruna['zzdagaz2'] - zzruna['zzdagaz'];
	dagaz_z25 = zzruna['zzdagaz4'] - zzruna['zzdagaz6'];
	dagaz_z26 = zzruna['zzdagaz6'] - zzruna['zzdagaz4'];
	dagaz_z35 = zzruna['zzdagaz8'] - zzruna['zzdagaz10'];
	dagaz_z36 = zzruna['zzdagaz10'] - zzruna['zzdagaz8'];
	if ((dagaz_z15 > 0) && (dagaz_z25 > 0) && (dagaz_z35 > 0)) {
		dagaz_zzz5 = 1;
		dagaz_zz5 = dagaz_z15 + dagaz_z25 + dagaz_z35;
		if (dagaz_z15 > dagaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Dagaz': + " + dagaz_zz5 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Dagaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Dagaz' + " + dagaz_zz5 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Dagaz' + " + "</b>");
			}
		}
	}
	if ((dagaz_z16 > 0) && (dagaz_z26 > 0) && (dagaz_z36 > 0)) {
		dagaz_zzz6 = 1;
		dagaz_zz6 = dagaz_z16 + dagaz_z26 + dagaz_z36;
		if (dagaz_z16 > dagaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Dagaz': - " + dagaz_zz6 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Dagaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Dagaz' - " + dagaz_zz6 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Dagaz' - " + "</b>");
			}
		}
	}
	dagaz_z17 = zzruna['zzdagaz1'] - zzruna['zzdagaz3'];
	dagaz_z18 = zzruna['zzdagaz3'] - zzruna['zzdagaz1'];
	dagaz_z27 = zzruna['zzdagaz5'] - zzruna['zzdagaz7'];
	dagaz_z28 = zzruna['zzdagaz7'] - zzruna['zzdagaz5'];
	dagaz_z37 = zzruna['zzdagaz9'] - zzruna['zzdagaz11'];
	dagaz_z38 = zzruna['zzdagaz11'] - zzruna['zzdagaz9'];
	if ((dagaz_z17 > 0) && (dagaz_z27 > 0) && (dagaz_z37 > 0)) {
		dagaz_zzz7 = 1;
		dagaz_zz7 = dagaz_z17 + dagaz_z27 + dagaz_z37;
		if (dagaz_z17 > dagaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Dagaz' + " + dagaz_zz7 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Dagaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Dagaz' + " + dagaz_zz7 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Dagaz' + " + "</b>");
			}
		}
	}
	if ((dagaz_z18 > 0) && (dagaz_z28 > 0) && (dagaz_z38 > 0)) {
		dagaz_zzz8 = 1;
		dagaz_zz8 = dagaz_z18 + dagaz_z28 + dagaz_z38;
		if (dagaz_z18 > dagaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Dagaz' - " + dagaz_zz8 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Dagaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Dagaz' - " + dagaz_zz8 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Dagaz' - " + "</b>");
			}
		}
	}
	dagaz_z13 = zzruna['zzdagaz2'] - zzruna['zzdagaz3'];
	dagaz_z14 = zzruna['zzdagaz3'] - zzruna['zzdagaz2'];
	dagaz_z23 = zzruna['zzdagaz6'] - zzruna['zzdagaz7'];
	dagaz_z24 = zzruna['zzdagaz7'] - zzruna['zzdagaz6'];
	dagaz_z33 = zzruna['zzdagaz10'] - zzruna['zzdagaz11'];
	dagaz_z34 = zzruna['zzdagaz11'] - zzruna['zzdagaz10'];
	if ((dagaz_z13 > 0) && (dagaz_z23 > 0) && (dagaz_z33 > 0)) {
		dagaz_zzz3 = 1;
		dagaz_zz3 = dagaz_z13 + dagaz_z23 + dagaz_z33;
		if (dagaz_z13 >= dagaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Dagaz' + " + dagaz_zz3 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Dagaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Dagaz' + " + dagaz_zz3 + "</b>");
			if ((sum_dagaz > sum_dagaz1) & (dagaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Dagaz' + " + "</b>");
			}
		}
	}
	if ((dagaz_z14 > 0) && (dagaz_z24 > 0) && (dagaz_z34 > 0)) {
		dagaz_zzz4 = 1;
		dagaz_zz4 = dagaz_z14 + dagaz_z24 + dagaz_z34;
		if (dagaz_z12 >= dagaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Dagaz' - " + dagaz_zz4 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Dagaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Dagaz' - " + dagaz_zz4 + "</b>");
			if ((sum_dagaz < sum_dagaz1) & (dagaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Dagaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Dagaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}