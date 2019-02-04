/*
 * App Messages
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
    content: {
        header: {
            id: 'app.containers.app.content.header',
            defaultMessage: 'Yachts List - Navigate Travel'
        },
        backToSearch: {
            id: 'app.containers.app.content.back.to.search',
            defaultMessage: 'Back to search'
        }
    },
    form: {
        message: {
            error: {
                id: 'app.containers.app.form.message.error',
                defaultMessage: 'Oops, something went wrong, try again.'
            }
        },
        search: {
            label: {
                id: 'app.containers.app.form.search.label',
                defaultMessage: 'Choose a date for searching:'
            },
            placeholder: {
                id: 'app.containers.app.form.search.placeholder',
                defaultMessage: 'yyyy/mm/dd'
            }
        },
        submit: {
            id: 'app.containers.app.form.search.submit',
            defaultMessage: 'Search'
        }
    }
});