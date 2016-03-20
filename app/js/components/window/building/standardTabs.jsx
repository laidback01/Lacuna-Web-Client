'use strict';

var React                   = require('react');
var Reflux                  = require('reflux');

var Tabber                  = require('js/components/tabber');
var Tabs                    = Tabber.Tabs;
var Tab                     = Tabber.Tab;

var ProductionTab           = require('js/components/window/building/productionTab');
var RepairTab               = require('js/components/windows/building/repairTab');

var StandardTabs = {

    tabs : function(options, body, building) {
        var tabs = [];
        
        if (options.efficiency !== 100) {
            tabs.push(
                <Tab title="Repair" key="Repair" onSelect={this.loadProduction}>
                    <RepairTab building={building} body={body} />
                </Tab>
            );
        }

        tabs.push(
            <Tab title="Production" key="Production" onSelect={this.loadProduction}>
                <ProductionTab building={building} body={body} />
            </Tab>
        );

        return tabs;
    }
};

module.exports = StandardTabs;