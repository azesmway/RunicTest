function table_othala() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Othala'</th></thead><tbody><tr><td>");
	html += ("Семья, семейственность, отношения в семье и коллективе, взаимопонимание в семье и коллективе");
	html += ("<br>");
	if ((zzruna['zzothala'] == 8) || (zzruna['zzothala1'] == 8) || (zzruna['zzothala2'] == 8) || (zzruna['zzothala3'] == 8) || (zzruna['zzothala4'] == 8) || (zzruna['zzothala5'] == 8) || (zzruna['zzothala6'] == 8) || (zzruna['zzothala7'] == 8) || (zzruna['zzothala8'] == 8) || (zzruna['zzothala9'] == 8) || (zzruna['zzothala10'] == 8) || (zzruna['zzothala11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Othala'" + "</b><br>");
	}
	sum_othala = Math.round((zzruna['zzothala'] + zzruna['zzothala2'] + zzruna['zzothala4'] + zzruna['zzothala6'] + zzruna['zzothala8'] + zzruna['zzothala10']) / 6);
	sum_othala1 = Math.round((zzruna['zzothala1'] + zzruna['zzothala3'] + zzruna['zzothala5'] + zzruna['zzothala7'] + zzruna['zzothala9'] + zzruna['zzothala11']) / 6);
	html += ("<b>" + "Потенциал 'Othala':  " + sum_othala1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Othala':  " + sum_othala + "</b>");
	othala_z11 = zzruna['zzothala'] - zzruna['zzothala1'];
	othala_z12 = zzruna['zzothala1'] - zzruna['zzothala'];
	othala_z21 = zzruna['zzothala4'] - zzruna['zzothala5'];
	othala_z22 = zzruna['zzothala5'] - zzruna['zzothala4'];
	othala_z31 = zzruna['zzothala8'] - zzruna['zzothala9'];
	othala_z32 = zzruna['zzothala9'] - zzruna['zzothala8'];
	if ((othala_z11 > 0) && (othala_z21 > 0) && (othala_z31 > 0)) {
		othala_zzz1 = 1;
		othala_zz1 = othala_z11 + othala_z21 + othala_z31;
		if (othala_z11 > othala_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Othala': + " + othala_zz1 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Othala' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Othala': + " + othala_zz1 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Othala' + " + "</b>");
			}
		}
	}
	if ((othala_z12 > 0) && (othala_z22 > 0) && (othala_z32 > 0)) {
		othala_zzz2 = 1;
		othala_zz2 = othala_z12 + othala_z22 + othala_z32;
		if (othala_z12 > othala_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Othala': - " + othala_zz2 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Othala' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Othala': - " + othala_zz2 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Othala' - " + "</b>");
			}
		}
	}
	othala_z15 = zzruna['zzothala'] - zzruna['zzothala2'];
	othala_z16 = zzruna['zzothala2'] - zzruna['zzothala'];
	othala_z25 = zzruna['zzothala4'] - zzruna['zzothala6'];
	othala_z26 = zzruna['zzothala6'] - zzruna['zzothala4'];
	othala_z35 = zzruna['zzothala8'] - zzruna['zzothala10'];
	othala_z36 = zzruna['zzothala10'] - zzruna['zzothala8'];
	if ((othala_z15 > 0) && (othala_z25 > 0) && (othala_z35 > 0)) {
		othala_zzz5 = 1;
		othala_zz5 = othala_z15 + othala_z25 + othala_z35;
		if (othala_z15 > othala_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Othala': + " + othala_zz5 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Othala' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Othala' + " + othala_zz5 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Othala' + " + "</b>");
			}
		}
	}
	if ((othala_z16 > 0) && (othala_z26 > 0) && (othala_z36 > 0)) {
		othala_zzz6 = 1;
		othala_zz6 = othala_z16 + othala_z26 + othala_z36;
		if (othala_z16 > othala_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Othala': - " + othala_zz6 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Othala' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Othala' - " + othala_zz6 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Othala' - " + "</b>");
			}
		}
	}
	othala_z17 = zzruna['zzothala1'] - zzruna['zzothala3'];
	othala_z18 = zzruna['zzothala3'] - zzruna['zzothala1'];
	othala_z27 = zzruna['zzothala5'] - zzruna['zzothala7'];
	othala_z28 = zzruna['zzothala7'] - zzruna['zzothala5'];
	othala_z37 = zzruna['zzothala9'] - zzruna['zzothala11'];
	othala_z38 = zzruna['zzothala11'] - zzruna['zzothala9'];
	if ((othala_z17 > 0) && (othala_z27 > 0) && (othala_z37 > 0)) {
		othala_zzz7 = 1;
		othala_zz7 = othala_z17 + othala_z27 + othala_z37;
		if (othala_z17 > othala_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Othala' + " + othala_zz7 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Othala' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Othala' + " + othala_zz7 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Othala' + " + "</b>");
			}
		}
	}
	if ((othala_z18 > 0) && (othala_z28 > 0) && (othala_z38 > 0)) {
		othala_zzz8 = 1;
		othala_zz8 = othala_z18 + othala_z28 + othala_z38;
		if (othala_z18 > othala_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Othala' - " + othala_zz8 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Othala' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Othala' - " + othala_zz8 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Othala' - " + "</b>");
			}
		}
	}
	othala_z13 = zzruna['zzothala2'] - zzruna['zzothala3'];
	othala_z14 = zzruna['zzothala3'] - zzruna['zzothala2'];
	othala_z23 = zzruna['zzothala6'] - zzruna['zzothala7'];
	othala_z24 = zzruna['zzothala7'] - zzruna['zzothala6'];
	othala_z33 = zzruna['zzothala10'] - zzruna['zzothala11'];
	othala_z34 = zzruna['zzothala11'] - zzruna['zzothala10'];
	if ((othala_z13 > 0) && (othala_z23 > 0) && (othala_z33 > 0)) {
		othala_zzz3 = 1;
		othala_zz3 = othala_z13 + othala_z23 + othala_z33;
		if (othala_z13 >= othala_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Othala' + " + othala_zz3 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Othala' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Othala' + " + othala_zz3 + "</b>");
			if ((sum_othala > sum_othala1) & (othala_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Othala' + " + "</b>");
			}
		}
	}
	if ((othala_z14 > 0) && (othala_z24 > 0) && (othala_z34 > 0)) {
		othala_zzz4 = 1;
		othala_zz4 = othala_z14 + othala_z24 + othala_z34;
		if (othala_z12 >= othala_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Othala' - " + othala_zz4 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Othala' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Othala' - " + othala_zz4 + "</b>");
			if ((sum_othala < sum_othala1) & (othala_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Othala' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Othala' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}