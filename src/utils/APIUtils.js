import request from 'superagent';
import { assign } from 'lodash';

import config from '../config';

const APIUtils {

  get(endpoint, done) {
    const url = `${config.apiBaseUrl}${endpoint}`;
    var query = {};

    debug("Sending GET request to %s", url, query);

    query = assign(query, {
      api_key: config.apiKey
    });

    request.get(url)
      .query(query)
      .end((err, res) => {
        debug("Received respons %s from %s", res && res.status, url);

        if (err) {
          if (err.status) {
            err.statusCode = err.status;
          }

          return done(err);
        }

        done(null, res.body);
      });
  }
};

export default APIUtils;
