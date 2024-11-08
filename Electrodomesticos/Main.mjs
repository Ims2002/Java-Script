import {Telefono} from './Telefono.mjs';
import {Portatil} from './Portatil.mjs';
import {Tablet} from'./Tablet.mjs';
import {Televisor} from './Televisor.mjs';


const catalogo = [
    new Telefono('Apple', 'iPhone 13', 999, 2021, 6.1),
    new Portatil('Dell', 'XPS 13', 1200, 2020, 16),
    new Tablet('Samsung', 'Galaxy Tab S7', 650, 2021, 128),
    new Televisor('Sony', 'Bravia X90J', 1500, 2021, '4K UHD'),
    new Televisor('LG', 'OLED CX', 2000, 2021, '4K UHD')
];

console.log(catalogo.map(item => item.detalles()).join('\n'));
