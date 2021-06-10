import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const mockObj={
    description: "Floor lamp near a wall",
    likes: 2104,
    url:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDU2M30"
};

const mockObjArray = Array(120).fill({mockObj});
const server = setupServer();

afterEach(() => server.resetHandlers());
beforeAll(() => {
    server.use(
        rest.get(
            'https://api.jonathanczyzyk.com/api/v1/images/small',
            (req, res, ctx) => {
                return res(
                    ctx(
                        mockObjArray
                    )
                )
            }
        )
    );
});


