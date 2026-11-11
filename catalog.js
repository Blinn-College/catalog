// Redirect obsolete catalog search and program pages immediately
const redirectPaths = [
    "/search_advanced.php",
    "/preview_program.php"
];

if (redirectPaths.includes(window.location.pathname)) {
    window.location.replace("https://catalog.blinn.edu");
}

// Everything below only runs on pages that remain loaded
document.addEventListener("DOMContentLoaded", function () {


    // Hide form
    const form = document.querySelector(".block_n2_content.links_table form");


    if (form) {
        form.style.display = "none";
    }

    
    /*
    const form = document.querySelector(".block_n2_content.links_table form");

    if (form) {
        form.innerHTML = `
        <div class="program-search-link">
            <a href="https://www.blinn.edu/academics/degrees-and-certificates.html">
                <img src="https://www.blinn.edu/_files/images/search-image.png" alt="Search Programs - Go to Programs A-Z" />
            </a>
        </div>
        `;
    }
    */
    
    
    
    

    // Get selected catalog
    const catalogSelect = document.querySelector("#select_catalog");

    if (!catalogSelect) {
        return;
    }

    const selectedCatalog = catalogSelect.value;

    setTimeout(function () {

        if (selectedCatalog === "24") {
            $("#staticBackdrop").modal("hide");
        } else {
            $("#staticBackdrop").modal("show");
        }

    }, 3000);

});
