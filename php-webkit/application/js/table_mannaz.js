function table_mannaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Mannaz'</th></thead><tbody><tr><td>");
	html += ("Интеллектуальные способности, творческие способности, логика, Эго");
	html += ("<br>");
	if ((zzruna['zzmannaz'] == 8) || (zzruna['zzmannaz1'] == 8) || (zzruna['zzmannaz2'] == 8) || (zzruna['zzmannaz3'] == 8) || (zzruna['zzmannaz4'] == 8) || (zzruna['zzmannaz5'] == 8) || (zzruna['zzmannaz6'] == 8) || (zzruna['zzmannaz7'] == 8) || (zzruna['zzmannaz8'] == 8) || (zzruna['zzmannaz9'] == 8) || (zzruna['zzmannaz10'] == 8) || (zzruna['zzmannaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Mannaz'" + "</b><br>");
	}
	sum_mannaz = Math.round((zzruna['zzmannaz'] + zzruna['zzmannaz2'] + zzruna['zzmannaz4'] + zzruna['zzmannaz6'] + zzruna['zzmannaz8'] + zzruna['zzmannaz10']) / 6);
	sum_mannaz1 = Math.round((zzruna['zzmannaz1'] + zzruna['zzmannaz3'] + zzruna['zzmannaz5'] + zzruna['zzmannaz7'] + zzruna['zzmannaz9'] + zzruna['zzmannaz11']) / 6);
	html += ("<b>" + "Потенциал 'Mannaz':  " + sum_mannaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Mannaz':  " + sum_mannaz + "</b>");
	mannaz_z11 = zzruna['zzmannaz'] - zzruna['zzmannaz1'];
	mannaz_z12 = zzruna['zzmannaz1'] - zzruna['zzmannaz'];
	mannaz_z21 = zzruna['zzmannaz4'] - zzruna['zzmannaz5'];
	mannaz_z22 = zzruna['zzmannaz5'] - zzruna['zzmannaz4'];
	mannaz_z31 = zzruna['zzmannaz8'] - zzruna['zzmannaz9'];
	mannaz_z32 = zzruna['zzmannaz9'] - zzruna['zzmannaz8'];
	if ((mannaz_z11 > 0) && (mannaz_z21 > 0) && (mannaz_z31 > 0)) {
		mannaz_zzz1 = 1;
		mannaz_zz1 = mannaz_z11 + mannaz_z21 + mannaz_z31;
		if (mannaz_z11 > mannaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Mannaz': + " + mannaz_zz1 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Mannaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Mannaz': + " + mannaz_zz1 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Mannaz' + " + "</b>");
			}
		}
	}
	if ((mannaz_z12 > 0) && (mannaz_z22 > 0) && (mannaz_z32 > 0)) {
		mannaz_zzz2 = 1;
		mannaz_zz2 = mannaz_z12 + mannaz_z22 + mannaz_z32;
		if (mannaz_z12 > mannaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Mannaz': - " + mannaz_zz2 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Mannaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Mannaz': - " + mannaz_zz2 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Mannaz' - " + "</b>");
			}
		}
	}
	mannaz_z15 = zzruna['zzmannaz'] - zzruna['zzmannaz2'];
	mannaz_z16 = zzruna['zzmannaz2'] - zzruna['zzmannaz'];
	mannaz_z25 = zzruna['zzmannaz4'] - zzruna['zzmannaz6'];
	mannaz_z26 = zzruna['zzmannaz6'] - zzruna['zzmannaz4'];
	mannaz_z35 = zzruna['zzmannaz8'] - zzruna['zzmannaz10'];
	mannaz_z36 = zzruna['zzmannaz10'] - zzruna['zzmannaz8'];
	if ((mannaz_z15 > 0) && (mannaz_z25 > 0) && (mannaz_z35 > 0)) {
		mannaz_zzz5 = 1;
		mannaz_zz5 = mannaz_z15 + mannaz_z25 + mannaz_z35;
		if (mannaz_z15 > mannaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Mannaz': + " + mannaz_zz5 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Mannaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Mannaz' + " + mannaz_zz5 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Mannaz' + " + "</b>");
			}
		}
	}
	if ((mannaz_z16 > 0) && (mannaz_z26 > 0) && (mannaz_z36 > 0)) {
		mannaz_zzz6 = 1;
		mannaz_zz6 = mannaz_z16 + mannaz_z26 + mannaz_z36;
		if (mannaz_z16 > mannaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Mannaz': - " + mannaz_zz6 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Mannaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Mannaz' - " + mannaz_zz6 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Mannaz' - " + "</b>");
			}
		}
	}
	mannaz_z17 = zzruna['zzmannaz1'] - zzruna['zzmannaz3'];
	mannaz_z18 = zzruna['zzmannaz3'] - zzruna['zzmannaz1'];
	mannaz_z27 = zzruna['zzmannaz5'] - zzruna['zzmannaz7'];
	mannaz_z28 = zzruna['zzmannaz7'] - zzruna['zzmannaz5'];
	mannaz_z37 = zzruna['zzmannaz9'] - zzruna['zzmannaz11'];
	mannaz_z38 = zzruna['zzmannaz11'] - zzruna['zzmannaz9'];
	if ((mannaz_z17 > 0) && (mannaz_z27 > 0) && (mannaz_z37 > 0)) {
		mannaz_zzz7 = 1;
		mannaz_zz7 = mannaz_z17 + mannaz_z27 + mannaz_z37;
		if (mannaz_z17 > mannaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Mannaz' + " + mannaz_zz7 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Mannaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Mannaz' + " + mannaz_zz7 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Mannaz' + " + "</b>");
			}
		}
	}
	if ((mannaz_z18 > 0) && (mannaz_z28 > 0) && (mannaz_z38 > 0)) {
		mannaz_zzz8 = 1;
		mannaz_zz8 = mannaz_z18 + mannaz_z28 + mannaz_z38;
		if (mannaz_z18 > mannaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Mannaz' - " + mannaz_zz8 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Mannaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Mannaz' - " + mannaz_zz8 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Mannaz' - " + "</b>");
			}
		}
	}
	mannaz_z13 = zzruna['zzmannaz2'] - zzruna['zzmannaz3'];
	mannaz_z14 = zzruna['zzmannaz3'] - zzruna['zzmannaz2'];
	mannaz_z23 = zzruna['zzmannaz6'] - zzruna['zzmannaz7'];
	mannaz_z24 = zzruna['zzmannaz7'] - zzruna['zzmannaz6'];
	mannaz_z33 = zzruna['zzmannaz10'] - zzruna['zzmannaz11'];
	mannaz_z34 = zzruna['zzmannaz11'] - zzruna['zzmannaz10'];
	if ((mannaz_z13 > 0) && (mannaz_z23 > 0) && (mannaz_z33 > 0)) {
		mannaz_zzz3 = 1;
		mannaz_zz3 = mannaz_z13 + mannaz_z23 + mannaz_z33;
		if (mannaz_z13 >= mannaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Mannaz' + " + mannaz_zz3 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Mannaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Mannaz' + " + mannaz_zz3 + "</b>");
			if ((sum_mannaz > sum_mannaz1) & (mannaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Mannaz' + " + "</b>");
			}
		}
	}
	if ((mannaz_z14 > 0) && (mannaz_z24 > 0) && (mannaz_z34 > 0)) {
		mannaz_zzz4 = 1;
		mannaz_zz4 = mannaz_z14 + mannaz_z24 + mannaz_z34;
		if (mannaz_z12 >= mannaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Mannaz' - " + mannaz_zz4 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Mannaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Mannaz' - " + mannaz_zz4 + "</b>");
			if ((sum_mannaz < sum_mannaz1) & (mannaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Mannaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Mannaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}