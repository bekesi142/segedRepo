const adatok = [
  {
    "Téma": "Szereplőkvíz",
    "Kérdés": "Hamlet",
    "Válasz": "Dán királyfi",
    "Kép": "hamlet.png"
  },
  {
    "Téma": "Szereplőkvíz",
    "Kérdés": "Hamlet apja",
    "Válasz": "Dánia volt királya",
    "Kép": "oreghamlet.png"
  },
  {
    "Téma": "Szereplőkvíz",
    "Kérdés": "Claudius",
    "Válasz": "Hamlet nagybátyja",
    "Kép": "claudius.png"
  },
  {
    "Téma": "Szereplőkvíz",
    "Kérdés": "Gertrud",
    "Válasz": "Hamlet megözvegyült anyja",
    "Kép": "gertrud.png"
  },
  {
    "Téma": "Szereplőkvíz",
    "Kérdés": "Polonius",
    "Válasz": "A király tanácsadója",
    "Kép": "polonius.png"
  },
  {
    "Téma": "Melyik műben szerepel?",
    "Kérdés": "Bede Anna tartozása",
    "Válasz": "Bede Erzsi",
    "Kép": "bedeannatartozasa.png"
  },
  {
    "Téma": "Melyik műben szerepel?",
    "Kérdés": "Péri lányok szép hajáról",
    "Válasz": "Péri Kata",
    "Kép": "perilanyok.png"
  },
  {
    "Téma": "Melyik műben szerepel?",
    "Kérdés": "Timár Zsófi özvegysége",
    "Válasz": "Rögi Mihály",
    "Kép": "timarzsofi.png"
  },
  {
    "Téma": "Melyik műben szerepel?",
    "Kérdés": "A bágyi csoda",
    "Válasz": "Vér Klára",
    "Kép": "bagyicsoda.png"
  },
  {
    "Téma": "Melyik műben szerepel?",
    "Kérdés": "A néhai bárány",
    "Válasz": "Csuri Jóska",
    "Kép": "nehaibari.png"
  },
  {
    "Téma": "Melyik ki",
    "Kérdés": "Léda",
    "Válasz": "Brüll Adél",
    "Kép": ["leda1.png", "leda2.png", "leda3.png"]
  },
  {
    "Téma": "Melyik ki",
    "Kérdés": "Csinszka",
    "Válasz": "Boncza Berta",
    "Kép": "csinszka.png"
  },
  {
    "Téma": "Melyik ki",
    "Kérdés": "anyja",
    "Válasz": "Pásztor Mária",
    "Kép": "pasztormaria.png"
  },
  {
    "Téma": "Melyik ki",
    "Kérdés": "első szerelme, Zsóka",
    "Válasz": "Friedmann Erzsike",
    "Kép": "zsoka.png"
  },
  {
    "Téma": "Melyik ki",
    "Kérdés": "halálának oka",
    "Válasz": "Mihályi Rozália"
  }
]

var legorduloLista = document.createElement("select");
legorduloLista.classList = "legordulo";
var elemek = ["Ady", "Mixa", "Hemlit"];
for (var i = 0; i < elemek.length; i++) {
  var opcioElem = document.createElement("option");
  opcioElem.textContent = elemek[i];
  opcioElem.value = elemek[i];
  legorduloLista.appendChild(opcioElem);
}



document.getElementById("parent").appendChild(legorduloLista);

var gomb = document.createElement("button");
gomb.classList = "gombok";

gomb.textContent = "Teszt kezdése";


gomb.onclick = function () {
  // Ellenőrizzük, hogy van-e már tartalom, ha igen, töröljük
  var tartalomDiv = document.getElementById("tartalomDiv");
  if (tartalomDiv) {
    tartalomDiv.parentNode.removeChild(tartalomDiv);
  }

  // Új tartalom div létrehozása
  var ujTartalomDiv = document.createElement("div");
  ujTartalomDiv.id = "tartalomDiv";

  // Az aktuális témához tartozó adatok kinyerése
  switch (legorduloLista.selectedIndex) {
    case 0:
      var tema = adatok[10].Téma; // Feltételezzük, hogy minden objektumnak azonos a témája
    var temahozKapcsolodoAdatok = adatok.filter(adat => adat.Téma === tema);
      var temaCim = document.createElement("h2");
      temaCim.textContent = tema;
      ujTartalomDiv.appendChild(temaCim);
      
      // Kérdések és válaszok felsorolása
      temahozKapcsolodoAdatok.forEach(adat => {
        var kerdesCim = document.createElement("h3");
        kerdesCim.textContent = adat.Kérdés;
        ujTartalomDiv.appendChild(kerdesCim);
        
        var rosszGomb1 = document.createElement("button");
        rosszGomb1.textContent = adatok[11+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb1);
        var rosszGomb2 = document.createElement("button");
        rosszGomb2.textContent = adatok[11+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb2);
        var rosszGomb3 = document.createElement("button");
        rosszGomb3.textContent = adatok[11+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb3);
        
        
        var valaszGomb = document.createElement("button");
        valaszGomb.textContent = adat.Válasz;
        valaszGomb.onclick = function () {
          alert("osk");
          
        };
        var randomSzam = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if(randomSzam== 1) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb1);
        }
        else if(randomSzam == 2) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb2)
        }
        else{
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb3)
        }
      });
      // Tartalom div hozzáadása a HTML dokumentumhoz
      document.body.appendChild(ujTartalomDiv);
      break;
      case 1:
        var tema = adatok[5].Téma; // Feltételezzük, hogy minden objektumnak azonos a témája
        var temahozKapcsolodoAdatok = adatok.filter(adat => adat.Téma === tema);
        var temaCim = document.createElement("h2");
      temaCim.textContent = tema;
      ujTartalomDiv.appendChild(temaCim);

      // Kérdések és válaszok felsorolása
      temahozKapcsolodoAdatok.forEach(adat => {
        var kerdesCim = document.createElement("h3");
        kerdesCim.textContent = adat.Kérdés;
        ujTartalomDiv.appendChild(kerdesCim);

        var rosszGomb = document.createElement("button");
        rosszGomb.textContent = adatok[6+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb);
        var rosszGomb2 = document.createElement("button");
        rosszGomb2.textContent = adatok[6+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb2);
        var rosszGomb3 = document.createElement("button");
        rosszGomb2.textContent = adatok[6+Math.floor(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb3);
        
        var valaszGomb = document.createElement("button");
        valaszGomb.textContent = adat.Válasz;
        valaszGomb.onclick = function () {
          alert("osk");
          
        };
        var randomSzam = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if(randomSzam== 1) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb);
        }
        else if(randomSzam == 2) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb2)
        }
        else{
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb3)
        }
      });
      // Tartalom div hozzáadása a HTML dokumentumhoz
      document.body.appendChild(ujTartalomDiv);
      break;
      case 2:
        var tema = adatok[0].Téma; // Feltételezzük, hogy minden objektumnak azonos a témája
        var temahozKapcsolodoAdatok = adatok.filter(adat => adat.Téma === tema);
        var temaCim = document.createElement("h2");
        temaCim.textContent = tema;
      ujTartalomDiv.appendChild(temaCim);

      // Kérdések és válaszok felsorolása
      temahozKapcsolodoAdatok.forEach(adat => {
        var kerdesCim = document.createElement("h3");
        kerdesCim.textContent = adat.Kérdés;
        ujTartalomDiv.appendChild(kerdesCim);

        var rosszGomb = document.createElement("button");
        rosszGomb.textContent = adatok[Math.ceil(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb);

        var rosszGomb2 = document.createElement("button");
        rosszGomb2.textContent = adatok[Math.ceil(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb2);

        var rosszGomb3 = document.createElement("button");
        rosszGomb3.textContent = adatok[Math.ceil(Math.random() * temahozKapcsolodoAdatok.length-1)].Válasz;
        ujTartalomDiv.appendChild(rosszGomb3);

        var valaszGomb = document.createElement("button");
        valaszGomb.textContent = adat.Válasz;
        valaszGomb.onclick = function () {
          alert("osk");

        };
        var randomSzam = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if(randomSzam== 1) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb);
        }
        else if(randomSzam == 2) {
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb2)
        }
        else{
          ujTartalomDiv.replaceChild(valaszGomb, rosszGomb3)
        }
      });
      // Tartalom div hozzáadása a HTML dokumentumhoz
      document.body.appendChild(ujTartalomDiv);
      break;
    default:
      break;
  }
  
}
document.getElementById("parent").appendChild(gomb);
