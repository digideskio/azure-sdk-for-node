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
 * Class representing a ReservationOrderList.
 */
class ReservationOrderList extends Array {
  /**
   * Create a ReservationOrderList.
   * @member {string} [nextLink] Url to get the next page of reservationOrders.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReservationOrderList
   *
   * @returns {object} metadata of ReservationOrderList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReservationOrderList',
      type: {
        name: 'Composite',
        className: 'ReservationOrderList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReservationOrderResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReservationOrderResponse'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = ReservationOrderList;