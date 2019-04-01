var telefoni = {
    proizvodjac: {
      samsung: [
        {
          ime: "Galaxy Note 10",
          os: "Android Oreo"
        },
        {
          ime: "Galaxy S10",
          os: "Android Oreo"
        },
        {
          ime: "Galaxy Fold",
          os: "Android Oreo"
        }
      ],
      apple: [
        {
          ime: "iPhone X",
          os: "ios 12"
        },
        {
          ime: "iPhone 8",
          os: "ios 12 red"
        },
        {
          ime: "iPhone 7",
          os: "ios 12"
        }
      ],
      huawei: [
        {
          ime: "Mate 30 Pro",
          os: "Android Oreo"
        },
        {
          ime: "Mate 20 Pro",
          os: "Android Pie"
        },
        {
          ime: "P 20 Pro",
          os: "Android Pie"
        }
      ]
    },
    boja: ["Nice black", "Amazing pink", "Stunning orange"]
}
  
for (let i = 0; i < telefoni.boja.length; i++) {
    console.log(telefoni.boja[i]);
}
  
var pijaca = {
  voce: [
    {
      ime: "jabuka",
      prskano: true
    },
    {
      ime: "kruske",
    prskano: false
    },
    {
      ime: "banane",
      prskano: false
    }
  ],
  povrce: [
    {
      ime: "sargarepa",
      prskano: false
    },
    {
      ime: "krompir",
      prskano: true
    },
    {
      ime: "luk",
      prskano: false
    }
  ]
}

console.log(pijaca.povrce[0].prskano);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  