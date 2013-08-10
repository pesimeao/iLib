/*
 * testdatefmt_da_DK.js - test the date formatter object in Danish
 * 
 * Copyright © 2012, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDateFmtDADKConstructorEmpty() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtDADKSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtDADKSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtDADKSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. sep. 2011", fmt.format(date));
}

function testDateFmtDADKSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtDADKSimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKSimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKSimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "da-DK", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKSimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKDateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}

function testDateFmtDADKDateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13.45", fmt.format(date));
}

function testDateFmtDADKDateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. sep. 2011 13.45", fmt.format(date));
}

function testDateFmtDADKDateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011 13.45", fmt.format(date));
}


function testDateFmtDADKTemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "da-DK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}

function testDateFmtDADKTemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "da-DK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    try {
    	fmt.format(date);
    	fail();
    } catch (str) {
    	// success
    	assertEquals("Wrong date type passed to ilib.DateFmt.format()", str);
    }
}

function testDateFmtDADKTemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "da-DK", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtDADKTemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "da-DK", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtDADKTemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "da-DK", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtDADKTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "da-DK", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "da-DK", locale: "da-DK", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "da-DK", locale: "da-DK", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "da-DK", locale: "da-DK", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "da-DK", locale: "da-DK", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtDADKTypeDate() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtDADKTypeTime() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKTypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13.45", fmt.format(date));
}


function testDateFmtDADKShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/11", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T 29/09", fmt.format(date));
}

function testDateFmtDADKShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("T 29/09/11", fmt.format(date));
}


function testDateFmtDADKFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("september 2011", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29. september 2011", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("torsdag den 29. september", fmt.format(date));
}

function testDateFmtDADKFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "da-DK", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("torsdag den 29. september 2011", fmt.format(date));
}


function testDateFmtDADKShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 UTC+0200", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 UTC+0200", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 UTC+0200", fmt.format(date));
}

function testDateFmtDADKShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 UTC+0200", fmt.format(date));
}


function testDateFmtDADKFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 UTC+0200", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45 UTC+0200", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "da-DK", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 UTC+0200", fmt.format(date));
}

function testDateFmtDADKFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 UTC+0200", fmt.format(date));
}

function testDateFmtDADKWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
		locale: "da-DK", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13.45.37 UTC+0100", fmt.format(date));
}

