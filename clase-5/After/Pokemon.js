class Pokemon {
    constructor(nombre, tipo, vidas) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.nivel = 1
    }

    recibirDaño(dañoRecibido) {
        this.vidas -= dañoRecibido
        if(this.vidas > 0) {
            console.log(`${this.nombre} sigue vivo con ${this.vidas} de vida y tiene ganas de seguir peleando`)
        } else {
            console.log(`${this.nombre} se fue a dormir con los Magikarp`)
        }
    }
}
/*
class Electrico extends Pokemon {
    constructor(nombre, tipo, vidas, dañoImpactrueno) {
        super(nombre, tipo, vidas)
        this.dañoImpactrueno = dañoImpactrueno
    }

    
  
}*/
//Relacion "es un"
class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, dañoImpactrueno) {
        super(nombre, tipo, vidas, dañoImpactrueno)
        this.dañoImpactrueno = dañoImpactrueno
    }

    impactrueno(pokemonAtacado) {
        console.log(`${this.nombre} esta lanzando impactrueno con un daño de ${this.dañoImpactrueno}`)
        pokemonAtacado.recibirDaño(this.dañoImpactrueno)
    }

}

class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, dañoLlamarada) {
        super(nombre, tipo, vidas)
        this.dañoLlamarada = dañoLlamarada
    }

    llamarada(pokemonAtacado) {
        console.log(`${this.nombre} esta lanzando llamarada con un daño de ${this.dañoLlamarada}`)
        pokemonAtacado.recibirDaño(this.dañoLlamarada)
    }
}

class Eevee extends Pokemon {
    constructor(nombre, tipo, vidas, dañoTackle) {
        super(nombre, tipo, vidas)
        this.dañoTackle = dañoTackle
    }

    tackle(pokemonAtacado) {
        console.log(`${this.nombre} esta lanzando tackle con un daño de ${this.dañoTackle}`)
        pokemonAtacado.recibirDaño(this.dañoTackle)
    }
}
