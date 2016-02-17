function table_laguz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Laguz'</th></thead><tbody><tr><td>");
	html += ("Гибкость, способность к адаптации, способность преодолевать препятствия, проявления азарта, склонность к игре");
	html += ("<br>");
	if ((zzruna['zzlaguz'] == 8) || (zzruna['zzlaguz1'] == 8) || (zzruna['zzlaguz2'] == 8) || (zzruna['zzlaguz3'] == 8) || (zzruna['zzlaguz4'] == 8) || (zzruna['zzlaguz5'] == 8) || (zzruna['zzlaguz6'] == 8) || (zzruna['zzlaguz7'] == 8) || (zzruna['zzlaguz8'] == 8) || (zzruna['zzlaguz9'] == 8) || (zzruna['zzlaguz10'] == 8) || (zzruna['zzlaguz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Laguz'" + "</b><br>");
	}
	sum_laguz = Math.round((zzruna['zzlaguz'] + zzruna['zzlaguz2'] + zzruna['zzlaguz4'] + zzruna['zzlaguz6'] + zzruna['zzlaguz8'] + zzruna['zzlaguz10']) / 6);
	sum_laguz1 = Math.round((zzruna['zzlaguz1'] + zzruna['zzlaguz3'] + zzruna['zzlaguz5'] + zzruna['zzlaguz7'] + zzruna['zzlaguz9'] + zzruna['zzlaguz11']) / 6);
	html += ("<b>" + "Потенциал 'Laguz':  " + sum_laguz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Laguz':  " + sum_laguz + "</b>");
	laguz_z11 = zzruna['zzlaguz'] - zzruna['zzlaguz1'];
	laguz_z12 = zzruna['zzlaguz1'] - zzruna['zzlaguz'];
	laguz_z21 = zzruna['zzlaguz4'] - zzruna['zzlaguz5'];
	laguz_z22 = zzruna['zzlaguz5'] - zzruna['zzlaguz4'];
	laguz_z31 = zzruna['zzlaguz8'] - zzruna['zzlaguz9'];
	laguz_z32 = zzruna['zzlaguz9'] - zzruna['zzlaguz8'];
	if ((laguz_z11 > 0) && (laguz_z21 > 0) && (laguz_z31 > 0)) {
		laguz_zzz1 = 1;
		laguz_zz1 = laguz_z11 + laguz_z21 + laguz_z31;
		if (laguz_z11 > laguz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Laguz': + " + laguz_zz1 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Laguz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Laguz': + " + laguz_zz1 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Laguz' + " + "</b>");
			}
		}
	}
	if ((laguz_z12 > 0) && (laguz_z22 > 0) && (laguz_z32 > 0)) {
		laguz_zzz2 = 1;
		laguz_zz2 = laguz_z12 + laguz_z22 + laguz_z32;
		if (laguz_z12 > laguz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Laguz': - " + laguz_zz2 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Laguz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Laguz': - " + laguz_zz2 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Laguz' - " + "</b>");
			}
		}
	}
	laguz_z15 = zzruna['zzlaguz'] - zzruna['zzlaguz2'];
	laguz_z16 = zzruna['zzlaguz2'] - zzruna['zzlaguz'];
	laguz_z25 = zzruna['zzlaguz4'] - zzruna['zzlaguz6'];
	laguz_z26 = zzruna['zzlaguz6'] - zzruna['zzlaguz4'];
	laguz_z35 = zzruna['zzlaguz8'] - zzruna['zzlaguz10'];
	laguz_z36 = zzruna['zzlaguz10'] - zzruna['zzlaguz8'];
	if ((laguz_z15 > 0) && (laguz_z25 > 0) && (laguz_z35 > 0)) {
		laguz_zzz5 = 1;
		laguz_zz5 = laguz_z15 + laguz_z25 + laguz_z35;
		if (laguz_z15 > laguz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Laguz': + " + laguz_zz5 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Laguz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Laguz' + " + laguz_zz5 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Laguz' + " + "</b>");
			}
		}
	}
	if ((laguz_z16 > 0) && (laguz_z26 > 0) && (laguz_z36 > 0)) {
		laguz_zzz6 = 1;
		laguz_zz6 = laguz_z16 + laguz_z26 + laguz_z36;
		if (laguz_z16 > laguz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Laguz': - " + laguz_zz6 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Laguz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Laguz' - " + laguz_zz6 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Laguz' - " + "</b>");
			}
		}
	}
	laguz_z17 = zzruna['zzlaguz1'] - zzruna['zzlaguz3'];
	laguz_z18 = zzruna['zzlaguz3'] - zzruna['zzlaguz1'];
	laguz_z27 = zzruna['zzlaguz5'] - zzruna['zzlaguz7'];
	laguz_z28 = zzruna['zzlaguz7'] - zzruna['zzlaguz5'];
	laguz_z37 = zzruna['zzlaguz9'] - zzruna['zzlaguz11'];
	laguz_z38 = zzruna['zzlaguz11'] - zzruna['zzlaguz9'];
	if ((laguz_z17 > 0) && (laguz_z27 > 0) && (laguz_z37 > 0)) {
		laguz_zzz7 = 1;
		laguz_zz7 = laguz_z17 + laguz_z27 + laguz_z37;
		if (laguz_z17 > laguz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Laguz' + " + laguz_zz7 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Laguz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Laguz' + " + laguz_zz7 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Laguz' + " + "</b>");
			}
		}
	}
	if ((laguz_z18 > 0) && (laguz_z28 > 0) && (laguz_z38 > 0)) {
		laguz_zzz8 = 1;
		laguz_zz8 = laguz_z18 + laguz_z28 + laguz_z38;
		if (laguz_z18 > laguz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Laguz' - " + laguz_zz8 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Laguz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Laguz' - " + laguz_zz8 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Laguz' - " + "</b>");
			}
		}
	}
	laguz_z13 = zzruna['zzlaguz2'] - zzruna['zzlaguz3'];
	laguz_z14 = zzruna['zzlaguz3'] - zzruna['zzlaguz2'];
	laguz_z23 = zzruna['zzlaguz6'] - zzruna['zzlaguz7'];
	laguz_z24 = zzruna['zzlaguz7'] - zzruna['zzlaguz6'];
	laguz_z33 = zzruna['zzlaguz10'] - zzruna['zzlaguz11'];
	laguz_z34 = zzruna['zzlaguz11'] - zzruna['zzlaguz10'];
	if ((laguz_z13 > 0) && (laguz_z23 > 0) && (laguz_z33 > 0)) {
		laguz_zzz3 = 1;
		laguz_zz3 = laguz_z13 + laguz_z23 + laguz_z33;
		if (laguz_z13 >= laguz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Laguz' + " + laguz_zz3 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Laguz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Laguz' + " + laguz_zz3 + "</b>");
			if ((sum_laguz > sum_laguz1) & (laguz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Laguz' + " + "</b>");
			}
		}
	}
	if ((laguz_z14 > 0) && (laguz_z24 > 0) && (laguz_z34 > 0)) {
		laguz_zzz4 = 1;
		laguz_zz4 = laguz_z14 + laguz_z24 + laguz_z34;
		if (laguz_z12 >= laguz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Laguz' - " + laguz_zz4 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Laguz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Laguz' - " + laguz_zz4 + "</b>");
			if ((sum_laguz < sum_laguz1) & (laguz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Laguz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Laguz' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}