function table_raidho() {
	var html = '';
	html += ("<table class=\"table\"><thead><th>Диагностика по руне 'Raidho'</th></thead><tbody><tr><td>");
	html += ("Путь человека, правильность пути и стойкость в достижении цели, способность к развитию, мобильность и оперативность в делах");
	html += ("<br>");
	if ((zzruna['zzraidho'] == 8) || (zzruna['zzraidho1'] == 8) || (zzruna['zzraidho2'] == 8) || (zzruna['zzraidho3'] == 8) || (zzruna['zzraidho4'] == 8) || (zzruna['zzraidho5'] == 8) || (zzruna['zzraidho6'] == 8) || (zzruna['zzraidho7'] == 8) || (zzruna['zzraidho8'] == 8) || (zzruna['zzraidho9'] == 8) || (zzruna['zzraidho10'] == 8) || (zzruna['zzraidho11'] == 8)) {
		html += ("<b>" + "Не выбрана руна 'Raidho'" + "</b><br>");
	}
	sum_raidho = Math.round((zzruna['zzraidho'] + zzruna['zzraidho2'] + zzruna['zzraidho4'] + zzruna['zzraidho6'] + zzruna['zzraidho8'] + zzruna['zzraidho10']) / 6);
	sum_raidho1 = Math.round((zzruna['zzraidho1'] + zzruna['zzraidho3'] + zzruna['zzraidho5'] + zzruna['zzraidho7'] + zzruna['zzraidho9'] + zzruna['zzraidho11']) / 6);
	html += ("<b>" + "Потенциал 'Raidho':  " + sum_raidho1 + "</b>");
	html += ("<br>");
	html += ("<b>" + "Явленное 'Raidho':  " + sum_raidho + "</b>");
	raidho_z11 = zzruna['zzraidho'] - zzruna['zzraidho1'];
	raidho_z12 = zzruna['zzraidho1'] - zzruna['zzraidho'];
	raidho_z21 = zzruna['zzraidho4'] - zzruna['zzraidho5'];
	raidho_z22 = zzruna['zzraidho5'] - zzruna['zzraidho4'];
	raidho_z31 = zzruna['zzraidho8'] - zzruna['zzraidho9'];
	raidho_z32 = zzruna['zzraidho9'] - zzruna['zzraidho8'];
	if ((raidho_z11 > 0) && (raidho_z21 > 0) && (raidho_z31 > 0)) {
		raidho_zzz1 = 1;
		raidho_zz1 = raidho_z11 + raidho_z21 + raidho_z31;
		if (raidho_z11 > raidho_z21) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Raidho': + " + raidho_zz1 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Raidho' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Raidho': + " + raidho_zz1 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz1 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Raidho' + " + "</b>");
			}
		}
	}
	if ((raidho_z12 > 0) && (raidho_z22 > 0) && (raidho_z32 > 0)) {
		raidho_zzz2 = 1;
		raidho_zz2 = raidho_z12 + raidho_z22 + raidho_z32;
		if (raidho_z12 > raidho_z22) {
			html += ("<br>");
			html += ("<b>" + "Ментальная активность 'Raidho': - " + raidho_zz2 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Ауральная сущность 'Raidho' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Астральная активность 'Raidho': - " + raidho_zz2 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz2 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Влияние прошлой жизни 'Raidho' - " + "</b>");
			}
		}
	}
	raidho_z15 = zzruna['zzraidho'] - zzruna['zzraidho2'];
	raidho_z16 = zzruna['zzraidho2'] - zzruna['zzraidho'];
	raidho_z25 = zzruna['zzraidho4'] - zzruna['zzraidho6'];
	raidho_z26 = zzruna['zzraidho6'] - zzruna['zzraidho4'];
	raidho_z35 = zzruna['zzraidho8'] - zzruna['zzraidho10'];
	raidho_z36 = zzruna['zzraidho10'] - zzruna['zzraidho8'];
	if ((raidho_z15 > 0) && (raidho_z25 > 0) && (raidho_z35 > 0)) {
		raidho_zzz5 = 1;
		raidho_zz5 = raidho_z15 + raidho_z25 + raidho_z35;
		if (raidho_z15 > raidho_z25) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Raidho': + " + raidho_zz5 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Raidho' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Raidho' + " + raidho_zz5 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz5 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Raidho' + " + "</b>");
			}
		}
	}
	if ((raidho_z16 > 0) && (raidho_z26 > 0) && (raidho_z36 > 0)) {
		raidho_zzz6 = 1;
		raidho_zz6 = raidho_z16 + raidho_z26 + raidho_z36;
		if (raidho_z16 > raidho_z26) {
			html += ("<br>");
			html += ("<b>" + "Активность сознания 'Raidho': - " + raidho_zz6 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Программа 'Raidho' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Наведенная активность сознания 'Raidho' - " + raidho_zz6 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz6 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Наведенная программа 'Raidho' - " + "</b>");
			}
		}
	}
	raidho_z17 = zzruna['zzraidho1'] - zzruna['zzraidho3'];
	raidho_z18 = zzruna['zzraidho3'] - zzruna['zzraidho1'];
	raidho_z27 = zzruna['zzraidho5'] - zzruna['zzraidho7'];
	raidho_z28 = zzruna['zzraidho7'] - zzruna['zzraidho5'];
	raidho_z37 = zzruna['zzraidho9'] - zzruna['zzraidho11'];
	raidho_z38 = zzruna['zzraidho11'] - zzruna['zzraidho9'];
	if ((raidho_z17 > 0) && (raidho_z27 > 0) && (raidho_z37 > 0)) {
		raidho_zzz7 = 1;
		raidho_zz7 = raidho_z17 + raidho_z27 + raidho_z37;
		if (raidho_z17 > raidho_z27) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Raidho' + " + raidho_zz7 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Raidho' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Raidho' + " + raidho_zz7 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz7 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Raidho' + " + "</b>");
			}
		}
	}
	if ((raidho_z18 > 0) && (raidho_z28 > 0) && (raidho_z38 > 0)) {
		raidho_zzz8 = 1;
		raidho_zz8 = raidho_z18 + raidho_z28 + raidho_z38;
		if (raidho_z18 > raidho_z28) {
			html += ("<br>");
			html += ("<b>" + "Энергетическая активность 'Raidho' - " + raidho_zz8 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Эфирная сущность 'Raidho' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Навязанная энергетическая активность 'Raidho' - " + raidho_zz8 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz8 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Навязанная эфирная сущность (морок) 'Raidho' - " + "</b>");
			}
		}
	}
	raidho_z13 = zzruna['zzraidho2'] - zzruna['zzraidho3'];
	raidho_z14 = zzruna['zzraidho3'] - zzruna['zzraidho2'];
	raidho_z23 = zzruna['zzraidho6'] - zzruna['zzraidho7'];
	raidho_z24 = zzruna['zzraidho7'] - zzruna['zzraidho6'];
	raidho_z33 = zzruna['zzraidho10'] - zzruna['zzraidho11'];
	raidho_z34 = zzruna['zzraidho11'] - zzruna['zzraidho10'];
	if ((raidho_z13 > 0) && (raidho_z23 > 0) && (raidho_z33 > 0)) {
		raidho_zzz3 = 1;
		raidho_zz3 = raidho_z13 + raidho_z23 + raidho_z33;
		if (raidho_z13 >= raidho_z23) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Raidho' + " + raidho_zz3 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Raidho' + " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Raidho' + " + raidho_zz3 + "</b>");
			if ((sum_raidho > sum_raidho1) & (raidho_zz3 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Raidho' + " + "</b>");
			}
		}
	}
	if ((raidho_z14 > 0) && (raidho_z24 > 0) && (raidho_z34 > 0)) {
		raidho_zzz4 = 1;
		raidho_zz4 = raidho_z14 + raidho_z24 + raidho_z34;
		if (raidho_z12 >= raidho_z22) {
			html += ("<br>");
			html += ("<b>" + "Подсознательная активность 'Raidho' - " + raidho_zz4 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Скрытая (подсознательная) программа (инграмма) 'Raidho' - " + "</b>");
			}
		} else {
			html += ("<br>");
			html += ("<b>" + "Физическая активность 'Raidho' - " + raidho_zz4 + "</b>");
			if ((sum_raidho < sum_raidho1) & (raidho_zz4 >= 6)) {
				html += ("<br>");
				html += ("<b>" + "Органическая программа (органическая инграмма) 'Raidho' - " + "</b>");
			}
		}
	}
	html += ("<br>");
	html += ("<b>" + "Диагностика по руне 'Raidho' закончена" + "</b>");
	html += ("</td></tr></table>");
	return html;
}