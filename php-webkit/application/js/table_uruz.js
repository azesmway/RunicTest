function table_uruz() {
	
	var html = '';
	
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Uruz'</th></thead><tbody><tr><td>");	

	html += ("Упорство, настойчивость, работоспособность, физическая активность, энергичность, выносливость");
	html += ("<br>");
	if ((zzruna['zzuruz'] == 8) || (zzruna['zzuruz1'] == 8) || (zzruna['zzuruz2'] == 8) || (zzruna['zzuruz3'] == 8) || (zzruna['zzuruz4'] == 8) || (zzruna['zzuruz5'] == 8) || (zzruna['zzuruz6'] == 8) || (zzruna['zzuruz7'] == 8) || (zzruna['zzuruz8'] == 8) || (zzruna['zzuruz9'] == 8) || (zzruna['zzuruz10'] == 8) || (zzruna['zzuruz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Uruz'" + "</b><br>");
	}
	sum_uruz = Math.round((zzruna['zzuruz'] + zzruna['zzuruz2'] + zzruna['zzuruz4'] + zzruna['zzuruz6'] + zzruna['zzuruz8'] + zzruna['zzuruz10']) / 6);
	sum_uruz1 = Math.round((zzruna['zzuruz1'] + zzruna['zzuruz3'] + zzruna['zzuruz5'] + zzruna['zzuruz7'] + zzruna['zzuruz9'] + zzruna['zzuruz11']) / 6);
	html += ("<b>" + "Потенциал 'Uruz':  " + sum_uruz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Uruz':  " + sum_uruz + "</b>");
	uruz_z11 = zzruna['zzuruz'] - zzruna['zzuruz1'];
	uruz_z12 = zzruna['zzuruz1'] - zzruna['zzuruz'];
	uruz_z21 = zzruna['zzuruz4'] - zzruna['zzuruz5'];
	uruz_z22 = zzruna['zzuruz5'] - zzruna['zzuruz4'];
	uruz_z31 = zzruna['zzuruz8'] - zzruna['zzuruz9'];
	uruz_z32 = zzruna['zzuruz9'] - zzruna['zzuruz8'];
	if ((uruz_z11 > 0) && (uruz_z21 > 0) && (uruz_z31 > 0)) {
		uruz_zzz1 = 1;
		uruz_zz1 = uruz_z11 + uruz_z21 + uruz_z31;
		if (uruz_z11 > uruz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Uruz': + " + uruz_zz1 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Uruz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Uruz': + " + uruz_zz1 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Uruz' + " + "</b>");
			}
		}
	}
	if ((uruz_z12 > 0) && (uruz_z22 > 0) && (uruz_z32 > 0)) {
		uruz_zzz2 = 1;
		uruz_zz2 = uruz_z12 + uruz_z22 + uruz_z32;
		if (uruz_z12 > uruz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Uruz': - " + uruz_zz2 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Uruz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Uruz': - " + uruz_zz2 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Uruz' - " + "</b>");
			}
		}
	}
	uruz_z15 = zzruna['zzuruz'] - zzruna['zzuruz2'];
	uruz_z16 = zzruna['zzuruz2'] - zzruna['zzuruz'];
	uruz_z25 = zzruna['zzuruz4'] - zzruna['zzuruz6'];
	uruz_z26 = zzruna['zzuruz6'] - zzruna['zzuruz4'];
	uruz_z35 = zzruna['zzuruz8'] - zzruna['zzuruz10'];
	uruz_z36 = zzruna['zzuruz10'] - zzruna['zzuruz8'];
	if ((uruz_z15 > 0) && (uruz_z25 > 0) && (uruz_z35 > 0)) {
		uruz_zzz5 = 1;
		uruz_zz5 = uruz_z15 + uruz_z25 + uruz_z35;
		if (uruz_z15 > uruz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Uruz': + " + uruz_zz5 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Uruz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Uruz' + " + uruz_zz5 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Uruz' + " + "</b>");
			}
		}
	}
	if ((uruz_z16 > 0) && (uruz_z26 > 0) && (uruz_z36 > 0)) {
		uruz_zzz6 = 1;
		uruz_zz6 = uruz_z16 + uruz_z26 + uruz_z36;
		if (uruz_z16 > uruz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Uruz': - " + uruz_zz6 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Uruz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Uruz' - " + uruz_zz6 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Uruz' - " + "</b>");
			}
		}
	}
	uruz_z17 = zzruna['zzuruz1'] - zzruna['zzuruz3'];
	uruz_z18 = zzruna['zzuruz3'] - zzruna['zzuruz1'];
	uruz_z27 = zzruna['zzuruz5'] - zzruna['zzuruz7'];
	uruz_z28 = zzruna['zzuruz7'] - zzruna['zzuruz5'];
	uruz_z37 = zzruna['zzuruz9'] - zzruna['zzuruz11'];
	uruz_z38 = zzruna['zzuruz11'] - zzruna['zzuruz9'];
	if ((uruz_z17 > 0) && (uruz_z27 > 0) && (uruz_z37 > 0)) {
		uruz_zzz7 = 1;
		uruz_zz7 = uruz_z17 + uruz_z27 + uruz_z37;
		if (uruz_z17 > uruz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Uruz' + " + uruz_zz7 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Uruz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Uruz' + " + uruz_zz7 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Uruz' + " + "</b>");
			}
		}
	}
	if ((uruz_z18 > 0) && (uruz_z28 > 0) && (uruz_z38 > 0)) {
		uruz_zzz8 = 1;
		uruz_zz8 = uruz_z18 + uruz_z28 + uruz_z38;
		if (uruz_z18 > uruz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Uruz' - " + uruz_zz8 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Uruz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Uruz' - " + uruz_zz8 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Uruz' - " + "</b>");
			}
		}
	}
	uruz_z13 = zzruna['zzuruz2'] - zzruna['zzuruz3'];
	uruz_z14 = zzruna['zzuruz3'] - zzruna['zzuruz2'];
	uruz_z23 = zzruna['zzuruz6'] - zzruna['zzuruz7'];
	uruz_z24 = zzruna['zzuruz7'] - zzruna['zzuruz6'];
	uruz_z33 = zzruna['zzuruz10'] - zzruna['zzuruz11'];
	uruz_z34 = zzruna['zzuruz11'] - zzruna['zzuruz10'];
	if ((uruz_z13 > 0) && (uruz_z23 > 0) && (uruz_z33 > 0)) {
		uruz_zzz3 = 1;
		uruz_zz3 = uruz_z13 + uruz_z23 + uruz_z33;
		if (uruz_z13 >= uruz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Uruz' + " + uruz_zz3 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Uruz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Uruz' + " + uruz_zz3 + "</b>");
			if ((sum_uruz > sum_uruz1) & (uruz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Uruz' + " + "</b>");
			}
		}
	}
	if ((uruz_z14 > 0) && (uruz_z24 > 0) && (uruz_z34 > 0)) {
		uruz_zzz4 = 1;
		uruz_zz4 = uruz_z14 + uruz_z24 + uruz_z34;
		if (uruz_z12 >= uruz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Uruz' - " + uruz_zz4 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Uruz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Uruz' - " + uruz_zz4 + "</b>");
			if ((sum_uruz < sum_uruz1) & (uruz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Uruz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Uruz' закончена" + "</b>");
	html += ("</td></tr></table>");	
	
	return html;
}