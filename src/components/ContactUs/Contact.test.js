import { render, screen } from "@testing-library/react"
import Contact from "./Contact"

describe('contact us page loads',()=>{
    test('should load contact us compnent',()=>{
        render(<Contact />);
        const headingTag = screen.getByRole('heading');
        expect(headingTag).toBeInTheDocument();
        const contactUsHeading = screen.getByText(/Contact Us Page/i)
        expect(contactUsHeading).toBeInTheDocument();
    })
    
    test('should load button in contact us compnent',()=>{
        render(<Contact />);
        const btnCheck = screen.getByRole('button');
        expect(btnCheck).toBeInTheDocument();
    })
})
