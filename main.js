// alert("Hello world!");
var JSON_OUEST = {
  menu: [
    {
    name: "ARRONDISSEMENT DE PORT-AU-PRINCE",
    link: "#",
    sub: [{
      name: "Commune de Port-au-Prince".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Turgeau",
        link: "#",
        sub: null
      }, {
        name: "2e Section Morne l'Hôpital",
        link: "#",
        sub: null
      }, {
        name: "3e Section Martissant ",
        link: "#",
        sub: null
      },
      ]
    }, {
      name: "Commune de Delmas".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section St-Martin",
        link: "#",
        sub: null
      },
      ]
    }, {
      name: "Commune de Carrefour".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Morne Chandelle",
        link: "#",
        sub: null
      }, {
        name: "2e Section Platon Dufrene ",
        link: "#",
        sub: null
      }, {
        name: "3e Section Taifer ",
        link: "#",
        sub: null
      }, {
        name: "4e Section Procy",
        link: "#",
        sub: null
      }, {
        name: "5e Section Coupeau ",
        link: "#",
        sub: null
      }, {
        name: "6e Section Bouvier",
        link: "#",
        sub: null
      },{
        name: "7e Section Lavalle",
        link: "#",
        sub: null
      }, {
        name: "8e Section Berly",
        link: "#",
        sub: null
      }, {
        name: "9e Section Bizoton",
        link: "#",
        sub: null
      }, {
        name: "10e Section Thor",
        link: "#",
        sub: null
      }, {
        name: "11e Section Rivière Froide   ",
        link: "#",
        sub: null
      }, {
        name: "12e Section Malanga",
        link: "#",
        sub: null
      },{
        name: "13e Section Corail Thor   ",
        link: "#",
        sub: null
      },
      ]
    },
    {
      name: "Commune de Pétion-Ville".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Montagne Noire",
        link: "#",
        sub: null
      }, {
        name: "2e Section Aux Cadets ",
        link: "#",
        sub: null
      }, {
        name: "3e Section Etang du Jonc",
        link: "#",
        sub: null
      }, {
        name: "4e Section Bellevue La Montagne ",
        link: "#",
        sub: null
      }, {
        name: "5e Section Bellevue Chardonnière  ",
        link: "#",
        sub: null
      }, ]
    }, {
      name: "Commune de Kenscoff ".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Nouvelle Tourraine  ",
        link: "#",
        sub: null
      }, {
        name: "2e Section Bongars",
        link: "#",
        sub: null
      }, {
        name: "3e Section Sourcailles",
        link: "#",
        sub: null
      }, {
        name: "4e Section Belle Fontaine",
        link: "#",
        sub: null
      }, {
        name: "5e Section Grand Fond ",
        link: "#",
        sub: null
      }, ]
    },{
      name: "Commune de Gressier".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Morne à Bateau",
        link: "#",
        sub: null
      }, {
        name: "2e Section Morne Chandelle",
        link: "#",
        sub: null
      }, {
        name: "3e Section Petit Boucan",
        link: "#",
        sub: null
      },]
    },{
      name: "Commune de Cité Soleil".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Varreux",
        link: "#",
        sub: null
      }, {
        name: "2e Section Varreux",
        link: "#",
        sub: null
      },]
    },{
      name: " Commune de Tabarre".toUpperCase(),
      link: "#",
      sub: [{
        name: "1re Section Bellevue",
        link: "#",
        sub: null
      }, {
        name: "2e Section Bellevue",
        link: "#",
        sub: null
      },,]
    }
    ]
  ,
  }]
};


$(function () {
  function parseMenu(ul, menu) {
    for (var i = 0; i < menu.length; i++) {
      var li = $(ul).append(
        '<li class="font-medium text-blue-600 dark:text-blue-500 hover:underline">' + menu[i].name + '</li>');
      if (menu[i].sub != null) {
        var subul = $('<ul class="list px-8  mt-2 space-y-1 list-decimal  list-inside"></ul>');
        $(li).append(subul);
        parseMenu($(subul), menu[i].sub);
      }
    }
  }

  var menu_ouest = $('#menu-ouest');
  parseMenu(menu_ouest, JSON_OUEST.menu);
});



$(document).on('click', '.list > li ', function () {
  $(this).next('ul').toggle();
});
