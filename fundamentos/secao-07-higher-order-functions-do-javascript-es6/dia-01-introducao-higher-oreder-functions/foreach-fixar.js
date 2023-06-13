const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const enviaremail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);

};

emailListInData.forEach((item, posicao, array) => {
  enviaremail(item);
  console.log(`sua posição é ${posicao} lugar`);
  console.log(`A quantiade de pessoas no processo seletivo é de ${array.length}`);
});

console.log();
//tambem pode ser escrito em uma linha

emailListInData.forEach((email) => console.log(`O email ${email} esta cadastrado`));

console.log();
//ELE Tambem pode ser separado

const emailListInData2 = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];


const emailChecker = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach(emailChecker);