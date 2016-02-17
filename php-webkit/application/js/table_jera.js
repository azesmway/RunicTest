function table_jera() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Jera'</th></thead><tbody><tr><td>");
	html += ("Размеренность, способность человека получить результаты своего труда, ощущение времени  и места, вхождение человека в процессы, существование и деятельность человека в циклических процессах");
	html += ("<br>");
	if ((zzruna['zzjera'] == 8) || (zzruna['zzjera1'] == 8) || (zzruna['zzjera2'] == 8) || (zzruna['zzjera3'] == 8) || (zzruna['zzjera4'] == 8) || (zzruna['zzjera5'] == 8) || (zzruna['zzjera6'] == 8) || (zzruna['zzjera7'] == 8) || (zzruna['zzjera8'] == 8) || (zzruna['zzjera9'] == 8) || (zzruna['zzjera10'] == 8) || (zzruna['zzjera11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Jera'" + "</b><br>");
	}
	sum_jera = Math.round((zzruna['zzjera'] + zzruna['zzjera2'] + zzruna['zzjera4'] + zzruna['zzjera6'] + zzruna['zzjera8'] + zzruna['zzjera10']) / 6);
	sum_jera1 = Math.round((zzruna['zzjera1'] + zzruna['zzjera3'] + zzruna['zzjera5'] + zzruna['zzjera7'] + zzruna['zzjera9'] + zzruna['zzjera11']) / 6);
	html += ("<b>" + "Потенциал 'Jera':  " + sum_jera1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Jera':  " + sum_jera + "</b>");
	jera_z11 = zzruna['zzjera'] - zzruna['zzjera1'];
	jera_z12 = zzruna['zzjera1'] - zzruna['zzjera'];
	jera_z21 = zzruna['zzjera4'] - zzruna['zzjera5'];
	jera_z22 = zzruna['zzjera5'] - zzruna['zzjera4'];
	jera_z31 = zzruna['zzjera8'] - zzruna['zzjera9'];
	jera_z32 = zzruna['zzjera9'] - zzruna['zzjera8'];
	if ((jera_z11 > 0) && (jera_z21 > 0) && (jera_z31 > 0)) {
		jera_zzz1 = 1;
		jera_zz1 = jera_z11 + jera_z21 + jera_z31;
		if (jera_z11 > jera_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Jera': + " + jera_zz1 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Jera' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Jera': + " + jera_zz1 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Jera' + " + "</b>");
			}
		}
	}
	if ((jera_z12 > 0) && (jera_z22 > 0) && (jera_z32 > 0)) {
		jera_zzz2 = 1;
		jera_zz2 = jera_z12 + jera_z22 + jera_z32;
		if (jera_z12 > jera_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Jera': - " + jera_zz2 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Jera' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Jera': - " + jera_zz2 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Jera' - " + "</b>");
			}
		}
	}
	jera_z15 = zzruna['zzjera'] - zzruna['zzjera2'];
	jera_z16 = zzruna['zzjera2'] - zzruna['zzjera'];
	jera_z25 = zzruna['zzjera4'] - zzruna['zzjera6'];
	jera_z26 = zzruna['zzjera6'] - zzruna['zzjera4'];
	jera_z35 = zzruna['zzjera8'] - zzruna['zzjera10'];
	jera_z36 = zzruna['zzjera10'] - zzruna['zzjera8'];
	if ((jera_z15 > 0) && (jera_z25 > 0) && (jera_z35 > 0)) {
		jera_zzz5 = 1;
		jera_zz5 = jera_z15 + jera_z25 + jera_z35;
		if (jera_z15 > jera_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Jera': + " + jera_zz5 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Jera' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Jera' + " + jera_zz5 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Jera' + " + "</b>");
			}
		}
	}
	if ((jera_z16 > 0) && (jera_z26 > 0) && (jera_z36 > 0)) {
		jera_zzz6 = 1;
		jera_zz6 = jera_z16 + jera_z26 + jera_z36;
		if (jera_z16 > jera_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Jera': - " + jera_zz6 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Jera' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Jera' - " + jera_zz6 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Jera' - " + "</b>");
			}
		}
	}
	jera_z17 = zzruna['zzjera1'] - zzruna['zzjera3'];
	jera_z18 = zzruna['zzjera3'] - zzruna['zzjera1'];
	jera_z27 = zzruna['zzjera5'] - zzruna['zzjera7'];
	jera_z28 = zzruna['zzjera7'] - zzruna['zzjera5'];
	jera_z37 = zzruna['zzjera9'] - zzruna['zzjera11'];
	jera_z38 = zzruna['zzjera11'] - zzruna['zzjera9'];
	if ((jera_z17 > 0) && (jera_z27 > 0) && (jera_z37 > 0)) {
		jera_zzz7 = 1;
		jera_zz7 = jera_z17 + jera_z27 + jera_z37;
		if (jera_z17 > jera_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Jera' + " + jera_zz7 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Jera' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Jera' + " + jera_zz7 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Jera' + " + "</b>");
			}
		}
	}
	if ((jera_z18 > 0) && (jera_z28 > 0) && (jera_z38 > 0)) {
		jera_zzz8 = 1;
		jera_zz8 = jera_z18 + jera_z28 + jera_z38;
		if (jera_z18 > jera_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Jera' - " + jera_zz8 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Jera' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Jera' - " + jera_zz8 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Jera' - " + "</b>");
			}
		}
	}
	jera_z13 = zzruna['zzjera2'] - zzruna['zzjera3'];
	jera_z14 = zzruna['zzjera3'] - zzruna['zzjera2'];
	jera_z23 = zzruna['zzjera6'] - zzruna['zzjera7'];
	jera_z24 = zzruna['zzjera7'] - zzruna['zzjera6'];
	jera_z33 = zzruna['zzjera10'] - zzruna['zzjera11'];
	jera_z34 = zzruna['zzjera11'] - zzruna['zzjera10'];
	if ((jera_z13 > 0) && (jera_z23 > 0) && (jera_z33 > 0)) {
		jera_zzz3 = 1;
		jera_zz3 = jera_z13 + jera_z23 + jera_z33;
		if (jera_z13 >= jera_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Jera' + " + jera_zz3 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Jera' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Jera' + " + jera_zz3 + "</b>");
			if ((sum_jera > sum_jera1) & (jera_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Jera' + " + "</b>");
			}
		}
	}
	if ((jera_z14 > 0) && (jera_z24 > 0) && (jera_z34 > 0)) {
		jera_zzz4 = 1;
		jera_zz4 = jera_z14 + jera_z24 + jera_z34;
		if (jera_z12 >= jera_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Jera' - " + jera_zz4 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Jera' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Jera' - " + jera_zz4 + "</b>");
			if ((sum_jera < sum_jera1) & (jera_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Jera' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Jera' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}