import styles from './stats.module.scss';
import { Line, LineChart,  XAxis, YAxis, ResponsiveContainer, Label, CartesianGrid, Tooltip, Pie, PieChart, LabelList, Legend, Cell} from 'recharts';
import randomColor from 'randomcolor';
function Stats(props) {

 const linedata = props.data.map(item => ({date: new Date(item.startDate).getTime(), amount: item.amount }));

 const reducer = (groupedData, item) => {
     const index = groupedData.findIndex( arrayItem  => arrayItem.type === item.type );
     if ( index >= 0) {
         groupedData[index].amount = groupedData[index].amount + item.amount;
     } else {
         groupedData.push({type: item.type, amount: item.amount});
     }
     return groupedData;
 }

 const piedata = props.data.reduce(reducer, []);
 const piecolors = randomColor({count: piedata.length, seed: "expenses"});

    return (
        <div className={styles.stats}>
           
            <h3>expenses schedule</h3>
            
            <ResponsiveContainer width={"100%"} height={360}>
                <LineChart  width={500}
                       height={400}  data={linedata}  margin={{
                        top: 0,
                        right: 0,
                        left: 15,
                        bottom: 0, 
                      }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  type="number" 
                    dataKey="date"
                    domain={["dataMin", "dataMax"]} 
                    scale="time" 
                    tickFormatter={timestr => new Date(timestr).toLocaleDateString("fi-FI")}
                    />
                    <YAxis>
                        <Label value="Amount" 
                                position ="left"
                                angle={-90}
                                style={{ textAnchor: "middle"}} />
                    </YAxis>
                    <Line dataKey="amount" name="amount" unit="€" fill="#8884d8"  />
                    <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")} />
                   
                </LineChart>
            </ResponsiveContainer>
          

            <h3>expenses of vaccines</h3>

            <ResponsiveContainer width={"100%"} height={360}>
                <PieChart>
                    <Pie data={piedata} dataKey="amount" nameKey="type">
                       <LabelList dataKey="amount" position="inside" /> 
                       { piecolors.map(color => <Cell fill={color} key={color}/>)}
                    </Pie>
                    <Legend />
                    <Tooltip formatter={value => value + " €"} />
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Stats;