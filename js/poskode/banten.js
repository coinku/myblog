function capitaliseFirstLetter(string){return string.charAt(0).toUpperCase() + string.slice(1);};function toTitleCase(str) {return str.replace(/\w\S*/g, function(txt){first_letter = txt.charAt(0).toUpperCase();if (txt.charAt(1) === "'") {return first_letter + txt.charAt(1) + txt.charAt(2).toUpperCase() + txt.substr(3).toLowerCase();}else{return first_letter + txt.substr(1).toLowerCase();}});}function commaSeparateNumber(val){while (/(\d+)(\d{3})/.test(val.toString())){val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');}return val;}function removeSpecialCharacters(string){return string.replace(/[^\w\s]/gi, '').replace(/ /g,'');}if ( window.self !== window.top ) {}
var google_docs_one = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=';var google_docs_two = '&output=html';var spreadsheet_key = '1fgyYovO8Pg8Yonwrs5_xSrcxC-hbtpMlSybIHJMgu20';var templates = [{"templatesource": "#datatable-template","templatehtml": "#searchable-table tbody","sheet": "Banten"}];
jQuery.extend( jQuery.fn.dataTableExt.oSort, {"formatted-num-pre": function ( a ) {a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );return parseFloat( a );},"formatted-num-asc": function ( a, b ) {return a - b;},"formatted-num-desc": function ( a, b ) {return b - a;}});jQuery.extend( jQuery.fn.dataTableExt.oSort, {"currency-pre": function ( a ) {a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );return parseFloat( a );},"currency-asc": function ( a, b ) {return a - b;},"currency-desc": function ( a, b ) {return b - a;}});jQuery.extend( jQuery.fn.dataTableExt.oSort, {"percent-pre": function ( a ) {var x = (a == "-") ? 0 : a.replace( /%/, "" );return parseFloat( x );},"percent-asc": function ( a, b ) {return ((a < b) ? -1 : ((a > b) ? 1 : 0));},"percent-desc": function ( a, b ) {return ((a < b) ? 1 : ((a > b) ? -1 : 0));}});
function loadDataTable() {$('#searchable-table').dataTable({"paging":true,"ordering":true,"info":true,"searchPane":true,"bAutoWidth":true,"oLanguage":{"sLengthMenu":"Per page: _MENU_ "},"iDisplayLength":25,"aaSorting":[[ 0, "asc" ]],"scrollX":true,"aoColumns":[null,null,null,null],"initComplete":function(settings, json) {$('#searchable-table').show();}});};
function loadToDOM(tabletop_data, tabletop) {_.each(templates, function(element, num_templates) {var template_html = element['templatehtml'];var source = $(element["templatesource"] + "").html();var sheet = element["sheet"];var handlebarscompile = Handlebars.compile(source);$(template_html).append(handlebarscompile( tabletop.sheets(sheet) ));}, this);loadDataTable();}function initializeTabletopObject(){Tabletop.init({key: google_docs_one + spreadsheet_key + google_docs_two,callback: loadToDOM,simpleSheet: false,debug: false});}initializeTabletopObject();
