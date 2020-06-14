let cursor = document.querySelector(".tj-cursor");
let outer = document.querySelector(".tj-outer");

function tjFancyCursor(height = 70, width = 70, color="white") {
    cursor.style.height = height+"px";
    cursor.style.width = width+"px";
    cursor.style.border = "1px solid "+color;

    document.querySelector("html").addEventListener("mousemove", (event) => {
        cursor.style.left = event.clientX-35+"px";
        cursor.style.top = event.clientY-35+"px";
    });
}

//This function should be added to the container
function initTJFloatingContainer(container_name, link, color = "#12DF9B") {
    let container = document.querySelector(container_name);
    container.innerHTML += `
        <a class="tj-a" href="${link}">
        <div class="tj-c">
            <div class="tj-outer" style="border: 3px solid ${color}">
                <div class="tj-inner" style="background-color: ${color}"></div>
                <p class="tj-text">VIEW PROJECT</p>
            </div>
        </div>
        </a>
    `;
    let outer = document.querySelector(container_name+" .tj-outer");
    makeTJHover(outer);
}
function makeTJHover(outer) {
    outer.addEventListener("mouseover", (event) => {
        cursor.style.display = "none";
    });
    outer.addEventListener("mouseout", (event) => {
        cursor.style.display = "block";
    });
}
function mouseMoveEffect(container_name) {
    let c = document.querySelector(container_name+" .tj-a");

    document.querySelector("html").addEventListener("mousemove", (event) => {
        c.style.transform = "translateX("+event.clientX/6*(-1)+"px) translateY("+event.clientY/6*(-1)+"px)";
    });
}

tjFancyCursor(100, 100);
initTJFloatingContainer(".tj-container");
mouseMoveEffect(".tj-container");
initTJFloatingContainer(".another");
