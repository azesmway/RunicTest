function table_pm(m, runa) {
	
	var html = '';
	
	html += ("<table class=\"table\" id=\"runic_table_pm\"><thead><th>Распределяющая руническая коррекция по руне "+runa+"</th></thead><tbody><tr><td>");;
	
	html +=  ("<TABLE BORDER=\"1\" WIDTH=\"648\">");
	html +=  ("<TR>");
	
	for(var i=0; i<Runic.letters.length; i++) {
		html += ("<TD WIDTH=\"20\"><center><FONT FACE=\"Runa-Odin\"><SPAN STYLE=\"font-size:130%;color:#000000;\">" + Runic.letters[i] +"</SPAN></FONT></center></TD>");
	}
	
	html +=  ("</TR>");
	html +=  ("</TABLE>");
	
	html +=  ("<TABLE BORDER=\"1\" WIDTH=\"648\">");
	html +=  ("<TR>");
	
	for(var i=0; i<Runic.runes.length; i++) {
		html += ("<TD WIDTH=\"20\"><center><SPAN STYLE=\"font-size:130%;color:#000000;\">"+ m['zz'+Runic.runes[i]] +"</SPAN></center></TD>");	
	}
	
	html +=  ("</TR>");
	html +=  ("</TABLE>");
	
	html +=  ("<TABLE BORDER=\"1\" WIDTH=\"648\">");
	html +=  ("<TR>");
	
	for(var i=0; i<Runic.runes.length; i++) {
		if(m['zz'+Runic.runes[i]] >= Runic.nnn) {
			html += ("<TD WIDTH=\"20\"><center><FONT FACE=\"Runa-Odin\"><SPAN STYLE=\"font-size:130%;color:#FF0000;\">"+ Runic.letters[i] + "</SPAN></center></TD>");	
		} else {
			html += ("<TD WIDTH=\"20\"><center><FONT FACE=\"Runa-Odin\"><SPAN STYLE=\"font-size:130%;color:#FF0000;\">&#8194</SPAN></center></TD>");
		}
	}
	
	html +=  ("</TR>");
	html +=  ("</TABLE>");
	
	html += ("</td></tr></table>");


	return html;
	
}