document.getElementById("calculate").addEventListener("click", calculateBAC);

function calculateBAC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const bottles = parseFloat(document.getElementById("bottles").value);
    const time = parseFloat(document.getElementById("time").value);

    const litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    const burning = weight / 10;
    grams -= burning * time;

    if (grams < 0) {
        grams = 0;
    }

    let result;
    if (gender === "male") {
        result = grams / (weight * 0.7);
    } else {
        result = grams / (weight * 0.6);
    }

    document.getElementById("bac").textContent = result.toFixed(2);
}
