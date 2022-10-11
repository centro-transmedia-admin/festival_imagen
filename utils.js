const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const FILE_ID = "1X6LMDHYCi7INOT-5OEX5oTAw48ZgQUoENDQkpPpwV24";

const sheets = {
    days: "dias",
    events: "eventos",
    members: "miembros",
    programs: "programas"
};

const capitalize = word => {
    word = word.trim();
    return word[0].toUpperCase() + word.slice(1);
}

const createUri = (sheet) => {
    return `https://docs.google.com/spreadsheets/d/${FILE_ID}/gviz/tq?sheet=${sheet}&tqx=out:csv`;
}

const getImgUri = (initialUri) => {
    const startStr = "/d/";
    const endStr = "/view";
    const start = initialUri.indexOf(startStr);
    const end = initialUri.indexOf(endStr);
    const fileId = initialUri.slice(start + startStr.length, end);
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

const HOST = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://imagenfest.vercel.app/";

export { days, months, FILE_ID, sheets, createUri, getImgUri, HOST, capitalize };