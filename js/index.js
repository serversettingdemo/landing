let div = document.createElement('div');
div.className = 'container w-50 py-5';
let div2 = document.createElement('div');
div2.className = 'row justify-content-center text-center fixed-top bg-header';

let col = document.createElement('div');
col.className = 'col-md-11';
col.innerHTML = '<img src="asset/img/logo.webp" alt="Logo" width="120px" class="img-fluid border-bottom m-2">';

div.append(div2);
div2.append(col);

document.querySelector('#app').append(div);

// ==================================================
let container = document.createElement('div');
container.className = 'container';
let row = document.createElement('div');
row.className = 'row justify-content-center px-2';

let button = document.createElement('div');
button.className = 'd-flex col-md-8 col-lg-9';
button.innerHTML = '<button class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Login</button><button class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Register</button>';

let colRef = document.createElement('div');
colRef.className = 'col-sm-11 col-md-8 col-lg-9';
colRef.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noreferrer" target="_blank"><button type="login" class="button w-100 text-black fs-5 mt-2">Daftar &amp; Menangkan Slot Online Jackpot Terbesar</button></a>';

let rowbank = document.createElement('div');
rowbank.className = 'row justify-content-center text-center mb-4';
let colBom = document.createElement('div');
colBom.className = 'col-md-8 col-lg-9';
colBom.innerHTML = '<img src="asset/img/bom.png" alt="Logo" width="150px" class="img-fluid m-2">';

let colBank = document.createElement('div');
colBank.className = 'col-sm-11 col-md-7 col-lg-8';
let borderBank = document.createElement('div');
borderBank.className = 'border-bank p-3';
borderBank.innerHTML = ' <img src="asset/img/bank.webp" alt="Bank Lokal" class="img-fluid" width="792px" height="auto" />';

container.append(row, rowbank);
row.append(button, colRef);

rowbank.append(colBom, colBank);
colBank.append(borderBank);

// ==================================================

document.querySelector('#app').append(container);

let containerTable = document.createElement('div');
containerTable.className = 'container';
let rowTable = document.createElement('div');
rowTable.className = 'row justify-content-center text-white px-3';
let divColTable = document.createElement('div');
divColTable.className = 'col-md-8 col-lg-9';
let divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';


let table = document.createElement('table');
table.className = 'list_table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

containerTable.append(rowTable);
rowTable.append(divColTable);
divColTable.append(divTable);
divTable.append(table);
table.append(thead, tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Tentang Situs Slot Online Mentari138";
heading_1.setAttribute("colspan", "3");

row_1.appendChild(heading_1);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.setAttribute("class", "p-2");
row_2_data_1.innerHTML = "Nama Situs";
let row_2_data_2 = document.createElement('td');
row_2_data_2.setAttribute("class", "p-2");
row_2_data_2.innerHTML = '<a href="https://13.213.113.183/" title="BomSlot" rel="noopener"target="_blank">BomSlot</a>';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.setAttribute("class", "p-2");
row_3_data_1.innerHTML = "Jenis Permainan";
let row_3_data_2 = document.createElement('td');
row_3_data_2.setAttribute("class", "p-2");
row_3_data_2.innerHTML = '<a href="#" title="Slot Online">Slot Online</a></td>';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.setAttribute("class", "p-2");
row_4_data_1.innerHTML = "Minimal Deposit";
let row_4_data_2 = document.createElement('td');
row_4_data_2.setAttribute("class", "p-2");
row_4_data_2.innerHTML = 'Rp20.000';

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.setAttribute("class", "p-2");
row_5_data_1.innerHTML = "Metode Deposit";
let row_5_data_2 = document.createElement('td');
row_5_data_2.setAttribute("class", "p-2");
row_5_data_2.innerHTML = 'Transfer Bank, E-Wallet/QRIS, Pulsa';

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.setAttribute("class", "p-2");
row_6_data_1.innerHTML = "Mata Uang";
let row_6_data_2 = document.createElement('td');
row_6_data_2.setAttribute("class", "p-2");
row_6_data_2.innerHTML = 'IDR (Indonesian Rupiah)';

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.setAttribute("class", "p-2");
row_7_data_1.innerHTML = "Jam Operasional";
let row_7_data_2 = document.createElement('td');
row_7_data_2.setAttribute("class", "p-2");
row_7_data_2.innerHTML = '24 Jam Online';

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.setAttribute("class", "p-2");
row_8_data_1.innerHTML = "Daftar Sekarang";
let row_8_data_2 = document.createElement('td');
row_8_data_2.setAttribute("class", "p-2");
row_8_data_2.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noopener"target="_blank" title="Daftar Slot Online BomSlot">Klik Disini</a>';

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
tbody.appendChild(row_8);
// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerTable);


let containerContent = document.createElement('div');
containerContent.setAttribute("class", "container bg-card py-4");

let rowContent = document.createElement('div');
rowContent.setAttribute("class", "row justify-content-center text-white");

let colBanner = document.createElement('div');
colBanner.setAttribute("class", "col-md-8 col-lg-12 text-center");
let titleBanner = document.createElement('p');
titleBanner.setAttribute("class", "fs-4");
titleBanner.innerHTML = 'Situs Slot Online Terpercaya <script type="text/javascript">document.write(new Date().getFullYear());</script> Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h2');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'Bomslot: Situs Slot Online Terpercaya 2022 Indonesia';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white");

let descBody = document.createElement('p');
descBody.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati quae. Doloribus molestiae voluptatibus nulla nihil! Minima architecto accusantium nesciunt accusamus totam a hic reprehenderitaliquamnecessitatibus temporibus alias <a href = "#" > culpa perspiciatis</a> repellendus rem ducimus, idsunt vel, est, illum ut distinctio fugiat sint dolorem! Quidem laboriosam perspiciatis repellat cum sapiente.Lorem ipsumdolor sit amet consectetur adipisicing elit.Odio, placeat quisquam.Excepturi praesentium, nisiexercitationem consectetur tempora impedit aut illum illo qui alias reprehenderit eos nihil adautemneque sint beatae maxime ? Perferendis incidunt dignissimos, delectus rerum earum harum atquequaeratnatus, aliquid placeat fugiat, illo impedit itaque sint eveniet ? Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cum consequuntur temporibus eius, neque minus facere doloremmolestiae.Mollitia placeat nemo dignissimos porro eaque, nesciunt corrupti.Nemo corrupti ipsum, maxime illumnobis sunt quisquam aliquam officia aliquid possimus.Pariatur iusto, rerum est hic atque numquamofficiis, qui reprehenderit, ea repudiandae cum ? <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas error dolores dignissimos distinctio culpa deserunt. <a href="#">Voluptatibus</a>, ipsam! Cupiditate natus atque idconsequuntur reiciendis molestiae in iusto consequatur itaque vel aut quidem, dignissimos sapiente blanditiis non mollitia olores quo sed voluptate doloremque quis ? Unde, possimus quibusdam pariatur aperiam dolorum id libero veritatis.Amet, quam officiis ab, dolorem soluta asperiores porro fuga repellendus fugiat quasilabore facilis corrupti, veritatis quaerat expedita eveniet accusamus inventore aut.Ad ullam sapiente alias repellat nisi cumque ratione perspiciatis et iste dolor aliquam ut fugit necessitatibus estpraesentium nobis tempore eaque, magnam sed earum iure assumenda.';

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = 'Situs Judi Slot Online Terpercaya 2022';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white");

let descBody_2 = document.createElement('p');
descBody_2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta vero modi ipsam debitis doloribus quibusdam deleniti, veritatis libero a illo vitae, error dolorem animi velit aspernatur officiis earum ? Qua, nesciunt sunt.Iusto earum, delectus, est iste fugit voluptatibus expeditaomnisofficiis eque ea ad modi ut, excepturi harum in beatae suscipit quidem reprehenderit! Nobis praesentium doloribus obcaecati dolorum nisi aliquam ut nesciunt ratione dicta est perspiciatis, quidem iusto libero tempore blanditiis esse magni recusandae expedita quo consectetur culpa ? Minimaautem tempora in sit ipsam libero facere dolorum eveniet harum esse, nisi porro non quis.Facilisincidunt laborum perferendis. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti, ex veritatis nesciunt';


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center");
titleBody_3.innerHTML = 'Rasakan Juga Keseruan Slot Online Deposit Pulsa di Bomslot';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta vero modi ipsam debitis doloribus quibusdam deleniti, veritatis libero a illo vitae, error dolorem animi velit aspernatur officiis earum ? Qua, nesciunt sunt.Iusto earum, delectus, est iste fugit voluptatibus expeditaomnisofficiis eque ea ad modi ut, excepturi harum in beatae suscipit quidem reprehenderit! Nobis praesentium doloribus obcaecati dolorum nisi aliquam ut nesciunt ratione dicta est perspiciatis, quidem iusto libero tempore blanditiis esse magni recusandae expedita quo consectetur culpa ? Minimaautem tempora in sit ipsam libero facere dolorum eveniet harum esse, nisi porro non quis.Facilisincidunt laborum perferendis. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti, ex veritatis nesciunt';

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = 'Daftar dan Login di Bomslot dengan Mudah';

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);

// TABLE DI CONTENT
let tableContent = document.createElement('table');
tableContent.className = 'list_table';
let theadContent = document.createElement('thead');
let tbodyContent = document.createElement('tbody');

containerContent.append(rowContent);
rowContent.append(colBody);
colBody.append(tableContent);
tableContent.append(theadContent, tbodyContent);

// Creating and adding data to first row of the table
let row_1_content = document.createElement('tr');
let heading_1_content = document.createElement('th');
heading_1_content.innerHTML = "Slot Online Bomslot";
heading_1_content.setAttribute("colspan", "3");

row_1_content.appendChild(heading_1_content);
theadContent.appendChild(row_1_content);

// Creating and adding data to second row of the table
let row_2_content = document.createElement('tr');
let row_2_data_1_content = document.createElement('td');
row_2_data_1_content.setAttribute("class", "tab-title p-2");
row_2_data_1_content.innerHTML = "Nama Game:";
let row_2_data_2_content = document.createElement('td');
row_2_data_2_content.setAttribute("class", "p-2");
row_2_data_2_content.innerHTML = 'Slot Online';

row_2_content.appendChild(row_2_data_1_content);
row_2_content.appendChild(row_2_data_2_content);
tbodyContent.appendChild(row_2_content);

// Creating and adding data to third row of the table
let row_3_content = document.createElement('tr');
let row_3_data_1_content = document.createElement('td');
row_3_data_1_content.setAttribute("class", "p-2");
row_3_data_1_content.innerHTML = "Platform:";
let row_3_data_2_content = document.createElement('td');
row_3_data_2_content.setAttribute("class", "p-2");
row_3_data_2_content.innerHTML = 'ANDROID, IOS, WINDOWS, OSX, dan WEB';

row_3_content.appendChild(row_3_data_1_content);
row_3_content.appendChild(row_3_data_2_content);
tbodyContent.appendChild(row_3_content);

// Creating and adding data to third row of the table
let row_4_content = document.createElement('tr');
let row_4_data_1_content = document.createElement('td');
row_4_data_1_content.setAttribute("class", "p-2");
row_4_data_1_content.innerHTML = "Kategori:";
let row_4_data_2_content = document.createElement('td');
row_4_data_2_content.setAttribute("class", "p-2");
row_4_data_2_content.innerHTML = 'Game';

row_4_content.appendChild(row_4_data_1_content);
row_4_content.appendChild(row_4_data_2_content);
tbodyContent.appendChild(row_4_content);

// Creating and adding data to third row of the table
let row_5_content = document.createElement('tr');
let row_5_data_1_content = document.createElement('td');
row_5_data_1_content.setAttribute("class", "p-2");
row_5_data_1_content.innerHTML = "Rating:";
let row_5_data_2_content = document.createElement('td');
row_5_data_2_content.setAttribute("class", "p-2");
row_5_data_2_content.innerHTML = '5 (7785188 suara )';

row_5_content.appendChild(row_5_data_1_content);
row_5_content.appendChild(row_5_data_2_content);
tbodyContent.appendChild(row_5_content);

// Creating and adding data to third row of the table
let row_6_content = document.createElement('tr');
let row_6_data_1_content = document.createElement('td');
row_6_data_1_content.setAttribute("class", "p-2");
row_6_data_1_content.innerHTML = "Minimal Deposit:";
let row_6_data_2_content = document.createElement('td');
row_6_data_2_content.setAttribute("class", "p-2");
row_6_data_2_content.innerHTML = 'Rp. 10.000';

row_6_content.appendChild(row_6_data_1_content);
row_6_content.appendChild(row_6_data_2_content);
tbodyContent.appendChild(row_6_content);

// Content After Table 
let divBody_5 = document.createElement('div');
divBody_5.setAttribute("class", "text-white mt-4");

let descBody_5 = document.createElement('p');
descBody_5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta ver. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti';

colBody.append(divBody_5);
divBody_5.append(descBody_5);

// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerContent);

// FOOTER
let footer = document.createElement('footer');
footer.setAttribute("class", "text-center");

let conFoo = document.createElement('div');
conFoo.setAttribute("class", "container text-white-50 py-2");

let textFoo = document.createElement('h5');
textFoo.setAttribute("class", "fs-6");
textFoo.innerHTML = 'copyright &copy; 2022 by Mentari138';

footer.append(conFoo);
conFoo.append(textFoo);
document.querySelector('#app').appendChild(footer);

// FOOTER MENU
let fixedFooter = document.createElement('div');
fixedFooter.className = 'fixed-footer d-lg-none';
fixedFooter.innerHTML = '<a href="https://13.213.113.183/mobile/promotion" rel="nofollow noopener" target="_blank"><img max-height="10" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/bonus_nrpcrt.webp" alt="Bonus Promo BomSlot"></img> Bonus</a>';

let link1 = document.createElement('a');
link1.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link1.className = 'tada';
link1.innerHTML = '<img class="center" height="25" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/user_mhgeva.svg" alt="Daftar Slot Online BomSlot"></img> Daftar';

let link2 = document.createElement('a');
link2.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link2.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/whatsapp_kcggke.svg" alt="Whatsapp"></img> Whatsapp';

let link3 = document.createElement('a');
link3.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link3.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/live-chat_qnj9vv.svg" alt="Live Chat"></img> Live Chat';

fixedFooter.append(link1, link2, link3);
document.querySelector('#app').appendChild(fixedFooter);