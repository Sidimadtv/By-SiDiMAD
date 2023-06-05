document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("gdrive-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        convertLink(e.target.gdriveLink.value);
    })

    function convertLink(link) {
        let message;
        let oldBaseURL = 'https://drive.google.com/file/d/'

        if (!link) {
            message = `It's empty!`
        }

        if (!link.includes(oldBaseURL)) {
            message = `Check if Google Drive URL follow this format "https://drive.google.com/file/d/{FileID}/view?usp=sharing"`
        }

        let newBaseURL = 'https://drive.google.com/uc?export=download&id='
        let regex = /(\/file\/d\/)(.*?)(\/view(.*))/gm
        let result = regex.exec(link);
        let gdriveFileID = result[2];
        console.log(gdriveFileID);
        let newURL = `${newBaseURL}${gdriveFileID}`;

        console.log(typeof message);

        if (message !== 'undifined') {
            showDownloadableURL(newURL);
        }

    }

    function showDownloadableURL(url) {
        let linkPlaceHolderWrapper = document.getElementById("link-placeholder-wrapper");
        let linkPlaceHolder = document.getElementById("link-placeholder");
        linkPlaceHolderWrapper.classList.remove('d-none');
        linkPlaceHolder.value = url;
        copyResultToClipBoard(url);
    }

    function copyResultToClipBoard(url) {
        let copyButton = document.getElementById("copy-result");
        copyButton.addEventListener("click", function () {
            navigator.clipboard.writeText(url);
            console.log(url)
        })
    }


});