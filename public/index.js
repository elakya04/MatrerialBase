function createCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("course-card");

    const heading = document.createElement("h3");
    heading.textContent = course.code + ' - ' + course.name;
    card.appendChild(heading);

    const listElements = document.createElement("div");
    listElements.classList.add("material-list");

    course.materials.forEach(material => {
        const container = document.createElement("div");
        container.classList.add("material-container");

        const name = document.createElement("div");
        name.textContent = material.title;
        container.appendChild(name);

        const author = document.createElement("div");
        author.textContent = material.author;
        container.appendChild(author);

        container.addEventListener("click", () => {
            window.location.href = material.link;
        });
        container.style.margin = "10px"

        listElements.appendChild(container);
    });

    card.appendChild(listElements);
    return card;
}

document.querySelector("#search input").addEventListener("input", () => {
    const input = document.querySelector("#search input").value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");
    document.querySelectorAll('.cards div').forEach(div => div.style.display = 'block');

    let count = 0
    cards.forEach(card => {
        if (!card.querySelector("h3").innerHTML.toLowerCase().includes(input)) {
            card.style.display = "none";

            card.querySelectorAll(".material-container").forEach(container => {
                let containerText = container.textContent.toLowerCase();
                if (containerText.includes(input)) {
                    card.style.display = "block";
                    count++
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        }
    });

    document.querySelector(".notFound").style.display = (count == 0) ? "block" : "none"
});

document.querySelector(".notFound").style.display = "none"

fetch('./database.json')
    .then(res => res.json())
    .then(db => {
        var cards = document.querySelector(".cards")
        db.Courses.forEach(course => {
            let card = createCourseCard(course)
            cards.appendChild(card)
        })

    })