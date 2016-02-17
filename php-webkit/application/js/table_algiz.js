function table_algiz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Algiz'</th></thead><tbody><tr><td>");
	html += ("Защищенность человека той или иной системой, но при этом и способность человека соответствовать той или иной системе");
	html += ("<br>");
	if ((zzruna['zzalgiz'] == 8) || (zzruna['zzalgiz1'] == 8) || (zzruna['zzalgiz2'] == 8) || (zzruna['zzalgiz3'] == 8) || (zzruna['zzalgiz4'] == 8) || (zzruna['zzalgiz5'] == 8) || (zzruna['zzalgiz6'] == 8) || (zzruna['zzalgiz7'] == 8) || (zzruna['zzalgiz8'] == 8) || (zzruna['zzalgiz9'] == 8) || (zzruna['zzalgiz10'] == 8) || (zzruna['zzalgiz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Algiz'" + "</b><br>");
	}
	sum_algiz = Math.round((zzruna['zzalgiz'] + zzruna['zzalgiz2'] + zzruna['zzalgiz4'] + zzruna['zzalgiz6'] + zzruna['zzalgiz8'] + zzruna['zzalgiz10']) / 6);
	sum_algiz1 = Math.round((zzruna['zzalgiz1'] + zzruna['zzalgiz3'] + zzruna['zzalgiz5'] + zzruna['zzalgiz7'] + zzruna['zzalgiz9'] + zzruna['zzalgiz11']) / 6);
	html += ("<b>" + "Потенциал 'Algiz':  " + sum_algiz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Algiz':  " + sum_algiz + "</b>");
	algiz_z11 = zzruna['zzalgiz'] - zzruna['zzalgiz1'];
	algiz_z12 = zzruna['zzalgiz1'] - zzruna['zzalgiz'];
	algiz_z21 = zzruna['zzalgiz4'] - zzruna['zzalgiz5'];
	algiz_z22 = zzruna['zzalgiz5'] - zzruna['zzalgiz4'];
	algiz_z31 = zzruna['zzalgiz8'] - zzruna['zzalgiz9'];
	algiz_z32 = zzruna['zzalgiz9'] - zzruna['zzalgiz8'];
	if ((algiz_z11 > 0) && (algiz_z21 > 0) && (algiz_z31 > 0)) {
		algiz_zzz1 = 1;
		algiz_zz1 = algiz_z11 + algiz_z21 + algiz_z31;
		if (algiz_z11 > algiz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Algiz': + " + algiz_zz1 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Algiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Algiz': + " + algiz_zz1 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Algiz' + " + "</b>");
			}
		}
	}
	if ((algiz_z12 > 0) && (algiz_z22 > 0) && (algiz_z32 > 0)) {
		algiz_zzz2 = 1;
		algiz_zz2 = algiz_z12 + algiz_z22 + algiz_z32;
		if (algiz_z12 > algiz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Algiz': - " + algiz_zz2 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Algiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Algiz': - " + algiz_zz2 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Algiz' - " + "</b>");
			}
		}
	}
	algiz_z15 = zzruna['zzalgiz'] - zzruna['zzalgiz2'];
	algiz_z16 = zzruna['zzalgiz2'] - zzruna['zzalgiz'];
	algiz_z25 = zzruna['zzalgiz4'] - zzruna['zzalgiz6'];
	algiz_z26 = zzruna['zzalgiz6'] - zzruna['zzalgiz4'];
	algiz_z35 = zzruna['zzalgiz8'] - zzruna['zzalgiz10'];
	algiz_z36 = zzruna['zzalgiz10'] - zzruna['zzalgiz8'];
	if ((algiz_z15 > 0) && (algiz_z25 > 0) && (algiz_z35 > 0)) {
		algiz_zzz5 = 1;
		algiz_zz5 = algiz_z15 + algiz_z25 + algiz_z35;
		if (algiz_z15 > algiz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Algiz': + " + algiz_zz5 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Algiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Algiz' + " + algiz_zz5 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Algiz' + " + "</b>");
			}
		}
	}
	if ((algiz_z16 > 0) && (algiz_z26 > 0) && (algiz_z36 > 0)) {
		algiz_zzz6 = 1;
		algiz_zz6 = algiz_z16 + algiz_z26 + algiz_z36;
		if (algiz_z16 > algiz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Algiz': - " + algiz_zz6 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Algiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Algiz' - " + algiz_zz6 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Algiz' - " + "</b>");
			}
		}
	}
	algiz_z17 = zzruna['zzalgiz1'] - zzruna['zzalgiz3'];
	algiz_z18 = zzruna['zzalgiz3'] - zzruna['zzalgiz1'];
	algiz_z27 = zzruna['zzalgiz5'] - zzruna['zzalgiz7'];
	algiz_z28 = zzruna['zzalgiz7'] - zzruna['zzalgiz5'];
	algiz_z37 = zzruna['zzalgiz9'] - zzruna['zzalgiz11'];
	algiz_z38 = zzruna['zzalgiz11'] - zzruna['zzalgiz9'];
	if ((algiz_z17 > 0) && (algiz_z27 > 0) && (algiz_z37 > 0)) {
		algiz_zzz7 = 1;
		algiz_zz7 = algiz_z17 + algiz_z27 + algiz_z37;
		if (algiz_z17 > algiz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Algiz' + " + algiz_zz7 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Algiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Algiz' + " + algiz_zz7 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Algiz' + " + "</b>");
			}
		}
	}
	if ((algiz_z18 > 0) && (algiz_z28 > 0) && (algiz_z38 > 0)) {
		algiz_zzz8 = 1;
		algiz_zz8 = algiz_z18 + algiz_z28 + algiz_z38;
		if (algiz_z18 > algiz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Algiz' - " + algiz_zz8 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Algiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Algiz' - " + algiz_zz8 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Algiz' - " + "</b>");
			}
		}
	}
	algiz_z13 = zzruna['zzalgiz2'] - zzruna['zzalgiz3'];
	algiz_z14 = zzruna['zzalgiz3'] - zzruna['zzalgiz2'];
	algiz_z23 = zzruna['zzalgiz6'] - zzruna['zzalgiz7'];
	algiz_z24 = zzruna['zzalgiz7'] - zzruna['zzalgiz6'];
	algiz_z33 = zzruna['zzalgiz10'] - zzruna['zzalgiz11'];
	algiz_z34 = zzruna['zzalgiz11'] - zzruna['zzalgiz10'];
	if ((algiz_z13 > 0) && (algiz_z23 > 0) && (algiz_z33 > 0)) {
		algiz_zzz3 = 1;
		algiz_zz3 = algiz_z13 + algiz_z23 + algiz_z33;
		if (algiz_z13 >= algiz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Algiz' + " + algiz_zz3 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Algiz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Algiz' + " + algiz_zz3 + "</b>");
			if ((sum_algiz > sum_algiz1) & (algiz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Algiz' + " + "</b>");
			}
		}
	}
	if ((algiz_z14 > 0) && (algiz_z24 > 0) && (algiz_z34 > 0)) {
		algiz_zzz4 = 1;
		algiz_zz4 = algiz_z14 + algiz_z24 + algiz_z34;
		if (algiz_z12 >= algiz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Algiz' - " + algiz_zz4 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Algiz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Algiz' - " + algiz_zz4 + "</b>");
			if ((sum_algiz < sum_algiz1) & (algiz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Algiz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Algiz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}