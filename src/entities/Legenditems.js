import LegendItem from "./LegendItem";

// here is the data what is gos to covid-19 by this items.
const legendItems = [
    new LegendItem (
        "Hot spots...",
        "#CE0000",
        (cases) => cases  >= 1_000_000,
        "white"
    ),
    new LegendItem(
        "500,000 - Over",
        "#949400",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "white"
    ),
    new LegendItem(
        "200,000 - Over",
        "#FEED00",
        (cases) => cases >= 200_000 && cases < 500_000,
        "white"
    ),
    new LegendItem(
        "50,000 - Over",
        "#ff9900",
        (cases) => cases >= 50_000 && cases < 200_000,
        "white"
    ),
    new LegendItem(
        "49,999 - Over",
        "#8B0000",
        (cases) => cases > 0 && cases < 50_000,
        "white"
    ),
    new LegendItem(
        "No confirmed Data", "#33cc33", (cases) => true,
        "white"
    ),
];







export default legendItems;