function table_berkano() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Berkano'</th></thead><tbody><tr><td>");
	html += ("Мягкость, способность сопереживать, доброта, материнские (родительские) качества, способность приспосабливаться, способность создать домашний очаг и поддерживать его");
	html += ("<br>");
	if ((zzruna['zzberkano'] == 8) || (zzruna['zzberkano1'] == 8) || (zzruna['zzberkano2'] == 8) || (zzruna['zzberkano3'] == 8) || (zzruna['zzberkano4'] == 8) || (zzruna['zzberkano5'] == 8) || (zzruna['zzberkano6'] == 8) || (zzruna['zzberkano7'] == 8) || (zzruna['zzberkano8'] == 8) || (zzruna['zzberkano9'] == 8) || (zzruna['zzberkano10'] == 8) || (zzruna['zzberkano11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Berkano'" + "</b><br>");
	}
	sum_berkano = Math.round((zzruna['zzberkano'] + zzruna['zzberkano2'] + zzruna['zzberkano4'] + zzruna['zzberkano6'] + zzruna['zzberkano8'] + zzruna['zzberkano10']) / 6);
	sum_berkano1 = Math.round((zzruna['zzberkano1'] + zzruna['zzberkano3'] + zzruna['zzberkano5'] + zzruna['zzberkano7'] + zzruna['zzberkano9'] + zzruna['zzberkano11']) / 6);
	html += ("<b>" + "Потенциал 'Berkano':  " + sum_berkano1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Berkano':  " + sum_berkano + "</b>");
	berkano_z11 = zzruna['zzberkano'] - zzruna['zzberkano1'];
	berkano_z12 = zzruna['zzberkano1'] - zzruna['zzberkano'];
	berkano_z21 = zzruna['zzberkano4'] - zzruna['zzberkano5'];
	berkano_z22 = zzruna['zzberkano5'] - zzruna['zzberkano4'];
	berkano_z31 = zzruna['zzberkano8'] - zzruna['zzberkano9'];
	berkano_z32 = zzruna['zzberkano9'] - zzruna['zzberkano8'];
	if ((berkano_z11 > 0) && (berkano_z21 > 0) && (berkano_z31 > 0)) {
		berkano_zzz1 = 1;
		berkano_zz1 = berkano_z11 + berkano_z21 + berkano_z31;
		if (berkano_z11 > berkano_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Berkano': + " + berkano_zz1 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Berkano' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Berkano': + " + berkano_zz1 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Berkano' + " + "</b>");
			}
		}
	}
	if ((berkano_z12 > 0) && (berkano_z22 > 0) && (berkano_z32 > 0)) {
		berkano_zzz2 = 1;
		berkano_zz2 = berkano_z12 + berkano_z22 + berkano_z32;
		if (berkano_z12 > berkano_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Berkano': - " + berkano_zz2 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Berkano' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Berkano': - " + berkano_zz2 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Berkano' - " + "</b>");
			}
		}
	}
	berkano_z15 = zzruna['zzberkano'] - zzruna['zzberkano2'];
	berkano_z16 = zzruna['zzberkano2'] - zzruna['zzberkano'];
	berkano_z25 = zzruna['zzberkano4'] - zzruna['zzberkano6'];
	berkano_z26 = zzruna['zzberkano6'] - zzruna['zzberkano4'];
	berkano_z35 = zzruna['zzberkano8'] - zzruna['zzberkano10'];
	berkano_z36 = zzruna['zzberkano10'] - zzruna['zzberkano8'];
	if ((berkano_z15 > 0) && (berkano_z25 > 0) && (berkano_z35 > 0)) {
		berkano_zzz5 = 1;
		berkano_zz5 = berkano_z15 + berkano_z25 + berkano_z35;
		if (berkano_z15 > berkano_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Berkano': + " + berkano_zz5 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Berkano' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Berkano' + " + berkano_zz5 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Berkano' + " + "</b>");
			}
		}
	}
	if ((berkano_z16 > 0) && (berkano_z26 > 0) && (berkano_z36 > 0)) {
		berkano_zzz6 = 1;
		berkano_zz6 = berkano_z16 + berkano_z26 + berkano_z36;
		if (berkano_z16 > berkano_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Berkano': - " + berkano_zz6 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Berkano' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Berkano' - " + berkano_zz6 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Berkano' - " + "</b>");
			}
		}
	}
	berkano_z17 = zzruna['zzberkano1'] - zzruna['zzberkano3'];
	berkano_z18 = zzruna['zzberkano3'] - zzruna['zzberkano1'];
	berkano_z27 = zzruna['zzberkano5'] - zzruna['zzberkano7'];
	berkano_z28 = zzruna['zzberkano7'] - zzruna['zzberkano5'];
	berkano_z37 = zzruna['zzberkano9'] - zzruna['zzberkano11'];
	berkano_z38 = zzruna['zzberkano11'] - zzruna['zzberkano9'];
	if ((berkano_z17 > 0) && (berkano_z27 > 0) && (berkano_z37 > 0)) {
		berkano_zzz7 = 1;
		berkano_zz7 = berkano_z17 + berkano_z27 + berkano_z37;
		if (berkano_z17 > berkano_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Berkano' + " + berkano_zz7 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Berkano' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Berkano' + " + berkano_zz7 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Berkano' + " + "</b>");
			}
		}
	}
	if ((berkano_z18 > 0) && (berkano_z28 > 0) && (berkano_z38 > 0)) {
		berkano_zzz8 = 1;
		berkano_zz8 = berkano_z18 + berkano_z28 + berkano_z38;
		if (berkano_z18 > berkano_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Berkano' - " + berkano_zz8 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Berkano' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Berkano' - " + berkano_zz8 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Berkano' - " + "</b>");
			}
		}
	}
	berkano_z13 = zzruna['zzberkano2'] - zzruna['zzberkano3'];
	berkano_z14 = zzruna['zzberkano3'] - zzruna['zzberkano2'];
	berkano_z23 = zzruna['zzberkano6'] - zzruna['zzberkano7'];
	berkano_z24 = zzruna['zzberkano7'] - zzruna['zzberkano6'];
	berkano_z33 = zzruna['zzberkano10'] - zzruna['zzberkano11'];
	berkano_z34 = zzruna['zzberkano11'] - zzruna['zzberkano10'];
	if ((berkano_z13 > 0) && (berkano_z23 > 0) && (berkano_z33 > 0)) {
		berkano_zzz3 = 1;
		berkano_zz3 = berkano_z13 + berkano_z23 + berkano_z33;
		if (berkano_z13 >= berkano_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Berkano' + " + berkano_zz3 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Berkano' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Berkano' + " + berkano_zz3 + "</b>");
			if ((sum_berkano > sum_berkano1) & (berkano_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Berkano' + " + "</b>");
			}
		}
	}
	if ((berkano_z14 > 0) && (berkano_z24 > 0) && (berkano_z34 > 0)) {
		berkano_zzz4 = 1;
		berkano_zz4 = berkano_z14 + berkano_z24 + berkano_z34;
		if (berkano_z12 >= berkano_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Berkano' - " + berkano_zz4 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Berkano' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Berkano' - " + berkano_zz4 + "</b>");
			if ((sum_berkano < sum_berkano1) & (berkano_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Berkano' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Berkano' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}