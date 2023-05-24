let bookLink = document.getElementsByClassName("value");
let chapterList = document.getElementById("chapter-list");

chapterList.innerHTML = `<h6 class="text-center mt-4 pt-4">Choose a language above.....</h6>`;

Array.from(bookLink).forEach(element => {
	element.addEventListener("click", (e) => {
		let bookVal = e.target.dataset.value;
		console.log(bookVal);
		const getData = async () => {

			// showing load while fetching data
			chapterList.innerHTML = `<h6 class="text-center mt-4 pt-4">Wait a sec....</h6>`;

			// fetching api
			let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/`+ bookVal +`.json`;
			let data = await fetch(url);
			let response = await data.json();

			// getting hadiths data
			let hadiths = response.hadiths;
			console.log(hadiths)

			// let bookName = response.metadata.name;

			// display data on screen
			ihtml = ""
			let items = response.hadiths;
			for (const list in items) {
				console.log(items[list])

				// <h6 class="text-capitalize">${bookName}</h6>  we used book name when required
				let hadithnumber = items[list].hadithnumber;
				let text = items[list].text;
				let book = items[list].reference.book;
				let hadith = items[list].reference.hadith;
				let hadithGrade = items[list].grades;

				ihtml += `<ul class="list-group p-4 rounded my-2" style="box-shadow: 0 0 4px #b6b6b6">
			    <div class="d-flex justify-content-between py-2">
			      <h6>Hadiths Number: ${hadithnumber}</h6>
			    </div>
			    <p class="fs-5">${text}.</p>
			    <div class="d-flex justify-content-between flex-wrap py-2">
				    <div class="d-flex">
				        <p>Book: ${book}</p>
				        <p class="mx-4">Hadith: ${hadith}</p>
				    </div>
					<p>${[hadithGrade]}</p>
			    </div>
			</ul>`;
			}
			chapterList.innerHTML = ihtml;
		}
		getData()

	})
})
