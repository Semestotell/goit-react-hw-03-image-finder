import React from "react";
import PropTypes from 'prop-types';
import { MdSearch } from "react-icons/md";
import { toast } from 'react-toastify';
import { Header, Form, Button,  Input } from "./Searchbar.styled";

export class Searchbar extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    };

    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
        toast.warn('Please specify your query!');
        return;
        }
        this.props.onSubmit(this.state.query);
        this.reset();
    };

    reset = () => {
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;

        return (
        <Header>
            <Form onSubmit={this.handleSubmit}>
            <Button type="submit">
                <MdSearch style={{ width: 30, height: 30 }} />
            </Button>

            <Input
                type="text"
                name="query"
                value={query}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            </Form>
        </Header>
        );
    }
}
