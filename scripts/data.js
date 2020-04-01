var compsList = {
    "Purpleheart wood": {
        type: "zarosian",
        qty: 0
    },
      "Imperial iron": {
        type: "zarosian",
        qty: 0
    },
       "Ancient vis": {
        type: "zarosian",
        qty: 0
    },
         "Tyrian purple": {
        type: "zarosian",
        qty: 0
    },
         "Blood of Orcus": {
        type: "zarosian",
        qty: 0
    },
         "Cadmium red": {
        type: "zamorakian",
        qty: 0
    },
             "Chaotic brimstone": {
        type: "zamorakian",
        qty: 0
    },
             "Demonhide": {
        type: "zamorakian",
        qty: 0
    },
                "Eye of Dagon": {
        type: "zamorakian",
        qty: 0
    },
                "Hellfire metal": {
        type: "zamorakian",
        qty: 0
    },
                     "Keramos": {
        type: "saradominist",
        qty: 0
    },  
                        "White marble": {
        type: "saradominist",
        qty: 0
    },   
                        "Cobalt blue": {
        type: "saradominist",
        qty: 0
    },   
                        "Everlight silvthril": {
        type: "saradominist",
        qty: 0
    },   
                        "Star of Saradomin": {
        type: "saradominist",
        qty: 0
    },   
                        "Malachite green": {
        type: "bandosian",
        qty: 0
    },   
                            "Mark of the Kyzaj": {
        type: "bandosian",
        qty: 0
    }, 
                            "Vulcanised rubber": {
        type: "bandosian",
        qty: 0
    }, 
                            "Warforged bronze": {
        type: "bandosian",
        qty: 0
    }, 
                            "Yu'biusk clay": {
        type: "bandosian",
        qty: 0
    }, 
                            "Stormguard steel": {
        type: "armadylean",
        qty: 0
    }, 
                                   "Wings of War": {
        type: "armadylean",
        qty: 0
    }, 
                               "Armadylean yellow": {
        type: "armadylean",
        qty: 0
    }, 
                               "Aetherium alloy": {
        type: "armadylean",
        qty: 0
    }, 
                               "Quintessence": {
        type: "armadylean",
        qty: 0
    }, 
                               "Third Age iron": {
        type: "agnostic",
        qty: 0
    }, 
                               "Samite silk": {
        type: "agnostic",
        qty: 0
    }, 
                               "White oak": {
        type: "agnostic",
        qty: 0
    }, 
                               "Goldrune": {
        type: "agnostic",
        qty: 0
    }, 
                               "Orthenglass": {
        type: "agnostic",
        qty: 0
    }, 
                               "Vellum": {
        type: "agnostic",
        qty: 0
    }, 
                               "Leather scraps": {
        type: "agnostic",
        qty: 0
    }, 
                               "Animal furs": {
        type: "agnostic",
        qty: 0
    }, 
                               "Fossilised bone": {
        type: "agnostic",
        qty: 0
    }, 
                               "Soapstone": {
        type: "agnostic",
        qty: 0
    }, 
}

if (localStorage.getItem("mats") != null) {
    tempList = JSON.parse(localStorage.mats);
    for (x in tempList) {
        if (!tempList[x] || !compsList[x]) {
            continue;
        } else {
            compsList[x].qty = tempList[x].qty;
        }
    }
}
