var carro = [{modelo: 'A3', marca: 'Audi', ano: 2020},
  {modelo: 'compass', marca :'jeep', ano: 2021}
]

// Pegar o objeto todo: 
for (let caracteristica in carro){
  console.log(carro[caracteristica]);
}

// pegra um elemento especifico do objeto
for (let c of carro){
  console.log(c.marca);
}

var c = 1;
while (c <=10) {
  console.log(c++); 
}

var t =1;
do {
  console.log(t);
  t++
} while (t < 6);