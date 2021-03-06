// JQuery inits
function compareEntities(a, b) {
    if(a['country'] == b['country'] && a['type'] == b['type'] && a['id'] == b['id']) {
        return true;
    } else {
        return false;
    }
};

function entityInList(list, e1) {
    var found = false;
    list.forEach(function(e2){
        if(compareEntities(e1, e2)) {
            found = true;
        }
    });
    return found;
};

function buildGraph(seed) {
    seed.forEach(function(e){
        if(e['type'] == 'le') {
            //find all relations
            related_parties = entities[e['country']][e['type']][e['id']]['persons'];
            //check wether they should be added to graph
            related_parties.forEach(function(rp){
                if(entityInList(seed, rp)) {
                    seed.push(rp);
                }
            });
        }
    });
};

$(document).ready(function() {
    $('#openGraph').click(function () {
        $('#dialog').dialog({
            height: 800,
            width: '80%',
        }).dialog('open');
        return false;
    } );

    output = "";
    for (var le in AT_legal_entities) {
        output += AT_legal_entities[le]['name'];
    }

    //Create nodes for graph
    nodes = [];

    nodes_AT_legal_entities = Object.keys(AT_legal_entities).map(function(le) {
        var e = AT_legal_entities[le];
        return {id: le, group: 'lE', label: e['name'], title: e['code'] ? 'AT FN ' + e['code'] : ''};
    });
    nodes = nodes.concat(nodes_AT_legal_entities);

    nodes_AT_natural_persons = Object.keys(AT_natural_persons).map(function(np) {
        var e = AT_natural_persons[np];
        return {id: np, group: 'nP', label: e['name'], title: 'AT ' + (e['birthday'] ? e['birthday'] : '')};
    });
    nodes = nodes.concat(nodes_AT_natural_persons);

    nodes_DE_legal_entities = Object.keys(DE_legal_entities).map(function(le) {
        var e = DE_legal_entities[le];
        return {id: le, group: 'lE', label: e['name'], title: e['code'] ? 'DE HRB ' + e['code'] : ''};
    });
    nodes = nodes.concat(nodes_DE_legal_entities);

    nodes_DE_natural_persons = Object.keys(DE_natural_persons).map(function(np) {
        var e = DE_natural_persons[np];
        return {id: np, group: 'nP', label: e['name'], title: 'DE ' + (e['birthday'] ? e['birthday'] : '')};
    });
    nodes = nodes.concat(nodes_DE_natural_persons);

    // TODO: Take care of correct encoding of 

    nodes_UA_legal_entities = Object.keys(UA_legal_entities).map(function(le) {
        var e = UA_legal_entities[le];
        return {id: le, group: 'lE', label: e['short_name'], title: e['code'] ? 'UA ' + e['code'] : ''};
    });
     nodes = nodes.concat(nodes_UA_legal_entities);

    nodes_UA_natural_persons = Object.keys(UA_natural_persons).map(function(np) {
        var e = UA_natural_persons[np];
        return {id: np, group: 'nP', label: e['name'], title: e['location'] ? e['location'] : ''};
    });
     nodes = nodes.concat(nodes_UA_natural_persons);

    //Create edges for graph
    edges = [];

    edges_AT = [].concat.apply(
        [], 
        Object.keys(AT_legal_entities).map(function(le){
            e = AT_legal_entities[le];
            persons = e['persons'] ? e['persons'] : [];
            return persons.map(function(p){
                p_new = {};
                p_new['to'] = parseInt(le);
                p_new['from'] = p['id'];
                p_new['label'] = p['role'];
                p_new['title'] = p['from'] ? 'since ' + p['from'] : '';
                p_new['title'] += p['to'] ? ' until ' + p['to'] : '';
                return p_new;
            });
        })
    );
    edges = edges.concat(edges_AT);

    edges_DE = [].concat.apply(
        [], 
        Object.keys(DE_legal_entities).map(function(le){
            e = DE_legal_entities[le];
            persons = e['persons'] ? e['persons'] : [];
            return persons.map(function(p){
                p_new = {};
                p_new['to'] = parseInt(le);
                p_new['from'] = p['id'];
                p_new['label'] = p['role'];
                p_new['title'] = p['from'] ? 'since ' + p['from'] : '';
                p_new['title'] += p['to'] ? ' until ' + p['to'] : '';
                return p_new;
            });
        })
    );
    edges = edges.concat(edges_DE);

    edges_UA = [].concat.apply(
        [], 
        Object.keys(UA_legal_entities).map(function(le){
            e = UA_legal_entities[le];
            persons = e['persons'] ? e['persons'] : [];
            return persons.map(function(p){
                p_new = {};
                p_new['to'] = parseInt(le);
                p_new['from'] = p['id'];
                p_new['label'] = p['role'];
                p_new['title'] = p['from'] ? 'since ' + p['from'] : '';
                p_new['title'] += p['to'] ? ' until ' + p['to'] : '';
                return p_new;
            });
        })
    );
    edges = edges.concat(edges_UA);

    // provide the data in the vis format
    data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges),
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

    var container = document.getElementById('relationship_graph');
    var network = new vis.Network(container, data, options);
    network.fit();

});
