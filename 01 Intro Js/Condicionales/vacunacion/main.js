var edad = 28;
var fronterizo = false;
var embarazada = false;
var semanasEmbarazo = 0;

if (edad >= 18 && fronterizo == true) {
    console.log("Si puedes vacunarte, por ser mayor de 18 y vivir en un municipio fronterizo")
} else if (embarazada == true > 18 && edad >= 18 && semanasEmbarazo >= 9) {
    console.log("Si te puedes vacunar por estar embarazada y con mas de 9 semanas de gestacion")
} else if (edad >= 30){
    console.log ("Si te puedes vacunar por ser mayor de 30 añitos")
} else {
    console.log("Lo siento, pero abrete morro, no se puede vacunar hoy")
}