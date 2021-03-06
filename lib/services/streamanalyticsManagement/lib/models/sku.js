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
 * The properties that are associated with a SKU.
 *
 */
class Sku {
  /**
   * Create a Sku.
   * @member {string} [name] The name of the SKU. Required on PUT
   * (CreateOrReplace) requests. Possible values include: 'Standard'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Sku
   *
   * @returns {object} metadata of Sku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Sku',
      type: {
        name: 'Composite',
        className: 'Sku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Sku;
