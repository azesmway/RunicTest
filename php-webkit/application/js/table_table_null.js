function table_table_null() {
	
	var html = '';
	var i = 0;
	html += ("<table class=\"table\" id=\"runic_table_null\"><thead><th>ДИАГНОСТИКА ПО ПРОПУСКАМ</th></thead><tbody><tr><td>");;


html += ("<TABLE BORDER='1' WIDTH='800'>");

html += ("<TR>");
html += ("<TD colspan=\"3\" width=\"200\" align=\"center\">Руны</TD>");

for(i=0; i<24; i++) {
	html += ("<TD class=\"td_null_runa\">"+Runic.letters[i]+"</TD>");	
}

html += ("</TR>");

html += ("<TR>");
html += ("<TD rowspan=\"4\" width=\"100\" align=\"center\">Цвет</TD>");
html += ("<TD rowspan=\"2\" width=\"70\" align=\"center\">Явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");

for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]]+"</TD>");	
}
html += ("</TR>");


html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");

for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+1]+"</TD>");	
}

html += ("</TR>");

html += ("<TR>");
html += ("<TD rowspan=\"2\" align=\"center\">Не явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");

for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+2]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+3]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD rowspan=\"4\" align=\"center\">Размер</TD>");
html += ("<TD rowspan=\"2\" align=\"center\">Явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+4]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+5]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD rowspan=\"2\" align=\"center\">Не явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+6]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+7]+"</TD>");	
}
html += ("</TR>");


html += ("<TR>");
html += ("<TD rowspan=\"4\" align=\"center\">Цвет и размер</TD>");
html += ("<TD rowspan=\"2\" align=\"center\">Явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+8]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+9]+"</TD>");	
}
html += ("</TR>");

html += ("<TR>");
html += ("<TD rowspan=\"2\" align=\"center\">Не явно</TD>");
html += ("<TD align=\"center\" width=\"50\">Правое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+10]+"</TD>");	
}html += ("</TR>");

html += ("<TR>");
html += ("<TD align=\"center\" width=\"50\">Левое</TD>");
for(i=0; i<24; i++) {
	html += ("<TD align=\"center\">"+Runic.nullruna[Runic.runes[i]+11]+"</TD>");	
}
html += ("</TR>");

html += ("</TABLE>");

html += ("</td></tr></table>");

	return html;
	
}