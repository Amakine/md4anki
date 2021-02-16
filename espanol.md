<style type="text/css" rel="stylesheet">
    code.hidden-code {
        color: rgb(0,255,0,0) !important;
        disply: inline !important;
    }
    code.hidden-code:hover {
        color: white !important;
    }
    .toggle-button {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 50px;
        z-index: 9999;
        background-color: var(--bg-color5);
        font-family: "Helvetica Neue", Helvetica, Arial
        color: var(--text-color1);
        border: none;
        border-radius: 7px;
        margin: 0;
    }
</style>

<script>
var hideCode = false;
function hideSpanish() {
    hideCode = (!hideCode);
    let code  = document.getElementsByTagName("code");
    for (let i = 0; i < code.length; i++)  
        code[i].classList.toggle("hidden-code", hideCode);
}
function toggleHide(dom)  {
    console.log("toggle");
	dom.classList.toggle("hidden-code");
}
window.onload = function() {
    console.log("onload");
    let code  = document.getElementsByTagName("code");
    for (let i = 0; i < code.length; i++)
        code[i].setAttribute("onclick", "toggleHide(this)");
}
document.addEventListener('keydown', function(event) {
    let key = String.fromCharCode(event.keyCode);
    if (key == 'T' || key == 'H') hideSpanish();
})
</script>

<button class="toggle-button" onclick="hideSpanish()">Toggle translations</button>

Käännökset voi näyttää tai piilottaa "Toggle translations"-napilla (oikeassa alareunassa) tai klikkaamalla tyhjää käännöstä:

auto `coche, m`
päivä `día, m`


#  Español - muistiinpanot

*Artun selkeät muttei välttämättä luotettavat muistiinpanot, päivittyy kurssin edetessä (ehkä). Mitään vastuuta puuttuvista aksenttimerkeistä jne ei oteta!*

[TOC]


## Tunti 1 

### Kysymykset ja sävelkorkeus

Carlos i tu (monotonisesti)
`Carlos ja sinä`

Carlos I tu ("I" with high pitch)
`Carlos, entä sinä?`

### Tervehdykset

Buenos días!
`aamulla / ennen päivällistä`

Buenas tardes!
`iltapäivällä / päivällisen jälkeen`

Buenas noches!
`illalla / illallisen jälkeen / hyvää yötä`

#### Esimerkkitervehdykset

Que tal? `What's up?`
Cómo estás? `How are you?`
Cómo te llamas? `What's your name?`

Auto `El coche`



### Määräiset artikkelit

|            | Yksikkö | Monikko |
| ---------- | ------- | ------- |
| Maskuliini | `El`    | `Los`   |
| Feminiini  | `La`    | `Las`   |

### Paikka ja sijainti (en, a, de)

| en   | `in, at (-ssa, -ssä, -lla, -llä)` |
| ---- | --------------------------------- |
| a    | `to (jonnekin, -lle)`             |
| de   | `from (-sta, -stä)`               |



### Al & Del

> a + el => `al`
>
> a + la == `a la`


> de + el => `del`
>
> de + la == `de la`

### Ser - olla
| olen   | `soy` |
| -------- | ----- |
| olet   | `eres` |
| on     | `es`  |
| olemme | `somos` |
| olette | `sois` |
| ovat   | `son` |

> SER: pysyvät tilat
>
> vs.
>
> ESTAR: muuttuvat tilat

#### Uses of ser

- date / time
- <u>place of origin</u>
- <u>occupation</u>
- <u>nationality</u>
- religious or political affiliation
- material something is made of
- possession
- <u>relationship of one person</u>
- <u>essential qualities</u>



#### ~ Esimerkit ~


Olen suomalainen `Soy finlandes(a)`

Olen opiskelija `Soy estudiante`

Olen Tampereelta `Soy de Tampere`

---

Olen espanjan opettaja `Soy profesor de Español`

Carlos on veljeni `Carlos es mi hermano`

Einstein on älykäs `Einstein es intelligente`

Olen pitkä `Soy alto`

Talo on valkoinen `La casa es blanca`

---

Madrid on Espanjan pääkaupunki
`Madrid es la capital de España` (place of origin) 

vs.

Madrid on Espanjassa
`Madrid está en España` (location)  

  

### Persoonapronominit

| I                      | `Yo`    |
| ---------------------- | ------- |
| You                    | `Tu`    |
| He                     | `Èl`    |
| She                    | `Ella`  |
| You (singular, formal) | `Usted` |
| We (men or mixed)    | `Nosotros` |
| We (all women)       | `Nosotras` |
| You (men or mixed)   | `Vosotros` |
| You (all women)      | `Vosotras` |
| They (men or mixed)  | `Ellos`    |
| They (all women)     | `Ellas`    |
| You (plural, formal) | `Ustedes`  |



### Pronomini + olla


| I am     | Yo soy              |
| -------- | ------------------- |
| You are  | `Tu eres`           |
| He is    | `Èl es`             |
| She is   | `Ella es`           |
| We are   | `Nosotros somos`    |
| You are  | `Vosotros sois`     |
| They are | `Ellos / Ellas son` |



## Tunti 2 - Ääntäminen

### Z

Za [`Sa`]
Ze [`Se`]
Zi  [`Si`]
Zo [`So`]
Zu [`Su`]

### C

Ca [`Ka`]
**Ce** [`Se`]   <==
**Ci**  [`Si`]   <==
Co [`Ko`]
Cu [`Ku`]

**<u>Esim:</u>**

**Ca**sa [`Kasa`]
**Ca**za [`Kaza`]
**Cu**ba [`Kuba`]
**Co**lumbia [`Kolumbia`]

**Ce**silia [`Sesilia`]
**Ci**elo    [`Sielo`]

### Que / Qui

Miten kirjoitetaan [`Ke`] tai [`Ki`]?
=> **Que & Qui**

Que  [`Ke`]
Qui   [`Ki`]

**<u>Esim:</u>**

**qui**ero  [`Kiero`]
Ra**que**l  [`Rakel`]
izquierda [`Iskierda`]
Peluquería [`Pelukeria`]

### RR

Pe**rr**o:
    pe`rrr`kele    => peasants
    vs.
    pe`rr`o pehmeästi => yläluokka

### Ya, LLa

Ya == LLa [`Ja`]
Ye == LLe [`Je`]
Yi  == LLi  [ `Ji`]
Yo == LLo [`Jo`]
Yu == LLu [`Ju`]

LLa on kovempi kuin Ya (mutta ei paljoa merkitystä) 

**<u>Esim:</u>**

La cebo**lla**  [`seboja`]
Amari**llo**    [`Amarijo`]

### X

Me**x**ico   [`Mehiko`]
**X**alapa    [`Halapa`]

### J

Ja [`Ha`]
Je [`He`]
Ji  [`Hi`]
Jo [`Ho`]
Ju [`Hu`]

**<u>Esim:</u>**

Jalapeno [`Halapeno`]

### Ñ

Ña [`Nja`]
Ñe [`Nje`]
Ñi  [`Nji`]
Ño [`Njo`]

### G

Ga   [`Ga`]
Go   [`Go`]
Gu   [`Gu`]
**Ge**   [`He`] <=
**Gi**    [`Hi`] <=

**<u>Esim:</u>**

Los An**ge**les [`Los Anheles`]

### Gue / Gui

Miten kirjoitetaan [`Ge`] tai [`Gi`] ?

=> **Gue & Gui**

Gue [`Ge`]
Gui  [`Gi`]

**<u>Esim:</u>**

**Gui**llermo [`Gijermo`]
Mi**gue**l Án**ge**l [`Migel Anhel`]

### H

Ahora [`Aora`] (`kahden vokaalin välissä`)

La zanahoria [`La zanaoria`]

Ahí [`Ai`]



## Tunti 3

### Hay - There is

There is a monument in the park
`Hay un monumento en el parque`

There is two monuments in the park
`Hay dos monumentos en el parque`

There's no dishwasher
`No hay lavadora`



### Estar (olla / sijaita)

| Olen   | `Estoy`                      |
| ------ | ---------------------------- |
| Olet   | `Estás`                      |
| Hän on | `Está (él/ella, usted)`      |
| Olemme | `Estamos`                    |
| Olette | `Estáis`                     |
| Ovat   | `Están (ellos/-as, ustedes)` |


> SER: pysyvät tilat
>
> vs.
>
> ESTAR: muuttuvat tilat



#### Uses of ESTAR

- <u>geographic or physical location</u>
- <u>state or condition</u>
- progressive tenses
- state or condition

#### Esimerkkejä

Olet  `Tu estás`
Olet (teitittely) `Usted está`

Olette `Vosotros estáis`
Olette (teitittely) `Ustedes están`

Hän on `Èl/ella está`
He ovat `Ellos/Ellas están`

Olen sairas `Estoy enferm(o/a)`

Miten hän voi `Cómo esta?`

Millainen hän on `Cómo es?`

Miguel is at home `Miguel está en Casa`

Te olette Porissa `Vosotros estáis en Pori`

The door is open `La puerta está abierta`

#### Hay vs. estar

There's <u>**a red car**</u> on the street
`Hay un coche rojo en la calle.`

VS.

<u>**The red car**</u> is on the street
`El coche rojo está en la calle.`

### Tener  (olla jollakulla, omistaa, to have)

| I have            | `Tengo`                        |
| ----------------- | ------------------------------ |
| You have          | `Tienes`                       |
| He/she has        | `Tiene (él, ella, usted)`      |
| We have           | `Tenemos`                      |
| You have (plural) | `Tenéis`                       |
| They have         | `Tienen (ellos, -as, ustedes)` |

*Artikkelit `un`, `una` jätetään vain jos korostetaan lukua yksi*

#### Tener esimerkit

Do you have a car? `Tienes coche?`
No, I do not. `No, no tengo coche`

I have a brother `Tengo un hermano`


### Viikonpäivät

Maanantai `Lunes`

Tiistai `Martes`

Keskiviikko `Miércoles`

Torstai `Jueves`

Perjantai `Viernes`

Lauantai `Sábado`

Sunnuntai `Domingo`

### Kuukaudet

Tammikuu `Enero`

Helmikuu `Febrero` 

Maaliskuu `Marzo` [`Marso/Marzo`]

Huhtkuui `Abril`

Toukokuu  `Mayo` [`Maio`]

Kesäkuu  `Junio` [`Hunio`]

Heinäkuu `Julio` [`Hulio`]

Elokuu `Agosto` [`Agosto`]

Syyskuu  `Septiembre` 

Lokakuu `Octubre`

Marraskuu  `Noviembre`

Joulukuu `Diciembre`



### SER vs. ESTAR


- progressive tenses `estar`


- date / time ` _soy_`

- <u>place of origin</u> ` _soy_`

- <u>occupation</u> ` _soy_`

- <u>state or condition</u> `estar`

- <u>nationality</u> ` _soy_`

- religious or political affiliation ` _soy_`

- material something is made of ` _soy_`

- <u>geographic or physical location</u> `estar`

- possession ` _soy_`

- <u>relationship of one person</u> ` _soy_`

- <u>essential qualities</u> ` _soy_`

### Numerot

#### 1 - 10

1. `Uno`
2. `Dos`
3. `Tres`
4. `Cuatro` (`quatro väärin!!`)
5. `Cinco`
6. `Seis`
7. `Siete`
8. `Ocho`
9.  `Nueve`
10. `Diez`

#### 11 - 20

11. `Once`

12. `Doce`

13. `Trece`

14. `Catorce`

15. `Quince`

16. `Dieciséis`

17. `Diecisiete`

18. `Dieciocho`

19. `Diecinueve`

20. `Veinte`

### Paikka ja sijainti 2

Edessä `Delante (de)`

Takana `Detrás (de)`

Vieressä `Al lado (de)`

Välissä `Entre`

Alla `Debajo (de)`

Päällä `Sobre`

Lähellä `Cerca (de)`

Kaukana `Lejos (de)`

Vastapäätä `Enfrente (de)`

---

päässä/lopussa `Al final (de)`

päällä, yläpuolella, `Encima (de)` 

Oikealle `A la derecha (de)`

Vasemmalle `A la izquierda (de)`

Ympärillä `Alrededor (de)`

>  '**encima de**' is closer to 'on top of',
> '**sobre**' is a bit more vague, basically meaning 'over' **or** 'above' 



### Sekalaisia


luckily `menos mal`

certainly, by the way `por cierto`

nice `majo`

at least `por lo menos`

at the moment, for the time being `de momento`

#### Cuál

Cuál `which (toimii usein kuten what)`

What's your surname?
`Cuál es tu apellido`

What's your home address?
`Cuál es tu dirección?`

 #### Así se dice

Mitä opiskelet `Cuál es tu carrera`

tener que  `have to`
tengo que `I have to`

Otammeko toisen kahvin?
`Tomamos otro cafe?`



## Tunti 4

### Verbien taivutusmuodot



|          | HABL<u>AR</u> | COM<u>ER</u> | VIV<u>IR</u> |
| -------- | ------------- | ------------ | ------------ |
| Yo       | `Hablo`       | `Como`       | `Vivo`       |
| Tu       | `Hablas`      | `Comes`      | `Vives`      |
| Èl/..    | `Habla`       | `Come`       | `Vive`       |
| Nos..    | `Hablamos`    | `Comemos`    | `Vivimos`    |
| Vos..    | `Habláis`     | `Coméis`     | `Vivís`      |
| Ellos/.. | `Hablan`      | `Comen`      | `Viven`      |

### Harjoitus - verbien taivutus

| ENTRAR     | SUBIR     | ABRIR     |
| ---------- | --------- | --------- |
| `Entro`    | `Subo`    | `Abro`    |
| `Entras`   | `Subes`   | `Abres`   |
| `Entra`    | `Sube`    | `Abre`    |
| `Entramos` | `Subimos` | `Abrimos` |
| `Entráis`  | `Subís`   | `Abrís`   |
| `Entran`   | `Suben`   | `Abren`   |

## Tunti

### Demonstratiivipronominit

| Tämä - nämä    | Se - Ne       | Tuo - Nuo         |
| -------------- | ------------- | ----------------- |
| `Este chico`   | `Ese chico`   | `Aquel chico`     |
| `Esta chica`   | `Esa chica`   | `Aquella chica`   |
| `Estos chicos` | `Esos chicos` | `Aquellos chicos` |
| `Estas chicas` | `Esas chicas` | `Aquellas chicas` |
> Esta vs. Está  `Tämä vs. olla (-f)`

---

Tämä kirja `este libro`

Se kirja `ese libro`

Tuo kirja `aquel libro`

Mikä/mitä tämä on? => Se on... `Qué es esto? -> Eso es ..`

Tämä on skandaali `Esto es un escándalo!`

Niin se on / Juuri niin `Eso es.`

Mitä/mitä se on? `Que es eso?`

---

| Este - aquí                            | Ese - ahí                            | Aquel - allí                           |
| -------------------------------------- | ------------------------------------ | -------------------------------------- |
| Tässä, täällä<br/> (kuulijan kohdalla) | Siinä, tuossa<br/>(kuulijan lähellä) | Tuolla, siellä<br/>(kaukana puhujasta) |






### Sanastot

[Sanasto 1](https://quizlet.com/429040236/uno-espanol-kappale-1-flash-cards/)
[Sanasto 2](https://quizlet.com/429171409/uno-espanol-kappale-2-flash-cards/)
[Sanasto 3](https://quizlet.com/429190128/uno-espanol-kappale-3-flash-cards/)
-
[Sanasto 6](https://quizlet.com/457059242/espanol-uno-kappale-6-flash-cards/)
[Sanasto 7](https://quizlet.com/_7k4hje?x=1jqt&i=2ibwjt)
[Sanasto 8](https://quizlet.com/457556615/espanol-uno-kappale-8-flash-cards/)
-
-
[Sanasto 11](https://quizlet.com/485785549/espanol-uno-kappale-11-flash-cards/)
-
[Sanasto 13](https://quizlet.com/487487275/espanol-uno-kappale-13-flash-cards/)

### Ennestään tuntemattomat

dirty `sucio/-a`

what about...? `Qué tal...`

expensive `caro/-a`

broken `roto-/a`

---

lock `cerradura`

closed `cerrado/-a`

open `abierto/-a`

vuoraemäntä `la casera`

sukulainen `relativo/-a`

> ¿no? == ¿ verdad?

> Pues, sí  `Well, yes`

> isä, äiti, vanhemmat `padre, madre, padres`
>
> vaari, mummu, isovanhemmat `abuelo, abuela, abuelos`



### Omistamisen ilmaisut

#### verbi tener

Onko teillä koiraa? `Tenéis perro?`

Kyllä, meillä on koira `Sí, tenemos perro`

Ei, meillä ei ole koiraa `No, no tenemos perro`
> ^ Sääntö: `Artikkeli unohdetaan jos puhutaan omistamisesta`

---

Onko sinulla avaimet? `Tienes las llaves?`

Minulla on tytär `Tengo una hija`

> ^ Sääntö: `Artikkelia käytetään kun korostetaan lukua yksi`



#### de-genetiivi

Pekan huone `la habitación de Pekka`

Lolan asunto `el piso de Lola`

Asunnon avain `la llave del piso`

Keittiön ikkunat `las ventanas de la cocina`

Opiskelijoiden asunnot `Los pisos de los estudiantes`

La hermana del novio de mi hija `Tyttäreni poikaystävän sisko`

> ^ Sääntö: `Määräistä artikkelia käytetään de-genetiivin yhteydessä`



#### posessiivipronominit

| My            | `mi, mis`                  |
| ------------- | -------------------------- |
| Yours         | `tu, tus`                  |
| His/Her/Usted | `su, sus`                  |
| Ours          | `nuestro/-a, nuestros/-as` |
| Yours         | `vuestro/-a, vuestros/-as` |
| Their/Ustedes | `su, sus `                 |

## Tunti joku

### Sijainteja

| Here / täällä (cerca) | `Aquí/Acá`    |
| --------------------- | ------------- |
| There (menos cerca)   | `Ahí`         |
| Over there (lejos)    | `Allí / Allá` |

### y Vs. e (ja)
> ~~Carlos y Inés~~ => `Carlos e Inés` => `Inés y Carlos`

> Pia es alta e inteligente => `Pia es intelligente y alta`
>
> *Koitetaan välttää <u>**e**</u> käyttöä vaihtamalla sanajärjestystä*

### con

Chili con carne


| with me  | `conmigo` |
| -------- | --------- |
| with you | `contigo` |
> con él/ella, con nosotros/-as, con vosotros/-as, con ellos/-as

Do you want to dance with me? `Quieres bailar conmigo?`

​	=> Yes, i want dance with you `Si, quiero bailar contigo.`



### Llevar + ajanmääre

> Kun kerrotaan toiminnasta joka on alkanut menneisyydessä, mutta jatkuu edellen

AR: Llevo, llevas, lleva, llevamos, lleváis, llevan

Myös: take, carry

---

Kuinka kauan <u>olet</u> (jo) <u>ollut</u> yliopistossa
`Cuánto tiempo llevas en la universidad`

<u>Olen ollut</u> täällä kolme vuotta
`Llevo(s??) tres años aquí`

---

Olemme asuneet jo 10 vuotta täällä
`(Ya) llevamos diez años aquí`
`(Ya) llevamos aquí diez años.`

Llevar
`take, carry TAI olla ollut + ajanmääre`

---

I have been more than 30 years in Finland
`Llevo más de treinta (30) años en Finlandia`

I've been in university for two years
`Llevo dos años en la universidad`

Kuule, kauanko olemme opiskelleet espanjaa?
`Oye, cuánto tiempo llevamos estudiando español?`

​    => Let's see, 5 hours already!
​    `A ver... ¡llevamos ya cinco horas!`

### Ajanmääreitä

today `hoy`
yesterday `ayer`
tomorrow `mañana`
the day after tomorrow `pasado mañana`
the day before yesterday `anteayer`
next week `la semana que viene`
last week `la samana pasada`

---

everyday `todos los días`
always `siempre`

almost always `casi siempre`
constantly `constantemente`
often `muchas veces`
rarely`pocas veces`
regularly `regularmente`

---

never `nunca`
ever `jamás`

almost never `casi nunca`
heti, right now `ahora mismo`
right now `en este momento`
already `ya`
now `ahora`

---

before `antes`
soon `pronto`
still/yet `aùn`
not yet `aún no`
late `tarde`

### Päivänajat

Aamulla, aamupäivällä
`Por la mañana`

Keskipäivällä
`a/al mediodía`

Iltapäivällä, alkuillasta
`por la tarde`

Illalla, yöllä
`por la noche`

Keskiyöllä
`a medianoche`



### Kellonajat

Mihin kellonaikaan?
`A qué hora?`

Yhdeltä
`A la una`

Puoli kahdeksalta
`A las siete y media`

Onko sinulla kelloa
`Tienes hora?`

Kello on yksi
`Es la una`

---



Kello on viittä yli yksi
`Es la una y cinco`

Kello on kymmentä vaille yksi
`Es la una menos diez`

Kello on puoli kaksi
`Es la una y media`

Kello on tasan viisi
`Son las cinco en punto`

Kello on varttia yli kymmenen
`Son las diez y cuarto`

Kello on kahtakymmentä vaille yksitoista
`Son las once menos veinte`



---


seuraavana päivänä `al día siguiente`
viime vuonna `en año pasado`

a veces `joskus, toisinaan`
a ratos `silloin tällöin, toisinaan`
de vez en cuando `silloin tällöin`

después de `jnk jälkeen` 
luego (de) `sitten, jälkeenpäin` 

### Kysymyssanoja

what  `Qué` 
which  `Cuál/Cuáles`
who `Quién/Quiénes`
how much `Cuánto/Cuánta`
how many `Cuántos/Cuántas`
how `Cómo`

---

why `Por qué`
for why (mitä varten) `Para qué`
where `Dónde`
to where `Adónde`
from where `De dónde`
when `Cuando`

#### Qué?

> Que: 1) mitä 2) mikä

Mikä päivä tänään on
`Qué dia es hoy?`

Mitä on rakkaus?
`Qué es el amor?`

Mitä tapahtuu
`Qué pasa?`

#### Cuál

> Cuál 1) mikä 2) kumpi

Mikä on hänen ammattinsta?
`Cuál es su profesion?`

Mikä on osoitteesi
`Cuál es tu dirección?` [`direksion`]

Kumman haluat?
`Cuál quieres?`

#### Ajanmääreitä ja kysymyksiä

| <u>Mistä lähtien</u> olet opiskellut espanjaa? | `Desde cuándo estudias español?` |
| ---------------------------------------------- | ------------------------------ |
| => Tammikuusta saakka                          | `Desde enero`                  |
| Mihin asti/saakka?                             | `Hasta cuándo`                 |
| Kuinka kauan?                                  | `Cuánto tiempo`                |
| Kuina kauan se kestää?                         | `Cuánto tiempo dura/hace?`   |

---

How long it takes?
 `Cuánto tiempo tarda?` 

Kauanko kestää junalla Helsinkiin?
`Cuánto tiempo tarda el tren a Helsinki` 

> Leval, durar, tardar

## Tunti

### Käsky / imperatiivi

> Käsky saadaan ottamalla verbin 3. persoonamuoto
>
> Hablar = Puhua
> Habla => Puhu! 
>
> Comer = syödä
> Come => Syö!

### Epäsäännöllisiä verbejä

|          | Epäsäännöllisiä verbejä                           |
| -------- | ------------------------------------------------- |
| Estar    | `estoy, estás, está, estamos, estáis están`       |
| Ser      | `soy, eres, es, somos, sois, son`                 |
| Tener    | `Tengo, tienes, tiene`, tenemos, tenéis, `tienen` |
| Saber    | `sé` sabes, sabe, sabemos, sabéis, saben          |
| Ver      | `Veo` ves, ve, vemos, veis, ven                   |
| Hacer    | `Hago`, haces, hace, hacemos, hacéis, hacen       |
| Salir    | `Salgo` sales, sale, salimos, salís, salen        |
| Oír      | `Oigo, oyes, oye` oímos, oís, `oyen`              |
| Ir       | `Voy` `vas, va, vamos, vais, van`                 |
| Dar      | `Doy`, das, da, damos, dais, dan                  |
| Traer    | `Traigo`, traes, trae, traemos, traéis, traen     |
| Poner en | `Pongo`, pones, pone, ponemos, ponéis, ponen      |

---

Estar  `olla`
Ser `olla`
Tener `olla ollakulla, omistaa / to have`
Saber `tietää, osata`
Ver  `nähdä`
Hacer `tehdä`
Salir  `lähteä (ulos), käydä ulkona, seurustella`
Oír `kuulla`
Ir `mennä`
Dar `antaa`
Traer `tuoda`
Poner en `laittaa, asettaa`




| Kotiin   | Kotoa     | Kotona    |
| -------- | --------- | --------- |
| `a casa` | `de casa` | `en casa` |



#### A + henkilöobjekti

Huomenna näen/tapaan Carmenin
`Mañana veo a Carmen`

Nyt näen auton
`Ahora veo el coche`

Kuuntelen opettejaa
`Escucho al profesor`

Kuuntelen ohjelman joka päivä
`Escucho el programa todos los días`


### IR + A + INFINITIVO

> IR + A + INFINITIVO
>
> La gente <u>va a trabajar</u>
> 			=
> Ihmisiä menee töihin

