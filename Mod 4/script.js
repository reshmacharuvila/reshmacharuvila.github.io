var names = new Array();
names[0] = "Pooja";
names[1] = "Anu";
names[2] = "John";
names[3] = "jasmy";
names[4] = "Mark Antony";
names[5] = "jenson";
names[6] = "Meenu";
names[7] = "Jesna";
names[8] = "Ayira";
names[9] = "Raha";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
