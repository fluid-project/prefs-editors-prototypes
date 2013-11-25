/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii");

    gpii.primarySchema = {
        "gpii.primarySchema.fontSize": {
            "type": "number",
            "default": 12,
            "minimum": 1,
            "maximum": 1000,
            "divisibleBy": 1
        },
        "gpii.primarySchema.cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },
        "gpii.primarySchema.magnifierEnabled": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.magnification": {
            "type": "number",
            "default": 100,
            "minimum": 100,
            "maximum": 10000,
            "divisibleBy": 50
        },
        "gpii.primarySchema.magnifier.invertColours": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.magnificationPosition": {
            "type": "string",
            "default": "",
            "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        "gpii.primarySchema.tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "gpii.primarySchema.contrastEnabled": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.contrast.theme": {
            "type": "string",
            "default": "",
            "enum": ["bw", "yb", "by", "wb"]
        },
        "gpii.primarySchema.screenReaderTTSEnabled": {
            "type": "boolean",
            "default": true
        },
        "gpii.primarySchema.speechRate": {
            "type": "number",
            "default": 130,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.auditoryOutLanguage": {
            "type": "string",
            "default": "English",
            "enum": ["English", "French (français)", "Afrikaans (Afrikaans)", "Ainu (アイヌ イタク/Aynu itak)", "Akan (akan)", "Albanian (shqip / gjuha shqipe)", "Aleut (Unangam tunuu)", "Amharic (ኣማርኛ (amarəñña))", "Apache (Ndéé)", "Arabic ((al arabiya) العربية)", "Aragonese (Fabla)", "Aramaic (ܠܫܢܐ ܤܘܪܝܝܐ)", "Aranese (Aranés)", "Arapaho (Hinono'eitiit)", "Argobba (ዓርጎባ (Äynū)", "Armenian (Հայերէն (Hayeren))", "Aromanian ((Vlach) Armãneashti)", "Arrernte (Arrernte angkentye)", "Assamese (অসমীয়া (asamīẏa))", "Asturian (Asturianu)", "Avar (магIарул)", "Awngi (አውጚ)", "Aymara (aymar aru)", "Azerbaijani (Azərbaycan dili)", "Balinese (Basa Bali)", "Balkar (малкъар/балкъар)", "Baluchi (بلوچی)", "Bambara (Bamanankan)", "Bashkir (башҡорт теле)", "Bassa (ɓasaá)", "Basque (euskara)", "Beja (Badāwīyä / بداوية)", "Belarusian (Беларуская мова)", "Bemba (iciBemba)", "Bengali (বাংলা (baɛṅlā))", "Berber (Tamazight)", "Bhojpuri (भोजपुरी (bʰojpurī))", "Blin (ብሊን (bi.li.nə))", "Blackfoot (ᑯᖾᖹ)", "Bosnian (Bosanski)", "Breton (ar brezhoneg)", "Buginese (ᨅᨔ ᨕᨘᨁᨗ (basa ugi))", "Buhid (buhid)", "Bulgarian (български)", "Burmese (bama saka)", "Buryat (буряад хэлэн)", "Carrier (ᑐᑊᘁᗕᑋᗸ (Dulkw’ahke))", "Catalan (català)", "Cayuga (Goyogo̱hó:nǫ’)", "Cebuano (Sinugboanon)", "Chagatai (جغتای)", "Chaha (ቸሃ)", "Chamorro (chamoru)", "Chechen (Нохчийн мотт)", "Cherokee (ᏣᎳᎩ (tsalagi))", "Cheyenne (Tsėhesenėstsestotse)", "Chichewa (Chicheŵa)", "Chickasaw (Chikasha)", "Chinese (中文 (zhōngwén))", "Chinese ((Cantonese) 廣東話)", "Chinese ((Dungan) хуэйзў йүян)", "Chinese ((Gan) 赣语 (gànyŭ))", "Chinese ((Hakka) 客家話)", "Chinese ((Mandarin) 普通話", "Chinese ((Shanghainese) 上海闲话)", "Chinese ((Taiwanese) 台語 (dai5-ngi2))", "Chinese ((Teochew) 潮州話 (Diojiu Ue))", "Chinese ((Xiang) 湘语 (xiāngyŭ))", "Chipewyan (Dëne Sųłiné / ᑌᓀᓲᒢᕄᓀ)", "Choctaw (Chahta Anumpa)", "Comanche (numu tekwapu)", "Cornish (Kernewek)", "Corsican (corsu)", "Cree (ᓀᐦᐃᔭᐍᐏᐣ (Nēhiyawēwin))", "Creek (Maskoki / Mvskokē empunakv)", "Croatian (Hrvatski)", "Czech (čeština / český jazyk)", "Dakota (Dakȟótiyapi - Yankton Dakota)", "Dakhótiyapi (- Santee Dakota)", "Dangme (adangbɛ)", "Danish (dansk)", "Dargwa (дарган мез (dargan mez))", "Dari (درى)", "Dinka (Thuɔŋjäŋ)", "Dungan (хуэйзў йүян (xuejzu jyjan))", "Dutch (Nederlands)", "Dzongkha (/)", "Bhutanese (རྫོང་ཁ (dzongkha))", "Erzya (эрзянь кель (erzjaņ keļ))", "Estonian (eesti keel)", "Esperanto (Esperanto)", "Ewe (Eʋegbe)", "Eyak (I·ya·q)", "Faroese (Føroyskt)", "Fijian (Vakaviti)", "Finnish (suomi / suomen kieli)", "Flemish (Vlaams)", "Fon (fɔngbè)", "Frisian ((West) Frysk)", "Friulan (furlan / marilenghe)", "Fula (fulfulde)", "Ga (Gã)", "Galician (Galego)", "Ganda (LùGáànda)", "Ge'ez (ግዕዝ (gəʿəz))", "Genoese (zeneize / zeneisei)", "Georgian (ქართული (kʻartʻuli))", "German (Deutsch)", "Godoberi (ГъибдилӀи мицци)", "Gooniyandi (Guniandi)", "Greek (ελληνικά (ellēniká))", "Greenlandic (Kalaallisut)", "Guernsey (Norman Dgèrnésiais)", "Guarani (Avañe'ẽ)", "Gujarati (ગુજરાતી (gujarātī))", "Gwich'in (Gwich'in)", "Haida (Xaat Kíl)", "Haitian (Creole Kreyòl ayisyen)", "Hän (Häł gołan)", "Harari (ሃራሪ)", "Hausa ((ḥawsa) حَوْسَ)", "Hawaiian (ʻōlelo Hawaiʻi)", "Hebrew ((ivrit) עברית / עִבְרִית)", "Herero (Otjiherero)", "Hindi (हिन्दी (hindī))", "Hungarian (magyar / magyar nyelv)", "Icelandic (Íslenska)", "Igbo (igbo)", "Ilocano (ilokano)", "Indonesian (Bahasa Indonesia)", "Ingush (гӀалгӀай мотт / ġalġay mott)", "Inuktitut (ᐃᓄᒃᑎᑐᑦ (inuktitut))", "Iñupiaq (Inupiatun)", "Irish ((Gaelic) Gaeilge)", "Italian (italiano)", "Japanese (日本語 (nihongo))", "Javanese (basa Jawa)", "Jersey (Norman Jèrriais)", "Kabardian (къэбэрдеибзэ)", "Kabyle (Taqbaylit)", "Kaingang (kanhgág)", "Kannada (ಕನ್ನಡ)", "Kanuri (kanuri)", "Kapampangan (Kapampangan)", "Karakalpak (қарақалпақ тили)", "Karelian (Karjalan kieli)", "Kashmiri (कॉशुर / كٲشُر)", "Kashubian (kaszëbsczi)", "Kazakh (Қазақ тілі)", "Khakas (Хакас тілі)", "Khmer (ភាសាខ្មែរ)", "Khoekhoe (Khoekhoegowab)", "Kikuyu (Gĩkũyũ)", "Kinyarwanda (Ikinyarwanda)", "Kiribati (taetae ni Kiribati)", "Kirundi (íkiRǔndi)", "Komi (коми кыв (komi kyv))", "Kongo (kikongo)", "Konkani (कोंकणी (kōṅkaṇī))", "Korean (한국어 (han-guk-eo))", "Kumyk (Къумукъ тил (Qumuq til))", "Kurdish (Kurdí / کوردی / к’öрди)", "Kven (Kainun kieli)", "Kwanyama (kuanyama)", "Kyrgyz (قىرعىز (kyrgyz))", "Ladin (Ladin)", "Ladino (djudeo-espanyol)", "Lahnda (ਲਹਿੰਦੀ (lhĩdī))", "Lakota (Lakȟótiyapi)", "Lao (ພາສາລາວ (pháasaa láo))", "Latin (Lingua Latina)", "Latvian (latviešu valoda)", "Laz (ლაზური ნენა / Lazuri nena)", "Lezgian (лезги чӀал (lezgi čʼal))", "Limburgish (Lèmburgs)", "Lingala (lingála)", "Lithuanian (lietuvių kalba)", "Livonian (Līvõ kēļ)", "Lombard (Lombard / Lumbaart)", "Low (German/Low Saxon Plattdüütsch)", "Luo (Dholuo)", "Luxembourgish (Lëtzebuergesch)", "Maasai/Maa (ɔl Maa)", "Macedonian (македонски)", "Maldivian (ދިވެހި (dhivehi))", "Maithili (मैथिली (mɛtʰilī))", "Malagasy (Fiteny Malagasy)", "Malay (Bahasa melayu)", "Malayalam (മലയാളം (malayāḷam))", "Maltese (Malti)", "Manipuri (মৈইতৈইলোন)", "Mansi (Маньси (Man'si))", "Manx (Gaelg/Gailck (Vanninagh))", "Māori (te Reo Māori)", "Marathi (मराठी (marāṭhī))", "Mari/Cheremis (марий йылме)", "Marshallese (Kajin M̧ajeļ)", "Menominee (Mamaceqtaw)", "Mirandese (lhéngua mirandesa)", "Mohawk (Kanien'keha)", "Moksha (мокшень кяль (mokšeņ kjaļ))", "Moldovan (лимба молдовеняскэ)", "Mongolian (монгол (mongol))", "Montagnais (Innu-Aimun)", "Nahuatl (nāhuatl / nawatlahtolli)", "Naskapi (ᓇᔅᑲᐱ (naskapi) / Innu Aimun)", "Nauru (Ekakairũ Naoero)", "Navajo (Diné Bizaad / Dinék'ehjí)", "Occitan (Occitan)", "Oshiwambo (OshiWambo)", "Nepali (नेपाली (nēpālī))", "Newari (नेपाल भाषा (nepāl bʰāṣā))", "Niuean (ko e vagahau Niuē / faka-Niue)", "Nogai (ногай тили (nogay tili))", "Noongar (Nyungaa-wangka)", "Northern (Sotho Sesotho sa Leboa)", "Norwegian (Norsk)", "Nyamwezi (kinyamwezi)", "Nyoro (runyoro)", "Ojibwe (ᐊᓂᔑᓇᐯᒧᐏᐣ)", "O'odham (O'odham ñiok)", "Oriya (ଓଡ଼ିଆ (ōṛiyā))", "Oromo (Afaan Oromo)", "Ossetian (ирон ӕвзаг (iron ævzag))", "Palauan (tekoi ra Belau)", "Pali (पालि (pāli))", "Papiamento (Papiamentu)", "Pashto ((paṧto) پښتو)", "Persian ((fārsī) فارسى)", "Piedmontese (Piemonteis)", "Polish (polski)", "Portuguese (português)", "Punjabi (ਪੰਜਾਬੀ / ﺏﺎﺠﻨﭘ (panjābi))", "Quechua (Qhichwa)", "Raga (Raga)", "Rapanui (rapanui / pepito ote henua)", "Rarotongan (Māori Kūki 'Āirani)", "Romanian (limba română / român)", "Romansh (rumantsch)", "Romani (रोमानो (romānī))", "Rotuman (Faeag Rotuma)", "Russian (Русский язык (Russkij jazyk))", "Ruthenian (Rusyn / Русин)", "Sámi ((Inari) anarâškielâ)", "Sámi ((Kildin) Кӣллт са̄мь кӣлл)", "Sámi ((Lule) julevsámegiella)", "Sámi ((North) davvisámegiella)", "Sámi ((Pite) bidumsámegiella)", "Sámi ((Skolt) Sääˊmǩiõll)", "Sámi ((South) Åarjelsaemien gïele)", "Sámi ((Ter) Са̄мь кӣлл)", "Sámi ((Ume) Ubmejensámien giella)", "Santali (संथाली (sãtʰālī))", "Samoan (Gagana Samoa)", "Sango (Yângâ tî Sängö)", "Sanskrit (संस्कृतम् (saṃskṛtam))", "Sardinian (Limba Sarda / sardu)", "Sark (Norman Sèrtchais / Serquiaise)", "Scots (Scoats leid / Lallans)", "Scottish (Gaelic Gàidhlig)", "Selkup (шӧльӄумыт әты (šöļǩumyt ǝty))", "Serbian (српски)", "Shavante (aʼuwẽ mreme)", "Shawnee (Sawanwa)", "Shona (chiShona)", "Shor (Шор тили (Šor tili))", "Sicilian (sicilianu)", "Sidamo (Sidámo 'Afó)", "Silesian (ślůnsko godka / ślůnski)", "Sindhi ((sindhī) سنڌي)", "Sinhala (සිංහල (sĩhala))", "Silt'e (ስልጥኘ)", "Slovak (slovenčina)", "Slovenian (slovenščina)", "Somali (af Soomaali)", "Soninke (soninkanxaane)", "Sorbian ((Lower) dolnoserbski)", "Sorbian ((Upper) hornjoserbsce)", "Southern (Sotho seSotho)", "South (Slavey ᑌᓀ ᒐ (dene tha))", "Spanish (español / castellano)", "Sundanese (Basa Sunda)", "Svan (ლუშნუ ნინ (lušnu nin))", "Swabish (Schwäbisch)", "Swahili (Kiswahili)", "Swati (siSwati)", "Swedish (Svenska)", "Swiss (German Schwyzerdütsch)", "Syriac ((Lishana Suryaya) ܠܫܵܢܵܐ ܣܘܪܝܝܐ)", "Tabassaran (табасаран чIал)", "Tagalog (Tagalog)", "Tahitian (te reo tahiti)", "Tai (Nüa ᥖᥭᥰᥖᥬᥳᥑᥨᥒᥰ)", "Tajik (тоҷики / toçikī / تاجيكي)", "Tamil (தமிழ் (tamiḻ))", "Tatar (татарча)", "Telugu (తెలుగు (telugu))", "Tetum (Tetun, Lia-Tetun)", "Thai (ภาษาไทย (paasaa-tai))", "Tibetan (pö-gay)", "Tigre (ትግረ (tigre))", "Tigrinya (ትግርኛ (təgərəña))", "Tlingit (Lingít)", "Tok (Pisin Tok Pisin)", "Tonga (chiTonga)", "Tongan (Faka-Tonga / lea fakatonga)", "Tsez (цез мец (cez mec))", "Tsonga (xiTsonga)", "Tswana (Setswana)", "Tumbuka (chiTumbuka)", "Turkish (Türkçe)", "Turkmen (түркmенче (türkmençe))", "Tuscarora (Sgarooreh’ / Skarù∙rę’)", "Tuvaluan (Te 'gana Tūvalu)", "Tuvan (Тыва дыл / Tyva dyl)", "Twi (twi)", "Udmurt (удмурт кыл (udmurt kyl))", "Ukrainian (Українська (Ukrajins'ka))", "Urdu ((urdū) اردو)", "Uyghur (Уйғур /ئۇيغۇر (ujġgur)", "Uzbek (أۇزبېك ﺗﻴﻠی)", "Venda (tshiVenḓa)", "Venetian (vèneto)", "Veps (vepsän kel’)", "Vietnamese (tiếng việt (㗂越))", "Võro (võro kiilʼ)", "Votic (Vadjaa tšeeli)", "Walloon (walon)", "Waray-Waray (Wáray-Wáray)", "Welsh (Cymraeg / Y Gymraeg)", "Wiradjuri (Wirraayjuurray)", "Wolof (Wollof)", "Xamtanga (ኃምታጛ)", "Xhosa (isiXhosa)", "Yi (ꆇꉙ)", "Yiddish ((Yidish) ײִדיש)", "Yindjibarndi (Indjibandi)", "Yolngu (Yolŋu matha)", "Yoruba (Yorùbá)", "Yupik (Yup'ik/Юпик)", "Ungazighmiistun (Siberian Yupik)", "Yup'igtun (Central Alaskan Yupik)", "Zhuang (Vaƅcueŋƅ / Vahcuengh)", "Zulu (isiZulu)", "Zuñi (Shiwi'ma)"]
        },
        "gpii.primarySchema.punctuationVerbosity": {
            "type": "string",
            "default": "none",
            "enum": ["none", "some", "most", "all"]
        },
        "gpii.primarySchema.announceCapitals": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.speakTutorialMessages": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.keyEcho": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.wordEcho": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.screenReaderBrailleOutput": {
            "type": "boolean",
            "default": false
        }
    };

})(fluid);
