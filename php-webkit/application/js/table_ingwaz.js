function table_ingwaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Ingwaz'</th></thead><tbody><tr><td>");
	html += ("Жизненная сила и энергия, потенция, здоровье, вопросы изобилия");
	html += ("<br>");
	if ((zzruna['zzingwaz'] == 8) || (zzruna['zzingwaz1'] == 8) || (zzruna['zzingwaz2'] == 8) || (zzruna['zzingwaz3'] == 8) || (zzruna['zzingwaz4'] == 8) || (zzruna['zzingwaz5'] == 8) || (zzruna['zzingwaz6'] == 8) || (zzruna['zzingwaz7'] == 8) || (zzruna['zzingwaz8'] == 8) || (zzruna['zzingwaz9'] == 8) || (zzruna['zzingwaz10'] == 8) || (zzruna['zzingwaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Ingwaz'" + "</b><br>");
	}
	sum_ingwaz = Math.round((zzruna['zzingwaz'] + zzruna['zzingwaz2'] + zzruna['zzingwaz4'] + zzruna['zzingwaz6'] + zzruna['zzingwaz8'] + zzruna['zzingwaz10']) / 6);
	sum_ingwaz1 = Math.round((zzruna['zzingwaz1'] + zzruna['zzingwaz3'] + zzruna['zzingwaz5'] + zzruna['zzingwaz7'] + zzruna['zzingwaz9'] + zzruna['zzingwaz11']) / 6);
	html += ("<b>" + "Потенциал 'Ingwaz':  " + sum_ingwaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Ingwaz':  " + sum_ingwaz + "</b>");
	ingwaz_z11 = zzruna['zzingwaz'] - zzruna['zzingwaz1'];
	ingwaz_z12 = zzruna['zzingwaz1'] - zzruna['zzingwaz'];
	ingwaz_z21 = zzruna['zzingwaz4'] - zzruna['zzingwaz5'];
	ingwaz_z22 = zzruna['zzingwaz5'] - zzruna['zzingwaz4'];
	ingwaz_z31 = zzruna['zzingwaz8'] - zzruna['zzingwaz9'];
	ingwaz_z32 = zzruna['zzingwaz9'] - zzruna['zzingwaz8'];
	if ((ingwaz_z11 > 0) && (ingwaz_z21 > 0) && (ingwaz_z31 > 0)) {
		ingwaz_zzz1 = 1;
		ingwaz_zz1 = ingwaz_z11 + ingwaz_z21 + ingwaz_z31;
		if (ingwaz_z11 > ingwaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ingwaz': + " + ingwaz_zz1 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ingwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ingwaz': + " + ingwaz_zz1 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ingwaz' + " + "</b>");
			}
		}
	}
	if ((ingwaz_z12 > 0) && (ingwaz_z22 > 0) && (ingwaz_z32 > 0)) {
		ingwaz_zzz2 = 1;
		ingwaz_zz2 = ingwaz_z12 + ingwaz_z22 + ingwaz_z32;
		if (ingwaz_z12 > ingwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ingwaz': - " + ingwaz_zz2 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ingwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ingwaz': - " + ingwaz_zz2 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ingwaz' - " + "</b>");
			}
		}
	}
	ingwaz_z15 = zzruna['zzingwaz'] - zzruna['zzingwaz2'];
	ingwaz_z16 = zzruna['zzingwaz2'] - zzruna['zzingwaz'];
	ingwaz_z25 = zzruna['zzingwaz4'] - zzruna['zzingwaz6'];
	ingwaz_z26 = zzruna['zzingwaz6'] - zzruna['zzingwaz4'];
	ingwaz_z35 = zzruna['zzingwaz8'] - zzruna['zzingwaz10'];
	ingwaz_z36 = zzruna['zzingwaz10'] - zzruna['zzingwaz8'];
	if ((ingwaz_z15 > 0) && (ingwaz_z25 > 0) && (ingwaz_z35 > 0)) {
		ingwaz_zzz5 = 1;
		ingwaz_zz5 = ingwaz_z15 + ingwaz_z25 + ingwaz_z35;
		if (ingwaz_z15 > ingwaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ingwaz': + " + ingwaz_zz5 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ingwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ingwaz' + " + ingwaz_zz5 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ingwaz' + " + "</b>");
			}
		}
	}
	if ((ingwaz_z16 > 0) && (ingwaz_z26 > 0) && (ingwaz_z36 > 0)) {
		ingwaz_zzz6 = 1;
		ingwaz_zz6 = ingwaz_z16 + ingwaz_z26 + ingwaz_z36;
		if (ingwaz_z16 > ingwaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ingwaz': - " + ingwaz_zz6 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ingwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ingwaz' - " + ingwaz_zz6 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ingwaz' - " + "</b>");
			}
		}
	}
	ingwaz_z17 = zzruna['zzingwaz1'] - zzruna['zzingwaz3'];
	ingwaz_z18 = zzruna['zzingwaz3'] - zzruna['zzingwaz1'];
	ingwaz_z27 = zzruna['zzingwaz5'] - zzruna['zzingwaz7'];
	ingwaz_z28 = zzruna['zzingwaz7'] - zzruna['zzingwaz5'];
	ingwaz_z37 = zzruna['zzingwaz9'] - zzruna['zzingwaz11'];
	ingwaz_z38 = zzruna['zzingwaz11'] - zzruna['zzingwaz9'];
	if ((ingwaz_z17 > 0) && (ingwaz_z27 > 0) && (ingwaz_z37 > 0)) {
		ingwaz_zzz7 = 1;
		ingwaz_zz7 = ingwaz_z17 + ingwaz_z27 + ingwaz_z37;
		if (ingwaz_z17 > ingwaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ingwaz' + " + ingwaz_zz7 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ingwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ingwaz' + " + ingwaz_zz7 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ingwaz' + " + "</b>");
			}
		}
	}
	if ((ingwaz_z18 > 0) && (ingwaz_z28 > 0) && (ingwaz_z38 > 0)) {
		ingwaz_zzz8 = 1;
		ingwaz_zz8 = ingwaz_z18 + ingwaz_z28 + ingwaz_z38;
		if (ingwaz_z18 > ingwaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ingwaz' - " + ingwaz_zz8 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ingwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ingwaz' - " + ingwaz_zz8 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ingwaz' - " + "</b>");
			}
		}
	}
	ingwaz_z13 = zzruna['zzingwaz2'] - zzruna['zzingwaz3'];
	ingwaz_z14 = zzruna['zzingwaz3'] - zzruna['zzingwaz2'];
	ingwaz_z23 = zzruna['zzingwaz6'] - zzruna['zzingwaz7'];
	ingwaz_z24 = zzruna['zzingwaz7'] - zzruna['zzingwaz6'];
	ingwaz_z33 = zzruna['zzingwaz10'] - zzruna['zzingwaz11'];
	ingwaz_z34 = zzruna['zzingwaz11'] - zzruna['zzingwaz10'];
	if ((ingwaz_z13 > 0) && (ingwaz_z23 > 0) && (ingwaz_z33 > 0)) {
		ingwaz_zzz3 = 1;
		ingwaz_zz3 = ingwaz_z13 + ingwaz_z23 + ingwaz_z33;
		if (ingwaz_z13 >= ingwaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ingwaz' + " + ingwaz_zz3 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ingwaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ingwaz' + " + ingwaz_zz3 + "</b>");
			if ((sum_ingwaz > sum_ingwaz1) & (ingwaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ingwaz' + " + "</b>");
			}
		}
	}
	if ((ingwaz_z14 > 0) && (ingwaz_z24 > 0) && (ingwaz_z34 > 0)) {
		ingwaz_zzz4 = 1;
		ingwaz_zz4 = ingwaz_z14 + ingwaz_z24 + ingwaz_z34;
		if (ingwaz_z12 >= ingwaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ingwaz' - " + ingwaz_zz4 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ingwaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ingwaz' - " + ingwaz_zz4 + "</b>");
			if ((sum_ingwaz < sum_ingwaz1) & (ingwaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ingwaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Ingwaz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}