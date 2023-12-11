import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }

    .search-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        input {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            width: 500px;
        }

        .input-container {
            flex: 1;
            max-width: 500px;
        }
        
        input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
        }

        button {
            background: #6654da;
            border: none;
            cursor: pointer;
            border-radius: 0.5rem;
            color: white;
            padding: 0.5rem 1rem;
            font-size: 100%;
            margin-left: 1rem;
            transition: all 0.3s;

            &:hover {
                background: #5848c2;
                transform: scale(1.1);
            }
        }
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width:  180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;
