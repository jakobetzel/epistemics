// JQuery inits
$(document).ready(function() {
    $('#openGraph').click(function () {
        $('#dialog').dialog({
            height: 800,
            width: '80%',
        }).dialog('open');
        return false;
    } );

    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });

    var container = document.getElementById('relationship_graph');
    var network = new vis.Network(container, data, options);
    network.fit();

});

// create an array with nodes
var nodes_Jakob = new vis.DataSet([
    {id: 1, group: 'lE', label: 'Mantigma GmbH', title: 'AT FN 447445 h'},
    {id: 2, group: 'lE', label: 'IntraBase GmbH in Liqu.', title: 'AT FN 464250 x'},
    {id: 3, group: 'lE', label: 'borisgloger beteiligungs gmbh', title: 'DE HRB 710013'},
    {id: 4, group: 'nP', label: 'Jakob Etzel', title: '23.03.1992', shape: 'box', color: 'yellow'},
    {id: 5, group: 'nP', label: 'Martin Prebio', title: '31.12.1990'},
    {id: 6, group: 'nP', label: 'Jan Michael Auer', title: '28.04.1993'},
    {id: 7, group: 'nP', label: 'Richard Knoll', title: '13.02.1992'},
    {id: 8, group: 'nP', label: 'Boris Gloger', title: '26.11.1968'},
    {id: 9, group: 'nP', label: 'Sasan Haji Hashemi', title: '06.11.1991'},
    {id: 10, group: 'nP', label: 'Alexander Rapatz', title: '26.10.1985'},
    {id: 11, group: 'lE', label: '25th-floor GmbH', title: 'AT FN 409170 x'},
    {id: 12, group: 'nP', label: 'Andreas de Pretis', title: '11.05.1980'},
    {id: 13, group: 'nP', label: 'Florian Helmberger', title: '11.08.1975'},
    {id: 14, group: 'lE', label: 'HELMBERGER & Partner KG', title: 'AT FN 241358 p'},
    {id: 15, group: 'nP', label: 'Lukas Helmberger', title: '1971'},
    {id: 16, group: 'lE', label: 'Venionaire Capital Ges.m.b.H.', title: 'AT FN 385799 b'},
    {id: 17, group: 'lE', label: 'FRABANTO KG', title: 'AT FN 450386 h'},
    {id: 18, group: 'nP', label: 'Anton Scharmitzer'},
    {id: 19, group: 'lE', label: 'Panamin GmbH', title: 'AT FN 400232 b'},
    {id: 20, group: 'nP', label: 'Mihail Kraus'},
    {id: 21, group: 'nP', label: 'Ivan Dobrev'},
    {id: 22, group: 'nP', label: 'Berthold Baurek-Karlic'},
    {id: 23, group: 'lE', label: 'March15 Unternehmensbeteiligungs und -beratungs GmbH'},
    {id: 24, group: 'lE', label: 'System 7 - Railsupport GmbH'},
    {id: 25, group: 'lE', label: 'Venionaire Investment GmbH', title: 'AT FN 423477 k'},
    {id: 26, group: 'lE', label: 'EGO Sports GmbH'},
    {id: 27, group: 'lE', label: 'DealMatrix GmbH'},
    {id: 28, group: 'nP', label: 'Martin Steininger'},
    {id: 29, group: 'lE', label: 'BAF 10 GmbH'},
    {id: 30, group: 'nP', label: 'Dan Choon'},
    {id: 31, group: 'nP', label: 'Bernhard Fichtenthal'},
    {id: 32, group: 'nP', label: 'Christoph Drescher'},
    {id: 33, group: 'lE', label: 'result-consult e.U.'},
    {id: 34, group: 'further'},
    {id: 35, group: 'further'},
]);

// create an array with edges
var edges_Jakob = new vis.DataSet([
    {from: 4, to: 1, label: 'O', title: 'since 2016'},
    {from: 4, to: 1, label: 'MD', title: 'since 2016'},
    {from: 5, to: 1, label: 'O', title: 'since 2016'},
    {from: 5, to: 1, label: '(MD)', title: 'from 2016 to 2017'},
    {from: 3, to: 1, label: 'O', title: 'since 2016'},
    {from: 4, to: 2, label: 'O', title: 'since 2017'},
    {from: 4, to: 2, label: '(AR)', title: 'from 2017 to 2017'},
    {from: 6, to: 1, label: 'O', title: 'since 2017'},
    {from: 6, to: 1, label: '(AR)', title: 'from 2016 to 2017'},
    {from: 7, to: 1, label: 'O', title: 'since 2016'},
    {from: 7, to: 1, label: '(AR)', title: 'from 2016 to 2017'},
    {from: 8, to: 3, label: 'O'},
    {from: 8, to: 3, label: 'MD'},
    {from: 6, to: 2, label: 'O'},
    {from: 6, to: 2, label: '(MD)'},
    {from: 7, to: 2, label: 'O'},
    {from: 7, to: 2, label: '(AP)'},
    {from: 9, to: 2, label: '(MD)'},
    {from: 9, to: 2, label: 'O'},
    {from: 10, to: 2, label: 'L'},
    {from: 10, to: 2, label: 'O'},
    {from: 3, to: 11, label: 'O'},
    {from: 12, to: 11, label: 'O'},
    {from: 13, to: 11, label: 'O'},
    {from: 12, to: 11, label: 'MD'},
    {from: 13, to: 11, label: '(MD)'},
    {from: 13, to: 14, label: 'LP'},
    {from: 15, to: 14, label: 'GP'},
    {from: 9, to: 16, label: '(O)'},
    {from: 10, to: 16, label: 'O'},
    {from: 10, to: 17, label: 'LP'},
    {from: 18, to: 17, label: 'GP'},
    {from: 18, to: 19, label: 'O'},
    {from: 20, to: 19, label: 'O'},
    {from: 20, to: 19, label: 'MD'},
    {from: 21, to: 19, label: 'O'},
    {from: 22, to: 16, label: 'O'},
    {from: 22, to: 16, label: 'MD'},
    {from: 23, to: 16, label: 'O'},
    {from: 16, to: 24, label: 'O'},
    {from: 16, to: 25, label: 'O'},
    {from: 16, to: 26, label: 'O'},
    {from: 16, to: 27, label: 'O'},
    {from: 28, to: 23, label: 'O'},
    {from: 28, to: 23, label: 'MD'},
    {from: 23, to: 25, label: 'O'},
    {from: 22, to: 25, label: 'MD'},
    {from: 29, to: 25, label: 'O'},
    {from: 30, to: 25, label: 'O'},
    {from: 31, to: 29, label: 'O'},
    {from: 31, to: 29, label: 'MD'},
    {from: 32, to: 27, label: 'MD'},
    {from: 32, to: 27, label: 'O'},
    {from: 32, to: 33, label: 'O'},
    {from: 34, to: 24},
    {from: 35, to: 26},
]);

var nodes = new vis.DataSet([
    {id: 1, group: 'lE', label: 'ТОВ ТА ВЕНЧУРС'},
    {id: 2, group: 'lE', label: 'ТОВ УКРАЇНСЬКИЙ КІНОФЕСТИВАЛЬ'},
    {id: 3, group: 'nP', label: 'ЯЩЕНКО С.Г.', shape: 'box', color: 'yellow'},
    {id: 4, group: 'lE', label: 'Венчур Холдинг ЛТД'},
    {id: 5, group: 'lE', label: 'ТОВ ТРАФІК ФІЛМЗ'},
    {id: 6, group: 'lE', label: 'ТОВ АРТХАУС ТРАФІК'},
    {id: 7, group: 'lE', label: 'ТОВ ФІРМА ПУСК'},
    {id: 8, group: 'lE', label: 'ТОВ ВЕБТРЕЙД'},
    {id: 9, group: 'nP', label: 'Тігіпко В.В.', shape: 'box', color: 'yellow'},
    {id: 10, group: 'nP', label: 'Іванов Д.В.', shape: 'box', color: 'yellow'},
    {id: 11, group: 'nP', label: 'Шух М.М.', shape: 'box', color: 'yellow'},
    {id: 12, group: 'nP', label: 'Іванов В.К.', shape: 'box', color: 'yellow'},
]);

var edges = new vis.DataSet([
    {from: 3, to: 1, label: 'CEO', },
    {from: 3, to: 2, label: 'CEO', },
    {from: 3, to: 8, label: 'CEO', },
    {from: 3, to: 7, label: 'BF', },
    {from: 4, to: 1, label: 'BF', },
    {from: 10, to: 5, label: 'CEO', },
    {from: 10, to: 6, label: 'CEO', },
    {from: 10, to: 2, label: 'BF', },
    {from: 9, to: 2, label: 'BF', },
    {from: 9, to: 6, label: 'BF', },
    {from: 9, to: 4, label: 'BF', },
    {from: 11, to: 6, label: 'BF', },
    {from: 11, to: 5, label: 'BF', },
    {from: 12, to: 6, label: 'BF', },
    {from: 12, to: 5, label: 'BF', },
]);

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    groups: {
        nP: {
            color: {background: 'black'}, 
            borderWidth: 3,
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf007',
                size: 50,
                color: 'black',
            },
        },
        lE: {
            color: {background: 'white', border: 'blue'}, 
            borderWidth: 3,
        },
        further: {
            color: {background: 'red', border: 'black'},
            shape: 'diamond',
            label: 'more',
        },
        test: {
            color: 'red',
        },
    },
    edges: {
        arrows: 'to',
    },
    layout: {
        hierarchical: false,
        improvedLayout: true,
    },
};
