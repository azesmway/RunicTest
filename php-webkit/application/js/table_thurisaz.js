function table_thurisaz() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Thurisaz'</th></thead><tbody><tr><td>");
	html += ("Способность расчистить хаос, способность к кардинальным, даже революционным переменам, вместе с тем проявление авторитарности и властности");
	html += ("<br>");
	if ((zzruna['zzthurisaz'] == 8) || (zzruna['zzthurisaz1'] == 8) || (zzruna['zzthurisaz2'] == 8) || (zzruna['zzthurisaz3'] == 8) || (zzruna['zzthurisaz4'] == 8) || (zzruna['zzthurisaz5'] == 8) || (zzruna['zzthurisaz6'] == 8) || (zzruna['zzthurisaz7'] == 8) || (zzruna['zzthurisaz8'] == 8) || (zzruna['zzthurisaz9'] == 8) || (zzruna['zzthurisaz10'] == 8) || (zzruna['zzthurisaz11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Thurisaz'" + "</b><br>");
	}
	sum_thurisaz = Math.round((zzruna['zzthurisaz'] + zzruna['zzthurisaz2'] + zzruna['zzthurisaz4'] + zzruna['zzthurisaz6'] + zzruna['zzthurisaz8'] + zzruna['zzthurisaz10']) / 6);
	sum_thurisaz1 = Math.round((zzruna['zzthurisaz1'] + zzruna['zzthurisaz3'] + zzruna['zzthurisaz5'] + zzruna['zzthurisaz7'] + zzruna['zzthurisaz9'] + zzruna['zzthurisaz11']) / 6);
	html += ("<b>" + "Потенциал 'Thurisaz':  " + sum_thurisaz1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Thurisaz':  " + sum_thurisaz + "</b>");
	thurisaz_z11 = zzruna['zzthurisaz'] - zzruna['zzthurisaz1'];
	thurisaz_z12 = zzruna['zzthurisaz1'] - zzruna['zzthurisaz'];
	thurisaz_z21 = zzruna['zzthurisaz4'] - zzruna['zzthurisaz5'];
	thurisaz_z22 = zzruna['zzthurisaz5'] - zzruna['zzthurisaz4'];
	thurisaz_z31 = zzruna['zzthurisaz8'] - zzruna['zzthurisaz9'];
	thurisaz_z32 = zzruna['zzthurisaz9'] - zzruna['zzthurisaz8'];
	if ((thurisaz_z11 > 0) && (thurisaz_z21 > 0) && (thurisaz_z31 > 0)) {
		thurisaz_zzz1 = 1;
		thurisaz_zz1 = thurisaz_z11 + thurisaz_z21 + thurisaz_z31;
		if (thurisaz_z11 > thurisaz_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Thurisaz': + " + thurisaz_zz1 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Thurisaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Thurisaz': + " + thurisaz_zz1 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Thurisaz' + " + "</b>");
			}
		}
	}
	if ((thurisaz_z12 > 0) && (thurisaz_z22 > 0) && (thurisaz_z32 > 0)) {
		thurisaz_zzz2 = 1;
		thurisaz_zz2 = thurisaz_z12 + thurisaz_z22 + thurisaz_z32;
		if (thurisaz_z12 > thurisaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Thurisaz': - " + thurisaz_zz2 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Thurisaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Thurisaz': - " + thurisaz_zz2 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Thurisaz' - " + "</b>");
			}
		}
	}
	thurisaz_z15 = zzruna['zzthurisaz'] - zzruna['zzthurisaz2'];
	thurisaz_z16 = zzruna['zzthurisaz2'] - zzruna['zzthurisaz'];
	thurisaz_z25 = zzruna['zzthurisaz4'] - zzruna['zzthurisaz6'];
	thurisaz_z26 = zzruna['zzthurisaz6'] - zzruna['zzthurisaz4'];
	thurisaz_z35 = zzruna['zzthurisaz8'] - zzruna['zzthurisaz10'];
	thurisaz_z36 = zzruna['zzthurisaz10'] - zzruna['zzthurisaz8'];
	if ((thurisaz_z15 > 0) && (thurisaz_z25 > 0) && (thurisaz_z35 > 0)) {
		thurisaz_zzz5 = 1;
		thurisaz_zz5 = thurisaz_z15 + thurisaz_z25 + thurisaz_z35;
		if (thurisaz_z15 > thurisaz_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Thurisaz': + " + thurisaz_zz5 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Thurisaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Thurisaz' + " + thurisaz_zz5 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Thurisaz' + " + "</b>");
			}
		}
	}
	if ((thurisaz_z16 > 0) && (thurisaz_z26 > 0) && (thurisaz_z36 > 0)) {
		thurisaz_zzz6 = 1;
		thurisaz_zz6 = thurisaz_z16 + thurisaz_z26 + thurisaz_z36;
		if (thurisaz_z16 > thurisaz_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Thurisaz': - " + thurisaz_zz6 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Thurisaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Thurisaz' - " + thurisaz_zz6 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Thurisaz' - " + "</b>");
			}
		}
	}
	thurisaz_z17 = zzruna['zzthurisaz1'] - zzruna['zzthurisaz3'];
	thurisaz_z18 = zzruna['zzthurisaz3'] - zzruna['zzthurisaz1'];
	thurisaz_z27 = zzruna['zzthurisaz5'] - zzruna['zzthurisaz7'];
	thurisaz_z28 = zzruna['zzthurisaz7'] - zzruna['zzthurisaz5'];
	thurisaz_z37 = zzruna['zzthurisaz9'] - zzruna['zzthurisaz11'];
	thurisaz_z38 = zzruna['zzthurisaz11'] - zzruna['zzthurisaz9'];
	if ((thurisaz_z17 > 0) && (thurisaz_z27 > 0) && (thurisaz_z37 > 0)) {
		thurisaz_zzz7 = 1;
		thurisaz_zz7 = thurisaz_z17 + thurisaz_z27 + thurisaz_z37;
		if (thurisaz_z17 > thurisaz_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Thurisaz' + " + thurisaz_zz7 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Thurisaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Thurisaz' + " + thurisaz_zz7 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Thurisaz' + " + "</b>");
			}
		}
	}
	if ((thurisaz_z18 > 0) && (thurisaz_z28 > 0) && (thurisaz_z38 > 0)) {
		thurisaz_zzz8 = 1;
		thurisaz_zz8 = thurisaz_z18 + thurisaz_z28 + thurisaz_z38;
		if (thurisaz_z18 > thurisaz_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Thurisaz' - " + thurisaz_zz8 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Thurisaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Thurisaz' - " + thurisaz_zz8 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Thurisaz' - " + "</b>");
			}
		}
	}
	thurisaz_z13 = zzruna['zzthurisaz2'] - zzruna['zzthurisaz3'];
	thurisaz_z14 = zzruna['zzthurisaz3'] - zzruna['zzthurisaz2'];
	thurisaz_z23 = zzruna['zzthurisaz6'] - zzruna['zzthurisaz7'];
	thurisaz_z24 = zzruna['zzthurisaz7'] - zzruna['zzthurisaz6'];
	thurisaz_z33 = zzruna['zzthurisaz10'] - zzruna['zzthurisaz11'];
	thurisaz_z34 = zzruna['zzthurisaz11'] - zzruna['zzthurisaz10'];
	if ((thurisaz_z13 > 0) && (thurisaz_z23 > 0) && (thurisaz_z33 > 0)) {
		thurisaz_zzz3 = 1;
		thurisaz_zz3 = thurisaz_z13 + thurisaz_z23 + thurisaz_z33;
		if (thurisaz_z13 >= thurisaz_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Thurisaz' + " + thurisaz_zz3 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Thurisaz' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Thurisaz' + " + thurisaz_zz3 + "</b>");
			if ((sum_thurisaz > sum_thurisaz1) & (thurisaz_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Thurisaz' + " + "</b>");
			}
		}
	}
	if ((thurisaz_z14 > 0) && (thurisaz_z24 > 0) && (thurisaz_z34 > 0)) {
		thurisaz_zzz4 = 1;
		thurisaz_zz4 = thurisaz_z14 + thurisaz_z24 + thurisaz_z34;
		if (thurisaz_z12 >= thurisaz_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Thurisaz' - " + thurisaz_zz4 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Thurisaz' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Thurisaz' - " + thurisaz_zz4 + "</b>");
			if ((sum_thurisaz < sum_thurisaz1) & (thurisaz_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Thurisaz' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Thurisaz' закончена" + "</b>");
	html += ("</td></tr></table>");

	return html;
}