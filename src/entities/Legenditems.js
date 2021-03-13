import LegendItem from "./LegendItem";
import WarningIcon from '@material-ui/icons/Warning';

// here is the data what is gos to covid-19 by this items.
const legendItems = [
    new LegendItem (
        "Hot spots...",
        "#CE0000",
        (cases) => cases  >= 1_000_000,
        "white"
    ),

    new LegendItem(
        <WarningIcon/>,
        "#CE0000",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "white"
    ),
    new LegendItem(
        "500,000 - Over",
        "#8B0000",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "red"
    ),
    new LegendItem(
        <WarningIcon/>,
        "#8B0000",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "red"
    ),
    new LegendItem(
        "200,000 - Over",
        "#FEED00",
        (cases) => cases >= 200_000 && cases < 500_000,
        "red"
    ),

    new LegendItem(
        <WarningIcon/>,
        "#FEED00",
        (cases) => cases >= 200_000 && cases < 500_000,
        "red"
    ),
    new LegendItem(
        "50,000 - Over",
        "#d1e231",
        (cases) => cases >= 50_000 && cases < 200_000,
        "red"
    ),
    new LegendItem(
        <WarningIcon/>,
        "#d1e231",
        (cases) => cases >= 50_000 && cases < 200_000,
        "red"
    ),
    new LegendItem(
        "49,000 - Over",
        "#949400", 
        (cases) => cases > 0 && cases < 50_000,
        "red"
    ),
    new LegendItem(
        <WarningIcon/>,
        "#949400",
        (cases) => cases > 0 && cases < 50_000,
        "red"
    ),
    new LegendItem(
        
        "No Date", "#33cc33", (cases) =>  true,
        "#FF0000"
    ),
    new LegendItem(
        
        <WarningIcon />,  "#33cc33", (cases) =>  true,
        "#FF0000"
    ),
    
];

export default legendItems;