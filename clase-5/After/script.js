const pikachu1 = new Pikachu("Pika pika", "Electrico", 22, 10)
const charmander1 = new Charmander("Fueguito", "Fuego", 20, 8)
const eevee1 = new Eevee("Cual", "Normal", 12, 7)

pikachu1.impactrueno(charmander1) //Fueguito tiene 10 de vida

charmander1.llamarada(pikachu1) //Pika pika tiene 14 de vida

pikachu1.impactrueno(charmander1)  //Fueguito perdio

eevee1.tackle(pikachu1)
//Pika pika sigue vivo con 7 de vida

pikachu1.impactrueno(eevee1)
//Cual tiene 2 de vida

eevee1.tackle(pikachu1) //Pika pika perdio