function table_ehwaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Ehwaz'</th></thead><tbody><tr><td>");
	html += ("Реализация намерений, самостоятельность, способность отстоять свое мнение, способность на решительные, а иногда и на нестандартные действия");
	html += ("<br>");
	if ((zzruna['zzehwaz'] == 8) || (zzruna['zzehwaz1'] == 8) || (zzruna['zzehwaz2'] == 8) || (zzruna['zzehwaz3'] == 8) || (zzruna['zzehwaz4'] == 8) || (zzruna['zzehwaz5'] == 8) || (zzruna['zzehwaz6'] == 8) || (zzruna['zzehwaz7'] == 8) || (zzruna['zzehwaz8'] == 8) || (zzruna['zzehwaz9'] == 8) || (zzruna['zzehwaz10'] == 8) || (zzruna['zzehwaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Ehwaz'" + "</b><br>");
	}
	sum_ehwaz = Math.round((zzruna['zzehwaz'] + zzruna['zzehwaz2'] + zzruna['zzehwaz4'] + zzruna['zzehwaz6'] + zzruna['zzehwaz8'] + zzruna['zzehwaz10']) / 6);
	sum_ehwaz1 = Math.round((zzruna['zzehwaz1'] + zzruna['zzehwaz3'] + zzruna['zzehwaz5'] + zzruna['zzehwaz7'] + zzruna['zzehwaz9'] + zzruna['zzehwaz11']) / 6);
	html += ("<b>" + "Потенциал 'Ehwaz':  " + sum_ehwaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Ehwaz':  " + sum_ehwaz + "</b>");
	ehwaz_z11 = zzruna['zzehwaz'] - zzruna['zzehwaz1'];
	ehwaz_z12 = zzruna['zzehwaz1'] - zzruna['zzehwaz'];
	ehwaz_z21 = zzruna['zzehwaz4'] - zzruna['zzehwaz5'];
	ehwaz_z22 = zzruna['zzehwaz5'] - zzruna['zzehwaz4'];
	ehwaz_z31 = zzruna['zzehwaz8'] - zzruna['zzehwaz9'];
	ehwaz_z32 = zzruna['zzehwaz9'] - zzruna['zzehwaz8'];
	if ((ehwaz_z11 > 0) && (ehwaz_z21 > 0) && (ehwaz_z31 > 0)) {
		ehwaz_zzz1 = 1;
		ehwaz_zz1 = ehwaz_z11 + ehwaz_z21 + ehwaz_z31;
		if (ehwaz_z11 > ehwaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ehwaz': + " + ehwaz_zz1 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ehwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ehwaz': + " + ehwaz_zz1 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ehwaz' + " + "</b>");
			}
		}
	}
	if ((ehwaz_z12 > 0) && (ehwaz_z22 > 0) && (ehwaz_z32 > 0)) {
		ehwaz_zzz2 = 1;
		ehwaz_zz2 = ehwaz_z12 + ehwaz_z22 + ehwaz_z32;
		if (ehwaz_z12 > ehwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ehwaz': - " + ehwaz_zz2 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ehwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ehwaz': - " + ehwaz_zz2 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ehwaz' - " + "</b>");
			}
		}
	}
	ehwaz_z15 = zzruna['zzehwaz'] - zzruna['zzehwaz2'];
	ehwaz_z16 = zzruna['zzehwaz2'] - zzruna['zzehwaz'];
	ehwaz_z25 = zzruna['zzehwaz4'] - zzruna['zzehwaz6'];
	ehwaz_z26 = zzruna['zzehwaz6'] - zzruna['zzehwaz4'];
	ehwaz_z35 = zzruna['zzehwaz8'] - zzruna['zzehwaz10'];
	ehwaz_z36 = zzruna['zzehwaz10'] - zzruna['zzehwaz8'];
	if ((ehwaz_z15 > 0) && (ehwaz_z25 > 0) && (ehwaz_z35 > 0)) {
		ehwaz_zzz5 = 1;
		ehwaz_zz5 = ehwaz_z15 + ehwaz_z25 + ehwaz_z35;
		if (ehwaz_z15 > ehwaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ehwaz': + " + ehwaz_zz5 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ehwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ehwaz' + " + ehwaz_zz5 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ehwaz' + " + "</b>");
			}
		}
	}
	if ((ehwaz_z16 > 0) && (ehwaz_z26 > 0) && (ehwaz_z36 > 0)) {
		ehwaz_zzz6 = 1;
		ehwaz_zz6 = ehwaz_z16 + ehwaz_z26 + ehwaz_z36;
		if (ehwaz_z16 > ehwaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ehwaz': - " + ehwaz_zz6 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ehwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ehwaz' - " + ehwaz_zz6 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ehwaz' - " + "</b>");
			}
		}
	}
	ehwaz_z17 = zzruna['zzehwaz1'] - zzruna['zzehwaz3'];
	ehwaz_z18 = zzruna['zzehwaz3'] - zzruna['zzehwaz1'];
	ehwaz_z27 = zzruna['zzehwaz5'] - zzruna['zzehwaz7'];
	ehwaz_z28 = zzruna['zzehwaz7'] - zzruna['zzehwaz5'];
	ehwaz_z37 = zzruna['zzehwaz9'] - zzruna['zzehwaz11'];
	ehwaz_z38 = zzruna['zzehwaz11'] - zzruna['zzehwaz9'];
	if ((ehwaz_z17 > 0) && (ehwaz_z27 > 0) && (ehwaz_z37 > 0)) {
		ehwaz_zzz7 = 1;
		ehwaz_zz7 = ehwaz_z17 + ehwaz_z27 + ehwaz_z37;
		if (ehwaz_z17 > ehwaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ehwaz' + " + ehwaz_zz7 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ehwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ehwaz' + " + ehwaz_zz7 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ehwaz' + " + "</b>");
			}
		}
	}
	if ((ehwaz_z18 > 0) && (ehwaz_z28 > 0) && (ehwaz_z38 > 0)) {
		ehwaz_zzz8 = 1;
		ehwaz_zz8 = ehwaz_z18 + ehwaz_z28 + ehwaz_z38;
		if (ehwaz_z18 > ehwaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ehwaz' - " + ehwaz_zz8 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ehwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ehwaz' - " + ehwaz_zz8 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ehwaz' - " + "</b>");
			}
		}
	}
	ehwaz_z13 = zzruna['zzehwaz2'] - zzruna['zzehwaz3'];
	ehwaz_z14 = zzruna['zzehwaz3'] - zzruna['zzehwaz2'];
	ehwaz_z23 = zzruna['zzehwaz6'] - zzruna['zzehwaz7'];
	ehwaz_z24 = zzruna['zzehwaz7'] - zzruna['zzehwaz6'];
	ehwaz_z33 = zzruna['zzehwaz10'] - zzruna['zzehwaz11'];
	ehwaz_z34 = zzruna['zzehwaz11'] - zzruna['zzehwaz10'];
	if ((ehwaz_z13 > 0) && (ehwaz_z23 > 0) && (ehwaz_z33 > 0)) {
		ehwaz_zzz3 = 1;
		ehwaz_zz3 = ehwaz_z13 + ehwaz_z23 + ehwaz_z33;
		if (ehwaz_z13 >= ehwaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ehwaz' + " + ehwaz_zz3 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ehwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ehwaz' + " + ehwaz_zz3 + "</b>");
			if ((sum_ehwaz > sum_ehwaz1) & (ehwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ehwaz' + " + "</b>");
			}
		}
	}
	if ((ehwaz_z14 > 0) && (ehwaz_z24 > 0) && (ehwaz_z34 > 0)) {
		ehwaz_zzz4 = 1;
		ehwaz_zz4 = ehwaz_z14 + ehwaz_z24 + ehwaz_z34;
		if (ehwaz_z12 >= ehwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ehwaz' - " + ehwaz_zz4 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ehwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ehwaz' - " + ehwaz_zz4 + "</b>");
			if ((sum_ehwaz < sum_ehwaz1) & (ehwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ehwaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Ehwaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}