const SecondaryMemory = require('./SecondaryMemory');
const MainMemory = require('./MainMemory');

const secondaryMemory = new SecondaryMemory();
const mainMemory = new MainMemory();

// Conjunto de números aleatórios a serem somados
const randomNumbers = [
  '36912',
  '84300',
  '240',
  '226',
  '165',
  '1',
  '209',
  '127',
  '86',
  '260',
  '258',
  '106',
  '161',
  '2',
  '182',
  '31',
  '173',
  '37',
  '109',
  '113',
  '122',
  '221',
  '27',
  '119',
  '98',
  '288',
  '267',
  '176',
  '48',
  '285',
  '268',
  '224',
  '31',
  '261',
  '277',
  '116',
  '274',
  '257',
  '20',
  '29',
  '207',
  '194',
  '119',
  '95',
  '132',
  '39',
  '94',
  '227',
  '174',
  '139',
  '80',
  '149',
  '252',
  '76',
  '269',
  '55',
  '228',
  '286',
  '29',
  '148',
  '195',
  '148',
  '283',
  '61',
  '253',
  '276',
  '220',
  '175',
  '115',
  '26',
  '291',
  '234',
  '119',
  '155',
  '108',
  '295',
  '293',
  '151',
  '46',
  '104',
  '260',
  '118',
  '70',
  '189',
  '198',
  '146',
  '129',
  '239',
  '130',
  '120',
  '255',
  '221',
  '59',
  '284',
  '5',
  '203',
  '50',
  '63',
  '288',
  '64',
  '247',
  '51',
  '98',
  '295',
  '105',
  '110',
  '125',
  '260',
  '100',
  '216',
  '218',
  '168',
  '103',
  '81',
  '150',
  '53',
  '108',
  '95',
  '188',
  '22',
  '165',
  '251',
  '169',
  '135',
  '21',
  '86',
  '89',
  '45',
  '229',
  '107',
  '176',
  '65',
  '186',
  '128',
  '0',
  '96',
  '261',
  '150',
  '126',
  '178',
  '215',
  '118',
  '256',
  '296',
  '251',
  '33',
  '248',
  '22',
  '281',
  '251',
  '244',
  '182',
  '145',
  '287',
  '100',
  '13',
  '287',
  '55',
  '282',
  '265',
  '196',
  '58',
  '73',
  '208',
  '98',
  '81',
  '26',
  '79',
  '2',
  '285',
  '238',
  '127',
  '31',
  '110',
  '272',
  '188',
  '243',
  '154',
  '270',
  '259',
  '242',
  '204',
  '234',
  '167',
  '241',
  '6',
  '246',
  '275',
  '136',
  '232',
  '84',
  '144',
  '191',
  '14',
  '21',
  '93',
  '98',
  '32',
  '210',
  '186',
  '220',
];

// Carregando todos os números em memória (principal e secundária)
randomNumbers.forEach((number) => {
  secondaryMemory.load(number);
  mainMemory.load(number);
});

// Interando sobre os números carregados na MEMORIA PRINCIPAL e realizando a soma
let initialMainMemoryTime = Date.now();
let mainMemorySum = 0;
for (let i = 0; i < randomNumbers.length; i++) {
  mainMemorySum += mainMemory.get(i);
}

console.log(`Memória Principal\nSoma: ${mainMemorySum} Tempo gasto: ${Date.now() - initialMainMemoryTime}ms\n`);

// Interando sobre os números carregados na MEMORIA SECUNDARIA e realizando a soma
let initialSecondaryMemoryTime = Date.now();
let secondaryMemorySum = 0;
for (let i = 0; i < randomNumbers.length; i++) {
  secondaryMemorySum += secondaryMemory.get(i);
}

console.log(`Memória Secundária\nSoma: ${secondaryMemorySum} Tempo gasto: ${Date.now() - initialSecondaryMemoryTime}ms`);
