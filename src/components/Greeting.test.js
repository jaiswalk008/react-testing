import Greeting from "./Greeting";
import { render , screen} from "@testing-library/react";

describe('Greeting component' ,() =>{
    test('renders Hello World as a text' , () =>{
        //Arrange - set up the test data, test conditions, and test environment
        render(<Greeting/>);
    
    
        //Act - execute the function
    
        //assert- check the result
        //exact - casing wont matter and also includes substrings
        const helloWorldElement = screen.getByText('Hello World',{exact:false });
  
        expect(helloWorldElement).toBeInTheDocument();
       
    });
    test('renders greeting paragraph', () => {
        render(<Greeting />);
        const paragraphElement = screen.getByText('Its good to see you');
        expect(paragraphElement).toBeInTheDocument();
    });
    test('contains a heading element', () => {
        render(<Greeting />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
    });
    test('renders with the correct text content', () => {
        render(<Greeting />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement.textContent).toBe('Hello World!!');
        
    });
    test('renders testing heading', () => {
        render(<Greeting />);
        const testingElement = screen.getByText('Testing...');
        expect(testingElement).toBeInTheDocument();
    });
    
})
