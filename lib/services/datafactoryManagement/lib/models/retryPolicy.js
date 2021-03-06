/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Execution policy for an activity.
 *
 */
class RetryPolicy {
  /**
   * Create a RetryPolicy.
   * @member {object} [count] Maximum ordinary retry attempts. Default is 0.
   * Type: integer (or Expression with resultType integer), minimum: 0.
   * @member {number} [intervalInSeconds] Interval between retries in seconds.
   * Default is 30.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RetryPolicy
   *
   * @returns {object} metadata of RetryPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RetryPolicy',
      type: {
        name: 'Composite',
        className: 'RetryPolicy',
        modelProperties: {
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Object'
            }
          },
          intervalInSeconds: {
            required: false,
            serializedName: 'intervalInSeconds',
            constraints: {
              InclusiveMaximum: 86400,
              InclusiveMinimum: 30
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = RetryPolicy;
