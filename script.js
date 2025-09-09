// const localURL = '';
//const localURL = 'https://denxer123.github.io/nota_venta_reparatech/?company_name=REPARATECH&company_description=Servicio%20t%C3%A9cnico%20de%20Laptops%2C%20PCs%20e%20Impresoras%20-%20Instalaci%C3%B3n%20de%20programas%20-%20Formateos%20-%20Instalaci%C3%B3n%20de%20antivirus%20-%20Accesorios&company_phones=945405265%20-%20903191734%20-%20924576041&company_currencySymbol=s%2F&company_horary=Lunes%2C%20Martes%2C%20Jueves%2C%20S%C3%A1bado%0A8%3A00%20am%20-%207%3A00%20pm%0A%0AMi%C3%A9rcoles%2C%20Viernes%0A8%3A00%20am%20-%205%3A00%20pm&company_address=Av%20Giraldez%20224%20-%20Restaurante%20El%20Pueblo%2C%20Stand%2003&client_name=Denser%20Medina%20Cerron&client_phone_1=971393955&client_phone_2=921902622&date_time=09%2F08%2F2025%2022%3A02%3A23&technical_manager=Pablo%20Moya&total=340&advance=150';



//const localURL = 'https://denxer123.github.io/nota_venta_reparatech/?company_name=REPARATECH&company_description=Servicio%20t%C3%A9cnico%20de%20Laptops%2C%20PCs%20e%20Impresoras%20-%20Instalaci%C3%B3n%20de%20programas%20-%20Formateos%20-%20Instalaci%C3%B3n%20de%20antivirus%20-%20Accesorios&company_phones=945405265%20-%20903191734%20-%20924576041&company_currencySymbol=s%2F&company_horary=Lunes%2C%20Martes%2C%20Jueves%2C%20S%C3%A1bado%0A8%3A00%20am%20-%207%3A00%20pm%0A%0AMi%C3%A9rcoles%2C%20Viernes%0A8%3A00%20am%20-%205%3A00%20pm&company_address=Av%20Giraldez%20224%20-%20Restaurante%20El%20Pueblo%2C%20Stand%2003&client_name=Denser%20Medina%20Cerron&client_phone_1=971393955&client_phone_2=921902622&date_time=09%2F08%2F2025%2022%3A02%3A23&technical_manager=Pablo%20Moya&num_ticket=2482&total=340&advance=150&equipments=%5B%7B%22device%22%3A%22Laptop%20HP%22%2C%0A%20%20%20%22repairs%22%3A%20%5B%7B%22repairDetail%22%3A%22FORMATEO%22%2C%22price%22%3A%2040%7D%20%2C%20%7B%22repairDetail%22%3A%22CAMBIO%20DE%20PANTALLA%22%2C%22price%22%3A%20150%7D%20%2C%20%7B%22repairDetail%22%3A%22INSTALACI%C3%93N%20DE%20PROGRAMAS%22%2C%22price%22%3A%2050%7D%5D%2C%22observations%22%3A%22Esta%20roto%20la%20tapa%22%2C%0A%20%20%20%22listPrograms%22%3A%20%5B%22AUTOCAD%202025%22%20%2C%20%22SPS%20%22%20%2C%20%22Photoshop%202020%22%20%2C%20%22Solidworks%202025%22%5D%2C%0A%20%20%20%22cheklist%22%3A%20%22Cargador%20%2C%20Estuche%20%2C%20Mouse%22%7D%20%2C%20%7B%22device%22%3A%22Impresora%20HP%20L3110%22%2C%0A%20%20%20%22repairs%22%3A%20%5B%7B%22repairDetail%22%3A%22MANTENIMIENTO%22%2C%22price%22%3A%2050%7D%5D%2C%22observations%22%3A%22Sin%20tapa%20de%20scaner%22%2C%0A%20%20%20%22listPrograms%22%3A%20%5B%5D%2C%0A%20%20%20%22cheklist%22%3A%20%22Cable%20usb%20%2C%20Cable%20poder%22%7D%20%2C%20%7B%22device%22%3A%22Todo%20en%20uno%22%2C%0A%20%20%20%22repairs%22%3A%20%5B%7B%22repairDetail%22%3A%22MANTENIMIENTO%22%2C%22price%22%3A%2050%7D%5D%2C%22observations%22%3A%22No%20tiene%20pernos%22%2C%0A%20%20%20%22listPrograms%22%3A%20%5B%5D%2C%0A%20%20%20%22cheklist%22%3A%20%22Cargador%22%7D%5D'

//const url = new URL(localURL)
//const params = new URLSearchParams(url.search);




const params = new URLSearchParams(window.location.search);

document.getElementById("company_name").textContent = params.get("company_name");
document.getElementById("company_description").textContent = params.get("company_description");
document.getElementById("company_phones").textContent = params.get("company_phones");
document.getElementById("company_horary").textContent = params.get("company_horary");
document.getElementById("company_address").textContent = params.get("company_address");


document.getElementById("client_name").textContent = params.get("client_name");
const phone1 = params.get("client_phone_1");
const phone2 = params.get("client_phone_2");
document.getElementById("client_phone").textContent = phone2 ? `${phone1} / ${phone2}` : phone1;

document.getElementById("date_time").textContent = params.get("date_time");
document.getElementById("technical_manager").textContent = params.get("technical_manager");
document.getElementById("num_ticket").textContent = params.get("num_ticket");

// TOTALES

const currency = params.get("company_currencySymbol");
const total = params.get("total") || "0.00";
const advance = params.get("advance") || "0.00";
const rest = (Number(total) - Number(advance)).toFixed(2);

document.getElementById("total").textContent = `${currency} ${total}`;
document.getElementById("advance").textContent = `${currency} ${advance}`;
document.getElementById("rest").textContent = `${currency} ${rest}`;

// EQUIPOS - JSON

const equipments = JSON.parse(params.get("equipments"));
const tbody = document.getElementById("equipments-table");

equipments.forEach(element => {
    const repairCount = element.repairs.length;
    const tr = document.createElement("tr");

    // Equipo
    const tdEquipo = document.createElement("td");
    tdEquipo.textContent = element.device;
    tdEquipo.rowSpan = repairCount;
    tdEquipo.style.verticalAlign = "middle";
    tr.appendChild(tdEquipo);

    // Primera reparación
    const tdRepair = document.createElement("td");
    tdRepair.textContent = element.repairs[0].repairDetail;
    tr.appendChild(tdRepair);

    const tdPrice = document.createElement("td");
    tdPrice.textContent = `${currency} ${element.repairs[0].price}`;
    tr.appendChild(tdPrice);

    // OBSERVACIONES
    const tdObservations = document.createElement("td");
    tdObservations.textContent = element.observations || "-";
    tdObservations.rowSpan = repairCount;

    // tr.appendChild(tdObservations);

    // CHECKLISTS
    const tdChecklist = document.createElement("td");
    // tdChecklist.textContent = element.cheklist || "-";
    tdChecklist.rowSpan = repairCount;
    tdChecklist.textContent = `ACCESORIOS DE EQUIPO ==> ${element.cheklist || "-"} \n ${tdObservations.textContent !== "-" ? ` / OBSERVACIONES ==> ${tdObservations.textContent}` : ""}`;
    tr.appendChild(tdChecklist);

    tbody.appendChild(tr);

    // LISTA DE PROGRAMAS
    const tdListPrograms = document.createElement("td");
    tdListPrograms.textContent = element.listPrograms.length > 0 ? element.listPrograms.join(", ") : "-";
    tdListPrograms.rowSpan = repairCount;
    tr.appendChild(tdListPrograms);

    // Reparaciones adicionales
    for (let i = 1; i < repairCount; i++) {
        const trExtra = document.createElement("tr");
        const tdRepairExtra = document.createElement("td");
        tdRepairExtra.textContent = element.repairs[i].repairDetail;
        trExtra.appendChild(tdRepairExtra);
        const tdPriceExtra = document.createElement("td");
        tdPriceExtra.textContent = `${currency} ${element.repairs[i].price}`;
        trExtra.appendChild(tdPriceExtra);
        tbody.appendChild(trExtra);
    }

});