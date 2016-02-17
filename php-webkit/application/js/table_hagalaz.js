function table_hagalaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Hagalaz'</th></thead><tbody><tr><td>");
	html += ("Способность отринуть, а при необходимости и уничтожить устаревшее, вредное и не нужное, навести порядок, дать необходимый отпор");
	html += ("<br>");
	if ((zzruna['zzhagalaz'] == 8) || (zzruna['zzhagalaz1'] == 8) || (zzruna['zzhagalaz2'] == 8) || (zzruna['zzhagalaz3'] == 8) || (zzruna['zzhagalaz4'] == 8) || (zzruna['zzhagalaz5'] == 8) || (zzruna['zzhagalaz6'] == 8) || (zzruna['zzhagalaz7'] == 8) || (zzruna['zzhagalaz8'] == 8) || (zzruna['zzhagalaz9'] == 8) || (zzruna['zzhagalaz10'] == 8) || (zzruna['zzhagalaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Hagalaz'" + "</b><br>");
	}
	sum_hagalaz = Math.round((zzruna['zzhagalaz'] + zzruna['zzhagalaz2'] + zzruna['zzhagalaz4'] + zzruna['zzhagalaz6'] + zzruna['zzhagalaz8'] + zzruna['zzhagalaz10']) / 6);
	sum_hagalaz1 = Math.round((zzruna['zzhagalaz1'] + zzruna['zzhagalaz3'] + zzruna['zzhagalaz5'] + zzruna['zzhagalaz7'] + zzruna['zzhagalaz9'] + zzruna['zzhagalaz11']) / 6);
	html += ("<b>" + "Потенциал 'Hagalaz':  " + sum_hagalaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Hagalaz':  " + sum_hagalaz + "</b>");
	hagalaz_z11 = zzruna['zzhagalaz'] - zzruna['zzhagalaz1'];
	hagalaz_z12 = zzruna['zzhagalaz1'] - zzruna['zzhagalaz'];
	hagalaz_z21 = zzruna['zzhagalaz4'] - zzruna['zzhagalaz5'];
	hagalaz_z22 = zzruna['zzhagalaz5'] - zzruna['zzhagalaz4'];
	hagalaz_z31 = zzruna['zzhagalaz8'] - zzruna['zzhagalaz9'];
	hagalaz_z32 = zzruna['zzhagalaz9'] - zzruna['zzhagalaz8'];
	if ((hagalaz_z11 > 0) && (hagalaz_z21 > 0) && (hagalaz_z31 > 0)) {
		hagalaz_zzz1 = 1;
		hagalaz_zz1 = hagalaz_z11 + hagalaz_z21 + hagalaz_z31;
		if (hagalaz_z11 > hagalaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Hagalaz': + " + hagalaz_zz1 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Hagalaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Hagalaz': + " + hagalaz_zz1 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Hagalaz' + " + "</b>");
			}
		}
	}
	if ((hagalaz_z12 > 0) && (hagalaz_z22 > 0) && (hagalaz_z32 > 0)) {
		hagalaz_zzz2 = 1;
		hagalaz_zz2 = hagalaz_z12 + hagalaz_z22 + hagalaz_z32;
		if (hagalaz_z12 > hagalaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Hagalaz': - " + hagalaz_zz2 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Hagalaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Hagalaz': - " + hagalaz_zz2 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Hagalaz' - " + "</b>");
			}
		}
	}
	hagalaz_z15 = zzruna['zzhagalaz'] - zzruna['zzhagalaz2'];
	hagalaz_z16 = zzruna['zzhagalaz2'] - zzruna['zzhagalaz'];
	hagalaz_z25 = zzruna['zzhagalaz4'] - zzruna['zzhagalaz6'];
	hagalaz_z26 = zzruna['zzhagalaz6'] - zzruna['zzhagalaz4'];
	hagalaz_z35 = zzruna['zzhagalaz8'] - zzruna['zzhagalaz10'];
	hagalaz_z36 = zzruna['zzhagalaz10'] - zzruna['zzhagalaz8'];
	if ((hagalaz_z15 > 0) && (hagalaz_z25 > 0) && (hagalaz_z35 > 0)) {
		hagalaz_zzz5 = 1;
		hagalaz_zz5 = hagalaz_z15 + hagalaz_z25 + hagalaz_z35;
		if (hagalaz_z15 > hagalaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Hagalaz': + " + hagalaz_zz5 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Hagalaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Hagalaz' + " + hagalaz_zz5 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Hagalaz' + " + "</b>");
			}
		}
	}
	if ((hagalaz_z16 > 0) && (hagalaz_z26 > 0) && (hagalaz_z36 > 0)) {
		hagalaz_zzz6 = 1;
		hagalaz_zz6 = hagalaz_z16 + hagalaz_z26 + hagalaz_z36;
		if (hagalaz_z16 > hagalaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Hagalaz': - " + hagalaz_zz6 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Hagalaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Hagalaz' - " + hagalaz_zz6 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Hagalaz' - " + "</b>");
			}
		}
	}
	hagalaz_z17 = zzruna['zzhagalaz1'] - zzruna['zzhagalaz3'];
	hagalaz_z18 = zzruna['zzhagalaz3'] - zzruna['zzhagalaz1'];
	hagalaz_z27 = zzruna['zzhagalaz5'] - zzruna['zzhagalaz7'];
	hagalaz_z28 = zzruna['zzhagalaz7'] - zzruna['zzhagalaz5'];
	hagalaz_z37 = zzruna['zzhagalaz9'] - zzruna['zzhagalaz11'];
	hagalaz_z38 = zzruna['zzhagalaz11'] - zzruna['zzhagalaz9'];
	if ((hagalaz_z17 > 0) && (hagalaz_z27 > 0) && (hagalaz_z37 > 0)) {
		hagalaz_zzz7 = 1;
		hagalaz_zz7 = hagalaz_z17 + hagalaz_z27 + hagalaz_z37;
		if (hagalaz_z17 > hagalaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Hagalaz' + " + hagalaz_zz7 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Hagalaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Hagalaz' + " + hagalaz_zz7 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Hagalaz' + " + "</b>");
			}
		}
	}
	if ((hagalaz_z18 > 0) && (hagalaz_z28 > 0) && (hagalaz_z38 > 0)) {
		hagalaz_zzz8 = 1;
		hagalaz_zz8 = hagalaz_z18 + hagalaz_z28 + hagalaz_z38;
		if (hagalaz_z18 > hagalaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Hagalaz' - " + hagalaz_zz8 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Hagalaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Hagalaz' - " + hagalaz_zz8 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Hagalaz' - " + "</b>");
			}
		}
	}
	hagalaz_z13 = zzruna['zzhagalaz2'] - zzruna['zzhagalaz3'];
	hagalaz_z14 = zzruna['zzhagalaz3'] - zzruna['zzhagalaz2'];
	hagalaz_z23 = zzruna['zzhagalaz6'] - zzruna['zzhagalaz7'];
	hagalaz_z24 = zzruna['zzhagalaz7'] - zzruna['zzhagalaz6'];
	hagalaz_z33 = zzruna['zzhagalaz10'] - zzruna['zzhagalaz11'];
	hagalaz_z34 = zzruna['zzhagalaz11'] - zzruna['zzhagalaz10'];
	if ((hagalaz_z13 > 0) && (hagalaz_z23 > 0) && (hagalaz_z33 > 0)) {
		hagalaz_zzz3 = 1;
		hagalaz_zz3 = hagalaz_z13 + hagalaz_z23 + hagalaz_z33;
		if (hagalaz_z13 >= hagalaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Hagalaz' + " + hagalaz_zz3 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Hagalaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Hagalaz' + " + hagalaz_zz3 + "</b>");
			if ((sum_hagalaz > sum_hagalaz1) & (hagalaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Hagalaz' + " + "</b>");
			}
		}
	}
	if ((hagalaz_z14 > 0) && (hagalaz_z24 > 0) && (hagalaz_z34 > 0)) {
		hagalaz_zzz4 = 1;
		hagalaz_zz4 = hagalaz_z14 + hagalaz_z24 + hagalaz_z34;
		if (hagalaz_z12 >= hagalaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Hagalaz' - " + hagalaz_zz4 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Hagalaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Hagalaz' - " + hagalaz_zz4 + "</b>");
			if ((sum_hagalaz < sum_hagalaz1) & (hagalaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Hagalaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Hagalaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}