import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
  render(<Router>
             <Item data={{
                    id: "1234",
                    type: "Moderna",
                    receiver: "THL",
                    amount: 59,
                    startDate: "2021-02-17",
                    orderDate: "",
                    arriveDate: ""
                    }}/>
            </Router>); 
  const type = screen.getByText(/Moderna/i);
  expect(type).toBeInTheDocument();
  const receiver = screen.getByText(/THL/i);
  expect(receiver).toBeInTheDocument();

});
