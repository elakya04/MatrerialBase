// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Mock data for course materials
    const branches = [
        { name: "Mathematics", courses: [
            { name: "Algebra", materials: ["Lecture Notes", "Assignments", "Practice Problems"] },
            { name: "Calculus", materials: ["Lecture Slides", "Homework", "Exams"] }
        ]},
        { name: "Physics", courses: [
            { name: "Classical Mechanics", materials: ["Lecture Slides", "Lab Reports"] },
            { name: "Electromagnetism", materials: ["Assignments", "Practice Problems"] }
        ]},
        { name: "Computer Science", courses: [
            { name: "Data Structures", materials: ["Programming Assignments", "Project Guidelines"] },
            { name: "Algorithms", materials: ["Lecture Notes", "Coding Challenges"] }
        ]}
    ];

    const courseList = document.getElementById("courseList");

    // Populate course materials
    branches.forEach(branch => {
        const branchItem = document.createElement("li");
        const branchHeading = document.createElement("h3");
        const branchCoursesList = document.createElement("ul");

        branchHeading.textContent = branch.name;
        branchItem.appendChild(branchHeading);

        branch.courses.forEach(course => {
            const courseItem = document.createElement("li");
            const courseHeading = document.createElement("h4");
            const materialsList = document.createElement("ul");

            courseHeading.textContent = course.name;

            course.materials.forEach(material => {
                const materialItem = document.createElement("li");
                const materialLink = document.createElement("a");
                materialLink.textContent = material;
                materialLink.href = "#"; // Add link functionality as needed
                materialItem.appendChild(materialLink);
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
