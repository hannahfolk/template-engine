$(document).ready(() => {
    const container = $(".container");

    $.get("/api", data => {
        console.log(data);
    });

    const createCard = () => {
        for (let i = 0; i < data.length; i++) {
            const divCard = $("<div>");
            const divCardHead = $("<div>");
            const h4El = $("<h4>");
            const h5El = $("<h5>");
            const iEl = $("<i>");
            const divCardBody = $("<div>");
            const divSubCard = $("<div>");
            const ulEl = $("<ul>");
            const idEl = $("<li>");
            const emailEl = $("<li>");
            const infoEl = $("<li>");
    
            divCard.attr("class", "card");
            divCardHead.attr("class", "card-header");
            divCardBody.attr("class", "card-body");
            divSubCard.attr("class", "card sub-card");
            ulEl.attr("class", "list-group list-group-flush");
            idEl.attr("class", "list-group-item");
            emailEl.attr("class", "list-group-item");
            infoEl.attr("class", "list-group-item");
    
            if (data[i].getRole() === "Engineer") {
                iEl.attr("class", "fas fa-glasses");
            } else if (data[i].getRole() === "Intern") {
                iEl.attr("class", "fas fa-user-graduate");
            } else if (data[i].getRole() === "Manager") {
                iEl.attr("class", "fas fa-mug-hot");
            };
    
            h4El.text(data[i].name);
            h5El.text(data[i].getRole());
            idEl.text(`ID: ${data[i].id}`);
            emailEl.text(`Email: <a href=mailto: ${data[i].email}>${data[i].email}</a>`);
            
            if (data[i].getRole() === "Engineer") {
                infoEl.text(`GitHub: <a href=https://github.com/${data[i].username}/>${data[i].username}</a>`);
            } else if (data[i].getRole() === "Intern") {
                infoEl.text(`School: ${data[index].school}`);
            } else if (data[i].getRole() === "Manager") {
                infoEl.text(`Office number: ${data[i].officeNumber}`);
            };
    
            container.append(divCard);
            divCard.append(divCardHead);
            divCard.append(divCardBody);
            divCardHead.append(h4El);
            divCardHead.append(h5El);
            h5El.append(iEl);
            divCardBody.append(divSubCard);
            divSubCard.append(ulEl);
            ulEl.append(idEl);
            ulEl.append(emailEl);
            ulEl.append(infoEl);
        };
    };

    createCard();
});