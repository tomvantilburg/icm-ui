/*
Deze functie wrapped de websocket trigger naar angular
*/
icm.factory('ItemStore',['$rootScope',function($rootScope) {
    var itemStore;
    if(core.project()) { 
        itemStore = core.project().itemStore();

        return {
            on: function(eventName, fn) {
                itemStore.on(eventName, function(data) {
                    $rootScope.$apply(function() {
                        fn(data);
                    });
                });
            }
        };
    }
    else {
        return {on: function(eventName, fn){}};
    }
}]);

/*
Deze functie wrapped de websocket trigger naar angular
*/
icm.factory('ProjectStore',['$rootScope',function($rootScope) {
    var projectStore = core.projectStore();

    return {
        on: function(eventName, fn) {
            projectStore.on(eventName, function(data) {
                $rootScope.$apply(function() {
                    fn(data);
                });
            });
        }
    };
}]);

// De definities van de verschillende beelden inclusief hun onderdelen
icm.factory('Beelden', ['$rootScope',function($rootScope) {
    var data = {};
    data.beelden = [
        { beeld: 'situatie', title: 'Situatie', beeldonderdeel: 
        	[	{id:'situatie', title: 'Situatie'}
        	]}    
        ,{ beeld: 'meldingen', title: 'Meldingen', beeldonderdeel: 
        	[	{title:'Tijdlijn',id:'Tijdlijn'},
        		{title:'Meldingen beeld',id:'meldingen' },
        		{title: 'Acute meldingen', id:'acuut'},
        		{title: 'Situatie Plaats Incident',id: 'spi'} ,
        		{title: 'Genomen acties',id:'acties' }
    		]}
        ,{ beeld: 'wat', title: 'Operationeel (WAT)', beeldonderdeel: 
       		[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},
       			{title:'Veiligheid medewerkers',id:'veiligheid'},
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}
        ,{ beeld: 'wot', title: 'Tactisch (WOT)', beeldonderdeel:
         	[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},       		
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}   			
        ,{ beeld: 'wbt', title: 'Strategisch (WBT)', beeldonderdeel: 
        	[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},       		
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}
        ,{ beeld: 'scenarios', title: 'Scenario\'s / maatregelen', beeldonderdeel: 
        	[	{title:'Meest waarschijnlijk',id:'meest'},
        		{title:'Minder waarschijnlijk',id:'minder'},
        		{title:'Minst waarschijnlijk',id:'minst'}
    		]}
        ,{ beeld: 'communicatie', title: 'Communicatie', beeldonderdeel: 
        	[	{title:'Kernboodschap',id:'kernboodschap'},
        		{title:'Omgevingsbeeld',id:'omgevingsbeeld'},
        		{title:'Communicatie vanuit het waterschap',id:'extern'},
        		{title:'Communicatie intern het waterschap',id:'intern'}
    		]}
    ];
    return data;
}])

