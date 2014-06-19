/*
 * testpersiandate.js - test the persian date object
 * 
 * Copyright © 2014, JEDLSoft
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

function testPersDateConstructor() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
}

function testPersDateCalcYearPositive1() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(1));
}

function testPersDateCalcYearPositive2() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(365));
}

function testPersDateCalcYearPositive3() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(366));
}
function testPersDateCalcYearPositive4() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(730));
}
function testPersDateCalcYearPositive5() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(731));
}
function testPersDateCalcYearPositive6() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(1095));
}
function testPersDateCalcYearPositive7() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1096));
}
function testPersDateCalcYearPositive8() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1461));
}
function testPersDateCalcYearPositive9() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1462));
}
function testPersDateCalcYearPositive10() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1826));
}
function testPersDateCalcYearPositive11() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(6, pd._calcYear(1827));
}

function testPersDateCalcYearNegative1() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(0));
}
function testPersDateCalcYearNegative2() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(-365));
}
function testPersDateCalcYearNegative3() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-366));
}
function testPersDateCalcYearNegative4() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-730));
}
function testPersDateCalcYearNegative5() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-3, pd._calcYear(-731));
}
function testPersDateCalcYearNegative6() {
    var pd = new ilib.Date.PersAstroDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1208, pd._calcYear(-441089));
}

function testPersRataDieConstructorFromDateComponents1() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 1,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents2() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: -1,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(0, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents3() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 1,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(365, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents4() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 2,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(366, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents5() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 1,
    	month: 1,
    	day: 31,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(31, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents6() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 1,
    	month: 2,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(32, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents7() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 2,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(730, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents8() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 3,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(731, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents9() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 3,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1095, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents10() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 4,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1096, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents11() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 4,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1461, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents12() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 5,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1462, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents13() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 5,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1826, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents14() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 6,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1827, prd.getRataDie());
}
function testPersRataDieConstructorFromDateComponents15() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: -1208,
    	month: 5,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-441088, prd.getRataDie());
}

/* julian date is rd 366 + epoch */
function testPersDateConstructorFromJD() {
    var pd = new ilib.Date.PersAstroDate({julianday: 1948685.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(pd));
    assertEquals(366, pd.getRataDie());
    assertEquals(2, pd.getYears());
    assertEquals(1, pd.getMonths());
    assertEquals(1, pd.getDays());
    assertEquals(0, pd.getHours());
    assertEquals(0, pd.getMinutes());
    assertEquals(0, pd.getSeconds());
    assertEquals(0, pd.getMilliseconds());
}

// year 4 was a leap year, so Esfand 0004 contains 30 days instead of 29, and 
// Farvardin 1 0005 is one day later than expected. RD is 1462
function testPersDateAfterLeapYear() {
    var pd = new ilib.Date.PersAstroDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
    
    assertEquals('object', typeof(pd));
    assertEquals(1462.4, pd.getRataDie());
    assertEquals(5, pd.getYears());
    assertEquals(1, pd.getMonths());
    assertEquals(1, pd.getDays());
    assertEquals(9, pd.getHours());
    assertEquals(36, pd.getMinutes());
    assertEquals(0, pd.getSeconds());
    assertEquals(0, pd.getMilliseconds());
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1208, 5,     1,   0,    0,      0,      0,           0],
    [1660037.5, -790,  9,     14,  0,    0,      0,      0,           3],
    [1746893.5, -552,  7,     2,   0,    0,      0,      0,           3],
    [1770641.5, -487,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, -153,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, -46,   2,     30,  0,    0,      0,      0,           1],
    [1974851.5, 73,    8,     19,  0,    0,      0,      0,           6],
    [2091164.5, 392,   2,     5,   0,    0,      0,      0,           0],
    [2121509.5, 475,   3,     3,   0,    0,      0,      0,           0],
    [2155779.5, 569,   1,     3,   0,    0,      0,      0,           5],
    [2174029.5, 618,   12,    20,  0,    0,      0,      0,           6],
    [2191584.5, 667,   1,     14,  0,    0,      0,      0,           5],
    [2195261.5, 677,   2,     8,   0,    0,      0,      0,           0],
    [2229274.5, 770,   3,     22,  0,    0,      0,      0,           0],
    [2245580.5, 814,   11,    13,  0,    0,      0,      0,           3],
    [2266100.5, 871,   1,     21,  0,    0,      0,      0,           6],
    [2288542.5, 932,   6,     28,  0,    0,      0,      0,           6],
    [2290901.5, 938,   12,    14,  0,    0,      0,      0,           6],
    [2323140.5, 1027,  3,     21,  0,    0,      0,      0,           3],
    [2334848.5, 1059,  4,     10,  0,    0,      0,      0,           0],
    [2348020.5, 1095,  5,     2,   0,    0,      0,      0,           5],
    [2366978.5, 1147,  3,     30,  0,    0,      0,      0,           0],
    [2385648.5, 1198,  5,     10,  0,    0,      0,      0,           1],
    [2392825.5, 1218,  1,     7,   0,    0,      0,      0,           3],
    [2416223.5, 1282,  1,     29,  0,    0,      0,      0,           0],
    [2425848.5, 1308,  6,     3,   0,    0,      0,      0,           0],
    [2430266.5, 1320,  7,     7,   0,    0,      0,      0,           1],
    [2430833.5, 1322,  1,     29,  0,    0,      0,      0,           1],
    [2431004.5, 1322,  7,     14,  0,    0,      0,      0,           4],
    [2448698.5, 1370,  12,    27,  0,    0,      0,      0,           2],
    [2450138.5, 1374,  12,    6,   0,    0,      0,      0,           0],
    [2465737.5, 1417,  8,     19,  0,    0,      0,      0,           3],
    [2486076.5, 1473,  4,     28,  0,    0,      0,      0,           0]
];

function testPersDateConvert() {
    var pd;
    
    for (var i = 0; i < testDates.length; i++) {
        pd = new ilib.Date.PersAstroDate({julianday: testDates[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing rd for " + testDates[i][0], (testDates[i][0] - 1948319.5), pd.getRataDie());
        assertEquals("testing year for " + testDates[i][0], testDates[i][1], pd.getYears());
        assertEquals("testing month for " + testDates[i][0], testDates[i][2], pd.getMonths());
        assertEquals("testing day for " + testDates[i][0], testDates[i][3], pd.getDays());
        assertEquals("testing hour for " + testDates[i][0], testDates[i][4], pd.getHours());
        assertEquals("testing minute for " + testDates[i][0], testDates[i][5], pd.getMinutes());
        assertEquals("testing second for " + testDates[i][0], testDates[i][6], pd.getSeconds());
        assertEquals("testing millisecond for " + testDates[i][0], testDates[i][7], pd.getMilliseconds());
        assertEquals("testing day of week for " + testDates[i][0], testDates[i][8], pd.getDayOfWeek());
    }
}

function testPersDateGetJulianDay() {
	var pd;
	
    for (var i = 0; i < testDates.length; i++) {
        pd = new ilib.Date.PersAstroDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7],
            timezone: "Etc/UTC"
    	});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing row " + testDates[i][0], testDates[i][0], pd.getJulianDay());
        assertEquals(testDates[i][8], pd.getDayOfWeek());
    }
}

function testPersDateConstructorFull() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1392,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testPersDateConstructorFullWithStrings() {
    var pd = new ilib.Date.PersAstroDate({
		year: "1392", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testPersDateConstructorCopy() {
    var pd = new ilib.Date.PersAstroDate({
        year: 1392, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testPersDateSetYears() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setYears(123);
    
    assertEquals(123, pd.getYears());
}

function testPersDateSetMonths() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setMonths(7);
    
    assertEquals(7, pd.getMonths());
}

function testPersDateSetDays() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setDays(12);
    
    assertEquals(12, pd.getDays());
}

function testPersDateSetHours() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setHours(12);
    
    assertEquals(12, pd.getHours());
}

function testPersDateSetMinutes() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setMinutes(13);
    
    assertEquals(13, pd.getMinutes());
}

function testPersDateSetSeconds() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setSeconds(23);
    
    assertEquals(23, pd.getSeconds());
}

function testPersDateSetMilliseconds() {
    var pd = new ilib.Date.PersAstroDate();
    
    assertNotNull(pd);
    
    pd.setMilliseconds(123);
    
    assertEquals(123, pd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1393,
		month: 3,
		day: 16
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1393,
		month: 3,
		day: 16,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testPersDateTestGetTimeZero() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1348,
		month: 10,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersDateTestGetTimeZeroJD() {
    var pd = new ilib.Date.PersAstroDate({julianday: 2440587.5});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersDateTestGetTime() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1348,
		month: 10,
		day: 11,
		hour: 8,
		minute: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(30600000, pd.getTime());
}

function testPersDateTestGetTimeTooEarly() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1348,
		month: 10,
		day: 10
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

function testPersDateTestGetTimeTooLate() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1416,
		month: 11,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testPersDateOnOrBeforeSun() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd-5, pd.onOrBefore(0).getRataDie());
}

function testPersDateOnOrBeforeMon() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.onOrBefore(1).getRataDie());
}

function testPersDateOnOrBeforeTue() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.onOrBefore(2).getRataDie());
}

function testPersDateOnOrBeforeWed() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.onOrBefore(3).getRataDie());
}

function testPersDateOnOrBeforeThu() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.onOrBefore(4).getRataDie());
}

function testPersDateOnOrBeforeFri() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrBefore(5).getRataDie());
}

function testPersDateOnOrBeforeSat() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.onOrBefore(6).getRataDie());
}

function testPersDateOnOrAfterSun() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.onOrAfter(0).getRataDie());
}

function testPersDateOnOrAfterMon() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.onOrAfter(1).getRataDie());
}

function testPersDateOnOrAfterTue() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.onOrAfter(2).getRataDie());
}

function testPersDateOnOrAfterWed() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.onOrAfter(3).getRataDie());
}

function testPersDateOnOrAfterThu() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.onOrAfter(4).getRataDie());
}

function testPersDateOnOrAfterFri() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrAfter(5).getRataDie());
}

function testPersDateOnOrAfterSat() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.onOrAfter(6).getRataDie());
}

function testPersDateBeforeSun() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday before pd 5 days before 
    assertEquals(rd-5, pd.before(0).getRataDie());
}

function testPersDateBeforeMon() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.before(1).getRataDie());
}

function testPersDateBeforeTue() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.before(2).getRataDie());
}

function testPersDateBeforeWed() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.before(3).getRataDie());
}

function testPersDateBeforeThu() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.before(4).getRataDie());
}

function testPersDateBeforeFri() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-7, pd.before(5).getRataDie());
}

function testPersDateBeforeSat() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.before(6).getRataDie());
}

function testPersDateAfterSun() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.after(0).getRataDie());
}

function testPersDateAfterMon() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.after(1).getRataDie());
}

function testPersDateAfterTue() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.after(2).getRataDie());
}

function testPersDateAfterWed() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.after(3).getRataDie());
}

function testPersDateAfterThu() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.after(4).getRataDie());
}

function testPersDateAfterFri() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+7, pd.after(5).getRataDie());
}

function testPersDateAfterSat() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.after(6).getRataDie());
}

function testPersDateTestGetWeekOfYearThisYear() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 2,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYear2() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 19
	});
    assertNotNull(pd);
    
    assertEquals(12, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYear3() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYearWithTime() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 12,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearPreviousYear() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekLeap() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1383,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular1() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1389,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular2() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1390,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular3() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1391,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular4() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1392,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular5() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1393,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular6() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1394,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateGetDayOfYearFirstDay() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getDayOfYear());
}

function testPersDateGetDayOfYearMidYear() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 17
	});
    assertNotNull(pd);
    
    assertEquals(79, pd.getDayOfYear());
}

function testPersDateGetDayOfYearLastDay() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(365, pd.getDayOfYear());
}

function testPersDateGetDayOfYearLastDayLeapYear() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1387,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(366, pd.getDayOfYear());
}

function testPersDateGetWeekOfMonth0() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth1() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth2() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth3() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth4() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth5() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth6() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth7() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth8() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth9() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonthIR0() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR1() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR2() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR3() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR4() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR5() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR6() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR7() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR8() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR9() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR10() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR11() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 9,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR12() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 10,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR13() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 11,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthIR14() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 12,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateGetWeekOfMonthUS() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonthDE() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, pd.getWeekOfMonth("de-DE"));
}

function testPersDateGetEraAP() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersDateGetEraBAP() {
    var pd = new ilib.Date.PersAstroDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
		
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testPersDateGetEraAPYear1() {
    var pd = new ilib.Date.PersAstroDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersDateGetEraBAPYear0() {
    var pd = new ilib.Date.PersAstroDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testPersDateSetTimeZone() {
    var pd = new ilib.Date.PersAstroDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    pd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", pd.getTimeZone());
}

function testPersDateSetTimeZoneNotString() {
    var pd = new ilib.Date.PersAstroDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    pd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
}

function testPersDateSetTimeZoneUndefined() {
    var pd = new ilib.Date.PersAstroDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());

    // clears it out
    pd.setTimeZone(undefined);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateSetTimeZoneEmpty() {
    var pd = new ilib.Date.PersAstroDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    // clears it out
    pd.setTimeZone("");
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateInitWithUnixTimeRightTimeZone() {
    var pd = new ilib.Date.PersAstroDate({
    	unixtime: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateInitWithJDRightTimeZone() {
    var pd = new ilib.Date.PersAstroDate({
    	julianday: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateInitWithRDRightTimeZone() {
    var pd = new ilib.Date.PersAstroDate({
    	rd: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}
