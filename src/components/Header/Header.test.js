import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/State_Management/appStore";
import { act } from "react";

test('checking header option count', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )
    const totalLists = screen.getAllByRole('listitem');
    expect(totalLists.length).toBe(6);
})

test('login button should be there', ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )
    const loginBtn = screen.getByText('Login');
    expect(loginBtn).toBeInTheDocument();
})

test("login button should change it's name after click", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )
    // if there are multiple buttons and I want the specefic button the pass this second param.
    const loginBtn = screen.getByRole('button',{name: 'Login'});
    // fireEvent.click(loginBtn)
    act(() => {
        fireEvent.click(loginBtn);
    });
    expect(screen.getByRole('button',{name: 'Logout'})).toBeInTheDocument();
})