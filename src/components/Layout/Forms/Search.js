import React, { Component, Fragment } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import messages from "../../../containers/App/messages";
import API from "../../../components/Util/Api";
import Alerts from "../Alerts";
import ProductTable from "../../Product";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            searchError: false,
            products: [],
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBackToSearch = this.handleBackToSearch.bind(this);
    }

    toggleLoading(){
        this.setState((prevState) => ({
            isLoading: !prevState.isLoading
        }))
    }

    toggleError(){
        this.setState((prevState) => ({
            searchError: !prevState.searchError
        }))
    }

    handleChange(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleBackToSearch(evt){
        evt.stopPropagation(); evt.preventDefault();
        this.setState({ products : [], search: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.toggleLoading();
        const $this = this;

        API.get(`availability`, {
            params: {
                searchDate: $this.state.search,
                routeId: '4',
                amountResultsAfter: '100',
                amountResultsBefore: '0',
            }
        })
            .then(res => {
                if (res.data.success === false) {
                    this.toggleLoading();
                    this.toggleError();
                } else {
                    this.toggleLoading();
                    /* eslint-disable no-unused-expressions */
                    this.state.searchError ? $this.toggleError() : "";

                    this.setState({ products : res.data });
                }
            })
            .catch(function (error) {
                $this.toggleLoading();
                /* eslint-disable no-unused-expressions */
                !$this.state.searchError ? $this.toggleError() : "";
            });
    }

    render() {

        return (
            <Fragment>

                {Object.keys(this.state.products).length === 0 ? (

                    <Form onSubmit={this.handleSubmit} className="text-center">
                        {this.state.searchError &&
                        <Alerts message={<FormattedMessage {...messages.form.message.error} />} type='danger'/>
                        }
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label for="search"><FormattedMessage {...messages.form.search.label} /></Label>
                                    <Input name="search" id="search" type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                           value={this.state.search} onChange={this.handleChange}
                                           placeholder={messages.form.search.placeholder.defaultMessage}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Button block type="submit" size="lg" color="primary">

                                    {this.state.isLoading ? (
                                        <span>
                                                <Spinner color="light"/>
                                            </span>
                                    ) : (
                                        <span>
                                                <FormattedMessage {...messages.form.submit} />
                                            </span>
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                ) : (
                    <Fragment>
                        <Button outline color="primary" onClick={this.handleBackToSearch}>
                            <FormattedMessage {...messages.content.backToSearch} />
                        </Button>

                        <ProductTable products={this.state.products}/>

                    </Fragment>
                )}

            </Fragment>
        );
    }
}

export default Search;
