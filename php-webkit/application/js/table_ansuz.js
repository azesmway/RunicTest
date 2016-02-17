function table_ansuz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Ansuz'</th></thead><tbody><tr><td>");
	html += ("Склонность к решению значительных жизненных вопросов, интерес к глобальным процессам, религиозность, восприятие общности бытия");
	html += ("<br>");
	if ((zzruna['zzansuz'] == 8) || (zzruna['zzansuz1'] == 8) || (zzruna['zzansuz2'] == 8) || (zzruna['zzansuz3'] == 8) || (zzruna['zzansuz4'] == 8) || (zzruna['zzansuz5'] == 8) || (zzruna['zzansuz6'] == 8) || (zzruna['zzansuz7'] == 8) || (zzruna['zzansuz8'] == 8) || (zzruna['zzansuz9'] == 8) || (zzruna['zzansuz10'] == 8) || (zzruna['zzansuz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Ansuz'" + "</b><br>");
	}
	sum_ansuz = Math.round((zzruna['zzansuz'] + zzruna['zzansuz2'] + zzruna['zzansuz4'] + zzruna['zzansuz6'] + zzruna['zzansuz8'] + zzruna['zzansuz10']) / 6);
	sum_ansuz1 = Math.round((zzruna['zzansuz1'] + zzruna['zzansuz3'] + zzruna['zzansuz5'] + zzruna['zzansuz7'] + zzruna['zzansuz9'] + zzruna['zzansuz11']) / 6);
	html += ("<b>" + "Потенциал 'Ansuz':  " + sum_ansuz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Ansuz':  " + sum_ansuz + "</b>");
	ansuz_z11 = zzruna['zzansuz'] - zzruna['zzansuz1'];
	ansuz_z12 = zzruna['zzansuz1'] - zzruna['zzansuz'];
	ansuz_z21 = zzruna['zzansuz4'] - zzruna['zzansuz5'];
	ansuz_z22 = zzruna['zzansuz5'] - zzruna['zzansuz4'];
	ansuz_z31 = zzruna['zzansuz8'] - zzruna['zzansuz9'];
	ansuz_z32 = zzruna['zzansuz9'] - zzruna['zzansuz8'];
	if ((ansuz_z11 > 0) && (ansuz_z21 > 0) && (ansuz_z31 > 0)) {
		ansuz_zzz1 = 1;
		ansuz_zz1 = ansuz_z11 + ansuz_z21 + ansuz_z31;
		if (ansuz_z11 > ansuz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ansuz': + " + ansuz_zz1 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ansuz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ansuz': + " + ansuz_zz1 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ansuz' + " + "</b>");
			}
		}
	}
	if ((ansuz_z12 > 0) && (ansuz_z22 > 0) && (ansuz_z32 > 0)) {
		ansuz_zzz2 = 1;
		ansuz_zz2 = ansuz_z12 + ansuz_z22 + ansuz_z32;
		if (ansuz_z12 > ansuz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Ansuz': - " + ansuz_zz2 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Ansuz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Ansuz': - " + ansuz_zz2 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Ansuz' - " + "</b>");
			}
		}
	}
	ansuz_z15 = zzruna['zzansuz'] - zzruna['zzansuz2'];
	ansuz_z16 = zzruna['zzansuz2'] - zzruna['zzansuz'];
	ansuz_z25 = zzruna['zzansuz4'] - zzruna['zzansuz6'];
	ansuz_z26 = zzruna['zzansuz6'] - zzruna['zzansuz4'];
	ansuz_z35 = zzruna['zzansuz8'] - zzruna['zzansuz10'];
	ansuz_z36 = zzruna['zzansuz10'] - zzruna['zzansuz8'];
	if ((ansuz_z15 > 0) && (ansuz_z25 > 0) && (ansuz_z35 > 0)) {
		ansuz_zzz5 = 1;
		ansuz_zz5 = ansuz_z15 + ansuz_z25 + ansuz_z35;
		if (ansuz_z15 > ansuz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ansuz': + " + ansuz_zz5 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ansuz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ansuz' + " + ansuz_zz5 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ansuz' + " + "</b>");
			}
		}
	}
	if ((ansuz_z16 > 0) && (ansuz_z26 > 0) && (ansuz_z36 > 0)) {
		ansuz_zzz6 = 1;
		ansuz_zz6 = ansuz_z16 + ansuz_z26 + ansuz_z36;
		if (ansuz_z16 > ansuz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Ansuz': - " + ansuz_zz6 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Ansuz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Ansuz' - " + ansuz_zz6 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Ansuz' - " + "</b>");
			}
		}
	}
	ansuz_z17 = zzruna['zzansuz1'] - zzruna['zzansuz3'];
	ansuz_z18 = zzruna['zzansuz3'] - zzruna['zzansuz1'];
	ansuz_z27 = zzruna['zzansuz5'] - zzruna['zzansuz7'];
	ansuz_z28 = zzruna['zzansuz7'] - zzruna['zzansuz5'];
	ansuz_z37 = zzruna['zzansuz9'] - zzruna['zzansuz11'];
	ansuz_z38 = zzruna['zzansuz11'] - zzruna['zzansuz9'];
	if ((ansuz_z17 > 0) && (ansuz_z27 > 0) && (ansuz_z37 > 0)) {
		ansuz_zzz7 = 1;
		ansuz_zz7 = ansuz_z17 + ansuz_z27 + ansuz_z37;
		if (ansuz_z17 > ansuz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ansuz' + " + ansuz_zz7 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ansuz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ansuz' + " + ansuz_zz7 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ansuz' + " + "</b>");
			}
		}
	}
	if ((ansuz_z18 > 0) && (ansuz_z28 > 0) && (ansuz_z38 > 0)) {
		ansuz_zzz8 = 1;
		ansuz_zz8 = ansuz_z18 + ansuz_z28 + ansuz_z38;
		if (ansuz_z18 > ansuz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Ansuz' - " + ansuz_zz8 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Ansuz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Ansuz' - " + ansuz_zz8 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Ansuz' - " + "</b>");
			}
		}
	}
	ansuz_z13 = zzruna['zzansuz2'] - zzruna['zzansuz3'];
	ansuz_z14 = zzruna['zzansuz3'] - zzruna['zzansuz2'];
	ansuz_z23 = zzruna['zzansuz6'] - zzruna['zzansuz7'];
	ansuz_z24 = zzruna['zzansuz7'] - zzruna['zzansuz6'];
	ansuz_z33 = zzruna['zzansuz10'] - zzruna['zzansuz11'];
	ansuz_z34 = zzruna['zzansuz11'] - zzruna['zzansuz10'];
	if ((ansuz_z13 > 0) && (ansuz_z23 > 0) && (ansuz_z33 > 0)) {
		ansuz_zzz3 = 1;
		ansuz_zz3 = ansuz_z13 + ansuz_z23 + ansuz_z33;
		if (ansuz_z13 >= ansuz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ansuz' + " + ansuz_zz3 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ansuz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ansuz' + " + ansuz_zz3 + "</b>");
			if ((sum_ansuz > sum_ansuz1) & (ansuz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ansuz' + " + "</b>");
			}
		}
	}
	if ((ansuz_z14 > 0) && (ansuz_z24 > 0) && (ansuz_z34 > 0)) {
		ansuz_zzz4 = 1;
		ansuz_zz4 = ansuz_z14 + ansuz_z24 + ansuz_z34;
		if (ansuz_z12 >= ansuz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Ansuz' - " + ansuz_zz4 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Ansuz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Ansuz' - " + ansuz_zz4 + "</b>");
			if ((sum_ansuz < sum_ansuz1) & (ansuz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Ansuz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Ansuz' закончена" + "</b>");
	html += ("</td></tr></table>");

	return html;
}