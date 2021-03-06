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
 * Response for ListRoutesTable associated with the Express Route Cross
 * Connections.
 *
 */
class ExpressRouteCrossConnectionsRoutesTableSummaryListResult {
  /**
   * Create a ExpressRouteCrossConnectionsRoutesTableSummaryListResult.
   * @member {array} [value] A list of the routes table.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExpressRouteCrossConnectionsRoutesTableSummaryListResult
   *
   * @returns {object} metadata of ExpressRouteCrossConnectionsRoutesTableSummaryListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteCrossConnectionsRoutesTableSummaryListResult',
      type: {
        name: 'Composite',
        className: 'ExpressRouteCrossConnectionsRoutesTableSummaryListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRouteCrossConnectionRoutesTableSummaryElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRouteCrossConnectionRoutesTableSummary'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteCrossConnectionsRoutesTableSummaryListResult;
