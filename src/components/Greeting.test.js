import Greeting from "./Greeting";
import { render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    test('renders good to see you if the button was NOT clicked', () =>{
        render(<Greeting/>)

        const paragraphElement = screen.getByText('Its good to see you');
        expect(paragraphElement).toBeInTheDocument();
    })
    test('renders "changed!" if the button was clicked' ,() =>{
        render(<Greeting/>);//Arrange

        //Act - click a button
        //userevent is an object that helps to trigger an user event
        const buttonElement = screen.getByRole('button');

        userEvent.click(buttonElement)

        //Assert
        const outputElement= screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })
    test("not renders its good to see you if the button was clicked" ,() =>{
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // const outputElement = screen.getByText('Its good to see you');//this will throw an error so thr next line wont be executed
        const outputElement = screen.queryByText('its good to see you')
        expect(outputElement).not.toBeInTheDocument();

    })
})
