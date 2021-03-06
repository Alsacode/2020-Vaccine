import LegendItem from "./LegendItem";

// here is the data what is gos to covid-19 by this items.
const legendItems = [
    new LegendItem (
        "1,000,000 +",
        " #ff3300",
        (cases) => cases  >= 1_000_000,
        "white"
    ),
    new LegendItem(
        "500,000 - 999,999",
        "#9c2929",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "white"
    ),
    new LegendItem(
        "200,000 - 599,999",
        "#cc00ff",
        (cases) => cases >= 200_000 && cases < 500_000,
        "white"
    ),
    new LegendItem(
        "50,000 - 199,999",
        "#ff9900",
        (cases) => cases >= 50_000 && cases < 200_000,
        "white"
    ),
    new LegendItem(
        "0 - 49,999",
        "#fff561",
        (cases) => cases > 0 && cases < 50_000,
    ),
    new LegendItem(
        " No Data", "#33cc33", (cases) => true
    ),
];







export default legendItems;



/*  */