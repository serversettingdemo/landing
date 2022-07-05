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
titleBanner.innerHTML = 'Situs Slot Online Terpercaya Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h1');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'Situs Judi Slot Gacor Online Terpercaya Pragmatic Play Indonesia';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white");

let descBody = document.createElement('p');
descBody.innerHTML = `Situs agen judi online Mantap138 sudah dikenal oleh berbagai kalangan sebagai situs yang memberikan keuntungan kepada para bettornya. Mantap138 slot selalu memberikan pemain sistem permainan slot yang sangat fairplay dengan sistem keamanan tercanggih saat ini. Perkembangan permainan slot saat ini yang selalu berkembang setiap harinya memberikan kami motivasi kedepannya untuk selalu memberikan pelayanan yang lebih spesial kepada para bettor. Permainan slot online saat ini sangat mudah untuk diakses karena pemain tidak perlu lagi untuk jauh-jauh ke luar negeri untuk menikmati rangkaian permainan situs judi slot online. <br><br> 
Mantap138 selalu menyediakan pelayanan istimewa kepada para bettor tentunya dengan sistem deposit dan withdraw hanya 5 menit para bettor tidak perlu menunggu lama-lama. Sudah banyak sekali member kami yang merasakan keuntungan terbesar dari situs judi slot online pilihan kami dengan rangkaian permainan paling gampang menang tentunya. Mantap 138 Slot memberikan para bettor permainan paling menarik saat ini seperti Slot Online, Casino Online, Bola Online, Sabung Ayam dan Togel Online.<br><br>Mantap138 selalu menyediakan pelayanan istimewa kepada para bettor tentunya dengan sistem deposit dan withdraw hanya 5 menit para bettor tidak perlu menunggu lama-lama. Sudah banyak sekali member kami yang merasakan keuntungan terbesar dari situs judi slot online pilihan kami dengan rangkaian permainan paling gampang menang tentunya. Mantap 138 Slot memberikan para bettor permainan paling menarik saat ini seperti Slot Online, Casino Online, Bola Online, Sabung Ayam dan Togel Online.<br><br>
Jika para pemain sangat ingin menikmati seluruh permainan ini tentunya segala proses pendaftaran judi slot bo 138 sangat mudah. Anda hanya cukup mengisi form pendaftaran yang telah disediakan seperti nama anda, password anda, nomor telepon anda dan akun bank anda. Cukup dengan 1 akun slot, para bettor sudah bisa menikmati seluruh permainan slot online yang diberikan oleh situs Mantap 138 slot kami. <br><br>Jika anda merasa kesusahan dalam melakukan proses pendaftaran, deposit dan withdraw tenang saja Customer service kami siap membantu anda selama 24 jam penuh dengan akun Livechat kami. Seluruh data privacy anda aman 100% tanpa anda harus merasa khawatir akan bocor karena kami mempunyai data center yang terjaga dengan sistem keamanan canggih saat ini.<br><br>`;

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = '8 Daftar Provider Situs Slot Online Mantap138 Paling Terpercaya Dan Terbaik';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white");

let descBody_2 = document.createElement('p');
descBody_2.innerHTML = `Jika para bettor saat ini tengah mencari provider situs slot online paling terpercaya tentunya kalian sudah berada di situs yang tepat, sebab Mantap138 selalu menyajikan provider paling terpercaya saat ini yang bisa kalian mainkan rangkaian permainannya. Berikut akan kami bahas 8 daftar provider situs slot online Mantap138 terpercaya saat ini : <br><br> 
<ul>
<li><b>BO Slot 138 Pragmatic Play</b><br>
Pragmatic Play selalu menyajikan berbagai permainan yang gampang menang tentunya, pasti kalian sangat sering melihat para youtuber serta influencer menikmati permainan Gates of Olympus, Sweet Bonanza, Starlight Princess, Aztec Gems, Great Rhino Megaways seluruh permainan tersebut sangat 
menarik untuk kalian mainkan karena nyatanya seluruh permainan ini selalu memberikan kemenangan terbesar kepada para pemain dengan hadiah jackpot hingga ratusan juta rupiah yang bisa kalian dapatkan ketika bergabung dengan Mantap138 ini.
</li><br>
<li><b>BO Slot 138 PGSOFT</b><br>
Provider PGSOFT selalu menyajikan permainan slot online yang paling gacor tentunya, hampir seluruh permainan yang ada di PGSOFT menyajikan nuansa permainan yang sangat menarik sehingga para pemain di situs ini akan dibuat nyaman dengan tema permainan yang sangat menarik. 
Mahjong Ways keluaran PGSOFT menyajikan game slot dengan jackpot hingga ratusan juta rupiah. 
</li><br>
<li><b>BO Slot 138 Microgaming</b><br>
Provider Microgaming juga sudah dikenal dari beberapa tahun belakangan ini, mereka selalu memberikan rangkaian permainan judi slot online paling menarik saat ini. Pemain bisa mendapatkan jackpot dengan mencoba permainan dari Microgaming ini. Suasana serta sound dari provider ini menjadi 
pembeda dibandingkan dengan situs slot online lain. Sehingga para pemain akan dibuat betah dengan mencoba permainan slot yang disediakan oleh Microgaming ini. </li><br>
<li><b>BO Slot 138 Playtech</b><br>Playtech termasuk ke dalam provider yang selalu memberikan bettor permainan yang gampang menang serta bonus terbaik. Tentu para pemain tentunya mengharapkan permainan Slot Gacor Gampang Menang, justru itu provider bo slot 138 
satu ini menghadirkan begitu banyak keuntungan terbesar dengan nuansa serta suasana permainan yang menarik dengan hadiah jackpot hingga puluhan juta rupiah kepada para pemain.</li><br>
<li><b>138 Slot Toptrend Gaming</b><br>Untuk provider selanjutnya Toptrend Gaming selalu menyajikan banyak sekali permainan slot yang bisa anda mainkan dengan modal rendah. Toptrend Gaming sudah 
banyak sekali menghasilkan kemenangan terbesar kepada para pemain dengan ratusan permainan yang dia berikan tentu para pemain pasti mengharapkan jackpot terbesar kepada para pemain dengan hadiah jackpot hingga ratusan juta rupiah. </li><br>
<li><b>138 Slot Habanero</b><br>
Untuk provider satu ini telah membuktikan kancah mereka di bidang permainan slot online, hampir seluruh permainan yang disediakan memberikan suasana serta design permainan sangat menarik sehingga para pemain slot setidaknya akan dibuat betah ketika bertaruh di situs slot gacor kami.</li><br>
<li><b>138 Slot Joker123</b><br>Provider slot terpercaya ini telah lama berdiri dengan banyaknya member tetap yang bermain di situs slot gacor terpercaya ini tentu para pemain bisa mendapatkan jackpot terbesar ketika bertaruh di ratusan permainan slot yang disediakan oleh provider Joker123 ini. 
Para bettor kami setidaknya sudah merasakan jackpot yang diberikan oleh provider Joker123 Slot Online Terpercaya ini.</li><br>
<li><b>138 Slot CQ9</b><br>
Kehebatan provider satu ini dalam menghadirkan ratusan permainan gampang maxwin ini juga memberikan kesan menarik kepada para pemain. Sebab hampir seluruh permainan tersebut memberikan 
kesan menarik kepada para pemain dengan ratusan permainan yang disediakan memberikan pemain motivasi untuk mendapatkan jackpot dari situs 138 slot ini.</li><br>
</ul>`;


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center");
titleBody_3.innerHTML = 'Keuntungan Bermain Di Situs BO 138 Slot Online Resmi di Tahun Ini';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = `Rasakan keuntungan bermain slot gacor di situs resmi, pembayaran tidak akan ada potongan sama sekali. Saat ini sudah banyak situs bo 138 slot online yang memberikan 
kemudahan bagi para penggemarnya di asia dan Indonesia. Kami menyediakan berbagai macam permainan taruhan yang menarik. Penggemar yang bermain di situs dengan fasilitas lengkap akan merasa 
lebih rileks dalam bermain. Terdapat banyak kesempatan terbaik jika anda suka pada permainan judi slot di masa modern. Tentu bergabung dengan situs resmi hanya akan membuat bettor merasa 
lebih nyaman dan aman dalam bermain. Situs slot kami telah siapkan produk lengkap dan menguntungkan seperti di dunia nyata. Tidak hanya satu permainan, agen kami menyiapkan beberapa produk 
lainnya. Kali ini anda tidak akan merasa bosan atau bosan. <br><br>
<b>Kelebihan bermain di situs slot bo 138 slot terpercaya 2022</b><br>
Untuk bisa menemukan situs online terpercaya, cukup menggunakan kata kunci yang tepat di google.<br><br>
<ul>
<li><b>Kenyamanan bettor adalah prioritas</b><br>
Anda bisa mencari situs 138 slot di dunia internet. Tidak salah, di era yang sangat modern dan penuh dengan kecanggihan teknologi. Sekarang ini sudah banyak orang yang mengenal sistem judi 
yang sangat populer dengan koneksi internet. Situs online terpercaya tentunya sudah memiliki website yang benar-benar resmi dan jelas keberadaannya. Dalam artian tempat bermain ini sudah 
menggunakan domain. Jadi saat bermain disini hanya kenyamanan yang dirasakan.</li><br>
<li><b>Banyak member aktif bermain slot bo 138 slot</b><br>Dalam sebuah situs bo 138 slot sudah pasti akan banyak ditemukan pemain atau member yang aktif setiap harinya. Mereka merasa puas 
bermain di sini. Tidak hanya ada banyak anggota, tetapi ada kegiatan yang berlangsung sepanjang hari. Karena umumnya situs palsu tidak memiliki aktivitas sama sekali. Pasti banyak member 
yang memasang game di website disini. Tidak hanya itu, bersama situs slot online, kalian memiliki akses yang mudah dan disukai oleh semua penggemar yaitu smartphone.</li><br>
<li><b>Tidak pernah ada robot dalam situs 138 slot</b><br>
Jadi 138 slot uang asli memiliki sistem keamanan yang selalu terjaga. Situs judi terbaik akan selalu memberikan kenyamanan dan keamanan dengan berbagai cara. 
Untuk pemain resmi di dunia internet, jika menemukan situs 138 slot online yang mencurigakan, segera pindah dan cari website lain. Karena mereka jelas bukan tempat yang bagus. 
Selain itu di situs online kami tidak akan ada robot yang mengambil alih, tetapi hanya admin customer service yang bisa diajak berkomunikasi.<br> <br>
Semua penggemar kami harapkan bisa bermain dengan mudah dan nyaman. Kami sudah siapkan program dan fasilitas yang memudahkan bettor. Bagi kalian yang sangat ingin bermain di situs terpercaya, pahami ketentuan mereka lebih dahulu.</li><br>
</ul>
Dapatkan berbagai informasi secara detail dan terperinci ketika memutuskan bermain slot. Apabila membutuhkan informasi lebih lengkap, tanyakan kepada customer support 
situs slot gacor yang selalu online selama 24 jam setiap harinya.`;

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = 'Banyak Keunggulan Bermain di Situs Slot Mantap138 Terpercaya';

let divBody_4 = document.createElement('div');
divBody_4.setAttribute("class", "text-white");

let descBody_4 = document.createElement('p');
descBody_4.innerHTML = `Dapatkan sejumlah bonus dan promo besar saat berkolaborasi dengan situs slot online Indonesia terpercaya. Permainan di situs Mantap138 slot terpercaya 
sudah memberikan bonus dalam jumlah yang banyak dan jenis game beragam. Anda dapat menggunakan fasilitas ini untuk mencapai kesuksesan sebagai pemain profesional. Karena jenis 
bonusnya bermacam-macam, makanya para pemain dengan mudah menciptakan peluang sendiri tanpa harus bergantung pada bantuan atau firasat. Bahkan mereka selalu berhasil mendapatkan 
penghasilan meskipun jumlahnya tidak pasti.<br><br>
<b>Tersedia keberuntungan besar bermain di slot Mantap138 Online terpercaya</b><br>
Mendapatkan keberuntungan pada permainan slot 138 tidak sulit sama sekali jika anda berusaha keras. Jangan hanya mengandalkan keberuntungan, jika ingin meraih sukses besar melalui permainan slot online. <br><br>
<ul>
<li><b>Tersedia bonus dan promo</b><br>
Bonus yang paling didambakan adalah jackpot, di mana agen slot online mantap138 menawarkannya secara acak kepada pemain. Kemunculannya memang tidak terduga sama sekali, terkadang bernilai hingga jutaan rupiah, 
namun tergantung kebijakan agen dan poin yang sudah didapat. </li><br>
<li><b>Lakukan analisa selama bermain</b><br>
Semuanya tergantung pada keberuntungan sendiri, sehingga tidak ada pemain yang bisa memprediksi kemenangannya sendiri. Adapun upaya yang bisa dilakukan untuk menang dalam taruhan slot 
mantap138 yaitu memperbanyak hoki dan mendapatkan bonus sebanyak-banyaknya. <br> Walaupun sudah pasti anda tidak akan pulang dengan tangan hampa atau tanpa penghasilan sama sekali, 
namun perhatikan kondisi dan penggunaan strategi. Jika anda memperhatikan teknik bermain judi, maka akan lebih mudah untuk mendapatkan poin dan bonus yang maksimal. </li><br>
<li><b>Memaksimalkan pertaruhan anda</b><br>
Bagaimana bettors memaksimalkan jumlah pendapatan bonus dengan situs slot online modern? Caranya sangat mudah dan tidak membutuhkan usaha atau pemikiran yang keras. 
Usahakan dulu sering memasang taruhan setiap hari atau mengatur jadwal khusus, agar tidak terkesan boros mengeluarkan uang untuk deposit. <br>
Lalu mainkan slot mantap 138 di website yang sudah menyiapkan banyak bonus dan promo. Cara lainnya adalah dengan mengincar jackpot karena jumlah uang jauh lebih besar bahkan berlipat ganda. 
Jika sudah berhasil mendapatkan bonus, hentikan dan mainkan jenis slot online berkualitas dengan pasaran lain.<br>
Ini karena jackpot biasanya muncul sekali dan berulang dalam waktu yang lama. Tips terakhir tentunya bergabung dengan agen resmi dan terpercaya mantap138 untuk mendapatkan berbagai bonus. 
Anda bisa mendapatkan bonus yang maksimal jika selalu berusaha dan memperhatikan berbagai kondisi saat bermain judi slot.</li><br>
</ul>
Jangan fokus pada satu keuntungan saja, memanfaatkan berbagai fasilitas dan fitur dari agen untuk meningkatkan peluang bonus seperti member get member, diskon deposit, referral, 
dan masih banyak jenis lainnya. Dengan bantuan dan layanan situs online resmi, memudahkan anda semua saat memasang judi slot. Sebagai member jangan mudah menyerah terus berusaha dan 
dapatkan banyak keberuntungan di situs slot online terpercaya.`;

let titleBody_7 = document.createElement('h2');
titleBody_7.setAttribute("class", "text-warning text-center");
titleBody_7.innerHTML = 'FAQ -  Pertanyaan Yang Sering Ditanyakan Member Mantap 138 Slot Online';

let divBody_7 = document.createElement('div');
divBody_7.setAttribute("class", "text-white");

let descBody_7 = document.createElement('p');
descBody_7.innerHTML = `<b>Q: Provider apa saja yang disediakan oleh situs Mantap138 saat ini ?</b><br>
A : Mantap138 menyediakan begitu banyak pilihan provider yang bisa anda mainkan ketika menjadi member kami berikut 14 Daftar Provider Situs Slot Online Terpercaya : <br><br>
<ul>
<li>Provider Pragmatic Play</li>
<li>Provider PGSOFT</li>
<li>Provider Microgaming</li>
<li>Provider Toptrend Gaming</li>
<li>Provider Habanero</li>
<li>Provider BBIN</li>
<li>Provider BBP</li>
<li>Provider Spadegaming</li>
<li>Provider Joker123</li>
<li>Provider Playstar</li>
<li>Provider CQ9</li>
<li>Provider BNG</li>
<li>Provider MMG</li>
<li>Provider Slot88</li>
</ul>

<b>Q : Apa Situs Mantap138 bisa dipercaya ?</b><br>
A : Tentu, Mantap138 sudah dipercaya lebih dari 5 tahun menemani para pemain slot online merebutkan jackpot terbesar hingga puluhan juta rupiah.
<b>Q : Metode Deposit Apa Saja Yang Disediakan Mantap138</b><br>
A: <br>
<ul>
<li>A:  Bank lokal : BNI, BCA, BRI, CIMB, Mandiri</li>
<li>B:  E-Wallet : Ovo, Dana dan Gopay</li>
<li>C:  Pulsa : Telkomsel dan XL.</li>
</ul>
Segera bergabung bersama kami dan nikmati rangkaian bonus terbesar yang mereka berika`;

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4, divBody_4, titleBody_7, divBody_7);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);
divBody_4.append(descBody_4);
divBody_7.append(descBody_7);

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