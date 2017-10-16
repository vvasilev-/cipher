/**
 * The external dependencies.
 */
import Vue from 'vue';

/**
 * The internal dependencies.
 */
import store from 'store';
import Application from 'components/application';

/**
 * Start the application.
 */
new Vue(Object.assign({ store }, Application)).$mount('#app');
