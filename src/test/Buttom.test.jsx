import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../components/Button";

describe('buttom', () => {
    it('should', () => {
        render(<MemoryRouter><Button/></MemoryRouter> )
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})