document.addEventListener("DOMContentLoaded", function() {
    var branches;
    fetch('/database.json')
        .then(res => res.json())
        .then(branches => {

            const courseList = document.querySelector("#courseList");

            branches.forEach(branch => {
                const branchItem = document.createElement("li");
                const branchHeading = document.createElement("h3");
                const branchCoursesList = document.createElement("ul");

                branchHeading.textContent = branch.branch;
                branchItem.appendChild(branchHeading);

                branch.courses.forEach(course => {
                    const courseItem = document.createElement("li");
                    const courseHeading = document.createElement("h4");
                    const materialsList = document.createElement("ul");

                    courseHeading.textContent = course.name;

                    course.materials.forEach(material => {
                        const materialItem = document.createElement("button");
                        materialItem.textContent = material;
                        materialsList.appendChild(materialItem);
                    });

                    courseItem.appendChild(courseHeading);
                    courseItem.appendChild(materialsList);
                    branchCoursesList.appendChild(courseItem);
                });

                branchItem.appendChild(branchCoursesList);
                courseList.appendChild(branchItem);
            });
        });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function(event) {
        const searchText = event.target.value.toLowerCase();
        const allListItems = document.querySelectorAll("#courseList li");

        allListItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
