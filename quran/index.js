const div = document.querySelector("#root");
let bismillah = `\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650`;
const backSvg = `<svg  width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                 </svg>`;

axios
    .get(`https://api.quran.com/api/v4/chapters`)
    .then((res) => {
        const suras = res.data.chapters;
        let divText = [];
        for (let sura of suras) {
            const sur = `
            <div class="surah">
                <p> <span class="surah-no">${sura.id}</span> <span>${sura.name_simple}</span> <span class="arabic-surah-name-li"> ${sura.name_arabic} </span></p>
            </div>`;
            divText.push(sur);
        }
        div.innerHTML = divText.toString().replace(/,/g, "");
        const divC = document.querySelectorAll(".surah");
        divC.forEach((item, index) => {
            item.addEventListener("click", () => {
                let surahLoading = "Loading......";
                document.innerText = surahLoading;
                loadSurah(`${index + 1}`);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });

function loadSurah(indx) {
    axios
        .get(`https://api.quran.com/api/v4/chapters/${indx}?language=en`)
        .then((res) => {
            const suraData = res.data.chapter;

            axios
                .get(
                    `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${indx}`
                )
                .then((res) => {
                    const surah = res.data.verses;
                    const ayaArr = [];
                    surah.forEach((item, index) => {
                        let ayaContent = item.text;

                        const aya = `
                            <div class="aya">
                                <div class="verse-key">${item.verse_key}</div>
                                <p class="aya-text">${item.text_uthmani}</p>
                                <div id="aya-${index}-t" class="aya-translation"></div>
                            </div>`;
                        ayaArr.push(aya);
                    });
                    const ayaaa = ayaArr.toString().replace(/,/g, "");

                    if (!suraData.bismillah_pre) {
                        bismillah = "";
                    }

                    const surahHtml = `
                    <div class="surah-body">
                        <a href="/" id="back-btn"> ${backSvg}</a>
                        <h1>${suraData.name_simple}</h1>
                        <div class="imfo">${suraData.revelation_place}</div>
                        <div id="translation-imfo"></div>
                        <p id="bismillah">${bismillah}</p>
                           <div class="ayas"> ${ayaaa} </div>
                    </div>
                        `;
                    document.body.innerHTML = surahHtml;
                    translations(indx);
                });
        });
}

function translations(index) {
    let transLoad = "Translations are loading.....";

    document.querySelector(".aya-translation").innerText = transLoad;

    // document.querySelector(".aya-translation").innerText =
    //     "Translations are loading......";

    axios
        .get(
            `https://api.quran.com/api/v4/quran/translations/131?chapter_number=${index}`
        )
        .then((res) => {
            let enT = res.data;
            axios
                .get(
                    `https://api.quran.com/api/v4/quran/translations/161?chapter_number=${index}`
                )
                .then((res) => {
                    let bnT = res.data;

                    console.log(enT.translations);
                    console.log(bnT.translations);

                    const elements =
                        document.querySelectorAll(".aya-translation");
                    elements.forEach((item, indx) => {
                        item.innerHTML = `
                    <p class="en-trans">${enT.translations[indx].text}</p>
                    <p class="bn-trans">${bnT.translations[indx].text}</p>
                    `;
                    });
                });
        });
}

// async function data() {
//     const aa = await axios.get(
//         `https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/2.mp3`
//     );
//     console.log(aa);
// }

// // const deta = data();
// // console.log(deta);
// data();
