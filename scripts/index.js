document.addEventListener("DOMContentLoaded", (event) => { 
    const parentFirstProject = document.getElementById("firstProject")
    parentFirstProject.innerHTML = firstProject.trim();

    document.getElementById("timeline-2").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = MICROSOFT_IMAGINE_CUP
    })

    document.getElementById("timeline-3").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = ENSO
    })

    document.getElementById("timeline-4").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = GOOGLE
    })

    document.getElementById("timeline-5").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = RESEARCH
    })

    document.getElementById("timeline-6").addEventListener("click", () => {
        const elem = document.getElementById("selectedProject")
        elem.innerHTML = ANDROID
    })

});